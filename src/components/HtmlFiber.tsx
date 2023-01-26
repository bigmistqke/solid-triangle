// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { Component, createEffect, createMemo, createSignal, JSX, Show } from 'solid-js'
import {
  Vector3,
  Object3D,
  Matrix4,
  Camera,
  PerspectiveCamera,
  OrthographicCamera,
  Raycaster,
  DoubleSide,
  Material,
} from 'three'
import { Group, Mesh, PlaneGeometry, ShaderMaterial } from '..'
// import { Assign } from "utility-types";
// import { MaterialProps, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";

const v1 = new Vector3()
const v2 = new Vector3()
const v3 = new Vector3()

function defaultCalculatePosition(
  el: Object3D,
  camera: Camera,
  size: { width: number; height: number },
) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld)
  objectPos.project(camera)
  const widthHalf = size.width / 2
  const heightHalf = size.height / 2
  return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf]
}

export type CalculatePosition = typeof defaultCalculatePosition

function isObjectBehindCamera(el: Object3D, camera: Camera) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld)
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld)
  const deltaCamObj = objectPos.sub(cameraPos)
  const camDir = camera.getWorldDirection(v3)
  return deltaCamObj.angleTo(camDir) > Math.PI / 2
}

function isObjectVisible(el: Object3D, camera: Camera, raycaster: Raycaster, occlude: Object3D[]) {
  const elPos = v1.setFromMatrixPosition(el.matrixWorld)
  const screenPos = elPos.clone()
  screenPos.project(camera)
  raycaster.setFromCamera(screenPos, camera)
  const intersects = raycaster.intersectObjects(occlude, true)
  if (intersects.length) {
    const intersectionDistance = intersects[0].distance
    const pointDistance = elPos.distanceTo(raycaster.ray.origin)
    return pointDistance < intersectionDistance
  }
  return true
}

function objectScale(el: Object3D, camera: Camera) {
  if (camera instanceof OrthographicCamera) {
    return camera.zoom
  } else if (camera instanceof PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld)
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld)
    const vFOV = (camera.fov * Math.PI) / 180
    const dist = objectPos.distanceTo(cameraPos)
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist
    return 1 / scaleFOV
  } else {
    return 1
  }
}

function objectZIndex(el: Object3D, camera: Camera, zIndexRange: Array<number>) {
  if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld)
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld)
    const dist = objectPos.distanceTo(cameraPos)
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near)
    const B = zIndexRange[1] - A * camera.far
    return Math.round(A * dist + B)
  }
  return undefined
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value)

function getCSSMatrix(matrix: Matrix4, multipliers: number[], prepend = '') {
  let matrix3d = 'matrix3d('
  for (let i = 0; i !== 16; i++) {
    matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')')
  }
  return prepend + matrix3d
}

const getCameraCSSMatrix = ((multipliers: number[]) => {
  return (matrix: Matrix4) => getCSSMatrix(matrix, multipliers)
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1])

const getObjectCSSMatrix = ((scaleMultipliers: (n: number) => number[]) => {
  return (matrix: Matrix4, factor: number) =>
    getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)')
})((f: number) => [
  1 / f,
  1 / f,
  1 / f,
  1,
  -1 / f,
  -1 / f,
  -1 / f,
  -1,
  1 / f,
  1 / f,
  1 / f,
  1,
  1,
  1,
  1,
  1,
])

type PointerEventsProperties =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit'

/* function isRefObject(ref: any): ref is RefObject<any> {
  return ref && typeof ref === "object" && "current" in ref;
} */

export interface HtmlProps
  extends Omit<Assign<Component<'div'>, ReactThreeFiber.Object3DNode<Group, typeof Group>>, 'ref'> {
  prepend?: boolean
  center?: boolean
  fullscreen?: boolean
  eps?: number
  portal?: JSX.Element
  distanceFactor?: number
  sprite?: boolean
  transform?: boolean
  zIndexRange?: Array<number>
  calculatePosition?: CalculatePosition
  as?: string
  wrapperClass?: string
  pointerEvents?: PointerEventsProperties

  // Occlusion based off work by Jerome Etienne and James Baicoianu
  // https://www.youtube.com/watch?v=ScZcUEDGjJI
  // as well as Joe Pea in CodePen: https://codepen.io/trusktr/pen/RjzKJx
  occlude?: Object3D[] | boolean | 'raycast' | 'blending'
  onOcclude?: (visible: boolean) => null
  material?: JSX.Element // Material for occlusion plane
  geometry?: JSX.Element // Material for occlusion plane
  castShadow?: boolean // Cast shadow for occlusion plane
  receiveShadow?: boolean // Receive shadow for occlusion plane
}

