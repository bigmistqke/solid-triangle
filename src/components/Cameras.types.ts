import * as THREE from 'three'
import { NestedFromClassAndInstance, NestedFromInstance } from '../BaseTypes'

export type PropsPerspectiveCamera =
  | Omit<NestedFromInstance<THREE.PerspectiveCamera>, 'id'> & {
      active?: boolean
      id?: string | number
    }

export type TokenPerspectiveCamera = {
  id: 'PerspectiveCamera'
  type: 'Camera'
  three: THREE.PerspectiveCamera
  props: PropsPerspectiveCamera
}

export type PropsOrthographicCamera =
  | Omit<NestedFromInstance<THREE.OrthographicCamera>, 'id'> & {
      id?: string | number
      active?: boolean
    }
export type TokenOrthographicCamera = {
  id: 'OrthographicCamera'
  type: 'Camera'
  three: THREE.OrthographicCamera
  props: PropsOrthographicCamera
}
export type PropsCubeCamera =
  | NestedFromClassAndInstance<
      THREE.CubeCamera,
      typeof THREE.CubeCamera,
      ['near', 'far', 'renderTarget']
    >
  | {
      id: undefined
      active?: boolean
      renderTarget: THREE.WebGLCubeRenderTarget
    }
export type TokenCubeCamera = {
  id: 'CubeCamera'
  type: 'Camera'
  three: THREE.CubeCamera
  props: PropsCubeCamera
}

export type TokenCameras = TokenPerspectiveCamera | TokenOrthographicCamera | TokenCubeCamera
