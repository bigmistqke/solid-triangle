import { JSX } from "solid-js/jsx-runtime";
import { NestedFromInstance } from "../BaseTypes";

type Material<T> = NestedFromInstance<T>;

export type PropsMeshNormalMaterial =
  | Material<THREE.MeshNormalMaterial> & {
      bumpMap?: JSX.Element;
      displacementMap?: JSX.Element;
      normalMap?: JSX.Element;
      envMap?: JSX.Element;
      lightMap?: JSX.Element;
      specularMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshNormalMaterial = {
  id: "MeshNormalMaterial";
  type: "Material";
  three: THREE.MeshNormalMaterial;
  props: PropsMeshNormalMaterial;
};

export type PropsMeshBasicMaterial =
  | Material<THREE.MeshBasicMaterial>
  | {
      map?: JSX.Element;
      alphaMap?: JSX.Element;
      aoMap?: JSX.Element;
      envMap?: JSX.Element;
      lightMap?: JSX.Element;
      specularMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshBasicMaterial = {
  id: "MeshBasicMaterial";
  type: "Material";
  three: THREE.MeshBasicMaterial;
  props: PropsMeshBasicMaterial;
};

export type PropsMeshLambertMaterial =
  | Material<THREE.MeshLambertMaterial>
  | {
      alphaMap?: JSX.Element;
      aoMap?: JSX.Element;
      bumpMap?: JSX.Element;
      displacementMap?: JSX.Element;
      emissiveMap?: JSX.Element;
      lightMap?: JSX.Element;
      normalMap?: JSX.Element;
      specularMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshLambertMaterial = {
  id: "MeshLambertMaterial";
  type: "Material";
  three: THREE.MeshLambertMaterial;
  props: PropsMeshLambertMaterial;
};

export type PropsMeshMatcapMaterial =
  | Material<THREE.MeshMatcapMaterial>
  | {
      alphaMap?: JSX.Element;
      bumpMap?: JSX.Element;
      displacementMap?: JSX.Element;
      normalMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshMatcapMaterial = {
  id: "MeshMatcapMaterial";
  type: "Material";
  three: THREE.MeshMatcapMaterial;
  props: PropsMeshMatcapMaterial;
};

export type PropsMeshPhongMaterial =
  | Material<THREE.MeshPhongMaterial>
  | {
      alphaMap?: JSX.Element;
      aoMap?: JSX.Element;
      bumpMap?: JSX.Element;
      displacementMap?: JSX.Element;
      emissiveMap?: JSX.Element;
      lightMap?: JSX.Element;
      normalMap?: JSX.Element;
      specularMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshPhongMaterial = {
  id: "MeshPhongMaterial";
  type: "Material";
  three: THREE.MeshPhongMaterial;
  props: PropsMeshPhongMaterial;
};

export type PropsMeshStandardMaterial =
  | Material<THREE.MeshStandardMaterial>
  | {
      alphaMap?: JSX.Element;
      aoMap?: JSX.Element;
      bumpMap?: JSX.Element;
      displacementMap?: JSX.Element;
      emissiveMap?: JSX.Element;
      envMap?: JSX.Element;
      lightMap?: JSX.Element;
      metalnessMap?: JSX.Element;
      normalMap?: JSX.Element;
      roughnessMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshStandardMaterial = {
  id: "MeshStandardMaterial";
  type: "Material";
  three: THREE.MeshStandardMaterial;
  props: PropsMeshStandardMaterial;
};

export type PropsMeshPhysicalMaterial =
  | Material<THREE.MeshPhysicalMaterial>
  | {
      clearcoatMap?: JSX.Element;
      clearcoatRoughnessMap?: JSX.Element;
      sheenRoughnessMap?: JSX.Element;
      specularIntensityMap?: JSX.Element;
      specularColorMap?: JSX.Element;
      thicknessMap?: JSX.Element;
      transmissionMap?: JSX.Element;
      needsupdate?: number;
    };
export type TokenMeshPhysicalMaterial = {
  id: "MeshPhysicalMaterial";
  type: "Material";
  three: THREE.MeshPhysicalMaterial;
  props: PropsMeshPhysicalMaterial;
};

export type PropsShaderMaterial = Material<THREE.ShaderMaterial>;
export type TokenShaderMaterial = {
  id: "ShaderMaterial";
  type: "Material";
  three: THREE.ShaderMaterial;
  props: PropsShaderMaterial;
};

export type PropsLineBasicMaterial = Material<THREE.LineBasicMaterial>;
export type TokenLineBasicMaterial = {
  id: "LineBasicMaterial";
  type: "Material";
  three: THREE.LineBasicMaterial;
  props: PropsLineBasicMaterial;
};

export type PropsLineDashedMaterial = Material<THREE.LineDashedMaterial>;
export type TokenLineDashedMaterial = {
  id: "LineDashedMaterial";
  type: "Material";
  three: THREE.LineDashedMaterial;
  props: PropsLineDashedMaterial;
};

export type TokenMaterials =
  | TokenMeshBasicMaterial
  | TokenMeshPhysicalMaterial
  | TokenMeshStandardMaterial
  | TokenMeshPhongMaterial
  | TokenMeshMatcapMaterial
  | TokenMeshLambertMaterial
  | TokenMeshNormalMaterial
  | TokenShaderMaterial
  | TokenLineBasicMaterial
  | TokenLineDashedMaterial;
