import { Accessor, createContext, useContext } from 'solid-js'
import * as THREE from 'three'

import { Camera } from './components/Cameras'
import Canvas, { AnimationSet } from './components/Canvas'
import { Controls } from './components/Controls'
import { CSS } from './components/CSS'
import { Curve, Curve3 } from './components/Curves'
import { Helper } from './components/Helpers'

import { Geometry } from './components/Geometries'
import { Light, LightProbe } from './components/Lights'
import { Material } from './components/Materials'
import {
  Group,
  Line,
  Mesh,
  Scene,
  LineLoop,
  LineSegments,
  Sprite,
  Skeleton,
  Bone,
  LOD,
  SkinnedMesh,
  Points,
} from './components/Object3D'
import Selector from './components/Selector'
import { Texture } from './components/Textures'
import { Font } from 'three-stdlib'

const tween = (duration: number, callback: (alpha: number) => void) => {
  let alpha = 0
  let time = performance.now()

  const iterate = () => {
    alpha = (performance.now() - time) / duration
    if (alpha >= 1) {
      AnimationSet.delete(iterate)
    }
    callback(alpha)
  }

  AnimationSet.add(iterate)
}

type Size = { width: number; height: number }

export const ThreeContext = createContext<{
  camera?: Accessor<THREE.PerspectiveCamera | THREE.OrthographicCamera>
  setCamera?: (camera: THREE.PerspectiveCamera | THREE.OrthographicCamera | undefined) => void
  scene?: Accessor<THREE.Scene>
  setScene?: (scene: THREE.Scene | undefined) => void
  raycaster?: Accessor<THREE.Raycaster>
  pointer?: Accessor<THREE.Vector2>
  clock?: Accessor<THREE.Clock>
  renderer?: Accessor<THREE.Renderer>
  font?: Accessor<Font | undefined>
  /* linear?: boolean;
  flat?: boolean; */
  size?: Accessor<Size>
  /* viewport?: {
    width?: number;
    height?: number;
    initialDpr?: number;
    dpr?: number;
    factor?: number;
    distance?: number;
    aspect?: number;
    // getCurrentViewport?: (camera?: THREE.PerspectiveCamera | THREE.OrthographicCamera, target?: THREE.Vector3, size?: Size) => THREE.Viewport;
  }; */
}>({})

export const useTriangle = () => useContext(ThreeContext)

window.THREE = THREE

export {
  Canvas,
  // Object3D
  Group,
  Mesh,
  Line,
  Scene,
  LineLoop,
  LineSegments,
  Sprite,
  Skeleton,
  Bone,
  LOD,
  SkinnedMesh,
  Points,
  // All other namespaces
  Geometry,
  Material,
  Light,
  LightProbe,
  Texture,
  Camera,
  Curve,
  Curve3,
  Helper,
  CSS,
  Controls,
  Selector,
  // helper-functions
  tween,
  // animation-queue
  AnimationSet,
  // threejs
  THREE,
}
