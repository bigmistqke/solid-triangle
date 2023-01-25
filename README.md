<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-triangle&background=tiles&project=%20" alt="solid-triangle">
</p>

# ▲ solid-triangle

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

a threejs wrapper for solidjs, powered by @solid-primitives/jsxParser (WIP)

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

```tsx
import {Canvas, Scene, Camera, Mesh, Material, Geometry} from 'solid-triangle'

// simple example
const [rotation, setRotation] = createSignal(0);
setInterval(() => setRotation(r => r + 0.01), 1000 / 60)

const App => (
  <Canvas>
    <Controls.Orbit active>
    <Camera.Perspective
      position={{x: -5, y: 0, z: 0}}
      active
    >
    <Scene active>
      <Mesh radius={{x: 0, y: 0, z: rotation()}}>
        <Geometry.Sphere radius={0.5}>
        <Material.Mesh.Basic color={new THREE.Color('red')}>
      </Mesh>
    </Scene>
  </Canvas>
)
```

Progress:

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
- Controls
  - [ ] ArcballControls
  - [ ] DragControls
  - [ ] FirstPersonControls
  - [ ] FlyControls
  - [x] OrbitControls as Controls.Orbit
  - [ ] PointerLockControls
  - [ ] TrackballControls
  - [ ] TransformControls
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
    - useTriangle for context-sharing
  - Additional Components
    - Selector
      - Selector.Scene

```tsx
<Selector id="1">
  <Scene id="1">// visible</Scene>
  <Scene id="2">// not visible</Scene>
</Selector>
```

      - Selector.Camera
