import { children, createEffect, createSignal, JSX, mergeProps, onMount } from 'solid-js'
// import * as THREE from "three";
import {
  Camera,
  Clock,
  Event,
  Intersection,
  Object3D,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from 'three'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { NestedFromInstance } from '../BaseTypes'
import { createChildrenEffect } from '../Effects'
import { ThreeContext } from '../index'
import { childrenTokens } from '../ParserFunctions'

export const AnimationSet: Set<() => void> = new Set()

type CanvasProps = NestedFromInstance<HTMLCanvasElement> & {
  onraycast?: (intersects: Intersection<Object3D<Event>>[]) => void
  camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera
}

export default (props: CanvasProps) => {
  let canvas: HTMLCanvasElement
  let cssContainer: HTMLDivElement

  const merged = mergeProps(
    {
      camera: new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10),
    },
    props,
  )

  const tokens = childrenTokens(() => props.children)
  let renderer: WebGLRenderer
  let cssRenderer: CSS3DRenderer

  const defaultScene = new Scene()

  const [scene, _setScene] = createSignal(defaultScene)
  const setScene = (newScene: Scene | undefined) => {
    if (!newScene) _setScene(defaultScene)
    else {
      _setScene(newScene)
    }
  }
  const [camera, _setCamera] = createSignal<THREE.PerspectiveCamera | THREE.OrthographicCamera>(
    props.camera ?? new PerspectiveCamera(),
  )
  const setCamera = (newCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera | undefined) => {
    if (!newCamera) _setCamera(new PerspectiveCamera())
    else {
      _setCamera(newCamera)
    }
  }

  const clock = new Clock()

  // merged.camera.position.z = 2;
  const [size, setSize] = createSignal<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const update = () => {
    setTimeout(() => {
      let width, height
      if (renderer.domElement.parentElement) {
        const bounds = renderer.domElement.parentElement.getBoundingClientRect()
        width = bounds.width
        height = bounds.height
      } else {
        width = window.innerWidth
        height = window.innerHeight
      }
      setSize({ width, height })
      renderer.setSize(width, height)
      cssRenderer.setSize(width, height)
      if ('aspect' in merged.camera) {
        const aspect = window.innerWidth / window.innerHeight
        merged.camera.aspect = aspect
        merged.camera.updateProjectionMatrix()
      }
      render()
    }, 0)
  }

  createEffect(() => console.log('camera is ', camera(), scene()))

  const render = () => {
    AnimationSet.forEach(func => func())
    raycast()
    if (scene() && camera()) {
      // console.log("renderer", renderer)
      // cssRenderer.render(scene()!, merged.camera);
      renderer.render(scene(), camera())
    }
  }

  const raycaster = new Raycaster()
  const pointer = new Vector2()

  function onMouseMove(event: MouseEvent) {
    // TODO: strange type-error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    if (merged.onmousemove) merged.onmousemove(event)
    if (!props.onraycast) return
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  const raycast = () => {
    if (!props.onraycast) return
    raycaster.setFromCamera(pointer, camera())
    var intersects = raycaster.intersectObjects(scene().children)

    props.onraycast?.(intersects)
  }

  onMount(() => {
    renderer = new WebGLRenderer({ antialias: true, canvas, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    cssRenderer = new CSS3DRenderer({ element: cssContainer })
    cssRenderer.domElement.style.overflow = 'initial'
    renderer.setAnimationLoop(render)
    update()
    setTimeout(() => {
      update()
    }, 500)
    setTimeout(() => {
      update()
    }, 1000)
  })

  createEffect(() => canvas && props.ref?.(canvas))
  createChildrenEffect(scene(), tokens)
  window.addEventListener('resize', update)

  const filteredProps = () => {
    // we can't simply spread and delete keys, since it would trigger children.
    const keysToRemove = ['children', 'dir', 'onraycast', 'camera']

    const keys = Object.keys(props).filter(
      key => !keysToRemove.includes(key),
    ) as (keyof typeof props)[]

    const newProps: { [key: string]: any } = {}
    for (const key of keys) {
      newProps[key] = props[key]
    }
    return newProps
  }

  return (
    <>
      <ThreeContext.Provider
        value={{
          camera,
          setCamera,
          scene,
          setScene,
          renderer: () => renderer,
          size,
          raycaster: () => raycaster,
          clock: () => clock,
          pointer: () => pointer,
        }}
      >
        {props.children}
        <div>
          <div
            ref={cssContainer!}
            style={{ position: 'absolute', 'z-index': 1, 'pointer-events': 'none' }}
          />
        </div>
        <div
          style={{ position: 'absolute', 'z-index': 0, top: '0px', width: '100%', height: '100%' }}
        >
          <canvas ref={canvas!} {...filteredProps()} onmousemove={onMouseMove} />
        </div>
      </ThreeContext.Provider>
    </>
  )
}
