<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-triangle&background=tiles&project=%20" alt="solid-triangle">
</p>

# 🔺 solid-triangle 🔺

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

!!WIP!!

🔺 a threejs-renderer for solidjs 🔺 <br>
🔥 powered by [@solid-primitives/jsx-parser](https://github.com/solidjs-community/solid-primitives/pull/276) 🔥

## Quick start

Install it:

```bash
npm i solid-triangle
# or
yarn add solid-triangle
# or
pnpm add solid-triangle
```

Use it:

### simple example

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Mesh>
      <Geometry.Sphere radius={0.5}>
      <Material.Mesh.Basic color={new THREE.Color('red')}>
    </Mesh>
  </Canvas>
)
```

### animate props

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const [y, setY] = createSignal(0);
setInterval(() => setY(y => y + 1), 1000 / 30)
const rotation = () => ({x: 0, y: rotation(), z: 0})

const App => (
  <Canvas>
    <Mesh rotation={rotation()}>
      <Geometry.Sphere radius={0.5}>
      <Material.Mesh.Basic color={new THREE.Color('red')}>
    </Mesh>
  </Canvas>
)
```

### ref-attribute, get THREE-instance

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const [mesh, setMesh] = createSignal<THREE.Mesh>();

setTimeout(() => {
  // do some imperative code
  mesh()!.material.color = new THREE.Color('blue');
  mesh()!.material.needsUpdate = true;
}, 1000)

const App => (
  <Canvas> // uses default camera and scene
    <Mesh ref={setMesh}>
      <Geometry.Sphere radius={0.5}>
      <Material.Mesh.Basic color={new THREE.Color('red')}>
    </Mesh>
  </Canvas>
)
```


### `<Camera/>`


```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const App => (
  <Canvas>
    <Camera.Perspective active/> // set active-attribute for active camera
    <Camera.Orthogonal />
    <Mesh ref={setMesh}>
      <Geometry.Sphere radius={0.5}>
      <Material.Mesh.Basic color={new THREE.Color('red')}>
    </Mesh>
  </Canvas>
)
```

### `<Scene/>`

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Scene active> // set active-attribute for active scene
      <Mesh rotation={{x: 0, y: 0, z: rotation()}}>
        <Geometry.Sphere radius={0.5}>
        <Material.Mesh.Basic color={new THREE.Color('red')}>
      </Mesh>
    </Scene>
  </Canvas>
)
```

### multiple scenes and `createSelector`

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const [activeSceneName, setActiveSceneName] = createSignal("first");
const activeScene = createSelector(activeSceneName);

const App => (
  <Canvas>
    <Scene active={activeScene("first")}>
      <Mesh>
        <Geometry.Sphere radius={0.5}>
        <Material.Mesh.Basic color={new THREE.Color('red')}>
      </Mesh>
    </Scene>
    <Scene active={activeScene("second")}>
     <Mesh>
       <Geometry.Sphere radius={1}>
       <Material.Mesh.Basic color={new THREE.Color('blue')}>
     </Mesh>
    </Scene>
  </Canvas>
)
```

### multiple scenes and `<Selector.Scene>`

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, Selector} from 'solid-triangle'

const [activeSceneName, setActiveSceneName] = createSignal("first");

const App => (
  <Canvas>
    <Selector.Scene id={activeSceneName()}>
      <Scene id="first">
        <Mesh>
          <Geometry.Sphere radius={0.5}>
          <Material.Mesh.Basic color={new THREE.Color('red')}>
        </Mesh>
      </Scene>
      <Scene id="second">
       <Mesh>
         <Geometry.Sphere radius={1}>
        <Material.Mesh.Basic color={new THREE.Color('blue')}>
       </Mesh>
      </Scene>
    </Selector>
  </Canvas>
)
```

## API-coverage:

- Animation
  - [ ] AnimationAction
  - [ ] AnimationClip
  - [ ] AnimationMixer
  - [ ] AnimationObjectGroup
  - [ ] AnimationUtils
  - [ ] BooleanKeyframeTrack
  - [ ] ColorKeyframeTrack
  - [ ] NumberKeyframeTrack
  - [ ] QuaternionKeyframeTrack
  - [ ] StringKeyframeTrack
  - [ ] VectorKeyframeTrack
  - [ ] CCDIKSolver
  - [ ] MMDAnimationHelper
  - [ ] MMDPhysics
- Audio
  - [ ] AudioAnalyser
  - [ ] AudioContext
  - [ ] AudioListener
  - [ ] PositionalAudio
- Camera
  - [ ] ArrayCamera
  - [ ] Camera
  - [ ] CubeCamera
  - [ ] OrthographicCamera
  - [x] PerspectiveCamera as Camera.Perspective
  - [ ] StereoCamera
- Controls
  - [ ] ArcballControls
  - [ ] DragControls
  - [ ] FirstPersonControls
  - [ ] FlyControls
  - [x] OrbitControls as Controls.Orbit
  - [ ] PointerLockControls
  - [ ] TrackballControls
  - [ ] TransformControls
- CSS3D
  - [x] CSS3DObject
  - [ ] CSS3DSprite
- Curves
  - [ ] ArcCurve
  - [ ] CatmullRomCurve3
  - [ ] CubicBezierCurve
  - [ ] CubicBezierCurve3
  - [x] EllipseCurve as Curve.Ellipse
  - [ ] LineCurve
  - [ ] LineCurve3
  - [ ] QuadraticBezierCurve
  - [ ] QuadraticBezierCurve3
  - [ ] SplineCurve
- Exporter
  - [ ] ColladaExporter
  - [ ] EXRExporter
  - [ ] GLTFExporter
  - [ ] OBJExporter
  - [ ] PLYExporter
