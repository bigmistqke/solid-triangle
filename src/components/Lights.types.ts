import * as THREE from "three";
import { NestedFromClassAndInstance, Pose } from "../BaseTypes";

export type PropsPointLight = Pose &
  NestedFromClassAndInstance<
    THREE.PointLight,
    typeof THREE.PointLight,
    ["color", "intensity", "distance", "decay"]
  >;

export type TokenPointLight = {
  id: "PointLight";
  type: "Light";
  three: THREE.PointLight;
  props: PropsPointLight;
};

export type PropsAmbientLight = NestedFromClassAndInstance<
  THREE.AmbientLight,
  typeof THREE.AmbientLight,
  ["color", "intensity"]
>;
export type TokenAmbientLight = {
  id: "AmbientLight";
  type: "Light";
  three: THREE.AmbientLight;
  props: PropsAmbientLight;
};

export type PropsDirectionalLight = NestedFromClassAndInstance<
  THREE.DirectionalLight,
  typeof THREE.DirectionalLight,
  ["color", "intensity"]
> &
  Omit<Pose, "rotation"> & { target: THREE.Object3D };

export type TokenDirectionalLight = {
  id: "DirectionalLight";
  type: "Light";
  three: THREE.DirectionalLight;
  props: PropsDirectionalLight;
};

export type PropsRectAreaLight = NestedFromClassAndInstance<
  THREE.RectAreaLight,
  typeof THREE.RectAreaLight,
  ["color", "intensity", "width", "height"]
> &
  Omit<Pose, "rotation">;

export type TokenRectAreaLight = {
  id: "RectAreaLight";
  type: "Light";
  three: THREE.RectAreaLight;
  props: PropsRectAreaLight;
};

export type TokenLights =
  | TokenAmbientLight
  | TokenPointLight
  | TokenRectAreaLight
  | TokenDirectionalLight;
