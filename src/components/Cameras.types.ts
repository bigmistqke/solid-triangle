import * as THREE from "three";
import { NestedFromInstance } from "../BaseTypes";

export type PropsPerspectiveCamera =
  | (NestedFromInstance<THREE.PerspectiveCamera> & {
      amount?: number;
      active?: boolean;
    })
  | { id?: string };
export type TokenPerspectiveCamera = {
  id: "PerspectiveCamera";
  type: "Camera";
  three: THREE.PerspectiveCamera;
  props: PropsPerspectiveCamera;
};

export type TokenCameras = TokenPerspectiveCamera;
