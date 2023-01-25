import { Accessor, JSX } from 'solid-js'
import * as THREE from 'three'
import { Vector2, Vector3 } from 'three'
import { LeafFromClassAndInstance } from '../BaseTypes'

export type PropsBoxGeometry = LeafFromClassAndInstance<
  THREE.BoxGeometry,
  typeof THREE.BoxGeometry,
  ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegments']
>

export type TokenBoxGeometry = {
  id: 'BoxGeometry'
  type: 'Geometry'
  three: Accessor<THREE.BoxGeometry>
  props: PropsBoxGeometry
}

export type PropsSphereGeometry = LeafFromClassAndInstance<
  THREE.SphereGeometry,
  typeof THREE.SphereGeometry,
  [
    'radius',
    'widthSegments',
    'heightSegments',
    'phiStart',
    'phiLength',
    'thetaStart',
    'thetaLength',
  ]
>

export type TokenSphereGeometry = {
  id: 'SphereGeometry'
  type: 'Geometry'
  props: PropsSphereGeometry
  three: Accessor<THREE.SphereGeometry>
}

export type PropsCapsuleGeometry = LeafFromClassAndInstance<
  THREE.CapsuleGeometry,
  typeof THREE.CapsuleGeometry,
  ['radius', 'length', 'capSupDivisions', 'radialSegments']
>
export type TokenCapsuleGeometry = {
  id: 'CapsuleGeometry'
  type: 'Geometry'
  props: PropsCapsuleGeometry
  three: Accessor<THREE.CapsuleGeometry>
}

export type PropsCircleGeometry = LeafFromClassAndInstance<
  THREE.CircleGeometry,
  typeof THREE.CircleGeometry,
  ['radius', 'segments', 'thetaStart', 'thetaLength']
>
export type TokenCircleGeometry = {
  id: 'CircleGeometry'
  type: 'Geometry'
  props: PropsCircleGeometry
  three: Accessor<THREE.CircleGeometry>
}

export type PropsConeGeometry = LeafFromClassAndInstance<
  THREE.ConeGeometry,
  typeof THREE.ConeGeometry,
  ['radius', 'height', 'radialSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength']
>
export type TokenConeGeometry = {
  id: 'ConeGeometry'
  type: 'Geometry'
  props: PropsConeGeometry
  three: Accessor<THREE.ConeGeometry>
}

export type PropsCylinderGeometry = LeafFromClassAndInstance<
  THREE.CylinderGeometry,
  typeof THREE.CylinderGeometry,
  [
    'radiusTop',
    'radiusBottom',
    'height',
    'radialSegments',
    'heightSegments',
    'openEnded',
    'thetaStart',
    'thetaLength',
  ]
>

export type TokenCylinderGeometry = {
  id: 'CylinderGeometry'
  type: 'Geometry'
  three: Accessor<THREE.CylinderGeometry>
  props: PropsCylinderGeometry
}

export type PropsDodecahedronGeometry = LeafFromClassAndInstance<
  THREE.DodecahedronGeometry,
  typeof THREE.DodecahedronGeometry,
  ['radius', 'detail']
>
export type TokenDodecahedronGeometry = {
  id: 'DodecahedronGeometry'
  type: 'Geometry'
  three: Accessor<THREE.DodecahedronGeometry>
  props: PropsDodecahedronGeometry
}

export type PropsEdgesGeometry = LeafFromClassAndInstance<
  THREE.EdgesGeometry,
  typeof THREE.EdgesGeometry,
  ['geometry', 'thresholdAngle']
>

export type TokenEdgesGeometry = {
  id: 'EdgesGeometry'
  type: 'Geometry'
  three: Accessor<THREE.EdgesGeometry>
  props: PropsEdgesGeometry
}

export type PropsExtrudeGeometry = LeafFromClassAndInstance<
  THREE.ExtrudeGeometry,
  typeof THREE.ExtrudeGeometry,
  ['shapes', 'options']
>

export type TokenExtrudeGeometry = {
  id: 'ExtrudeGeometry'
  type: 'Geometry'
  three: Accessor<THREE.ExtrudeGeometry>
  props: PropsExtrudeGeometry
}

export type PropsIcosahedronGeometry = LeafFromClassAndInstance<
  THREE.IcosahedronGeometry,
  typeof THREE.IcosahedronGeometry,
  ['radius', 'detail']
>

export type TokenIcosahedronGeometry = {
  id: 'IcosahedronGeometry'
  type: 'Geometry'
  three: Accessor<THREE.IcosahedronGeometry>
  props: PropsIcosahedronGeometry
}

export type PropsLatheGeometry = LeafFromClassAndInstance<
  THREE.LatheGeometry,
  typeof THREE.LatheGeometry,
  ['points', 'segments', 'phiStart', 'phiLength']
>

export type TokenLatheGeometry = {
  id: 'LatheGeometry'
  type: 'Geometry'
  three: Accessor<THREE.LatheGeometry>
  props: PropsLatheGeometry
}

type PropsOctahedronGeometry = LeafFromClassAndInstance<
  THREE.OctahedronGeometry,
  typeof THREE.OctahedronGeometry,
  ['radius', 'detail']
>

