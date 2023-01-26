import { createEffect, createMemo } from 'solid-js'
import * as THREE from 'three'
import { createToken, isToken } from '../ParserFunctions'
import { createRefEffect } from '../Effects'
import type {
  PropsBoxGeometry,
  PropsBufferGeometry,
  PropsCapsuleGeometry,
  PropsCircleGeometry,
  PropsConeGeometry,
  PropsCylinderGeometry,
  PropsDodecahedronGeometry,
  PropsEdgesGeometry,
  PropsExtrudeGeometry,
  PropsIcosahedronGeometry,
  PropsLatheGeometry,
  PropsPlaneGeometry,
  PropsPolyhedronGeometry,
  PropsRingGeometry,
  PropsShapeGeometry,
  PropsSphereGeometry,
  PropsTetrahedronGeometry,
  PropsTorusGeometry,
  PropsTorusKnotGeometry,
  PropsTubeGeometry,
  PropsWireframeGeometry,
  TokenBoxGeometry,
  TokenBufferGeometry,
  TokenCapsuleGeometry,
  TokenCircleGeometry,
  TokenConeGeometry,
  TokenCylinderGeometry,
  TokenDodecahedronGeometry,
  TokenEdgesGeometry,
  TokenExtrudeGeometry,
  TokenIcosahedronGeometry,
  TokenLatheGeometry,
  TokenOctahedronGeometry,
  TokenPlaneGeometry,
  TokenPolyhedronGeometry,
  TokenRingGeometry,
  TokenShapeGeometry,
  TokenSphereGeometry,
  TokenTetrahedronGeometry,
  TokenTorusGeometry,
  TokenTorusKnotGeometry,
  TokenTubeGeometry,
  TokenWireframeGeometry,
} from './Geometries.types'
import { Vector2, Vector3 } from 'three'
/**
 * Renders a new component with props
 *
 * Used by external plugins
 *
 * @typedef {Object} Props
 * @property {String} action an action to execute
 * @property {String} [errorMessage="default message"] an optional error message to show (with default value)
 *
 * @param {Props} prop
 * @return {Promise<string>} a string with the content
 */
export const BoxGeometry = createToken<PropsBoxGeometry, TokenBoxGeometry>(props => {
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
})

export const SphereGeometry = createToken<PropsSphereGeometry, TokenSphereGeometry>(props => {
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
})

export const CapsuleGeometry = createToken<PropsCapsuleGeometry, TokenCapsuleGeometry>(props => {
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
})

export const CircleGeometry = createToken<PropsCircleGeometry, TokenCircleGeometry>(props => {
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
})

export const ConeGeometry = createToken<PropsConeGeometry, TokenConeGeometry>(props => {
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
})

export const CylinderGeometry = createToken<PropsCylinderGeometry, TokenCylinderGeometry>(props => {
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
})

export const DodecahedronGeometry = createToken<
  PropsDodecahedronGeometry,
  TokenDodecahedronGeometry
>(props => {
  const three = createMemo(() => new THREE.DodecahedronGeometry(props.radius, props.detail))
  createRefEffect(three, props)
  return {
    props,
    id: 'DodecahedronGeometry',
    type: 'Geometry',
    three,
  }
})

export const EdgesGeometry = createToken<PropsEdgesGeometry, TokenEdgesGeometry>(props => {
  const three = createMemo(() => new THREE.EdgesGeometry(props.geometry, props.thresholdAngle))
  createRefEffect(three, props)
  return {
    props,
    id: 'EdgesGeometry',
    type: 'Geometry',
    three,
  }
})

export const ExtrudeGeometry = createToken<PropsExtrudeGeometry, TokenExtrudeGeometry>(props => {
  const three = createMemo(() => new THREE.ExtrudeGeometry(props.shapes, props.options))
  createRefEffect(three, props)
  return {
    props,
    id: 'ExtrudeGeometry',
    type: 'Geometry',
    three,
  }
})

export const IcosahedronGeometry = createToken<PropsIcosahedronGeometry, TokenIcosahedronGeometry>(
  props => {
    const three = createMemo(() => new THREE.IcosahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'IcosahedronGeometry',
      type: 'Geometry',
      three,
    }
  },
)

export const LatheGeometry = createToken<PropsLatheGeometry, TokenLatheGeometry>(props => {
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
})

export const OctahedronGeometry = createToken<PropsDodecahedronGeometry, TokenOctahedronGeometry>(
  props => {
    const three = createMemo(() => new THREE.OctahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'OctahedronGeometry',
      type: 'Geometry',
      three,
    }
  },
)

export const PlaneGeometry = createToken<PropsPlaneGeometry, TokenPlaneGeometry>(props => {
  const three = createMemo(
    () =>
      new THREE.PlaneGeometry(props.width, props.height, props.widthSegments, props.heightSegments),
  )
  createRefEffect(three, props)
  return {
    props,
    id: 'PlaneGeometry',
    type: 'Geometry',
    three,
  }
})

export const PolyhedronGeometry = createToken<PropsPolyhedronGeometry, TokenPolyhedronGeometry>(
  props => {
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
  },
)

export const RingGeometry = createToken<PropsRingGeometry, TokenRingGeometry>(props => {
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
})

export const ShapeGeometry = createToken<PropsShapeGeometry, TokenShapeGeometry>(props => {
  const three = createMemo(() => new THREE.ShapeGeometry(props.shapes, props.curveSegments))
  createRefEffect(three, props)
  return {
    props,
    id: 'ShapeGeometry',
    type: 'Geometry',
    three,
  }
})

export const TetrahedronGeometry = createToken<PropsTetrahedronGeometry, TokenTetrahedronGeometry>(
  props => {
    const three = createMemo(() => new THREE.TetrahedronGeometry(props.radius, props.detail))
    createRefEffect(three, props)
    return {
      props,
      id: 'TetrahedronGeometry',
      type: 'Geometry',
      three,
    }
  },
)

export const TorusGeometry = createToken<PropsTorusGeometry, TokenTorusGeometry>(props => {
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
})

export const TorusKnotGeometry = createToken<PropsTorusKnotGeometry, TokenTorusKnotGeometry>(
  props => {
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
  },
)

export const TubeGeometry = createToken<PropsTubeGeometry, TokenTubeGeometry>(props => {
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
})

export const WireframeGeometry = createToken<PropsWireframeGeometry, TokenWireframeGeometry>(
  props => {
    const three = createMemo(() => new THREE.WireframeGeometry(props.geometry))
    createRefEffect(three, props)
    return {
      props,
      id: 'WireframeGeometry',
      type: 'Geometry',
      three,
    }
  },
)

export const BufferGeometry = createToken<PropsBufferGeometry, TokenBufferGeometry>(props => {
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
})

export const Geometry = {
  Box: BoxGeometry,
  Capulse: CapsuleGeometry,
  Circle: CircleGeometry,
  Cone: ConeGeometry,
  Cylinder: CylinderGeometry,
  Dodecahedron: DodecahedronGeometry,
  Edges: EdgesGeometry,
  Extrude: ExtrudeGeometry,
  Icosahedron: IcosahedronGeometry,
  Lathe: LatheGeometry,
  Octahedron: OctahedronGeometry,
  Plane: PlaneGeometry,
  Polyhedron: PolyhedronGeometry,
  Ring: RingGeometry,
  Shape: ShapeGeometry,
  Sphere: SphereGeometry,
  Tetrahedron: TetrahedronGeometry,
  Torus: TorusGeometry,
  TorusKnot: TorusKnotGeometry,
  Tube: TubeGeometry,
  Wireframe: WireframeGeometry,
  Buffer: BufferGeometry,
}
