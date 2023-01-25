import { JSX } from "solid-js/jsx-runtime";
import { NestedFromInstance } from "src/BaseTypes";
import { CSS3DObject, CSS3DSprite } from "three/examples/jsm/renderers/CSS3DRenderer";

export type PropsCSS3DObject =
  | NestedFromInstance<CSS3DObject, JSX.Element> &
      ({ mask: true; height: number; width: number } | { mask?: false });

export type TokenCSS3DObject = {
  props: PropsCSS3DObject;
  three: CSS3DObject;
  type: "CSS";
  id: "CSS3DObject";
};

export type PropsCSS3DSprite = NestedFromInstance<CSS3DSprite> & { element: HTMLElement };
export type TokenCSS3DSprite = {
  props: PropsCSS3DSprite;
  three: CSS3DSprite;
  type: "CSS";
  id: "CSS3DSprite";
};

export type TokenCSSs = TokenCSS3DObject | TokenCSS3DSprite;
