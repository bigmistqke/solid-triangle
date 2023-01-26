import { createEffect, createSignal, onCleanup, useContext } from 'solid-js'
import * as THREE from 'three'
import { childrenTokens, createToken } from '../ParserFunctions'
import { createChildrenEffect, createPropsEffect, createTransformEffect } from '../Effects'
import type {
  PropsGroup,
  PropsLine,
  PropsMesh,
  PropsScene,
  TokenGroup,
  TokenLine,
  TokenMesh,
  TokenScene,
} from './Object3D.types'
import { useTriangle } from '../'

export const Group = createToken<PropsGroup, TokenGroup>(props => {
  const three = new THREE.Group()

  const tokens = childrenTokens(() => props.children)

  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)

  return {
    props,
    id: 'Group',
    type: 'Object3D',
    three,
  }
})

export const Mesh = createToken<PropsMesh, TokenMesh>(props => {
  const [geometry, setGeometry] = createSignal<THREE.BufferGeometry>(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
  )
  const [material, setMaterial] = createSignal<THREE.Material>(new THREE.MeshBasicMaterial())
  const three = new THREE.Mesh(geometry(), material())

  const tokens = childrenTokens(() => props.children)

  createEffect(() => props.ref?.(three))
  // find child who is of type Material and child who is of type Geometry
  createEffect(() => {
    tokens().forEach(token => {
      if (token.type === 'Material') {
        setMaterial(token.three)
      } else if (token.type === 'Geometry') {
        setGeometry(token.three)
      }
    })
  })
  createEffect(() => {
    three.material = material()
    three.material.needsUpdate = true
  })
  createEffect(() => (three.geometry = geometry()))

  createTransformEffect(three, props)

  createPropsEffect(three, props, ['rotation', 'scale', 'position', 'ref'])

  onCleanup(() => {
    geometry().dispose()
    material().dispose()
  })

  return {
    props,
    id: 'Mesh',
    type: 'Object3D',
    three,
  }
})

export const Line = createToken<PropsLine, TokenLine>(props => {
  const [geometry, setGeometry] = createSignal<THREE.BufferGeometry>(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
  )
  const [material, setMaterial] = createSignal<THREE.Material>()
  const three = new THREE.Line(geometry(), material())

  const tokens = childrenTokens(() => props.children)

  createEffect(() => props.ref?.(three))
  // find child who is of type Material and child who is of type Geometry
  createEffect(() => {
    tokens().forEach(token => {
      if (token.type === 'Material') {
        setMaterial(token.three)
      } else if (token.type === 'Geometry') {
        setGeometry(token.three)
      }
      if (material()?.type === 'LineDashedMaterial' && geometry()) {
        three.computeLineDistances()
      }
    })
  })
  createEffect(() => {
    const mat = material()
    if (!mat) return

    three.material = mat
    three.material.needsUpdate = true
  })
  createEffect(() => (three.geometry = geometry()))

  createTransformEffect(three, props)

  onCleanup(() => {
    geometry().dispose()
    material()?.dispose()
  })

  return {
    props,
    id: 'Line',
    type: 'Object3D',
    three,
  }
})

export const Scene = createToken<PropsScene, TokenScene>(props => {
  const three = new THREE.Scene()

  const tokens = childrenTokens(() => props.children)

  const context = useTriangle()

  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)

  return {
    props,
    id: 'Scene',
    type: 'Object3D',
    three,
  }
})

export const Points = createToken<PropsPoints, TokenPoints>(props => {
  const three = new THREE.Points()

  const tokens = childrenTokens(() => props.children)

  const context = useTriangle()

  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)

  return {
    props,
    id: 'Points',
    type: 'Object3D',
    three,
  }
})

export const Bone = createToken<PropsBone, TokenBone>(props => {
  const three = new THREE.Bone()
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'Bone',
    type: 'Object3D',
    three,
  }
})

export const Skeleton = createToken<PropsSkeleton, TokenSkeleton>(props => {
  const three = new THREE.Skeleton(props.bones, props.boneInverses)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'Skeleton',
    type: 'Object3D',
    three,
  }
})

export const LineLoop = createToken<PropsLineLoop, TokenLineLoop>(props => {
  const three = new THREE.LineLoop(props.bones, props.boneInverses)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'LineLoop',
    type: 'Object3D',
    three,
  }
})

export const LineSegments = createToken<PropsLineSegments, TokenLineSegments>(props => {
  const three = new THREE.LineSegments(props.bones, props.boneInverses)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'LineSegments',
    type: 'Object3D',
    three,
  }
})

export const SkinnedMesh = createToken<PropsSkinnedMesh, TokenSkinnedMesh>(props => {
  const three = new THREE.SkinnedMesh(props.bones, props.boneInverses)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'SkinnedMesh',
    type: 'Object3D',
    three,
  }
})

export const LOD = createToken<PropsLOD, TokenLOD>(props => {
  const three = new THREE.LOD(props.bones, props.boneInverses)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'LOD',
    type: 'Object3D',
    three,
  }
})

export const Sprite = createToken<PropsSprite, TokenSprite>(props => {
  const three = new THREE.Sprite(props.material)
  const tokens = childrenTokens(() => props.children)
  createEffect(() => props.ref?.(three))
  createChildrenEffect(three, tokens)
  createTransformEffect(three, props)
  return {
    props,
    id: 'Sprite',
    type: 'Object3D',
    three,
  }
})
