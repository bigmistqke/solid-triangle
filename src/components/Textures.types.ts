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
export type PropsCompressedTexture = NestedFromClassAndInstance<
  THREE.CompressedTexture,
  typeof THREE.CompressedTexture,
  [
    'mipmaps',
    'width',
    'height',
    'format',
    'type',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'anisotropy',
    'encoding',
  ]
> & {
  needsUpdate?: number
  canvas: HTMLVideoElement
}
export type TokenCompressedTexture = {
  id: 'Texture'
  type: 'CompressedTexture'
  three: Accessor<THREE.CompressedTexture | undefined>
} & { props: PropsCompressedTexture }

export type PropsCompressedArrayTexture = NestedFromClassAndInstance<
  THREE.CompressedArrayTexture,
  typeof THREE.CompressedArrayTexture,
  ['mipmaps', 'width', 'height', 'depth', 'format', 'type']
> & {
  needsUpdate?: number
  canvas: HTMLVideoElement
}
export type TokenCompressedArrayTexture = {
  id: 'CompressedArrayTexture'
  type: 'Texture'
  three: Accessor<THREE.CompressedArrayTexture | undefined>
} & { props: PropsCompressedArrayTexture }

export type PropsCubeTexture = NestedFromClassAndInstance<
  THREE.CubeTexture,
  typeof THREE.CubeTexture,
  [
    'images',
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
> & {
  needsUpdate?: number
}
export type TokenCubeTexture = {
  id: 'CubeTexture'
  type: 'Texture'
  three: Accessor<THREE.CubeTexture | undefined>
} & { props: PropsCubeTexture }

export type PropsData3DTexture = NestedFromClassAndInstance<
  THREE.Data3DTexture,
  typeof THREE.Data3DTexture,
  ['data', 'width', 'height', 'depth']
> & {
  needsUpdate?: number
}
export type TokenData3DTexture = {
  id: 'Data3DTexture'
  type: 'Texture'
  three: Accessor<THREE.Data3DTexture | undefined>
} & { props: PropsData3DTexture }

export type PropsDataTexture = NestedFromClassAndInstance<
  THREE.DataTexture,
  typeof THREE.DataTexture,
  [
    'data',
    'width',
    'height',
    'format',
    'type',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'anisotropy',
    'encoding',
  ]
> & {
  needsUpdate?: number
}
export type TokenDataTexture = {
  id: 'DataTexture'
  type: 'Texture'
  three: Accessor<THREE.DataTexture | undefined>
} & { props: PropsDataTexture }

export type PropsDataArrayTexture = NestedFromClassAndInstance<
  THREE.DataArrayTexture,
  typeof THREE.DataArrayTexture,
  ['data', 'width', 'height', 'depth']
> & {
  needsUpdate?: number
}
export type TokenDataArrayTexture = {
  id: 'DataArrayTexture'
  type: 'Texture'
  three: Accessor<THREE.DataArrayTexture | undefined>
} & { props: PropsDataArrayTexture }

export type PropsDepthTexture = NestedFromClassAndInstance<
  THREE.DepthTexture,
  typeof THREE.DepthTexture,
  ['width', 'height', 'type', 'mapping', 'wrapS', 'wrapT', 'magFilter', 'minFilter', 'format']
> & {
  needsUpdate?: number
}
export type TokenDepthTexture = {
  id: 'DepthTexture'
  type: 'Texture'
  three: Accessor<THREE.DepthTexture | undefined>
} & { props: PropsDepthTexture }

export type PropsFramebufferTexture = NestedFromClassAndInstance<
  THREE.FramebufferTexture,
  typeof THREE.FramebufferTexture,
  ['width', 'height', 'format']
> & {
  needsUpdate?: number
}
export type TokenFramebufferTexture = {
  id: 'FramebufferTexture'
  type: 'Texture'
  three: Accessor<THREE.FramebufferTexture | undefined>
} & { props: PropsFramebufferTexture }

export type TokenTextures =
  | TokenTexture
  | TokenCanvasTexture
  | TokenVideoTexture
  | TokenCompressedTexture
  | TokenCompressedArrayTexture
  | TokenCubeTexture
  | TokenData3DTexture
  | TokenDataArrayTexture
  | TokenDepthTexture
  | TokenFramebufferTexture
  | TokenDataTexture
