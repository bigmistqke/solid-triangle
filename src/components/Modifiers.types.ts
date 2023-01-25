import CurveModifier from "three/examples/jsm/modifiers/CurveModifier.js";
import { NestedFromInstance } from "../BaseTypes";

export type PropsFlow = NestedFromInstance<CurveModifier.Flow>;
export type TokenFlow = {
  id: "Flow";
  type: "Modifier";
  three: CurveModifier.Flow;
  props: PropsFlow;
};

export type TokenModifiers = TokenFlow;
