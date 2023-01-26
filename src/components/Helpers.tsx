import * as THREE from 'three'
import { createEffect, createMemo } from 'solid-js'
import { createObject3DEffect } from '../Effects'
import { childrenTokens, createToken } from '../ParserFunctions'
import {
  PropsArrowHelper,
  PropsAxesHelper,
  PropsBox3Helper,
  PropsBoxHelper,
  PropsCameraHelper,
  PropsDirectionalLightHelper,
  PropsGridHelper,
  PropsHemisphereLightHelper,
  PropsLightProbeHelper,
  PropsPlaneHelper,
  PropsPointLightHelper,
  PropsPolarGridHelper,
  PropsPositionalAudioHelper,
  PropsRectAreaLightHelper,
  PropsSkeletonHelper,
  PropsSpotLightHelper,
  PropsVertexNormalsHelper,
  PropsVertexTangentsHelper,
  TokenArrowHelper,
  TokenAxesHelper,
  TokenBox3Helper,
  TokenBoxHelper,
  TokenCameraHelper,
  TokenDirectionalLightHelper,
  TokenGridHelper,
  TokenHemisphereLightHelper,
  TokenLightProbeHelper,
  TokenPlaneHelper,
  TokenPointLightHelper,
  TokenPolarGridHelper,
  TokenPositionalAudioHelper,
  TokenRectAreaLightHelper,
  TokenSkeletonHelper,
  TokenSpotLightHelper,
  TokenVertexNormalsHelper,
  TokenVertexTangentsHelper,
} from './Helpers.types'
import {
  PositionalAudioHelper,
  LightProbeHelper,
  RectAreaLightHelper,
  VertexNormalsHelper,
  VertexTangentsHelper,
} from 'three-stdlib'

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
  Arrow: createToken<PropsArrowHelper, TokenArrowHelper>(props => {
    const three = createMemo(
      () =>
        new THREE.ArrowHelper(
          props.dir,
          props.origin,
          props.length,
          props.color,
          props.headLength,
          props.headWidth,
        ),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'ArrowHelper',
      type: 'Helper',
      three,
    }
  }),
  Axes: createToken<PropsAxesHelper, TokenAxesHelper>(props => {
    const three = createMemo(() => new THREE.AxesHelper(props.size))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'AxesHelper',
      type: 'Helper',
      three,
    }
  }),
  Box: createToken<PropsBoxHelper, TokenBoxHelper>(props => {
    const three = createMemo(
      () => new THREE.BoxHelper(props.object ?? new THREE.Object3D(), props.color),
    )
    createEffect(() => console.log('BoxHelper.three is ', three()))
    createEffect(() => console.log('props.object is ', props.object))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'BoxHelper',
      type: 'Helper',
      three,
    }
  }),
  Box3: createToken<PropsBox3Helper, TokenBox3Helper>(props => {
    const three = createMemo(() => new THREE.Box3Helper(props.box ?? new THREE.Box3(), props.color))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'Box3Helper',
      type: 'Helper',
      three,
    }
  }),
  Camera: createToken<PropsCameraHelper, TokenCameraHelper>(props => {
    const three = createMemo(() => new THREE.CameraHelper(props.camera ?? new THREE.Camera()))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'CameraHelper',
      type: 'Helper',
      three,
    }
  }),
  DirectionalLight: createToken<PropsDirectionalLightHelper, TokenDirectionalLightHelper>(props => {
    const three = createMemo(
      () =>
        new THREE.DirectionalLightHelper(
          props.light ?? new THREE.DirectionalLight(),
          props.size,
          props.color,
        ),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'DirectionalLightHelper',
      type: 'Helper',
      three,
    }
  }),
  PolarGrid: createToken<PropsPolarGridHelper, TokenPolarGridHelper>(props => {
    const three = createMemo(
      () =>
        new THREE.PolarGridHelper(
          props.radius,
          props.sectors,
          props.rings,
          props.divisions,
          props.color1,
          props.color2,
        ),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'PolarGridHelper',
      type: 'Helper',
      three,
    }
  }),
  Plane: createToken<PropsPlaneHelper, TokenPlaneHelper>(props => {
    const three = createMemo(
      () => new THREE.PlaneHelper(props.plane ?? new THREE.Plane(), props.size, props.color),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'PlaneHelper',
      type: 'Helper',
      three,
    }
  }),
  PointLight: createToken<PropsPointLightHelper, TokenPointLightHelper>(props => {
    const three = createMemo(
      () =>
        new THREE.PointLightHelper(
          props.light ?? new THREE.PointLight(),
          props.sphereSize ?? 1,
          props.color,
        ),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'PointLightHelper',
      type: 'Helper',
      three,
    }
  }),
  Skeleton: createToken<PropsSkeletonHelper, TokenSkeletonHelper>(props => {
    const three = createMemo(() => new THREE.SkeletonHelper(props.object ?? new THREE.Object3D()))
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'SkeletonHelper',
      type: 'Helper',
      three,
    }
  }),
  SpotLight: createToken<PropsSpotLightHelper, TokenSpotLightHelper>(props => {
    const three = createMemo(
      () => new THREE.SpotLightHelper(props.light ?? new THREE.SpotLight(), props.color),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'SpotLightHelper',
      type: 'Helper',
      three,
    }
  }),
  LightProbe: createToken<PropsLightProbeHelper, TokenLightProbeHelper>(props => {
    const three = createMemo(
      () => new LightProbeHelper(props.lightProbe ?? new THREE.LightProbe(), props.size ?? 1),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'LightProbeHelper',
      type: 'Helper',
      three,
    }
  }),
  PositionalAudio: createToken<PropsPositionalAudioHelper, TokenPositionalAudioHelper>(props => {
    const three = createMemo(
      () =>
        new PositionalAudioHelper(
          props.audio ?? new THREE.PositionalAudio(new THREE.AudioListener()),
          props.range,
        ),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'PositionalAudioHelper',
      type: 'Helper',
      three,
    }
  }),
  RectAreaLight: createToken<PropsRectAreaLightHelper, TokenRectAreaLightHelper>(props => {
    const three = createMemo(
      () => new RectAreaLightHelper(props.light ?? new THREE.RectAreaLight(), props.color),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'RectAreaLightHelper',
      type: 'Helper',
      three,
    }
  }),
  VertexNormals: createToken<PropsVertexNormalsHelper, TokenVertexNormalsHelper>(props => {
    const three = createMemo(
      () => new VertexNormalsHelper(props.object ?? new THREE.Object3D(), props.size, props.color),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'VertexNormalsHelper',
      type: 'Helper',
      three,
    }
  }),
  VertexTangents: createToken<PropsVertexTangentsHelper, TokenVertexTangentsHelper>(props => {
    const three = createMemo(
      () => new VertexTangentsHelper(props.object ?? new THREE.Object3D(), props.size, props.color),
    )
    const tokens = childrenTokens(() => props.children)
    createObject3DEffect(three, props, tokens)
    return {
      props,
      id: 'VertexTangentsHelper',
      type: 'Helper',
      three,
    }
  }),
}
