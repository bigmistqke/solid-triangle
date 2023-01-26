import { createEffect, onCleanup } from 'solid-js'
import * as THREE from 'three'
import {
  createLightEffect,
  createPropsEffect,
  createRefEffect,
  createTransformEffect,
} from '../Effects'
import { createToken } from '../ParserFunctions'
import type {
  PropsAmbientLight,
  PropsAmbientLightProbe,
  PropsDefaultLight,
  PropsDirectionalLight,
  PropsHemisphereLight,
  PropsHemisphereLightProbe,
  PropsLightProbe,
  PropsPointLight,
  PropsRectAreaLight,
  TokenAmbientLight,
  TokenAmbientLightProbe,
  TokenDefaultLight,
  TokenDirectionalLight,
  TokenHemisphereLight,
  TokenHemisphereLightProbe,
  TokenLightProbe,
  TokenPointLight,
  TokenRectAreaLight,
} from './Lights.types'

export const Light = {
  Point: createToken<PropsPointLight, TokenPointLight>(props => {
    const light = new THREE.PointLight(props.color, props.intensity, props.distance, props.decay)

    createRefEffect(light, props)
    createPropsEffect(light, props)
    createTransformEffect(light, props)

    return {
      props,
      id: 'PointLight',
      type: 'Light',
      three: light,
    }
  }),
  Ambient: createToken<PropsAmbientLight, TokenAmbientLight>(props => {
    const light = new THREE.AmbientLight(props.color, props.intensity)
    // light effects
    createPropsEffect(light, props)
    return {
      props,
      id: 'AmbientLight',
      type: 'Light',
      three: light,
    }
  }),
  Directional: createToken<PropsDirectionalLight, TokenDirectionalLight>(props => {
    const light = new THREE.DirectionalLight()

    createLightEffect(light, props)
    // TODO: maybe it's nice to have light.target as a child
    createEffect(() => (props.target ? (light.target = props.target) : null))
    createTransformEffect(light, props)
    createPropsEffect(light, props)
    return {
      props,
      id: 'DirectionalLight',
      type: 'Light',
      three: light,
    }
  }),
  RectArea: createToken<PropsRectAreaLight, TokenRectAreaLight>(props => {
    const light = new THREE.RectAreaLight(props.color, props.intensity, props.width, props.height)

    createEffect(() => (light.width = props.width || 1))
    createEffect(() => (light.height = props.height || 1))
    createPropsEffect(light, props)
    createTransformEffect(light, props)
    // TODO:  'You have to include RectAreaLightUniformsLib into your scene and call init()'
    //        maybe we should initialize it if we see a RectAreaLight?
    return {
      props,
      id: 'RectAreaLight',
      type: 'Light',
      three: light,
    }
  }),
  Hemisphere: createToken<PropsHemisphereLight, TokenHemisphereLight>(props => {
    const light = new THREE.HemisphereLight(props.color, props.intensity, props.width, props.height)

    createEffect(() => (light.width = props.width || 1))
    createEffect(() => (light.height = props.height || 1))
    createPropsEffect(light, props)
    createTransformEffect(light, props)
    // TODO:  'You have to include HemisphereLightUniformsLib into your scene and call init()'
    //        maybe we should initialize it if we see a HemisphereLight?
    return {
      props,
      id: 'HemisphereLight',
      type: 'Light',
      three: light,
    }
  }),
  Default: createToken<PropsDefaultLight, TokenDefaultLight>(props => {
    const light = new THREE.Light(props.color, props.intensity)

    createLightEffect(light, props)
    createPropsEffect(light, props)
    createTransformEffect(light, props)

    return {
      props,
      id: 'DefaultLight',
      type: 'Light',
      three: light,
    }
  }),
}

export const LightProbe = {
  Ambient: createToken<PropsAmbientLightProbe, TokenAmbientLightProbe>(props => {
    const light = new THREE.AmbientLightProbe(props.color, props.intensity)
    // light effects
    createPropsEffect(light, props)
    return {
      props,
      id: 'AmbientLightProbe',
      type: 'LightProbe',
      three: light,
    }
  }),
  Hemisphere: createToken<PropsHemisphereLightProbe, TokenHemisphereLightProbe>(props => {
    const light = new THREE.HemisphereLightProbe(props.skyColor, props.groundColor, props.intensity)

    createPropsEffect(light, props)
    createTransformEffect(light, props)
    // TODO:  'You have to include HemisphereLightProbeUniformsLib into your scene and call init()'
    //        maybe we should initialize it if we see a HemisphereLightProbe?
    return {
      props,
      id: 'HemisphereLightProbe',
      type: 'LightProbe',
      three: light,
    }
  }),
  Default: createToken<PropsLightProbe, TokenLightProbe>(props => {
    const light = new THREE.LightProbe(props.sh, props.intensity)

    createPropsEffect(light, props)
    createTransformEffect(light, props)

    return {
      props,
      id: 'LightProbe',
      type: 'LightProbe',
      three: light,
    }
  }),
}
