import { Accessor, ComponentProps } from 'solid-js'
import { NestedFromClassAndInstance, NestedFromInstance } from 'src/BaseTypes'
import * as THREE from 'three'
import {
  LightProbeHelper,
  PositionalAudioHelper,
  RectAreaLightHelper,
  VertexNormalsHelper,
  VertexTangentsHelper,
} from 'three-stdlib'

export type PropsCanvasText = ComponentProps<'canvas'> & { text: string }
export type TokenCanvasText = {
  props: PropsCanvasText
  canvas: HTMLCanvasElement
  type: 'Helper'
  id: 'CanvasText'
}

export type PropsArrowHelper = NestedFromClassAndInstance<
  THREE.ArrowHelper,
  typeof THREE.ArrowHelper,
  ['dir', 'origin', 'length', 'color', 'headLength', 'headWidth']
>
export type TokenArrowHelper = {
  props: PropsArrowHelper
  three: Accessor<THREE.ArrowHelper>
  type: 'Helper'
  id: 'ArrowHelper'
}

export type PropsAxesHelper = NestedFromClassAndInstance<
  THREE.AxesHelper,
  typeof THREE.AxesHelper,
  ['size']
>
export type TokenAxesHelper = {
  props: PropsAxesHelper
  three: Accessor<THREE.AxesHelper>
  type: 'Helper'
  id: 'AxesHelper'
}

export type PropsBoxHelper = NestedFromClassAndInstance<
  THREE.BoxHelper,
  typeof THREE.BoxHelper,
  ['object', 'color']
> & { object: THREE.Object3D }
export type TokenBoxHelper = {
  props: PropsBoxHelper
  three: Accessor<THREE.BoxHelper>
  type: 'Helper'
  id: 'BoxHelper'
}

export type PropsBox3Helper = NestedFromClassAndInstance<
  THREE.Box3Helper,
  typeof THREE.Box3Helper,
  ['box', 'color']
>
export type TokenBox3Helper = {
  props: PropsBox3Helper
  three: Accessor<THREE.Box3Helper>
  type: 'Helper'
  id: 'Box3Helper'
}

export type PropsCameraHelper = NestedFromClassAndInstance<
  THREE.CameraHelper,
  typeof THREE.CameraHelper,
  ['camera']
>
export type TokenCameraHelper = {
  props: PropsCameraHelper
  three: Accessor<THREE.CameraHelper>
  type: 'Helper'
  id: 'CameraHelper'
}

export type PropsDirectionalLightHelper = NestedFromClassAndInstance<
  THREE.DirectionalLightHelper,
  typeof THREE.DirectionalLightHelper,
  ['light', 'size', 'color']
>
export type TokenDirectionalLightHelper = {
  props: PropsDirectionalLightHelper
  three: Accessor<THREE.DirectionalLightHelper>
  type: 'Helper'
  id: 'DirectionalLightHelper'
}

export type PropsGridHelper = NestedFromClassAndInstance<
  THREE.GridHelper,
  typeof THREE.GridHelper,
  ['size', 'divisions', 'colorCenterLine', 'colorGrid']
>
export type TokenGridHelper = {
  props: PropsGridHelper
  three: Accessor<THREE.GridHelper>
  type: 'Helper'
  id: 'GridHelper'
}

export type PropsPolarGridHelper = NestedFromClassAndInstance<
  THREE.PolarGridHelper,
  typeof THREE.PolarGridHelper,
  ['radius', 'sectors', 'rings', 'divisions', 'color1', 'color2']
>
export type TokenPolarGridHelper = {
  props: PropsPolarGridHelper
  three: Accessor<THREE.PolarGridHelper>
  type: 'Helper'
  id: 'PolarGridHelper'
}

export type PropsHemisphereLightHelper = NestedFromClassAndInstance<
  THREE.HemisphereLightHelper,
  typeof THREE.HemisphereLightHelper,
  ['light', 'sphereSize', 'color']
>
export type TokenHemisphereLightHelper = {
  props: PropsHemisphereLightHelper
  three: Accessor<THREE.HemisphereLightHelper>
  type: 'Helper'
  id: 'HemisphereLightHelper'
}

export type PropsPlaneHelper = NestedFromClassAndInstance<
  THREE.PlaneHelper,
  typeof THREE.PlaneHelper,
  ['plane', 'size', 'color']
