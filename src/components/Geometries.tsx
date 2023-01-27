import { createEffect, createMemo } from 'solid-js'
import { useTriangle } from '../'
import * as THREE from 'three'
import {
  ConvexGeometry,
  DecalGeometry,
  FontLoader,
  ParametricGeometry,
  TextGeometry,
} from 'three-stdlib'
import { createRefEffect } from '../Effects'
import { createToken, isToken } from '../ParserFunctions'
import type {
  PropsBoxGeometry,
  PropsBufferGeometry,
  PropsCapsuleGeometry,
  PropsCircleGeometry,
  PropsConeGeometry,
  PropsConvexGeometry,
  PropsCylinderGeometry,
  PropsDecalGeometry,
  PropsDodecahedronGeometry,
  PropsEdgesGeometry,
  PropsExtrudeGeometry,
  PropsIcosahedronGeometry,
  PropsLatheGeometry,
  PropsParametricGeometry,
  PropsPlaneGeometry,
  PropsPolyhedronGeometry,
  PropsRingGeometry,
  PropsShapeGeometry,
  PropsSphereGeometry,
  PropsTetrahedronGeometry,
  PropsTextGeometry,
  PropsTorusGeometry,
  PropsTorusKnotGeometry,
  PropsTubeGeometry,
  PropsWireframeGeometry,
  TokenBoxGeometry,
  TokenBufferGeometry,
  TokenCapsuleGeometry,
  TokenCircleGeometry,
  TokenConeGeometry,
  TokenConvexGeometry,
  TokenCylinderGeometry,
  TokenDecalGeometry,
  TokenDodecahedronGeometry,
  TokenEdgesGeometry,
  TokenExtrudeGeometry,
  TokenIcosahedronGeometry,
  TokenLatheGeometry,
  TokenOctahedronGeometry,
  TokenParametricGeometry,
  TokenPlaneGeometry,
  TokenPolyhedronGeometry,
  TokenRingGeometry,
  TokenShapeGeometry,
  TokenSphereGeometry,
  TokenTetrahedronGeometry,
  TokenTextGeometry,
  TokenTorusGeometry,
  TokenTorusKnotGeometry,
  TokenTubeGeometry,
  TokenWireframeGeometry,
} from './Geometries.types'
export const Geometry = {
  Box: createToken<PropsBoxGeometry, TokenBoxGeometry>(props => {
    const geometry = createMemo(
      () =>
        new THREE.BoxGeometry(
          props.width,
          props.height,
          props.depth,
          props.widthSegments,
          props.heightSegments,
          props.depthSegments,
        ),
    )
    createEffect(() => geometry() && props.ref?.(geometry()))

    return {
      props,
      id: 'BoxGeometry',
      type: 'Geometry',
      three: geometry,
    }
  }),
  Capulse: createToken<PropsCapsuleGeometry, TokenCapsuleGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.CapsuleGeometry(
          props.radius,
          props.length,
          props.capSupDivisions,
          props.radialSegments,
        ),
    )
    createRefEffect(three, props)

    return {
      props,
      id: 'CapsuleGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Circle: createToken<PropsCircleGeometry, TokenCircleGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.CircleGeometry(props.radius, props.segments, props.thetaStart, props.thetaLength),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'CircleGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Cone: createToken<PropsConeGeometry, TokenConeGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.ConeGeometry(
          props.radius,
          props.height,
          props.radialSegments,
          props.heightSegments,
          props.openEnded,
          props.thetaStart,
          props.thetaLength,
        ),
    )
    createRefEffect(three, props)
    return {
      id: 'ConeGeometry',
      type: 'Geometry',
      props,
      three,
    }
  }),
  Cylinder: createToken<PropsCylinderGeometry, TokenCylinderGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.CylinderGeometry(
          props.radiusTop,
          props.radiusBottom,
          props.height,
          props.radialSegments,
          props.heightSegments,
          props.openEnded,
          props.thetaStart,
          props.thetaLength,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'CylinderGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Dodecahedron: createToken<PropsDodecahedronGeometry, TokenDodecahedronGeometry>(props => {
    const three = createMemo(() => new THREE.DodecahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'DodecahedronGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Edges: createToken<PropsEdgesGeometry, TokenEdgesGeometry>(props => {
    const three = createMemo(() => new THREE.EdgesGeometry(props.geometry, props.thresholdAngle))
    createRefEffect(three, props)
    return {
      props,
      id: 'EdgesGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Extrude: createToken<PropsExtrudeGeometry, TokenExtrudeGeometry>(props => {
    const three = createMemo(() => new THREE.ExtrudeGeometry(props.shapes, props.options))
    createRefEffect(three, props)
    return {
      props,
      id: 'ExtrudeGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Icosahedron: createToken<PropsIcosahedronGeometry, TokenIcosahedronGeometry>(props => {
    const three = createMemo(() => new THREE.IcosahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'IcosahedronGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Lathe: createToken<PropsLatheGeometry, TokenLatheGeometry>(props => {
    const three = createMemo(
      () => new THREE.LatheGeometry(props.points, props.segments, props.phiStart, props.phiLength),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'LatheGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Octahedron: createToken<PropsDodecahedronGeometry, TokenOctahedronGeometry>(props => {
    const three = createMemo(() => new THREE.OctahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'OctahedronGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Plane: createToken<PropsPlaneGeometry, TokenPlaneGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.PlaneGeometry(
          props.width,
          props.height,
          props.widthSegments,
          props.heightSegments,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'PlaneGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Polyhedron: createToken<PropsPolyhedronGeometry, TokenPolyhedronGeometry>(props => {
    const three = createMemo(
      () => new THREE.PolyhedronGeometry(props.vertices, props.indices, props.radius, props.detail),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'PolyhedronGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Ring: createToken<PropsRingGeometry, TokenRingGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.RingGeometry(
          props.innerRadius,
          props.outerRadius,
          props.thetaSegments,
          props.phiSegments,
          props.thetaStart,
          props.thetaLength,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'RingGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Shape: createToken<PropsShapeGeometry, TokenShapeGeometry>(props => {
    const three = createMemo(() => new THREE.ShapeGeometry(props.shapes, props.curveSegments))
    createRefEffect(three, props)
    return {
      props,
      id: 'ShapeGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Sphere: createToken<PropsSphereGeometry, TokenSphereGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.SphereGeometry(
          props.radius,
          props.widthSegments,
          props.heightSegments,
          props.phiStart,
          props.phiLength,
          props.thetaStart,
          props.thetaLength,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'SphereGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Tetrahedron: createToken<PropsTetrahedronGeometry, TokenTetrahedronGeometry>(props => {
    const three = createMemo(() => new THREE.TetrahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'TetrahedronGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Torus: createToken<PropsTorusGeometry, TokenTorusGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.TorusGeometry(
          props.radius,
          props.tube,
          props.radialSegments,
          props.tubularSegments,
          props.arc,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'TorusGeometry',
      type: 'Geometry',
      three,
    }
  }),
  TorusKnot: createToken<PropsTorusKnotGeometry, TokenTorusKnotGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.TorusKnotGeometry(
          props.radius,
          props.tube,
          props.tubularSegments,
          props.radialSegments,
          props.p,
          props.q,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'TorusKnotGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Tube: createToken<PropsTubeGeometry, TokenTubeGeometry>(props => {
    const three = createMemo(
      () =>
        new THREE.TubeGeometry(
          props.radius,
          props.tube,
          props.tubularSegments,
          props.radialSegments,
          props.arc,
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'TubeGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Wireframe: createToken<PropsWireframeGeometry, TokenWireframeGeometry>(props => {
    const three = createMemo(() => new THREE.WireframeGeometry(props.geometry))
    createRefEffect(three, props)
    return {
      props,
      id: 'WireframeGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Buffer: createToken<PropsBufferGeometry, TokenBufferGeometry>(props => {
    const three = createMemo(() => {
      if (props.points) {
        if (typeof props.points === 'function') {
          const token = isToken(props.points)
          if (token && (token.type === 'Curve' || token.type === 'Curve3')) {
            return new THREE.BufferGeometry().setFromPoints(token.points())
          } else {
            console.error(
              'FunctionElement passed to BufferGeometry currently only accepts either an array of points or a ThreeToken',
            )
          }
        } else if (Array.isArray(props.points)) {
          return new THREE.BufferGeometry().setFromPoints(props.points as any)
        }
      }
      return new THREE.BufferGeometry()
    })
    createRefEffect(three, props)
    return {
      props,
      id: 'BufferGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Convex: createToken<PropsConvexGeometry, TokenConvexGeometry>(props => {
    const three = createMemo(() => {
      return new ConvexGeometry(props.points)
    })
    createRefEffect(three, props)
    return {
      props,
      id: 'ConvexGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Decal: createToken<PropsDecalGeometry, TokenDecalGeometry>(props => {
    const three = createMemo(
      () =>
        new DecalGeometry(
          props.mesh ?? new THREE.Mesh(),
          props.position ?? new THREE.Vector3(),
          props.orientation ?? new THREE.Euler(),
          props.size ?? new THREE.Vector3(1, 1, 1),
        ),
    )
    createRefEffect(three, props)
    return {
      props,
      id: 'DecalGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Parametric: createToken<PropsParametricGeometry, TokenParametricGeometry>(props => {
    const three = createMemo(() => {
      return new ParametricGeometry()
    })
    createRefEffect(three, props)
    return {
      props,
      id: 'ParametricGeometry',
      type: 'Geometry',
      three,
    }
  }),
  Text: createToken<PropsTextGeometry, TokenTextGeometry>(props => {
    const context = useTriangle()
    const three = createMemo(() => {
      const font = context?.font?.()
      return props.parameters
        ? new TextGeometry(props.text ?? '', props.parameters)
        : font
        ? new TextGeometry(props.text ?? '', {
            font,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
          })
        : undefined
    })
    createRefEffect(three, props)
    return {
      props,
      id: 'TextGeometry',
      type: 'Geometry',
      three,
    }
  }),
}
