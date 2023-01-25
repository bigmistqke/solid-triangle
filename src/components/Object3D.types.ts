import { NestedFromInstance } from "../BaseTypes";

export type PropsGroup = NestedFromInstance<THREE.Group>;
export type TokenGroup = {
  id: "Group";
  type: "Object3D";
  three: THREE.Group;
  props: PropsGroup;
};

export type PropsMesh = NestedFromInstance<THREE.Mesh>;
export type TokenMesh = {
  id: "Mesh";
  type: "Object3D";
  three: THREE.Mesh;
  props: PropsMesh;
};

export type PropsLine = NestedFromInstance<THREE.Line>;
export type TokenLine = {
  id: "Line";
  type: "Object3D";
  three: THREE.Line;
  props: PropsLine;
};

export type PropsScene = (NestedFromInstance<THREE.Scene> & { active?: boolean }) | { id: string };
export type TokenScene = {
  id: "Scene";
  type: "Scene";
  three: THREE.Scene;
  props: PropsScene;
};

export type TokenObject3Ds = TokenGroup | TokenMesh | TokenLine | TokenScene;