export type TokenOctahedronGeometry = {
  id: 'OctahedronGeometry'
  type: 'Geometry'
  three: Accessor<THREE.OctahedronGeometry>
  props: PropsOctahedronGeometry
}

export type PropsPlaneGeometry = LeafFromClassAndInstance<
  THREE.PlaneGeometry,
  typeof THREE.PlaneGeometry,
  ['width', 'height', 'widthSegments', 'heightSegments']
>

export type TokenPlaneGeometry = {
  id: 'PlaneGeometry'
  type: 'Geometry'
  three: Accessor<THREE.PlaneGeometry>
  props: PropsPlaneGeometry
}

export type PropsPolyhedronGeometry = LeafFromClassAndInstance<
  THREE.PolyhedronGeometry,
  typeof THREE.PolyhedronGeometry,
  ['vertices', 'indices', 'radius', 'detail']
>

export type TokenPolyhedronGeometry = {
  id: 'PolyhedronGeometry'
  type: 'Geometry'
  three: Accessor<THREE.PolyhedronGeometry>
  props: PropsPolyhedronGeometry
}

export type PropsRingGeometry = LeafFromClassAndInstance<
  THREE.RingGeometry,
  typeof THREE.RingGeometry,
  ['innerRadius', 'outerRadius', 'thetaSegments', 'phiSegments', 'thetaStart', 'thetaLength']
>

export type TokenRingGeometry = {
  id: 'RingGeometry'
  type: 'Geometry'
  three: Accessor<THREE.RingGeometry>
  props: PropsRingGeometry
}

export type PropsShapeGeometry = LeafFromClassAndInstance<
  THREE.ShapeGeometry,
  typeof THREE.ShapeGeometry,
  ['shapes', 'curveSegments']
>

export type TokenShapeGeometry = {
  id: 'ShapeGeometry'
  type: 'Geometry'
  three: Accessor<THREE.ShapeGeometry>
  props: PropsShapeGeometry
}

export type PropsTetrahedronGeometry = LeafFromClassAndInstance<
  THREE.TetrahedronGeometry,
  typeof THREE.TetrahedronGeometry,
  ['radius', 'detail']
>

export type TokenTetrahedronGeometry = {
  id: 'TetrahedronGeometry'
  type: 'Geometry'
  three: Accessor<THREE.TetrahedronGeometry>
  props: PropsTetrahedronGeometry
}

export type PropsTorusGeometry = LeafFromClassAndInstance<
  THREE.TorusGeometry,
  typeof THREE.TorusGeometry,
  ['radius', 'tube', 'radialSegments', 'tubularSegments', 'arc']
>

export type TokenTorusGeometry = {
  id: 'TorusGeometry'
  type: 'Geometry'
  three: Accessor<THREE.TorusGeometry>
  props: PropsTorusGeometry
}

export type PropsTorusKnotGeometry = LeafFromClassAndInstance<
  THREE.TorusKnotGeometry,
  typeof THREE.TorusKnotGeometry,
  ['radius', 'tube', 'tubularSegments', 'radialSegments', 'p', 'q']
>

export type TokenTorusKnotGeometry = {
  id: 'TorusKnotGeometry'
  type: 'Geometry'
  three: Accessor<THREE.TorusKnotGeometry>
  props: PropsTorusKnotGeometry
}

export type PropsTubeGeometry = LeafFromClassAndInstance<
  THREE.TubeGeometry,
  typeof THREE.TubeGeometry,
  ['radius', 'tube', 'radialSegments', 'tubularSegments', 'arc']
>

export type TokenTubeGeometry = {
  id: 'TubeGeometry'
  type: 'Geometry'
  three: Accessor<THREE.TubeGeometry>
  props: PropsTubeGeometry
}

export type PropsWireframeGeometry = LeafFromClassAndInstance<
  THREE.WireframeGeometry,
  typeof THREE.WireframeGeometry,
  ['geometry']
>

export type TokenWireframeGeometry = {
  id: 'WireframeGeometry'
  type: 'Geometry'
  three: Accessor<THREE.WireframeGeometry>
  props: PropsWireframeGeometry
}

export type PropsBufferGeometry =
  | LeafFromClassAndInstance<THREE.BufferGeometry, typeof THREE.BufferGeometry, []> & {
      points: JSX.Element | Vector3[] | Vector2[]
    }
export type TokenBufferGeometry = {
  id: 'BufferGeometry'
  type: 'Geometry'
  three: Accessor<THREE.BufferGeometry>
  props: PropsBufferGeometry
}

export type TokenGeometries =
  | TokenBoxGeometry
  | TokenSphereGeometry
  | TokenCylinderGeometry
  | TokenConeGeometry
  | TokenCircleGeometry
  | TokenCapsuleGeometry
  | TokenDodecahedronGeometry
  | TokenExtrudeGeometry
  | TokenEdgesGeometry
  | TokenIcosahedronGeometry
  | TokenLatheGeometry
  | TokenOctahedronGeometry
  | TokenPlaneGeometry
  | TokenPolyhedronGeometry
  | TokenRingGeometry
  | TokenShapeGeometry
  | TokenTetrahedronGeometry
  | TokenTorusGeometry
  | TokenTorusKnotGeometry
  | TokenTubeGeometry
  | TokenWireframeGeometry
  | TokenBufferGeometry
