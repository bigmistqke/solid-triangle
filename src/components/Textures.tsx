import { children, createEffect, createSignal, JSXElement } from "solid-js";
import mapTokens from "../lib/mapTokens";
import * as THREE from "three";

import { createNeedsUpdateEffect, createPropsEffect } from "../Effects";
import { childrenTokens, createToken } from "../ParserFunctions";

import type {
  PropsTexture,
  TokenTexture,
  PropsCanvasTexture,
  TokenCanvasTexture,
} from "./Textures.types";

export const Texture = {
  Default: createToken<PropsTexture, TokenTexture>((props) => {
    const [texture, setTexture] = createSignal(new THREE.TextureLoader().load(props.image));

    // const texture = new THREE.TextureLoader().load(props.image);
    createEffect(() => {
      createNeedsUpdateEffect(texture(), props);
    });
    createPropsEffect(texture, props);

    return {
      props,
      id: "Texture",
      type: "Texture",
      three: texture,
    };
  }),
  Canvas: createToken<PropsCanvasTexture, TokenCanvasTexture>((props) => {
    const tokens = childrenTokens(() => props.children);
    let texture;
    mapTokens(tokens, (token) => {
      if (token.id === "CanvasText") {
        // setTexture(new THREE.CanvasTexture(token.canvas));
        // let texture = new THREE.CanvasTexture(token.canvas);
        /* texture.image = token.canvas;
        texture.needsUpdate = true; */
      }
    });

    // const [texture, setTexture] = createSignal<THREE.CanvasTexture>();

    // createEffect(() => (props.needsUpdate ? (texture.needsUpdate = true) : null));
    // const texture = new THREE.CanvasTexture();

    // createNeedsUpdateEffect(texture()!, props);
    // createPropsEffect(texture()!, props);

    /*   createEffect(() => {
      const canvas = props.canvas();
      if (canvas.tagName === "CANVAS") {
        texture.image = canvas;
        texture.needsUpdate = true;
      }
    }); */

    return {
      props,
      id: "Texture",
      type: "Texture",
      three: texture,
    };
  }),
  Video: createToken<PropsVideoTexture, TokenVideoTexture>((props) => {
    createEffect(() => (props.needsUpdate ? (texture.needsUpdate = true) : null));
    const texture = new THREE.VideoTexture(props.canvas as HTMLVideoElement);
    createNeedsUpdateEffect(texture, props);
    createPropsEffect(texture, props);

    return {
      props,
      id: "Texture",
      type: "Texture",
      three: texture,
    };
  }),
};