export const Html = (props: HtmlProps) => {
  const { gl, camera, scene, size, raycaster, events, viewport } = useThree()

  const [el] = createSignal(() => document.createElement(as))
  let root: HTMLElement
  let group: Group
  let oldZoom = 0
  let oldPosition = [0, 0]
  let transformOuterRef: HTMLDivElement
  let transformInnerRef: HTMLDivElement
  // Append to the connected element, which makes HTML work with views
  let target = (props.portal || events.connected || gl.domElement.parentNode) as HTMLElement

  let occlusionMeshRef: Mesh
  let isMeshSizeSet: boolean

  const isRayCastOcclusion = createMemo(() => {
    return (
      (props.occlude && props.occlude !== 'blending') ||
      (Array.isArray(props.occlude) && props.occlude.length)
    )
  })

  createEffect(() => {
    const el = gl.domElement as HTMLCanvasElement
    if (props.occlude) {
      el.style.zIndex = `${Math.floor(props.zIndexRange[0] / 2)}`
      el.style.position = 'absolute'
      el.style.pointerEvents = 'none'
    } else {
      el.style.zIndex = null!
      el.style.position = null!
      el.style.pointerEvents = null!
    }
  }, [props.occlude, isRayCastOcclusion])

  createEffect(() => {
    if (group) {
      const currentRoot = (roo = ReactDOM.createRoot(el))
      scene.updateMatrixWorld()
      if (transform) {
        el.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`
      } else {
        const vec = calculatePosition(group, camera, size)
        el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`
      }
      if (target) {
        if (prepend) target.prepend(el)
        else target.appendChild(el)
      }
      return () => {
        if (target) target.removeChild(el)
        currentRoot.unmount()
      }
    }
  })

  createEffect(() => {
    if (wrapperClass) el.className = wrapperClass
  })

  const styles: CSSProperties = createMemo(() => {
    if (transform) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        width: size.width,
        height: size.height,
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
      }
    } else {
      return {
        position: 'absolute',
        transform: center ? 'translate3d(-50%,-50%,0)' : 'none',
        ...(fullscreen && {
          top: -size.height / 2,
          left: -size.width / 2,
          width: size.width,
          height: size.height,
        }),
        ...style,
      }
    }
  }, [style, center, fullscreen, size, transform])

  const transformInnerStyles: CSSProperties = createMemo(
    () => ({ position: 'absolute', pointerEvents }),
    [pointerEvents],
  )

  createEffect(() => {
    isMeshSizeSet = false

    if (transform) {
      root?.render(
        <div ref={transformOuterRef} style={styles}>
          <div ref={transformInnerRef} style={transformInnerStyles}>
            <div ref={ref} className={className} style={style} children={children} />
          </div>
        </div>,
      )
    } else {
      root?.render(<div ref={ref} style={styles} className={className} children={children} />)
    }
  })

  const visible = useRef(true)

  useFrame(gl => {
    if (group) {
      camera.updateMatrixWorld()
      group.updateWorldMatrix(true, false)
      const vec = transform ? oldPosition : calculatePosition(group, camera, size)

      if (
        transform ||
        Math.abs(oldZoom - camera.zoom) > eps ||
        Math.abs(oldPosition[0] - vec[0]) > eps ||
        Math.abs(oldPosition[1] - vec[1]) > eps
      ) {
        const isBehindCamera = isObjectBehindCamera(group, camera)
        let raytraceTarget: null | undefined | boolean | Object3D[] = false

        if (isRayCastOcclusion) {
          if (props.occlude !== 'blending') {
            raytraceTarget = [scene]
          } else if (Array.isArray(props.occlude)) {
            raytraceTarget = props.occlude.map(item => item) as Object3D[]
          }
        }

        const previouslyVisible = visible
        if (raytraceTarget) {
          const isvisible = isObjectVisible(group, camera, raycaster, raytraceTarget)
          visible = isvisible && !isBehindCamera
        } else {
          visible = !isBehindCamera
        }

        if (previouslyVisible !== visible) {
          if (onprops.Occlude) onprops.Occlude(!visible)
          else el.style.display = visible ? 'block' : 'none'
        }

        const halfRange = Math.floor(props.zIndexRange[0] / 2)
        const zRange = props.occlude
          ? isRayCastOcclusion //
            ? [props.zIndexRange[0], halfRange]
            : [halfRange - 1, 0]
          : props.zIndexRange

        el.style.zIndex = `${objectZIndex(group, camera, zRange)}`

        if (transform) {
          const [widthHalf, heightHalf] = [size.width / 2, size.height / 2]
          const fov = camera.projectionMatrix.elements[5] * heightHalf
          const { isOrthographicCamera, top, left, bottom, right } = camera as OrthographicCamera
          const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse)
          const cameraTransform = isOrthographicCamera
            ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon(
                (top + bottom) / 2,
              )}px)`
            : `translateZ(${fov}px)`
          let matrix = group.matrixWorld
          if (sprite) {
            matrix = camera.matrixWorldInverse
              .clone()
              .transpose()
              .copyPosition(matrix)
              .scale(group.scale)
            matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0
            matrix.elements[15] = 1
          }
          el.style.width = size.width + 'px'
          el.style.height = size.height + 'px'
          el.style.perspective = isOrthographicCamera ? '' : `${fov}px`
          if (transformOuterRef && transformInnerRef) {
            transformOuterRef.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`
            transformInnerRef.style.transform = getObjectCSSMatrix(
              matrix,
              1 / ((props.distanceFactor || 10) / 400),
            )
          }
        } else {
          const scale =
            props.distanceFactor === undefined
              ? 1
              : objectScale(group, camera) * props.distanceFactor
          el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`
        }
        oldPosition = vec
        oldZoom = camera.zoom
      }
    }

    if (!isRayCastOcclusion && occlusionMeshRef && !isMeshSizeSet) {
      if (transform) {
        if (transformOuterRef) {
          const el = transformOuterRef.children[0]

          if (el?.clientWidth && el?.clientHeight) {
            const { isOrthographicCamera } = camera as OrthographicCamera

            if (isOrthographicCamera || geometry) {
              if (props.scale) {
                if (!Array.isArray(props.scale)) {
                  occlusionMeshRef.scale.setScalar(1 / (props.scale as number))
                } else if (props.scale instanceof Vector3) {
                  occlusionMeshRef.scale.copy(props.scale.clone().divideScalar(1))
                } else {
                  occlusionMeshRef.scale.set(
                    1 / props.scale[0],
                    1 / props.scale[1],
                    1 / props.scale[2],
                  )
                }
              }
            } else {
              const ratio = (props.distanceFactor || 10) / 400
              const w = el.clientWidth * ratio
              const h = el.clientHeight * ratio

              occlusionMeshRef.scale.set(w, h, 1)
            }

            isMeshSizeSet = true
          }
        }
      } else {
        const ele = el.children[0]

        if (ele?.clientWidth && ele?.clientHeight) {
          const ratio = 1 / viewport.factor
          const w = ele.clientWidth * ratio
          const h = ele.clientHeight * ratio

          occlusionMeshRef.scale.set(w, h, 1)

          isMeshSizeSet = true
        }

        occlusionMeshRef.lookAt(gl.camera.position)
      }
    }
  })

  const shaders = createMemo(() => ({
    vertexShader: !transform
      ? /* glsl */ `
          /*
            This shader is from the three's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `
      : undefined,
    fragmentShader: /* glsl */ `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `,
  }))

  return (
    <Group {...props} ref={group}>
      {props.occlude && !isRayCastOcclusion && (
        <Mesh castShadow={castShadow} receiveShadow={receiveShadow} ref={occlusionMeshRef}>
          <Show when={props.geometry} fallback={<PlaneGeometry />}>
            {props.geometry}
          </Show>
          <Show
            when={props.material}
            fallback={
              <ShaderMaterial
                side={DoubleSide}
                vertexShader={shaders.vertexShader}
                fragmentShader={shaders.fragmentShader}
              />
            }
          >
            {props.material}
          </Show>
        </Mesh>
      )}
    </Group>
  )
}
