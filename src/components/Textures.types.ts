import { Accessor } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import * as THREE from 'three'
import { NestedFromClassAndInstance } from '../BaseTypes'

export type PropsTexture =
  | NestedFromClassAndInstance<
      THREE.Texture,
      typeof THREE.Texture,
      [
        'image',
        'mapping',
        'wrapS',
        'wrapT',
        'magFilter',
        'minFilter',
        'format',
        'type',
        'anisotropy',
        'encoding',
      ]
    >
  | { image: string; needsUpdate?: number }
export type TokenTexture = {
  id: 'Texture'
  type: 'Texture'
  three: Accessor<THREE.Texture>
  props: PropsTexture
}

export type PropsCanvasTexture = Omit<
  NestedFromClassAndInstance<
    THREE.Texture,
    typeof THREE.CanvasTexture,
    [
      'canvas',
      'mapping',
      'wrapS',
      'wrapT',
      'magFilter',
      'minFilter',
      'format',
      'type',
      'anisotropy',
    ]
  >,
  'canvas'
> & {
  needsUpdate?: number
  canvas: /* HTMLCanvasElement |  */ JSX.Element
}
export type TokenCanvasTexture = {
  id: 'Texture'
  type: 'Texture'
  three: Accessor<THREE.CanvasTexture | undefined>
} & { props: PropsCanvasTexture }

export type PropsVideoTexture = NestedFromClassAndInstance<
  THREE.Texture,
  typeof THREE.VideoTexture,
  ['mapping', 'video', 'wrapS', 'wrapT', 'magFilter', 'minFilter', 'format', 'type', 'anisotropy']
> & {
  needsUpdate?: number
  canvas: HTMLVideoElement
}
export type TokenVideoTexture = {
  id: 'Texture'
  type: 'Texture'
  three: Accessor<THREE.VideoTexture | undefined>
} & { props: PropsVideoTexture }

export type TokenTextures = TokenTexture | TokenCanvasTexture | TokenVideoTexture
