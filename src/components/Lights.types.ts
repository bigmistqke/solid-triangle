import * as THREE from 'three'
import { NestedFromClassAndInstance, Pose } from '../BaseTypes'

export type PropsPointLight = Pose &
  NestedFromClassAndInstance<
    THREE.PointLight,
    typeof THREE.PointLight,
    ['color', 'intensity', 'distance', 'decay']
  >

export type TokenPointLight = {
  id: 'PointLight'
  type: 'Light'
  three: THREE.PointLight
  props: PropsPointLight
}

export type PropsAmbientLight = NestedFromClassAndInstance<
  THREE.AmbientLight,
  typeof THREE.AmbientLight,
  ['color', 'intensity']
>
export type TokenAmbientLight = {
  id: 'AmbientLight'
  type: 'Light'
  three: THREE.AmbientLight
  props: PropsAmbientLight
}

export type PropsDirectionalLight = NestedFromClassAndInstance<
  THREE.DirectionalLight,
  typeof THREE.DirectionalLight,
  ['color', 'intensity']
> &
  Omit<Pose, 'rotation'> & { target: THREE.Object3D }

export type TokenDirectionalLight = {
  id: 'DirectionalLight'
  type: 'Light'
  three: THREE.DirectionalLight
  props: PropsDirectionalLight
}

export type PropsRectAreaLight = NestedFromClassAndInstance<
  THREE.RectAreaLight,
  typeof THREE.RectAreaLight,
  ['color', 'intensity', 'width', 'height']
> &
  Omit<Pose, 'rotation'>
export type TokenRectAreaLight = {
  id: 'RectAreaLight'
  type: 'Light'
  three: THREE.RectAreaLight
  props: PropsRectAreaLight
}

export type PropsHemisphereLight = NestedFromClassAndInstance<
  THREE.HemisphereLight,
  typeof THREE.HemisphereLight,
  ['skyColor', 'groundColor', 'intensity']
>
export type TokenHemisphereLight = {
  id: 'HemisphereLight'
  type: 'Light'
  three: THREE.HemisphereLight
  props: PropsHemisphereLight
}

export type PropsLight = NestedFromClassAndInstance<
  THREE.Light,
  typeof THREE.Light,
  ['color', 'intensity']
>
export type TokenLight = {
  id: 'Light'
  type: 'Light'
  three: THREE.Light
  props: PropsLight
}

export type PropsLightProbe = NestedFromClassAndInstance<
  THREE.LightProbe,
  typeof THREE.LightProbe,
  ['sh', 'intensity']
>
export type TokenLightProbe = {
  id: 'LightProbe'
  type: 'LightProbe'
  three: THREE.LightProbe
  props: PropsLightProbe
}

export type PropsHemisphereLightProbe = NestedFromClassAndInstance<
  THREE.HemisphereLightProbe,
  typeof THREE.HemisphereLightProbe,
  ['skyColor', 'groundColor', 'intensity']
>
export type TokenHemisphereLightProbe = {
  id: 'HemisphereLightProbe'
  type: 'LightProbe'
  three: THREE.HemisphereLightProbe
  props: PropsHemisphereLightProbe
}

export type PropsAmbientLightProbe = NestedFromClassAndInstance<
  THREE.AmbientLightProbe,
  typeof THREE.AmbientLightProbe,
  ['color', 'intensity']
>
export type TokenAmbientLightProbe = {
  id: 'AmbientLightProbe'
  type: 'LightProbe'
  three: THREE.AmbientLightProbe
  props: PropsAmbientLightProbe
}

export type TokenLights =
  | TokenAmbientLight
  | TokenPointLight
  | TokenRectAreaLight
  | TokenDirectionalLight
  | TokenHemisphereLight
  | TokenLight

export type TokenLightProbes =
  | TokenAmbientLightProbe
  | TokenDirectionalLight
  | TokenHemisphereLightProbe
  | TokenLightProbe