>
export type TokenPlaneHelper = {
  props: PropsPlaneHelper
  three: Accessor<THREE.PlaneHelper>
  type: 'Helper'
  id: 'PlaneHelper'
}

export type PropsPointLightHelper = NestedFromClassAndInstance<
  THREE.PointLightHelper,
  typeof THREE.PointLightHelper,
  ['light', 'sphereSize', 'color']
>
export type TokenPointLightHelper = {
  props: PropsPointLightHelper
  three: Accessor<THREE.PointLightHelper>
  type: 'Helper'
  id: 'PointLightHelper'
}

export type PropsSkeletonHelper = NestedFromClassAndInstance<
  THREE.SkeletonHelper,
  typeof THREE.SkeletonHelper,
  ['object']
>
export type TokenSkeletonHelper = {
  props: PropsSkeletonHelper
  three: Accessor<THREE.SkeletonHelper>
  type: 'Helper'
  id: 'SkeletonHelper'
}

export type PropsSpotLightHelper = NestedFromClassAndInstance<
  THREE.SpotLightHelper,
  typeof THREE.SpotLightHelper,
  ['light', 'sphereSize', 'color']
>
export type TokenSpotLightHelper = {
  props: PropsSpotLightHelper
  three: Accessor<THREE.SpotLightHelper>
  type: 'Helper'
  id: 'SpotLightHelper'
}

export type PropsLightProbeHelper = NestedFromClassAndInstance<
  LightProbeHelper,
  typeof LightProbeHelper,
  ['light', 'sphereSize', 'color']
>
export type TokenLightProbeHelper = {
  props: PropsLightProbeHelper
  three: Accessor<LightProbeHelper>
  type: 'Helper'
  id: 'LightProbeHelper'
}

export type PropsPositionalAudioHelper = NestedFromClassAndInstance<
  PositionalAudioHelper,
  typeof PositionalAudioHelper,
  ['audio', 'range', 'divisionsInnerAngle', 'divisionsOuterAngle']
>
export type TokenPositionalAudioHelper = {
  props: PropsPositionalAudioHelper
  three: Accessor<PositionalAudioHelper>
  type: 'Helper'
  id: 'PositionalAudioHelper'
}

export type PropsRectAreaLightHelper = NestedFromClassAndInstance<
  RectAreaLightHelper,
  typeof RectAreaLightHelper,
  ['audio', 'range', 'divisionsInnerAngle', 'divisionsOuterAngle']
>
export type TokenRectAreaLightHelper = {
  props: PropsRectAreaLightHelper
  three: Accessor<RectAreaLightHelper>
  type: 'Helper'
  id: 'RectAreaLightHelper'
}

export type PropsVertexNormalsHelper = NestedFromClassAndInstance<
  VertexNormalsHelper,
  typeof VertexNormalsHelper,
  ['audio', 'range', 'color']
>
export type TokenVertexNormalsHelper = {
  props: PropsVertexNormalsHelper
  three: Accessor<VertexNormalsHelper>
  type: 'Helper'
  id: 'VertexNormalsHelper'
}

export type PropsVertexTangentsHelper = NestedFromClassAndInstance<
  VertexTangentsHelper,
  typeof VertexTangentsHelper,
  ['audio', 'range', 'color']
>
export type TokenVertexTangentsHelper = {
  props: PropsVertexTangentsHelper
  three: Accessor<VertexTangentsHelper>
  type: 'Helper'
  id: 'VertexTangentsHelper'
}

export type TokenHelpers =
  | TokenGridHelper
  | TokenArrowHelper
  | TokenAxesHelper
  | TokenBox3Helper
  | TokenBoxHelper
  | TokenCameraHelper
  | TokenCanvasText
  | TokenDirectionalLightHelper
  | TokenGridHelper
  | TokenHemisphereLightHelper
  | TokenPlaneHelper
  | TokenPointLightHelper
  | TokenPolarGridHelper
  | TokenPositionalAudioHelper
  | TokenRectAreaLightHelper
  | TokenSkeletonHelper
  | TokenSpotLightHelper
  | TokenLightProbeHelper
  | TokenVertexNormalsHelper
  | TokenVertexTangentsHelper
