import { Accessor, createContext, useContext } from "solid-js";
import * as THREE from "three";

import { Camera } from "./components/Cameras";
import Canvas, { AnimationSet } from "./components/Canvas";
import { Controls } from "./components/Controls";
import { CSS } from "./components/CSS";
import { Curve } from "./components/Curves";
import { Geometry } from "./components/Geometries";
import { CanvasText } from "./components/Helpers";
import { Light } from "./components/Lights";
import { Material } from "./components/Materials";
import { Group, Line, Mesh, Scene } from "./components/Object3D";
import Selector from "./components/Selector";
import { Texture } from "./components/Textures";

const tween = (duration: number, callback: (alpha: number) => void) => {
  let alpha = 0;
  let time = performance.now();

  const iterate = () => {
    alpha = (performance.now() - time) / duration;
    if (alpha >= 1) {
      AnimationSet.delete(iterate);
    }
    callback(alpha);
  };

  AnimationSet.add(iterate);
};

type Size = { width: number; height: number };

export const ThreeContext = createContext<{
  camera?: Accessor<THREE.Camera>;
  setCamera?: (camera: THREE.Camera | undefined) => void;
  scene?: Accessor<THREE.Scene>;
  setScene?: (scene: THREE.Scene | undefined) => void;
  raycaster?: Accessor<THREE.Raycaster>;
  pointer?: Accessor<THREE.Vector2>;
  clock?: Accessor<THREE.Clock>;
  renderer?: Accessor<THREE.Renderer>;
  /* linear?: boolean;
  flat?: boolean; */
  size?: Accessor<Size>;
  /* viewport?: {
    width?: number;
    height?: number;
    initialDpr?: number;
    dpr?: number;
    factor?: number;
    distance?: number;
    aspect?: number;
    // getCurrentViewport?: (camera?: THREE.Camera, target?: THREE.Vector3, size?: Size) => THREE.Viewport;
  }; */
}>({});

export const useTriangle = () => useContext(ThreeContext);

export {
  Canvas,
  Group,
  Mesh,
  Line,
  Scene,
  Geometry,
  Material,
  Light,
  Texture,
  Camera,
  Curve,
  tween,
  CanvasText,
  CSS,
  Controls,
  AnimationSet,
  Selector,
  THREE,
};
