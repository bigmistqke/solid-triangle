import { JSXElement } from 'solid-js'
import { ParameterNames, ParametersToObject } from './utils/TypeHelpers'

export type LeafFromInstance<TInstance> = Omit<
  Partial<TInstance>,
  'children' | 'position' | 'rotation' | 'scale'
> & {
  ref?: (element: TInstance) => void
  position?: XYZ
  scale?: XYZ
  rotation?: XYZ
}

export type NestedFromInstance<
  TInstance,
  TChildren = JSXElement | JSXElement[],
> = LeafFromInstance<TInstance> & {
  children?: TChildren
}

export type LeafFromClassAndInstance<
  TInstance,
  TClass extends new (...args: any) => TInstance,
  TKeys extends ParameterNames<TClass>,
> = Omit<Partial<TInstance>, 'children' | 'position' | 'rotation' | 'scale'> &
  Partial<TClass> & {
    ref?: (element: TInstance) => void
    position?: XYZ
    scale?: XYZ
    rotation?: XYZ
  } & Partial<ParametersToObject<TClass, TKeys>>

export type NestedFromClassAndInstance<
  TInstance,
  TClass extends new (...args: any) => TInstance,
  TKeys extends ParameterNames<TClass>,
> = LeafFromClassAndInstance<TInstance, TClass, TKeys> & {
  children?: JSXElement | JSXElement[]
  position?: XYZ
  scale?: XYZ
  rotation?: XYZ
}

export type XYZ = { x: number; y: number; z: number }

export type Pose = {
  position: XYZ
  rotation: XYZ
  scale: XYZ
}
