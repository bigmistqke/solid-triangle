import { Accessor, createEffect, onCleanup } from 'solid-js'
import * as THREE from 'three'
import { Light, Object3D } from 'three'
import { XYZ } from './BaseTypes'
import { TokenHelpers } from './components/Helpers.types'
import { TokenMaterials } from './components/Materials.types'
import { TokenObject3Ds } from './components/Object3D.types'
import { TokenTextures } from './components/Textures.types'
import mapTokens from './lib/mapTokens'
import { isToken, ThreeToken } from './ParserFunctions'

export const createChildrenEffect = (
  object: THREE.Object3D | Accessor<THREE.Object3D>,
  tokens: Accessor<ThreeToken[]>,
) => {
  const o = () => (typeof object === 'function' ? object() : object)
  mapTokens(tokens, token => {
    if (
      token.type === 'Object3D' ||
      token.type === 'Light' ||
      token.type === 'CSS' ||
      token.type === 'Helper'
    ) {
      const element = typeof token.three === 'function' ? token.three() : token.three
      o().add(element)
      onCleanup(() => o().remove(element))
    } else if (token.type === 'Modifier') {
      const element = token.three.object3D
      o().add(element)
      onCleanup(() => o().remove(element))
    }
  })
}

export const createTransformEffect = (
  object: Object3D | Accessor<Object3D>,
  props: { rotation?: XYZ; position?: XYZ; scale?: XYZ },
) => {
  const o = () => (typeof object === 'function' ? object() : object)

  createEffect(() => (o().rotation.x = props.rotation?.x || 0))
  createEffect(() => (o().rotation.y = props.rotation?.y || 0))
  createEffect(() => (o().rotation.z = props.rotation?.z || 0))

  // createEffect(() => (props.position ? o().position.copy(props.position) : undefined))

  createEffect(() => (o().position.x = props.position?.x || 0))
  createEffect(() => (o().position.y = props.position?.y || 0))
  createEffect(() => (o().position.z = props.position?.z || 0))

  createEffect(() => (o().scale.x = props.scale?.x || 1))
  createEffect(() => (o().scale.y = props.scale?.y || 1))
  createEffect(() => (o().scale.z = props.scale?.z || 1))
}

export const createObject3DEffect = <
  TToken extends TokenObject3Ds | TokenHelpers,
  TThree extends TToken['three'],
  TProps extends TToken['props'],
>(
  three: TThree,
  props: TProps,
  tokens: Accessor<ThreeToken[]>,
) => {
  const t = () => (typeof three === 'function' ? three() : three)
  // set ref
  createRefEffect(three, props)
  // grouping elements
  createChildrenEffect(three, tokens)
  // transform Object3D
  createTransformEffect(three, props)
}

export const createLightEffect = (
  light: Light,
  props: {
    color?: THREE.ColorRepresentation
    intensity?: number
    castShadow?: boolean
    shadow?: THREE.LightShadow
  },
) => {
  createEffect(() => (light.color = new THREE.Color(props.color) || new THREE.Color('white')))
  createEffect(() => (light.intensity = props.intensity || 0.25))
  createEffect(() => (props.castShadow ? (light.castShadow = props.castShadow) : undefined))
  createEffect(() => (props.shadow ? (light.shadow = props.shadow) : undefined))
}

export const createPropsEffect = <TToken extends ThreeToken>(
  three: TToken['three'],
  props: TToken['props'],
  ignore?: string[],
) => {
  const propKeys = Object.keys(props) as (keyof TToken['props'])[]
  propKeys.forEach(propKey => {
    if (ignore && typeof propKey === 'string' && ignore.includes(propKey)) return
    if (propKey === 'children') return
    /* if (
      (typeof three === 'function' && three() && propKey in three()) ||
      (typeof three !== 'function' && three && propKey in three)
    )
     return */

    createEffect(() => {
      if (!props[propKey]) return
      if (typeof props[propKey] === 'function') {
        if (typeof three === 'function' && three()) three()[propKey] = props[propKey]()
        else three[propKey] = props[propKey]()
      } else {
        if (typeof three === 'function' && three()) three()[propKey] = props[propKey]
        else three[propKey] = props[propKey]
      }
    })
  })
}

const getTextureFromProps = (prop: Element) => {
  const propToken = isToken(prop)

  if (propToken && propToken.type === 'Texture') {
    return propToken.three()
  } else if (prop && prop.tagName === 'video') {
    return new THREE.TextureLoader().load((prop as HTMLVideoElement).src)
  } else if (prop && prop.tagName === 'image') {
    return new THREE.TextureLoader().load((prop as HTMLImageElement).src)
  } else if (prop && typeof prop === 'string') {
    return new THREE.TextureLoader().load(prop)
  }

  return prop
}

export const createMapEffect = <TToken extends TokenMaterials>(
  three: TToken['three'],
  props: TToken['props'],
  mapKeys: readonly (keyof TToken['props'])[],
) => {
  mapKeys.forEach(mapKey => {
    createEffect(() => {
      const prop = props[mapKey]
      if (!(mapKey in three)) return
      // TODO: type-error
      const map = getTextureFromProps(prop)
      if (map) {
        // TODO: type-error
        three[mapKey] = map
        three.needsUpdate = true
      }
    })
  })
}

export const createRefEffect = <
  TToken extends ThreeToken,
  TThree extends TToken['three'],
  TProps extends TToken['props'],
>(
  three: TThree,
  props: TProps,
) => {
  const t = () => (typeof three === 'function' ? three() : three)
  createEffect(() => {
    if (!('ref' in props)) return
    // TODO: ugly typecast
    t() && props.ref?.(t() as any)
  })
}

export const createNeedsUpdateEffect = <TToken extends TokenMaterials | TokenTextures>(
  three: TToken['three'],
  props: TToken['props'],
) => {
  createEffect(() =>
    'needsUpdate' in props && 'needsUpdate' in three ? (three.needsUpdate = true) : null,
  )
}