- Helpers
  - [ ] ArrowHelper
  - [ ] AxesHelper
  - [ ] BoxHelper
  - [ ] Box3Helper
  - [ ] CameraHelper
  - [ ] DirectionalLightHelper
  - [ ] GridHelper
  - [ ] PolarGridHelper
  - [ ] HemisphereLightHelper
  - [ ] PlaneHelper
  - [ ] PointLightHelper
  - [ ] SkeletonHelper
  - [ ] SpotLightHelper
  - [ ] LightProbeHelper
  - [ ] PositionalAudioHelper
  - [ ] RectAreaLightHelper
  - [ ] VertexNormalsHelper
  - [ ] VertexTangentsHelper
- Geometries
  - [x] BufferGeometry as Geometry.Buffer
  - [x] BoxGeometry as Geometry.Box
  - [x] CapsuleGeometry as Geometry.Capsule
  - [x] CircleGeometry as Geometry.Circle
  - [x] ConeGeometry as Geometry.Cone
  - [x] CylinderGeometry as Geometry.Cylinder
  - [x] DodecahedronGeometry as Geometry.Dodecahedron
  - [x] EdgesGeometry as Geometry.Edges
  - [x] ExtrudeGeometry as Geometry.Extrue
  - [x] IcosahedronGeometry as Geometry.Icosahedron
  - [x] LatheGeometry as Geometry.Lathe
  - [x] OctahedronGeometry as Geometry.Octahedron
  - [x] PlaneGeometry as Geometry.Plane
  - [x] PolyhedronGeometry as Geometry.Polyhedron
  - [x] RingGeometry as Geometry.Ring
  - [x] ShapeGeometry as Geometry.Shape
  - [x] SphereGeometry as Geometry.Sphere
  - [x] TetrahedronGeometry as Geometry.Tetrahedron
  - [x] TorusGeometry as Geometry.Torus
  - [x] TorusKnotGeometry as Geometry.TorusKnot
  - [x] TubeGeometry as Geometry.Tube
  - [x] WireframeGeometry as Geometry.Wireframe
  - [ ] ConvexGeometry
  - [ ] DecalGeometry
  - [ ] ParametricGeometry
  - [ ] TextGeometry
- Loaders
  - [ ] 3DMLoader
  - [ ] DRACOLoader
  - [ ] FontLoader
  - [ ] GLTFLoader
  - [ ] KTX2Loader
  - [ ] LDrawLoader
  - [ ] MMDLoader
  - [ ] MTLLoader
  - [ ] OBJLoader
  - [ ] PCDLoader
  - [ ] PDBLoader
  - [ ] PRWMLoader
  - [ ] SVGLoader
  - [ ] TGALoader
- Post-Processing
  - [ ] Lensflare
  - [ ] EffectComposer
- Lights
  - [x] AmbientLight as Light.Ambient
  - [ ] AmbientLightProbe
  - [x] DirectionalLight as Light.Directional
  - [ ] HemisphereLight
  - [ ] HemisphereLightProbe as Light.
  - [ ] Light
  - [ ] LightProbe
  - [x] PointLight as Light.Point
  - [x] RectAreaLight as Light.Rectarea
  - [x] SpotLight as Light.Spot
- Lights/Shadow
  - [ ] LightShadow
  - [ ] PointLightShadow
  - [ ] DirectionalLightShadow
  - [ ] SpotLightShadow
- Materials
  - [x] LineBasicMaterial as Material.Line.Basic
  - [x] LineDashedMaterial as Material.Line.Dashed
  - [ ] Material
  - [x] MeshBasicMaterial as Material.Mesh.Basic
  - [ ] MeshDepthMaterial
  - [ ] MeshDistanceMaterial
  - [x] MeshLambertMaterial as Material.Mesh.Lambert
  - [x] MeshMatcapMaterial as Material.Mesh.Matcap
  - [x] MeshNormalMaterial as Material.Mesh.Normal
  - [x] MeshPhongMaterial as Material.Mesh.Phong
  - [x] MeshPhysicalMaterial as Material.Mesh.Physical
  - [x] MeshStandardMaterial as Material.Mesh.Standard
  - [ ] MeshToonMaterial as Material.Mesh.
  - [ ] PointsMaterial as Material.Mesh.
  - [ ] RawShaderMaterial as Material.Mesh.
  - [x] ShaderMaterial as Material.Mesh.Shader
  - [ ] ShadowMaterial
  - [ ] SpriteMaterial
- Objects
  - [ ] Bone
  - [x] Group
  - [ ] InstancedMesh
  - [x] Line
  - [ ] LineLoop
  - [ ] LineSegments
  - [ ] LOD
  - [x] Mesh
  - [ ] Points
  - [ ] Skeleton
  - [ ] SkinnedMesh
  - [ ] Sprite
- Scenes
  - [ ] Fog
  - [ ] FogExp2
  - [x] Scene
- Textures

  - [x] CanvasTexture as Texture.Canvas
  - [ ] CompressedTexture
  - [ ] CompressedArrayTexture
  - [ ] CubeTexture
  - [ ] Data3DTexture
  - [ ] DataArrayTexture
  - [ ] DataTexture
  - [ ] DepthTexture
  - [ ] FramebufferTexture
  - [ ] Source
  - [x] Texture as Texture.Default
  - [ ] VideoTexture

- Additional Api
  - hooks
    - [x] useTriangle: hook for context-sharing
  - Additional Components
    - Selector: helper for scene/camera-management
      - [x] Selector.Scene
      - [x] Selector.Camera
  - mouse-events for all Object3D
    - [ ] onmouseover
    - [ ] onmousedown
  - [ ] control over what gets pre-loaded
