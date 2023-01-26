import { Accessor, ComponentProps } from 'solid-js'
import { NestedFromClassAndInstance, NestedFromInstance } from 'src/BaseTypes'
import * as THREE from 'three'

export type PropsCanvasText = ComponentProps<'canvas'> & { text: string }
export type TokenCanvasText = {
  props: PropsCanvasText
  canvas: HTMLCanvasElement
  type: 'Helper'
  id: 'CanvasText'
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

export type TokenHelpers = /* TokenCanvasText | */ TokenGridHelper
