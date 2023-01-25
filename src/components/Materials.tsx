import * as THREE from "three";
import {
  createMapEffect,
  createNeedsUpdateEffect,
  createPropsEffect,
  createRefEffect,
} from "../Effects";
import type {
  PropsMeshBasicMaterial,
  PropsMeshLambertMaterial,
  PropsMeshMatcapMaterial,
  PropsMeshNormalMaterial,
  PropsMeshPhongMaterial,
  PropsMeshPhysicalMaterial,
  PropsMeshStandardMaterial,
  TokenMeshBasicMaterial,
  TokenMeshLambertMaterial,
  TokenMeshMatcapMaterial,
  TokenMeshNormalMaterial,
  TokenMeshPhongMaterial,
  TokenMeshPhysicalMaterial,
  TokenMeshStandardMaterial,
  TokenMaterials,
  PropsShaderMaterial,
  TokenShaderMaterial,
  PropsLineBasicMaterial,
  TokenLineBasicMaterial,
  PropsLineDashedMaterial,
  TokenLineDashedMaterial,
} from "./Materials.types";
import { createToken } from "../ParserFunctions";
import { mergeProps } from "solid-js";

const createMaterialEffect = <TMaterial extends TokenMaterials>(
  three: TMaterial["three"],
  props: TMaterial["props"],
) => {
  createRefEffect(three, props);
  createNeedsUpdateEffect(three, props);
  createPropsEffect(three, props);
};

const Mesh = {
  Normal: createToken<PropsMeshNormalMaterial, TokenMeshNormalMaterial>((props) => {
    const three = new THREE.MeshNormalMaterial({ ...props });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshNormalMaterial>(three, props, [
      "bumpMap",
      "displacementMap",
      "normalMap",
    ]);
    return {
      props,
      id: "MeshNormalMaterial",
      type: "Material",
      three,
    };
  }),
  Basic: createToken<PropsMeshBasicMaterial, TokenMeshBasicMaterial>((props) => {
    const three = new THREE.MeshBasicMaterial({
      ...(props as any),
    });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshBasicMaterial>(three, props, [
      "map",
      "aoMap",
      "alphaMap",
      "envMap",
      "lightMap",
      "specularMap",
    ]);
    return {
      props,
      id: "MeshBasicMaterial",
      type: "Material",
      three,
    };
  }),
  Lambert: createToken<PropsMeshLambertMaterial, TokenMeshLambertMaterial>((props) => {
    const three = new THREE.MeshLambertMaterial({ ...props });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshLambertMaterial>(three, props, [
      "alphaMap",
      "aoMap",
      "bumpMap",
      "displacementMap",
      "emissiveMap",
      "lightMap",
      "normalMap",
      "specularMap",
    ]);
    return {
      props,
      id: "MeshLambertMaterial",
      type: "Material",
      three,
    };
  }),
  Matcap: createToken<PropsMeshMatcapMaterial, TokenMeshMatcapMaterial>((props) => {
    const three = new THREE.MeshMatcapMaterial({ ...props });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshMatcapMaterial>(three, props, [
      "alphaMap",
      "bumpMap",
      "displacementMap",
      "normalMap",
    ]);
    return {
      props,
      id: "MeshMatcapMaterial",
      type: "Material",
      three,
    };
  }),
  Phong: createToken<PropsMeshPhongMaterial, TokenMeshPhongMaterial>((props) => {
    const three = new THREE.MeshPhongMaterial({ ...props });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshPhongMaterial>(three, props, [
      "alphaMap",
      "aoMap",
      "bumpMap",
      "displacementMap",
      "emissiveMap",
      "lightMap",
      "normalMap",
      "specularMap",
    ]);
    return {
      props,
      id: "MeshPhongMaterial",
      type: "Material",
      three,
    };
  }),
  Standard: createToken<PropsMeshStandardMaterial, TokenMeshStandardMaterial>((props) => {
    const three = new THREE.MeshStandardMaterial({ ...props });
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshStandardMaterial>(three, props, [
      "alphaMap",
      "aoMap",
      "bumpMap",
      "displacementMap",
      "emissiveMap",
      "envMap",
      "lightMap",
      "metalnessMap",
      "normalMap",
      "roughnessMap",
    ]);
    return {
      props,
      id: "MeshStandardMaterial",
      type: "Material",
      three,
    };
  }),
  Physical: createToken<PropsMeshPhysicalMaterial, TokenMeshPhysicalMaterial>((props) => {
    const three = new THREE.MeshPhysicalMaterial();
    createMaterialEffect(three, props);
    createMapEffect<TokenMeshPhysicalMaterial>(three, props, [
      "clearcoatMap",
      "clearcoatRoughnessMap",
      "sheenRoughnessMap",
      "specularIntensityMap",
      "specularColorMap",
      "thicknessMap",
      "transmissionMap",
    ]);
    return {
      props,
      id: "MeshPhysicalMaterial",
      type: "Material",
      three,
    };
  }),
};

const Line = {
  Basic: createToken<PropsLineBasicMaterial, TokenLineBasicMaterial>((props) => {
    const three = new THREE.LineBasicMaterial();

    // three.linewidth = 0.1;

    // createMaterialEffect(three, props);
    createPropsEffect(three, props);
    return {
      props,
      id: "LineBasicMaterial",
      type: "Material",
      three,
    };
  }),
  Dashed: createToken<PropsLineDashedMaterial, TokenLineDashedMaterial>((props) => {
    const merged = mergeProps(
      {
        color: 0xffffff,
        linewidth: 1,
        linecap: "round",
        linejoin: "round",
        blendDstAlpha: 0,
        gapSize: 2,
        dashSize: 2,
      },
      props,
    );

    const three = new THREE.LineDashedMaterial({
      color: merged.color,
      linewidth: merged.linewidth,
      linecap: merged.linecap,
      linejoin: merged.linejoin,
      gapSize: 1,
      dashSize: 1,
      scale: 1,
    });
    createMaterialEffect(three, merged);

    return {
      props,
      id: "LineDashedMaterial",
      type: "Material",
      three,
    };
  }),
};

const Shader = createToken<PropsShaderMaterial, TokenShaderMaterial>((props) => {
  const three = new THREE.ShaderMaterial();
  createMaterialEffect(three, props);
  return {
    props,
    id: "ShaderMaterial",
    type: "Material",
    three,
  };
});

export const Material = {
  Mesh,
  Shader,
  Line,
};