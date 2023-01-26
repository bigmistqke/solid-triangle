import * as THREE from 'three'
import {
  createMapEffect,
  createNeedsUpdateEffect,
  createPropsEffect,
  createRefEffect,
} from '../Effects'
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
  PropsMeshDepthMaterial,
  TokenMeshDepthMaterial,
  PropsMeshDistanceMaterial,
  TokenMeshDistanceMaterial,
  PropsMeshToonMaterial,
  TokenMeshToonMaterial,
  PropsPointsMaterial,
  TokenPointsMaterial,
  PropsShadowMaterial,
  TokenShadowMaterial,
  PropsSpriteMaterial,
  TokenSpriteMaterial,
} from './Materials.types'
import { createToken } from '../ParserFunctions'
import { mergeProps } from 'solid-js'

const createMaterialEffect = <TMaterial extends TokenMaterials>(
  three: TMaterial['three'],
  props: TMaterial['props'],
) => {
  createRefEffect(three, props)
  createNeedsUpdateEffect(three, props)
  createPropsEffect(three, props)
}

const Mesh = {
  Normal: createToken<PropsMeshNormalMaterial, TokenMeshNormalMaterial>(props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const three = new THREE.MeshNormalMaterial({ ...props })
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshNormalMaterial>(three, props, [
      'bumpMap',
      'displacementMap',
      'normalMap',
    ])
    return {
      props,
      id: 'MeshNormalMaterial',
      type: 'Material',
      three,
    }
  }),
  Basic: createToken<PropsMeshBasicMaterial, TokenMeshBasicMaterial>(props => {
    const three = new THREE.MeshBasicMaterial({
      ...(props as any),
    })
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshBasicMaterial>(three, props, [
      'map',
      'aoMap',
      'alphaMap',
      'envMap',
      'lightMap',
      'specularMap',
    ])
    return {
      props,
      id: 'MeshBasicMaterial',
      type: 'Material',
      three,
    }
  }),
  Lambert: createToken<PropsMeshLambertMaterial, TokenMeshLambertMaterial>(props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const three = new THREE.MeshLambertMaterial({ ...props })

    console.log('Lambert is ', three)
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshLambertMaterial>(three, props, [
      'alphaMap',
      'aoMap',
      'bumpMap',
      'displacementMap',
      'emissiveMap',
      'lightMap',
      'normalMap',
      'specularMap',
    ])
    return {
      props,
      id: 'MeshLambertMaterial',
      type: 'Material',
      three,
    }
  }),
  Matcap: createToken<PropsMeshMatcapMaterial, TokenMeshMatcapMaterial>(props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const three = new THREE.MeshMatcapMaterial({ ...props })
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshMatcapMaterial>(three, props, [
      'alphaMap',
      'bumpMap',
      'displacementMap',
      'normalMap',
    ])
    return {
      props,
      id: 'MeshMatcapMaterial',
      type: 'Material',
      three,
    }
  }),
  Phong: createToken<PropsMeshPhongMaterial, TokenMeshPhongMaterial>(props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const three = new THREE.MeshPhongMaterial({ ...props })
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshPhongMaterial>(three, props, [
      'alphaMap',
      'aoMap',
      'bumpMap',
      'displacementMap',
      'emissiveMap',
      'lightMap',
      'normalMap',
      'specularMap',
    ])
    return {
      props,
      id: 'MeshPhongMaterial',
      type: 'Material',
      three,
    }
  }),
  Standard: createToken<PropsMeshStandardMaterial, TokenMeshStandardMaterial>(props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const three = new THREE.MeshStandardMaterial({ ...props })
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshStandardMaterial>(three, props, [
      'alphaMap',
      'aoMap',
      'bumpMap',
      'displacementMap',
      'emissiveMap',
      'envMap',
      'lightMap',
      'metalnessMap',
      'normalMap',
      'roughnessMap',
    ])
    return {
      props,
      id: 'MeshStandardMaterial',
      type: 'Material',
      three,
    }
  }),
  Physical: createToken<PropsMeshPhysicalMaterial, TokenMeshPhysicalMaterial>(props => {
    const three = new THREE.MeshPhysicalMaterial()
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshPhysicalMaterial>(three, props, [
      'clearcoatMap',
      'clearcoatRoughnessMap',
      'sheenRoughnessMap',
      'specularIntensityMap',
      'specularColorMap',
      'thicknessMap',
      'transmissionMap',
    ])
    return {
      props,
      id: 'MeshPhysicalMaterial',
      type: 'Material',
      three,
    }
  }),
  Depth: createToken<PropsMeshDepthMaterial, TokenMeshDepthMaterial>(props => {
    const three = new THREE.MeshDepthMaterial()
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshDepthMaterial>(three, props, [
      'alphaMap',
      'depthPacking',
      'displacementMap',
      'displacementScale',
      'displacementBias',
      'fog',
      'map',
      'wireframe',
      'wireframeLinewidth',
    ])
    return {
      props,
      id: 'MeshDepthMaterial',
      type: 'Material',
      three,
    }
  }),
  Distance: createToken<PropsMeshDistanceMaterial, TokenMeshDistanceMaterial>(props => {
    const three = new THREE.MeshDistanceMaterial()
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshDistanceMaterial>(three, props, ['alphaMap', 'displacementMap', 'map'])
    return {
      props,
      id: 'MeshDistanceMaterial',
      type: 'Material',
      three,
    }
  }),
  Toon: createToken<PropsMeshToonMaterial, TokenMeshToonMaterial>(props => {
    const three = new THREE.MeshToonMaterial()
    createMaterialEffect(three, props)
    createMapEffect<TokenMeshToonMaterial>(three, props, [
      'alphaMap',
      'aoMap',
      'displacementMap',
      'bumpMap',
      'emissiveMap',
      'gradientMap',
      'lightMap',
      'normalMap',
      'map',
    ])
    return {
      props,
      id: 'MeshToonMaterial',
      type: 'Material',
      three,
    }
  }),
}

