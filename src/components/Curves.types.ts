import * as THREE from "three";
import { NestedFromInstance } from "../BaseTypes";

export type EllipseCurve3D = Omit<Omit<THREE.EllipseCurve, "getPoint">, "optionalTarget"> & {
  getPoint: (t: number, optionalTarget: THREE.Vector3 | undefined) => THREE.Vector3;
  optionalTarget: THREE.Vector3;
};

export type PropsEllipseCurve = NestedFromInstance<THREE.EllipseCurve> & {
  amount?: number;
};
export type TokenEllipseCurve = {
  id: "EllipseCurve";
  type: "Curve";
  three: THREE.EllipseCurve;
  props: PropsEllipseCurve;
  points: () => THREE.Vector2[];
};

export type TokenCurves = TokenEllipseCurve;
