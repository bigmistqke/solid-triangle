import { createMemo, mergeProps } from "solid-js";
import * as THREE from "three";
import { createPropsEffect, createRefEffect } from "../Effects";
import { createToken } from "../ParserFunctions";
import type { PropsEllipseCurve, TokenEllipseCurve } from "./Curves.types";

export const Curve = {
  Ellipse: createToken<PropsEllipseCurve, TokenEllipseCurve>((props) => {
    const merged = mergeProps(
      {
        aX: 1,
        aY: 1,
        xRadius: 1,
        yRadius: 1,
        aStartAngle: 0,
        aEndAngle: 2 * Math.PI,
        aClockwise: false,
        aRotation: 0,
        type: "",
        arcLengthDivisions: 4,
      },
      props,
    );
    const three = new THREE.EllipseCurve(
      merged.aX,
      merged.aY,
      merged.xRadius,
      merged.yRadius,
      merged.aStartAngle,
      merged.aEndAngle,
      merged.aClockwise,
      merged.aRotation,
    );

    const points = createMemo(() => three.getPoints(props.amount ?? 50));

    createRefEffect(three, merged);
    createPropsEffect(three, merged);

    return {
      props,
      id: "EllipseCurve",
      type: "Curve",
      three,
      points,
    };
  }),
};
