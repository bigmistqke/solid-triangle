import { Accessor, Component, ComponentProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export type PropsCanvasText = ComponentProps<"canvas"> & { text: string };
export type TokenCanvasText = {
  props: PropsCanvasText;
  canvas: HTMLCanvasElement;
  type: "Helper";
  id: "CanvasText";
};

export type TokenHelpers = TokenCanvasText;
