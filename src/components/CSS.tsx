import * as THREE from 'three'
import {
  CSS3DObject as CSS3DObjectThree,
  CSS3DSprite as CSS3DSpriteThree,
} from 'three/examples/jsm/renderers/CSS3DRenderer'
import { PropsCSS3DObject, PropsCSS3DSprite, TokenCSS3DObject, TokenCSS3DSprite } from './CSS.types'

import { createRefEffect, createTransformEffect } from '../Effects'
import { createToken } from '../ParserFunctions'

export const CSS = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object: createToken<PropsCSS3DObject, TokenCSS3DObject>(props => {
    const div = document.createElement('div')

    let element = props.children || props.element || ''
    if (
      typeof element === 'string' ||
      typeof element === 'number' ||
      typeof element === 'boolean'
    ) {
      element = (<span>{element}</span>) as HTMLElement
    }

    div.appendChild(element as HTMLElement)

    const three = new CSS3DObjectThree(div as HTMLElement)

    const container = new THREE.Object3D()
    const obj = new THREE.Object3D()
    container.add(obj)
    obj.add(three)

    if (props.mask) {
      div.style.width = props.width + 'px'
      div.style.height = props.height + 'px'

      const geometry = new THREE.BoxGeometry(props.width, props.height, 0.0001)
      const material = new THREE.MeshPhongMaterial({
        opacity: 0.15,
        color: new THREE.Color('black'),
        blending: THREE.SubtractiveBlending,
      })
      const mesh = new THREE.Mesh(geometry, material)

      obj.add(mesh)
    }

    container.scale.set(0.005, 0.005, 0.005)

    createTransformEffect(obj, props)

    createRefEffect(three, props)

    return {
      props,
      three: container,
      type: 'CSS',
      id: 'CSS3DObject',
    }
  }),
  Sprite: createToken<PropsCSS3DSprite, TokenCSS3DSprite>(props => {
    const three = new CSS3DSpriteThree(props.element)
    return {
      props,
      three,
      type: 'CSS',
      id: 'CSS3DSprite',
    }
  }),
}
