import { createEffect, mergeProps } from 'solid-js'
import * as THREE from 'three'
import { AnimationSet, useTriangle } from '../'
import { createPropsEffect, createRefEffect, createTransformEffect } from '../Effects'
import { createToken } from '../ParserFunctions'
import type {
  PropsCubeCamera,
  PropsOrthographicCamera,
  PropsPerspectiveCamera,
  TokenCubeCamera,
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
  Cube: createToken<PropsCubeCamera, TokenCubeCamera>(props => {
    const merged = mergeProps(
      {
        active: false,
        near: 0.1,
        far: 2000,
        renderTarget: new THREE.WebGLCubeRenderTarget(128, {
          generateMipmaps: true,
          minFilter: THREE.LinearMipmapLinearFilter,
        }),
      },
      props,
    )
    const three = new THREE.CubeCamera(merged.near, merged.far, merged.renderTarget)

    createRefEffect(three, merged)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createTransformEffect(three, merged)
    createPropsEffect(three, merged, ['position', 'rotation', 'scale', 'id'])

    const context = useTriangle()

    const animate = () => {
      const renderer = context.renderer?.()
      const scene = context.scene?.()
      if (renderer instanceof THREE.WebGLRenderer && scene) three.update(renderer, scene)
    }

    createEffect(() => {
      if (merged.active && context.renderer?.() && context.scene?.()) AnimationSet.add(animate)
      else AnimationSet.delete(animate)
    })

    return {
      props,
      id: 'CubeCamera',
      type: 'Camera',
      three,
    }
  }),
}
