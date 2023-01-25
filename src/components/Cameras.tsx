import { createEffect, mergeProps } from 'solid-js'
import * as THREE from 'three'
import { useTriangle } from '../'
import { createPropsEffect, createRefEffect, createTransformEffect } from '../Effects'
import { createToken } from '../ParserFunctions'
import type {
  PropsOrthographicCamera,
  PropsPerspectiveCamera,
  TokenOrthographicCamera,
  TokenPerspectiveCamera,
} from './Cameras.types'

export const Camera = {
  Perspective: createToken<PropsPerspectiveCamera, TokenPerspectiveCamera>(props => {
    const merged = mergeProps(
      {
        fov: 70,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.01,
        far: 10,
      },
      props,
    )
    const three = new THREE.PerspectiveCamera(merged.fov, merged.aspect, merged.near, merged.far)

    createRefEffect(three, merged)
    createTransformEffect(three, merged)
    createPropsEffect(three, merged, ['position', 'rotation', 'scale', 'id'])

    const context = useTriangle()

    createEffect(() => {
      if (props.active) context.setCamera?.(three)
    })

    return {
      props,
      id: 'PerspectiveCamera',
      type: 'Camera',
      three,
    }
  }),
  Orthographic: createToken<PropsOrthographicCamera, TokenOrthographicCamera>(props => {
    const merged = mergeProps(
      {
        left: -1,
        right: 1,
        top: -1,
        bottom: 1,
        near: 0.1,
        far: 2000,
      },
      props,
    )
    const three = new THREE.OrthographicCamera(
      merged.left,
      merged.right,
      merged.top,
      merged.bottom,
      merged.near,
      merged.far,
    )

    createRefEffect(three, merged)
    createTransformEffect(three, merged)
    createPropsEffect(three, merged, ['position', 'rotation', 'scale', 'id'])

    const context = useTriangle()

    createEffect(() => {
      if (props.active) context.setCamera?.(three)
    })

    return {
      props,
      id: 'OrthographicCamera',
      type: 'Camera',
      three,
    }
  }),
}
