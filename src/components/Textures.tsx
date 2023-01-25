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
}
