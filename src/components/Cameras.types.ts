import * as THREE from 'three'
import { NestedFromInstance } from '../BaseTypes'

export type PropsPerspectiveCamera =
  | NestedFromInstance<THREE.PerspectiveCamera>
  | { id?: string; amount?: number; active?: boolean }
export type TokenPerspectiveCamera = {
  id: 'PerspectiveCamera'
  type: 'Camera'
  three: THREE.PerspectiveCamera
  props: PropsPerspectiveCamera
}

export type PropsOrthographicCamera =
  | NestedFromInstance<THREE.OrthographicCamera>
  | {
      id?: string
      amount?: number
      active?: boolean
    }

export type TokenOrthographicCamera = {
  id: 'OrthographicCamera'
  type: 'Camera'
  three: THREE.OrthographicCamera
  props: PropsOrthographicCamera
}

export type TokenCameras = TokenPerspectiveCamera | TokenOrthographicCamera
