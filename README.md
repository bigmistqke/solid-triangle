<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-triangle&background=tiles&project=%20" alt="solid-triangle">
</p>

# 🔺 solid-triangle 🔺

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

🔺 typesafe, easily extendable threejs-renderer for solidjs 🔺 <br>
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
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### set/animate props

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const [y, setY] = createSignal(0)

setInterval(() => setY(y => y + 1), 1000 / 30)
const rotation = () => ({x: 0, y: rotation(), z: 0})

const App => (
  <Canvas>
    <Mesh rotation={rotation()}>
      <Geometry.Sphere radius={0.5}/>
      <Material.Mesh.Basic color={new THREE.Color('red')} map="./test.jpg"/>
    </Mesh>
  </Canvas>
)
```

### ref-attribute, get THREE-instance

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const [mesh, setMesh] = createSignal<THREE.Mesh>()

setTimeout(() => {
  // do some imperative code
  mesh()!.material.color = new THREE.Color('blue')
  mesh()!.material.needsUpdate = true
}, 1000)

const App => (
  <Canvas> // uses default camera and scene
    <Mesh ref={setMesh}>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### use any of solid's flow-components: `<For/>`, `<Show/>`, ...

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const [hidden, setHidden] = createSignal(true)
const colors = ["red", "blue", "green"]

setTimeout(() => setHidden(false), 1000)

const App => (
  <Canvas>
    <Show when={!hidden()}>
      <For each={colors}>
        {
          color => (
            <Mesh>
              <Geometry.Sphere/>
              <Material.Mesh.Basic color={new THREE.Color(color)}>
            </Mesh>
          )
        }
      </For>
    </Show>
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
    <Mesh>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### `<Controls/>`

```tsx
import {Canvas, Scene, Controls, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const App => (
  <Canvas>
    <Controls.Orbit active/>
    <Mesh>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
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
        <Geometry.Sphere/>
        <Material.Mesh.Basic/>
      </Mesh>
    </Scene>
  </Canvas>
)
```

### multiple `<Scene/>` and `createSelector`

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const [activeSceneName, setActiveSceneName] = createSignal("first")
const activeScene = createSelector(activeSceneName)

const App => (
  <Canvas>
    <Scene active={activeScene("first")}>
      <Mesh>
        <Geometry.Sphere/>
        <Material.Mesh.Basic/>
      </Mesh>
    </Scene>
    <Scene active={activeScene("second")}>
     <Mesh>
       <Geometry.Box />
       <Material.Mesh.Basic color={new THREE.Color('blue')}/>
     </Mesh>
    </Scene>
  </Canvas>
)
```

### multiple `<Scene/>` and `<Selector.Scene>`

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry, Selector} from 'solid-triangle'

const [activeSceneName, setActiveSceneName] = createSignal("first")