const Line = {
  Basic: createToken<PropsLineBasicMaterial, TokenLineBasicMaterial>(props => {
    const three = new THREE.LineBasicMaterial()

    createPropsEffect(three, props)
    return {
      props,
      id: 'LineBasicMaterial',
      type: 'Material',
      three,
    }
  }),
  Dashed: createToken<PropsLineDashedMaterial, TokenLineDashedMaterial>(props => {
    const merged = mergeProps(
      {
        color: 0xffffff,
        linewidth: 1,
        linecap: 'round',
        linejoin: 'round',
        blendDstAlpha: 0,
        gapSize: 2,
        dashSize: 2,
      },
      props,
    )

    const three = new THREE.LineDashedMaterial({
      color: merged.color,
      linewidth: merged.linewidth,
      linecap: merged.linecap,
      linejoin: merged.linejoin,
      gapSize: 1,
      dashSize: 1,
      scale: 1,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createMaterialEffect(three, merged)

    return {
      props,
      id: 'LineDashedMaterial',
      type: 'Material',
      three,
    }
  }),
}

const Shader = createToken<PropsShaderMaterial, TokenShaderMaterial>(props => {
  const three = new THREE.ShaderMaterial()
  createMaterialEffect(three, props)
  return {
    props,
    id: 'ShaderMaterial',
    type: 'Material',
    three,
  }
})

const Points = createToken<PropsPointsMaterial, TokenPointsMaterial>(props => {
  const three = new THREE.PointsMaterial()
  createMaterialEffect(three, props)
  createMapEffect<TokenPointsMaterial>(three, props, ['alphaMap', 'map'])
  return {
    props,
    id: 'PointsMaterial',
    type: 'Material',
    three,
  }
})

const Shadow = createToken<PropsShadowMaterial, TokenShadowMaterial>(props => {
  const three = new THREE.ShadowMaterial()
  createMaterialEffect(three, props)
  return {
    props,
    id: 'ShadowMaterial',
    type: 'Material',
    three,
  }
})

const Sprite = createToken<PropsSpriteMaterial, TokenSpriteMaterial>(props => {
  const three = new THREE.SpriteMaterial()
  createMaterialEffect(three, props)
  createMapEffect<TokenSpriteMaterial>(three, props, ['alphaMap', 'map'])
  return {
    props,
    id: 'SpriteMaterial',
    type: 'Material',
    three,
  }
})

export const Material = {
  Mesh,
  Shader,
  Line,
  Points,
  Shadow,
  Sprite,
}
