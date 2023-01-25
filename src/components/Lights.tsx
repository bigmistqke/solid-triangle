import { createEffect } from "solid-js";
import * as THREE from "three";
import { createLightEffect, createPropsEffect, createTransformEffect } from "../Effects";
import { createToken } from "../ParserFunctions";
import type {
  PropsAmbientLight,
  PropsDirectionalLight,
  PropsRectAreaLight,
  TokenAmbientLight,
  TokenDirectionalLight,
  TokenRectAreaLight,
} from "./Lights.types";

export const Light = {
  Point: createToken<PropsAmbientLight, TokenAmbientLight>((props) => {
    const light = new THREE.AmbientLight(props.color, props.intensity);
    // light effects
    createPropsEffect(light, props);
    return {
      props,
      id: "AmbientLight",
      type: "Light",
      three: light,
    };
  }),
  Ambient: createToken<PropsAmbientLight, TokenAmbientLight>((props) => {
    const light = new THREE.AmbientLight(props.color, props.intensity);
    // light effects
    createPropsEffect(light, props);
    return {
      props,
      id: "AmbientLight",
      type: "Light",
      three: light,
    };
  }),
  Directional: createToken<PropsDirectionalLight, TokenDirectionalLight>((props) => {
    const light = new THREE.DirectionalLight();

    createLightEffect(light, props);
    // TODO: maybe it's nice to have light.target as a child
    createEffect(() => (props.target ? (light.target = props.target) : null));
    createTransformEffect(light, props);
    createPropsEffect(light, props);
    return {
      props,
      id: "DirectionalLight",
      type: "Light",
      three: light,
    };
  }),
  RectArea: createToken<PropsRectAreaLight, TokenRectAreaLight>((props) => {
    const light = new THREE.RectAreaLight(props.color, props.intensity, props.width, props.height);

    createEffect(() => (light.width = props.width || 1));
    createEffect(() => (light.height = props.height || 1));
    createPropsEffect(light, props);
    createTransformEffect(light, props);
    // TODO:  'You have to include RectAreaLightUniformsLib into your scene and call init()'
    //        maybe we should initialize it if we see a RectAreaLight?
    return {
      props,
      id: "RectAreaLight",
      type: "Light",
      three: light,
    };
  }),
};
