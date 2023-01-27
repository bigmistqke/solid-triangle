import { children, createEffect, createSignal, JSXElement } from 'solid-js'
import mapTokens from '../lib/mapTokens'
import * as THREE from 'three'

import { createNeedsUpdateEffect, createPropsEffect } from '../Effects'
import { childrenTokens, createToken } from '../ParserFunctions'

import type {
  PropsTexture,
  TokenTexture,
  PropsCanvasTexture,
  TokenCanvasTexture,
  PropsVideoTexture,
  TokenVideoTexture,
  PropsCompressedTexture,
  TokenCompressedTexture,
  PropsCompressedArrayTexture,
  TokenCompressedArrayTexture,
  PropsCubeTexture,
  PropsData3DTexture,
  PropsDataArrayTexture,
  PropsDepthTexture,
  PropsFramebufferTexture,
  TokenCubeTexture,
  TokenDataArrayTexture,
  TokenDepthTexture,
  TokenFramebufferTexture,
  TokenData3DTexture,
  PropsDataTexture,
  TokenDataTexture,
} from './Textures.types'

export const Texture = {
  Default: createToken<PropsTexture, TokenTexture>(props => {
    const [texture, setTexture] = createSignal(new THREE.TextureLoader().load(props.image))

    // const texture = new THREE.TextureLoader().load(props.image);
    createEffect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      createNeedsUpdateEffect(texture(), props)
    })
    createPropsEffect(texture, props)

    return {
      props,
      id: 'Texture',
      type: 'Texture',
      three: texture,
    }
  }),
  Canvas: createToken<PropsCanvasTexture, TokenCanvasTexture>(props => {
    const canvas = document.createElement('canvas')
    let [three] = createSignal(new THREE.CanvasTexture(canvas))

    console.error('stub')

    return {
      props,
      id: 'Texture',
      type: 'Texture',
      three,
    }
  }),
  Video: createToken<PropsVideoTexture, TokenVideoTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.VideoTexture(props.canvas as HTMLVideoElement),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'Texture',
      type: 'Texture',
      three: texture,
    }
  }),
  Compressed: createToken<PropsCompressedTexture, TokenCompressedTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.CompressedTexture(
        props.mipmaps ?? [],
        props.width ?? 124,
        props.height ?? 124,
        props.format,
        props.type,
        props.mapping,
        props.wrapS,
        props.wrapT,
        props.magFilter,
        props.minFilter,
        props.anisotropy,
        props.encoding,
      ),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'CompressedTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  CompressedArray: createToken<PropsCompressedArrayTexture, TokenCompressedArrayTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.CompressedArrayTexture(
        props.mipmaps ?? [],
        props.width ?? 124,
        props.height ?? 124,
        props.depth ?? 1,
        props.format,
        props.type,
      ),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'CompressedArrayTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  Cube: createToken<PropsCubeTexture, TokenCubeTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.CubeTexture(props.canvas as HTMLCubeElement),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'CubeTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  Data3D: createToken<PropsData3DTexture, TokenData3DTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.Data3DTexture(props.data, props.width, props.height, props.depth),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'Data3DTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  DataArray: createToken<PropsDataArrayTexture, TokenDataArrayTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.DataArrayTexture(props.data, props.width, props.height, props.depth),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'DataArrayTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  Data: createToken<PropsDataTexture, TokenDataTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.DataTexture(
        props.data,
        props.width,
        props.height,
        props.format,
        props.type,
        props.mapping,
        props.wrapS,
        props.wrapT,
        props.magFilter,
        props.minFilter,
        props.anisotropy,
        props.encoding ?? THREE.LinearEncoding,
      ),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'DataTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  Depth: createToken<PropsDepthTexture, TokenDepthTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.DepthTexture(
        props.width ?? 214,
        props.height ?? 214,
        props.type,
        props.mapping,
        props.wrapS,
        props.wrapT,
        props.magFilter,
        props.minFilter,
        props.format,
      ),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'DepthTexture',
      type: 'Texture',
      three: texture,
    }
  }),
  Framebuffer: createToken<PropsFramebufferTexture, TokenFramebufferTexture>(props => {
    createEffect(() => (props.needsUpdate ? (texture().needsUpdate = true) : null))
    const [texture, setTexture] = createSignal(
      new THREE.FramebufferTexture(
        props.width ?? 214,
        props.height ?? 214,
        props.format ?? THREE.AlphaFormat,
      ),
    )
    createNeedsUpdateEffect(texture, props)
    createPropsEffect(texture, props)

    return {
      props,
      id: 'FramebufferTexture',
      type: 'Texture',
      three: texture,
    }
  }),
}
