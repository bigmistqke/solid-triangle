import { Accessor } from 'solid-js'
import * as THREE from 'three'
import { NestedFromClassAndInstance, NestedFromInstance } from '../BaseTypes'

type Curve<T> = NestedFromInstance<T> & { amount: number }

export type EllipseCurve3D = Omit<Omit<THREE.EllipseCurve, 'getPoint'>, 'optionalTarget'> & {
  getPoint: (t: number, optionalTarget: THREE.Vector3 | undefined) => THREE.Vector3
  optionalTarget: THREE.Vector3
}

export type PropsEllipseCurve = Curve<THREE.EllipseCurve>
export type TokenEllipseCurve = {
  id: 'EllipseCurve'
  type: 'Curve'
  three: Accessor<THREE.EllipseCurve>
  props: PropsEllipseCurve
  points: () => THREE.Vector2[]
}

export type TokenCurves = TokenEllipseCurve

export type PropsCatmullRomCurve3 = NestedFromClassAndInstance<
  THREE.CatmullRomCurve3,
  typeof THREE.CatmullRomCurve3,
  ['points', 'closed', 'curveType', 'tension']
> & { amount: number }

export type TokenCatmullRomCurve3 = {
  id: 'CatmullRomCurve3'
  type: 'Curve3'
  three: Accessor<THREE.CatmullRomCurve3>
  props: PropsCatmullRomCurve3
  points: () => THREE.Vector3[]
}

export type PropsCubicBezierCurve3 = Curve<THREE.CubicBezierCurve3>
export type TokenCubicBezierCurve3 = {
  id: 'CubicBezierCurve3'
  type: 'Curve3'
  three: Accessor<THREE.CubicBezierCurve3>
  props: PropsCubicBezierCurve3
  points: () => THREE.Vector3[]
}

export type PropsLineCurve3 = NestedFromClassAndInstance<
  THREE.LineCurve3,
  typeof THREE.LineCurve3,
  ['v0', 'v1']
>

//Curve<THREE.LineCurve3>
export type TokenLineCurve3 = {
  id: 'LineCurve3'
  type: 'Curve3'
  three: Accessor<THREE.LineCurve3>
  props: PropsLineCurve3
  points: () => THREE.Vector3[]
}

export type PropsQuadraticBezierCurve3 = Curve<THREE.QuadraticBezierCurve3>
export type TokenQuadraticBezierCurve3 = {
  id: 'QuadraticBezierCurve3'
  type: 'Curve3'
  three: Accessor<THREE.QuadraticBezierCurve3>
  props: PropsQuadraticBezierCurve3
  points: () => THREE.Vector3[]
}

export type TokenCurves3 =
  | TokenCatmullRomCurve3
  | TokenCubicBezierCurve3
  | TokenLineCurve3
  | TokenQuadraticBezierCurve3