const App => (
  <Canvas>
    <Selector.Scene id={activeSceneName()}>
      <Scene id="first">
        <Mesh>
          <Geometry.Sphere/>
          <Material.Mesh.Basic/>
        </Mesh>
      </Scene>
      <Scene id="second">
       <Mesh>
          <Geometry.Box />
          <Material.Mesh.Basic color={new THREE.Color('blue')}/>
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
  - [x] PerspectiveCamera 👉 `<Camera.Perspective/>`
  - [ ] StereoCamera
- Controls
  - [ ] ArcballControls
  - [ ] DragControls
  - [ ] FirstPersonControls
  - [ ] FlyControls
  - [x] OrbitControls 👉 `<Controls.Orbit/>`
  - [ ] PointerLockControls
  - [ ] TrackballControls
  - [ ] TransformControls
- CSS3D
  - [x] CSS3DObject 👉 `<CSS.Object/>`
  - [ ] CSS3DSprite
- Curves
  - [ ] ArcCurve
  - [ ] CatmullRomCurve3
  - [ ] CubicBezierCurve
  - [ ] CubicBezierCurve3
  - [x] EllipseCurve 👉 `<Curve.Ellipse/>`
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
  - [x] BufferGeometry 👉 `<Geometry.Buffer/>`
  - [x] BoxGeometry 👉 `<Geometry.Box/>`
  - [x] CapsuleGeometry 👉 `<Geometry.Capsule/>`
  - [x] CircleGeometry 👉 `<Geometry.Circle/>`
  - [x] ConeGeometry 👉 `<Geometry.Cone/>`
  - [x] CylinderGeometry 👉 `<Geometry.Cylinder/>`
  - [x] DodecahedronGeometry 👉 `<Geometry.Dodecahedron/>`
  - [x] EdgesGeometry 👉 `<Geometry.Edges/>`
  - [x] ExtrudeGeometry 👉 `<Geometry.Extrue/>`
  - [x] IcosahedronGeometry 👉 `<Geometry.Icosahedron/>`
  - [x] LatheGeometry 👉 `<Geometry.Lathe/>`
  - [x] OctahedronGeometry 👉 `<Geometry.Octahedron/>`
  - [x] PlaneGeometry 👉 `<Geometry.Plane/>`
  - [x] PolyhedronGeometry 👉 `<Geometry.Polyhedron/>`
  - [x] RingGeometry 👉 `<Geometry.Ring/>`
  - [x] ShapeGeometry 👉 `<Geometry.Shape/>`
  - [x] SphereGeometry 👉 `<Geometry.Sphere/>`
  - [x] TetrahedronGeometry 👉 `<Geometry.Tetrahedron/>`
  - [x] TorusGeometry 👉 `<Geometry.Torus/>`
  - [x] TorusKnotGeometry 👉 `<Geometry.TorusKnot/>`
  - [x] TubeGeometry 👉 `<Geometry.Tube/>`
  - [x] WireframeGeometry 👉 `<Geometry.Wireframe/>`
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
  - [x] AmbientLight 👉 `<Light.Ambient/>`
  - [ ] AmbientLightProbe
  - [x] DirectionalLight 👉 `<Light.Directional/>`
  - [ ] HemisphereLight
  - [ ] HemisphereLightProbe 👉 `<Light./>`
  - [ ] Light
  - [ ] LightProbe
  - [x] PointLight 👉 `<Light.Point/>`
  - [x] RectAreaLight 👉 `<Light.Rectarea/>`
  - [x] SpotLight 👉 `<Light.Spot/>`
- Lights/Shadow
  - [ ] LightShadow
  - [ ] PointLightShadow
  - [ ] DirectionalLightShadow
  - [ ] SpotLightShadow
- Materials
  - [x] LineBasicMaterial 👉 `<Material.Line.Basic/>`
  - [x] LineDashedMaterial 👉 `<Material.Line.Dashed/>`
  - [ ] Material
  - [x] MeshBasicMaterial 👉 `<Material.Mesh.Basic/>`
  - [ ] MeshDepthMaterial
  - [ ] MeshDistanceMaterial
  - [x] MeshLambertMaterial 👉 `<Material.Mesh.Lambert/>`
  - [x] MeshMatcapMaterial 👉 `<Material.Mesh.Matcap/>`
  - [x] MeshNormalMaterial 👉 `<Material.Mesh.Normal/>`
  - [x] MeshPhongMaterial 👉 `<Material.Mesh.Phong/>`
  - [x] MeshPhysicalMaterial 👉 `<Material.Mesh.Physical/>`
  - [x] MeshStandardMaterial 👉 `<Material.Mesh.Standard/>`
  - [ ] MeshToonMaterial 👉 `<Material.Mesh./>`
  - [ ] PointsMaterial 👉 `<Material.Mesh./>`
  - [ ] RawShaderMaterial 👉 `<Material.Mesh./>`
  - [x] ShaderMaterial 👉 `<Material.Mesh.Shader/>`
  - [ ] ShadowMaterial
  - [ ] SpriteMaterial
- Objects
  - [ ] Bone
  - [x] Group 👉 `<Group/>`
  - [ ] InstancedMesh
  - [x] Line 👉 `<Line/>`
  - [ ] LineLoop
  - [ ] LineSegments
  - [ ] LOD
  - [x] Mesh 👉 `<Mesh/>`
  - [ ] Points
  - [ ] Skeleton
  - [ ] SkinnedMesh
  - [ ] Sprite
- Scenes
  - [ ] Fog
  - [ ] FogExp2
  - [x] Scene 👉 `<Scene/>`
- Textures

  - [x] CanvasTexture 👉 `<Texture.Canvas/>`
  - [ ] CompressedTexture
  - [ ] CompressedArrayTexture
  - [ ] CubeTexture
  - [ ] Data3DTexture
  - [ ] DataArrayTexture
  - [ ] DataTexture
  - [ ] DepthTexture
  - [ ] FramebufferTexture
  - [ ] Source
  - [x] Texture 👉 `<Texture.Default/>`
  - [ ] VideoTexture

- Additional Api
  - context
    - [x] `<Canvas/>`
      - root-component provides context
    - [x] useTriangle
      - all components inside `<Canvas/>` can `useTriangle()` to access state of `<Canvas/>`
  - Additional Components
    - Selector: helper for scene/camera-management
      - [x] Selector.Scene
      - [x] Selector.Camera
  - mouse-events for all Object3D
    - [ ] onmouseover
    - [ ] onmousedown
  - [ ] control over what gets pre-loaded
