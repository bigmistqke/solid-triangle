import { JSX } from 'solid-js/jsx-runtime'
import THREE from 'three'
import { NestedFromClassAndInstance, NestedFromInstance, XYZ } from '../BaseTypes'

type Material<T> = NestedFromInstance<T>

export type PropsMaterial = Material<THREE.Material>
export type TokenMaterial = {
  id: 'Material'
  type: 'Material'
  three: THREE.Material
  props: PropsMaterial
}

export type PropsMeshNormalMaterial =
  | Material<THREE.MeshNormalMaterial> & {
      bumpMap?: JSX.Element
      displacementMap?: JSX.Element
      normalMap?: JSX.Element
      envMap?: JSX.Element
      lightMap?: JSX.Element
      specularMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshNormalMaterial = {
  id: 'MeshNormalMaterial'
  type: 'Material'
  three: THREE.MeshNormalMaterial
  props: PropsMeshNormalMaterial
}

export type PropsMeshBasicMaterial =
  | Material<THREE.MeshBasicMaterial>
  | {
      map?: JSX.Element
      alphaMap?: JSX.Element
      aoMap?: JSX.Element
      envMap?: JSX.Element
      lightMap?: JSX.Element
      specularMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshBasicMaterial = {
  id: 'MeshBasicMaterial'
  type: 'Material'
  three: THREE.MeshBasicMaterial
  props: PropsMeshBasicMaterial
}

export type PropsMeshLambertMaterial =
  | Material<THREE.MeshLambertMaterial>
  | {
      alphaMap?: JSX.Element
      aoMap?: JSX.Element
      bumpMap?: JSX.Element
      displacementMap?: JSX.Element
      emissiveMap?: JSX.Element
      lightMap?: JSX.Element
      normalMap?: JSX.Element
      specularMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshLambertMaterial = {
  id: 'MeshLambertMaterial'
  type: 'Material'
  three: THREE.MeshLambertMaterial
  props: PropsMeshLambertMaterial
}

export type PropsMeshMatcapMaterial =
  | Material<THREE.MeshMatcapMaterial>
  | {
      alphaMap?: JSX.Element
      bumpMap?: JSX.Element
      displacementMap?: JSX.Element
      normalMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshMatcapMaterial = {
  id: 'MeshMatcapMaterial'
  type: 'Material'
  three: THREE.MeshMatcapMaterial
  props: PropsMeshMatcapMaterial
}

export type PropsMeshPhongMaterial =
  | Material<THREE.MeshPhongMaterial>
  | {
      alphaMap?: JSX.Element
      aoMap?: JSX.Element
      bumpMap?: JSX.Element
      displacementMap?: JSX.Element
      emissiveMap?: JSX.Element
      lightMap?: JSX.Element
      normalMap?: JSX.Element
      specularMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshPhongMaterial = {
  id: 'MeshPhongMaterial'
  type: 'Material'
  three: THREE.MeshPhongMaterial
  props: PropsMeshPhongMaterial
}

export type PropsMeshStandardMaterial =
  | Material<THREE.MeshStandardMaterial>
  | {
      alphaMap?: JSX.Element
      aoMap?: JSX.Element
      bumpMap?: JSX.Element
      displacementMap?: JSX.Element
      emissiveMap?: JSX.Element
      envMap?: JSX.Element
      lightMap?: JSX.Element
      metalnessMap?: JSX.Element
      normalMap?: JSX.Element
      roughnessMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshStandardMaterial = {
  id: 'MeshStandardMaterial'
  type: 'Material'
  three: THREE.MeshStandardMaterial
  props: PropsMeshStandardMaterial
}

export type PropsMeshPhysicalMaterial =
  | Material<THREE.MeshPhysicalMaterial>
  | {
      clearcoatMap?: JSX.Element
      clearcoatRoughnessMap?: JSX.Element
      sheenRoughnessMap?: JSX.Element
      specularIntensityMap?: JSX.Element
      specularColorMap?: JSX.Element
      thicknessMap?: JSX.Element
      transmissionMap?: JSX.Element
      needsupdate?: number
    }
export type TokenMeshPhysicalMaterial = {
  id: 'MeshPhysicalMaterial'
  type: 'Material'
  three: THREE.MeshPhysicalMaterial
  props: PropsMeshPhysicalMaterial
}

export type PropsMeshDepthMaterial =
  | Material<THREE.MeshDepthMaterial>
  | {
      alphaMap?: JSX.Element
      depthPacking?: JSX.Element
      displacementMap?: JSX.Element
      displacementScale?: JSX.Element
      displacementBias?: JSX.Element
      fog?: JSX.Element
      map?: JSX.Element
      wireframe?: JSX.Element
      wireframeLinewidth?: JSX.Element
    }
export type TokenMeshDepthMaterial = {
  id: 'MeshDepthMaterial'
  type: 'Material'
  three: THREE.MeshDepthMaterial
  props: PropsMeshDepthMaterial
}

export type PropsMeshDistanceMaterial =
  | Material<THREE.MeshDistanceMaterial>
  | {
      alphaMap?: JSX.Element
      displacementMap?: JSX.Element
      displacementScale?: XYZ
      map?: JSX.Element
    }
export type TokenMeshDistanceMaterial = {
  id: 'MeshDistanceMaterial'
  type: 'Material'
  three: THREE.MeshDistanceMaterial
  props: PropsMeshDistanceMaterial
}

export type PropsMeshToonMaterial =
  | Material<THREE.MeshToonMaterial>
  | {
      alphaMap?: JSX.Element
      aoMap?: JSX.Element
      displacementMap?: JSX.Element
      bumpMap?: JSX.Element
      emissiveMap?: JSX.Element
      gradientMap?: JSX.Element
      lightMap?: JSX.Element
      normalMap?: JSX.Element
      map?: JSX.Element
    }
export type TokenMeshToonMaterial = {
  id: 'MeshToonMaterial'
  type: 'Material'
  three: THREE.MeshToonMaterial
  props: PropsMeshToonMaterial
}

export type PropsShaderMaterial = Material<THREE.ShaderMaterial>
export type TokenShaderMaterial = {
  id: 'ShaderMaterial'
  type: 'Material'
  three: THREE.ShaderMaterial
  props: PropsShaderMaterial
}

export type PropsRawShaderMaterial = Material<THREE.RawShaderMaterial>
export type TokenRawShaderMaterial = {
  id: 'RawShaderMaterial'
  type: 'Material'
  three: THREE.RawShaderMaterial
  props: PropsRawShaderMaterial
}

export type PropsLineBasicMaterial = Material<THREE.LineBasicMaterial>
export type TokenLineBasicMaterial = {
  id: 'LineBasicMaterial'
  type: 'Material'
  three: THREE.LineBasicMaterial
  props: PropsLineBasicMaterial
}

export type PropsLineDashedMaterial = Material<THREE.LineDashedMaterial>
export type TokenLineDashedMaterial = {
  id: 'LineDashedMaterial'
  type: 'Material'
  three: THREE.LineDashedMaterial
  props: PropsLineDashedMaterial
}

export type PropsPointsMaterial = Material<THREE.PointsMaterial>
export type TokenPointsMaterial = {
  id: 'PointsMaterial'
  type: 'Material'
  three: THREE.PointsMaterial
  props: PropsPointsMaterial
}

export type PropsShadowMaterial = Material<THREE.ShadowMaterial>
export type TokenShadowMaterial = {
  id: 'ShadowMaterial'
  type: 'Material'
  three: THREE.ShadowMaterial
  props: PropsShadowMaterial
}

export type PropsSpriteMaterial = Material<THREE.SpriteMaterial>
export type TokenSpriteMaterial = {
  id: 'SpriteMaterial'
  type: 'Material'
  three: THREE.SpriteMaterial
  props: PropsSpriteMaterial
}

export type TokenMaterials =
  | TokenMaterial
  | TokenMeshBasicMaterial
  | TokenMeshPhysicalMaterial
  | TokenMeshStandardMaterial
  | TokenMeshPhongMaterial
  | TokenMeshMatcapMaterial
  | TokenMeshLambertMaterial
  | TokenMeshNormalMaterial
  | TokenMeshDepthMaterial
  | TokenMeshDistanceMaterial
  | TokenMeshToonMaterial
  // shader
  | TokenShaderMaterial
  | TokenRawShaderMaterial
  // line
  | TokenLineBasicMaterial
  | TokenLineDashedMaterial
  //
  | TokenPointsMaterial
  | TokenShadowMaterial
  | TokenSpriteMaterial
