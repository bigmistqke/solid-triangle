import { Accessor, createEffect, onCleanup } from "solid-js";
import * as THREE from "three";
import { Euler, Light, Object3D, Vector3 } from "three";
import { TokenTextures } from "./components/Textures.types";
import { TokenMaterials } from "./components/Materials.types";
import { ThreeToken, isToken } from "./ParserFunctions";
import mapTokens from "./lib/mapTokens";
import { XYZ } from "./BaseTypes";

export const createChildrenEffect = (object: THREE.Object3D, tokens: Accessor<ThreeToken[]>) => {
  mapTokens(tokens, (token) => {
    if (token.type === "Object3D" || token.type === "Light" || token.type === "CSS") {
      const element = token.three;
      object.add(element);

      onCleanup(() => object.remove(element));
    } else if (token.type === "Modifier") {
      const element = token.three.object3D;
      object.add(element);
      onCleanup(() => object.remove(element));
    }
  });
};

export const createTransformEffect = (
  object: Object3D,
  props: { rotation?: XYZ; position?: XYZ; scale?: XYZ },
) => {
  if (object.type === "PerspectiveCamera") {
    /*  createEffect(() => {


    }); */
  }
  createEffect(() => (object.rotation.x = props.rotation?.x || 0));
  createEffect(() => (object.rotation.y = props.rotation?.y || 0));
  createEffect(() => (object.rotation.z = props.rotation?.z || 0));

  createEffect(() => (props.position ? object.position.copy(props.position) : undefined));

  createEffect(() => (object.position.x = props.position?.x || 0));
  createEffect(() => (object.position.y = props.position?.y || 0));
  createEffect(() => (object.position.z = props.position?.z || 0));

  createEffect(() => (object.scale.x = props.scale?.x || 1));
  createEffect(() => (object.scale.y = props.scale?.y || 1));
  createEffect(() => (object.scale.z = props.scale?.z || 1));
};

export const createLightEffect = (
  light: Light,
  props: {
    color?: THREE.ColorRepresentation;
    intensity?: number;
    castShadow?: boolean;
    shadow?: THREE.LightShadow;
  },
) => {
  createEffect(() => (light.color = new THREE.Color(props.color) || new THREE.Color("white")));
  createEffect(() => (light.intensity = props.intensity || 0.25));
  createEffect(() => (props.castShadow ? (light.castShadow = props.castShadow) : undefined));
  createEffect(() => (props.shadow ? (light.shadow = props.shadow) : undefined));
};

export const createPropsEffect = <TToken extends ThreeToken>(
  three: TToken["three"],
  props: TToken["props"],
  ignore?: string[],
) => {
  const propKeys = Object.keys(props) as (keyof TToken["props"])[];
  propKeys.forEach((propKey) => {
    if (ignore && typeof propKey === "string" && ignore.includes(propKey)) return;
    if (propKey === "children") return;
    if (!(propKey in props && propKey in three)) return;
    createEffect(() => {
      if (!props[propKey]) return;
      if (typeof props[propKey] === "function") {
        // three[propKey] = props[propKey]();
      } else {
        three[propKey] = props[propKey];
      }
    });
  });
};

const getTextureFromProps = (prop: Element) => {
  const propToken = isToken(prop);

  if (propToken && propToken.type === "Texture") {
    return propToken.three();
  } else if (prop && prop.tagName === "video") {
    return new THREE.TextureLoader().load((prop as HTMLVideoElement).src);
  } else if (prop && prop.tagName === "image") {
    return new THREE.TextureLoader().load((prop as HTMLImageElement).src);
  } else if (prop && typeof prop === "string") {
    return new THREE.TextureLoader().load(prop);
  }

  return prop;
};

export const createMapEffect = <TToken extends TokenMaterials>(
  three: TToken["three"],
  props: TToken["props"],
  mapKeys: readonly (keyof TToken["props"])[],
) => {
  mapKeys.forEach((mapKey) => {
    createEffect(() => {
      const prop = props[mapKey];
      if (!(mapKey in three)) return;
      const map = getTextureFromProps(prop);
      if (map) {
        three[mapKey] = map;
        three.needsUpdate = true;
      }
    });
  });
};

export const createRefEffect = <TToken extends ThreeToken>(
  three: Partial<TToken["three"]>,
  props: TToken["props"],
) => createEffect(() => three && props.ref?.(three as any));

export const createNeedsUpdateEffect = <TToken extends TokenMaterials | TokenTextures>(
  three: TToken["three"],
  props: TToken["props"],
) => {
  createEffect(() => (props.needsUpdate ? (three.needsUpdate = true) : null));
};
