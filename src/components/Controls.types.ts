import { NestedFromInstance } from '../BaseTypes'
import { Accessor } from 'solid-js'

import {
  OrbitControls,
  TrackballControls,
  DragControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  TransformControls,
  ArcballControls,
} from 'three-stdlib'

type ControlType<T> = NestedFromInstance<T> & {
  renderer?: THREE.Renderer
  camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera
}

export type PropsOrbitControls = ControlType<OrbitControls>
export type TokenOrbitControls = {
  id: 'OrbitControls'
  type: 'Controls'
  three: Accessor<OrbitControls | undefined>
  props: PropsOrbitControls
}

export type PropsArcballControls = ControlType<ArcballControls>
export type TokenArcballControls = {
  id: 'ArcballControls'
  type: 'Controls'
  three: Accessor<ArcballControls | undefined>
  props: PropsArcballControls
}

export type PropsDragControls = ControlType<DragControls> & { objects: any[] }
export type TokenDragControls = {
  id: 'DragControls'
  type: 'Controls'
  three: Accessor<DragControls | undefined>
  props: PropsDragControls
}

export type PropsFirstPersonControls = ControlType<FirstPersonControls>
export type TokenFirstPersonControls = {
  id: 'FirstPersonControls'
  type: 'Controls'
  three: Accessor<FirstPersonControls | undefined>
  props: PropsFirstPersonControls
}

export type PropsFlyControls = ControlType<FlyControls> & {
  activeLook?: boolean
  autoForward?: boolean
  constrainVertical?: boolean
  enabled?: boolean
  heightCoef?: boolean
  heightMax?: number
  heightMin?: number
  heightSpeed?: boolean
  lookVertical?: boolean
  lookSpeed?: boolean
  movementSpeed?: number
  verticalMax?: number
  verticalMin?: number
}
export type TokenFlyControls = {
  id: 'FlyControls'
  type: 'Controls'
  three: Accessor<FlyControls | undefined>
  props: PropsFlyControls
}

export type PropsPointerLockControls = ControlType<PointerLockControls>
export type TokenPointerLockControls = {
  id: 'PointerLockControls'
  type: 'Controls'
  three: Accessor<PointerLockControls | undefined>
  props: PropsPointerLockControls
}

export type PropsTrackballControls = ControlType<TrackballControls>
export type TokenTrackballControls = {
  id: 'TrackballControls'
  type: 'Controls'
  three: Accessor<TrackballControls | undefined>
  props: PropsTrackballControls
}

export type PropsTransformControls = ControlType<TransformControls>
export type TokenTransformControls = {
  id: 'TransformControls'
  type: 'Controls'
  three: Accessor<TransformControls | undefined>
  props: PropsTransformControls
}

export type TokenControls =
  | TokenOrbitControls
  | TokenArcballControls
  | TokenDragControls
  | TokenFirstPersonControls
  | TokenFlyControls
  | TokenTrackballControls
  | TokenTransformControls
  | TokenPointerLockControls
