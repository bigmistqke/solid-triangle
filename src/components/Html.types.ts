import { JSX } from "solid-js/jsx-runtime";
import { NestedFromInstance } from "src/BaseTypes";

export type PropsHtml =
  | NestedFromInstance<THREE.Group> & {
      element: JSX.Element;
      distanceFactor: number;
      // children: JSX.Element;
    };
export type TokenHtml = {
  props: PropsHtml;
  three: THREE.Group;
  type: "CSS";
  id: "Html";
};
