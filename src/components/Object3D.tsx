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

  // set ref
  createEffect(() => props.ref?.(three))
  // grouping elements
  createChildrenEffect(three, tokens)
  // transform Object3D
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

  // set ref
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

  // transform Object3D
  createTransformEffect(three, props)

  createPropsEffect(three, props, ['rotation', 'scale', 'position'])

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

  // set ref
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

  // transform Object3D
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

  // set ref
  createEffect(() => props.ref?.(three))
  // grouping elements
  createChildrenEffect(three, tokens)
  // transform Object3D
  createTransformEffect(three, props)

  return {
    props,
    id: 'Scene',
    type: 'Scene',
    three,
  }
})
