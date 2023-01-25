// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import OrbitControls from 'three/examples/jsm/misc/OrbitControls'
import { NestedFromInstance } from '../BaseTypes'

export type PropsOrbitControls = NestedFromInstance<OrbitControls> & {
  amount?: number
}
export type TokenOrbitControls = {
  id: 'OrbitControls'
  type: 'Controls'
  three: OrbitControls
  props: PropsOrbitControls
}

export type TokenControls = TokenOrbitControls
