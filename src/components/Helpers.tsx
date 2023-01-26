import * as THREE from 'three'
import { createMemo } from 'solid-js'
import { createObject3DEffect } from '../Effects'
import { childrenTokens, createToken } from '../ParserFunctions'
import { PropsGridHelper, TokenGridHelper } from './Helpers.types'

/* export const CanvasText = (text: string, color = 'black', fontFamily = 'Arial', fontSize = 200) => {
  let canvas: HTMLCanvasElement = document.createElement('canvas')
  let ctx = canvas.getContext('2d')

  if (!ctx) return new THREE.CanvasTexture(canvas)

  ctx.font = fontSize + 'px ' + fontFamily

  var metrics = ctx.measureText(text)
  canvas.width = Math.ceil(metrics.actualBoundingBoxRight)
  canvas.height = Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent)

  ctx.fillStyle = 'rgba(255, 255, 255, 0)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = color
  ctx.font = fontSize + 'px ' + fontFamily
  ctx.fillText(
    text,
    Math.ceil(metrics.actualBoundingBoxLeft) + 10,
    Math.ceil(metrics.actualBoundingBoxAscent),
  )

  let canvasTexture = new THREE.CanvasTexture(canvas)

  return canvasTexture
} */

export const Helper = {
  Grid: createToken<PropsGridHelper, TokenGridHelper>(props => {
    const three = createMemo(() => new THREE.GridHelper(props.size))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'GridHelper',
      type: 'Helper',
      three,
    }
  }),
}
