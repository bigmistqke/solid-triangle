import { JSXElement } from 'solid-js'
import { NestedFromInstance } from '../BaseTypes'

export type PropsGroup = NestedFromInstance<THREE.Group>
export type TokenGroup = {
  id: 'Group'
  type: 'Object3D'
  three: THREE.Group
  props: PropsGroup
}

export type PropsMesh = NestedFromInstance<THREE.Mesh>
export type TokenMesh = {
  id: 'Mesh'
  type: 'Object3D'
  three: THREE.Mesh
  props: PropsMesh
}

export type PropsLine = NestedFromInstance<THREE.Line>
export type TokenLine = {
  id: 'Line'
  type: 'Object3D'
  three: THREE.Line
  props: PropsLine
}

export type PropsScene =
  | Omit<NestedFromInstance<THREE.Scene>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenScene = {
  id: 'Scene'
  type: 'Object3D'
  three: THREE.Scene
  props: PropsScene
}

export type PropsPoints =
  | Omit<NestedFromInstance<THREE.Points>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenPoints = {
  id: 'Points'
  type: 'Object3D'
  three: THREE.Points
  props: PropsPoints
}

export type PropsBone =
  | Omit<NestedFromInstance<THREE.Bone>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenBone = {
  id: 'Bone'
  type: 'Object3D'
  three: THREE.Bone
  props: PropsBone
}

export type PropsSkeleton =
  | Omit<NestedFromInstance<THREE.Skeleton>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenSkeleton = {
  id: 'Skeleton'
  type: 'Object3D'
  three: THREE.Skeleton
  props: PropsSkeleton
}

export type PropsLineLoop =
  | Omit<NestedFromInstance<THREE.LineLoop>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenLineLoop = {
  id: 'LineLoop'
  type: 'Object3D'
  three: THREE.LineLoop
  props: PropsLineLoop
}

export type PropsLineSegments =
  | Omit<NestedFromInstance<THREE.LineSegments>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenLineSegments = {
  id: 'LineSegments'
  type: 'Object3D'
  three: THREE.LineSegments
  props: PropsLineSegments
}

export type PropsSkinnedMesh =
  | Omit<NestedFromInstance<THREE.SkinnedMesh>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenSkinnedMesh = {
  id: 'SkinnedMesh'
  type: 'Object3D'
  three: THREE.SkinnedMesh
  props: PropsSkinnedMesh
}

export type PropsLOD =
  | Omit<NestedFromInstance<THREE.LOD>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenLOD = {
  id: 'LOD'
  type: 'Object3D'
  three: THREE.LOD
  props: PropsLOD
}

export type PropsSprite =
  | Omit<NestedFromInstance<THREE.Sprite>, 'id'> & {
      active?: boolean
      id: string | number
      children: JSXElement | JSXElement[]
    }
export type TokenSprite = {
  id: 'Sprite'
  type: 'Object3D'
  three: THREE.Sprite
  props: PropsSprite
}

export type TokenObject3Ds =
  | TokenGroup
  | TokenMesh
  | TokenLine
  | TokenScene
  | TokenBone
  | TokenLineLoop
  | TokenLineSegments
  | TokenPoints
  | TokenSkeleton
  | TokenSkinnedMesh
  | TokenSprite
