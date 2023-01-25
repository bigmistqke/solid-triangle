import { createEffect, mergeProps } from "solid-js";
import * as THREE from "three";
import { useTriangle } from "../";
import { createPropsEffect, createRefEffect, createTransformEffect } from "../Effects";
import { createToken } from "../ParserFunctions";
import type { PropsPerspectiveCamera, TokenPerspectiveCamera } from "./Cameras.types";

export const Camera = {
  Perspective: createToken<PropsPerspectiveCamera, TokenPerspectiveCamera>((props) => {
    const merged = mergeProps(
      {
        fov: 70,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.01,
        far: 10,
      },
      props,
    );
    const three = new THREE.PerspectiveCamera(merged.fov, merged.aspect, merged.near, merged.far);

    createRefEffect(three, merged);
    createTransformEffect(three, merged);
    createPropsEffect(three, merged, ["position", "rotation", "scale", "id"]);

    const context = useTriangle();

    createEffect(() => {
      console.log("is active", context, props.active);
      if (props.active) context.setCamera?.(three);
    });

    return {
      props,
      id: "PerspectiveCamera",
      type: "Camera",
      three,
    };
  }),
};
