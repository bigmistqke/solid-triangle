<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-triangle&background=tiles&project=%20" alt="solid-triangle">
</p>

# 🔺 solid-triangle 🔺

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

🔺 typesafe, easily extendable threejs-renderer for solidjs 🔺 <br>
🔥 powered by [@solid-primitives/jsx-parser](https://github.com/solidjs-community/solid-primitives/pull/276) 🔥

## Quick start

Use it:

### Simple example

```tsx
import {Canvas, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Mesh>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### Set/animate props

```tsx
import {Canvas, Mesh, Material, Geometry} from 'solid-triangle'

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

### Ref-attribute: get THREE-instance

```tsx
import {Canvas, Mesh, Material, Geometry, THREE} from 'solid-triangle'

const [mesh, setMesh] = createSignal<THREE.Mesh>()

createEffect(() => {
  const m = mesh();
  if(!m) return;
  // do some imperative code
  m.material.color = new THREE.Color('blue')
  m.material.needsUpdate = true
})

const App => (
  <Canvas> // uses default camera and scene
    <Mesh ref={setMesh}>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### Use any of solid's flow-components: `<For/>`, `<Show/>`, ...

```tsx
import {Canvas, Mesh, Material, Geometry, THREE} from 'solid-triangle'

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
import {Canvas, Camera, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Camera.Perspective active/>
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
import {Canvas, Controls, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Controls.Orbit active/>
    <Controls.Drag />
    <Mesh>
      <Geometry.Sphere/>
      <Material.Mesh.Basic/>
    </Mesh>
  </Canvas>
)
```

### `<Scene/>`

```tsx
import {Canvas, Scene, Mesh, Material, Geometry} from 'solid-triangle'

const App => (
  <Canvas>
    <Scene active>
      <Mesh rotation={{x: 0, y: 0, z: rotation()}}>
        <Geometry.Sphere/>
        <Material.Mesh.Basic/>
      </Mesh>
    </Scene>
  </Canvas>
)
```

### Multiple `<Scene/>` and `createSelector`

```tsx
import {Canvas, Scene, Mesh, Material, Geometry} from 'solid-triangle'

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

### Multiple `<Scene/>` and `<Selector.Scene>`

```tsx
import {Canvas, Scene, Mesh, Material, Geometry, Selector} from 'solid-triangle'

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
  - [x] OrthographicCamera
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
- Post-Processing
  - [ ] Lensflare
  - [ ] EffectComposer
  - Pass
    - [ ] RenderPass
    - [ ] GlitchPass
    - [ ] BokehPass
    - [ ] OutlinePass
    - [ ] ShaderPass
    - [ ] SAOPass
    - [ ] SMAAPass
    - [ ] SSAARenderPass
    - [ ] SSAOPass
    - [ ] SSRPass
    - [ ] GammaCorrectionShader
    - [ ] ReflectorForSSRPass
    - [ ] TAARenderPass
    - [ ] UnrealBloomPass
    - [ ] LUTPass
    - [ ] BloomPass
    - [ ] FilmPass
    - [ ] DotScreenPass
    - [ ] MaskPass, ClearMaskPass
    - [ ] TexturePass
    - [ ] CubeTexturePass
    - [ ] ClearPass
- Scenes
  - [ ] Fog
  - [ ] FogExp2
  - [x] Scene 👉 `<Scene/>`
- Shaders
  - [ ] ACESFilmicToneMappingShader
  - [ ] AfterimageShader
  - [ ] BasicShader
  - [ ] BleachBypassShader
  - [ ] BlendShader
  - [ ] BokehShader
  - [ ] BokehShader2
  - [ ] BrightnessContrastShader
  - [ ] ColorCorrectionShader
  - [ ] ColorifyShader
  - [ ] ConvolutionShader
  - [ ] CopyShader
  - [ ] DOFMipMapShader
  - [ ] DepthLimitedBlurShader
  - [ ] DigitalGlitch
  - [ ] DotScreenShader
  - [ ] FXAAShader
  - [ ] FilmShader
  - [ ] FocusShader
  - [ ] FreiChenShader
  - [ ] GammaCorrectionShader
  - [ ] GodRaysShader
  - [ ] HalftoneShader
  - [ ] HorizontalBlurShader
  - [ ] HorizontalTiltShiftShader
  - [ ] HueSaturationShader
  - [ ] KaleidoShader
  - [ ] LuminosityHighPassShader
  - [ ] LuminosityShader
  - [ ] MMDToonShader
  - [ ] MirrorShader
  - [ ] NormalMapShader
  - [ ] RGBShiftShader
  - [ ] SAOShader
  - [ ] SMAAShader
  - [ ] SSAOShader
  - [ ] SSRShader
  - [ ] SepiaShader
  - [ ] SobelOperatorShader
  - [ ] SubsurfaceScatteringShader
  - [ ] TechnicolorShader
  - [ ] ToneMapShader
  - [ ] ToonShader
  - [ ] TriangleBlurShader
  - [ ] UnpackDepthRGBAShader
  - [ ] VelocityShader
  - [ ] VerticalBlurShader
  - [ ] VerticalTiltShiftShader
  - [ ] VignetteShader
  - [ ] VolumeShader
  - [ ] WaterRefractionShader
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
