import type {
  TokenCatmullRomCurve3,
  TokenLineCurve3,
  TokenQuadraticBezierCurve3,
  TokenCubicBezierCurve3,
  TokenEllipseCurve,
} from './components/Curves.types'

import type {
  TokenCubeCamera,
  TokenOrthographicCamera,
  TokenPerspectiveCamera,
} from './components/Cameras.types'

import type {
  TokenArcballControls,
  TokenDragControls,
  TokenFirstPersonControls,
  TokenFlyControls,
  TokenOrbitControls,
  TokenPointerLockControls,
  TokenTrackballControls,
  TokenTransformControls,
} from './components/Controls.types'

import type { TokenCSS3DObject } from './components/CSS.types'

import type {
  TokenBoxGeometry,
  TokenBufferGeometry,
  TokenCapsuleGeometry,
  TokenCircleGeometry,
  TokenConeGeometry,
  TokenConvexGeometry,
  TokenCylinderGeometry,
  TokenDecalGeometry,
  TokenDodecahedronGeometry,
  TokenEdgesGeometry,
  TokenExtrudeGeometry,
  TokenIcosahedronGeometry,
  TokenLatheGeometry,
  TokenOctahedronGeometry,
  TokenParametricGeometry,
  TokenPlaneGeometry,
  TokenPolyhedronGeometry,
  TokenRingGeometry,
  TokenShapeGeometry,
  TokenSphereGeometry,
  TokenTetrahedronGeometry,
  TokenTextGeometry,
  TokenTorusGeometry,
  TokenTorusKnotGeometry,
  TokenTubeGeometry,
  TokenWireframeGeometry,
} from './components/Geometries.types'

import {
  TokenArrowHelper,
  TokenAxesHelper,
  TokenBox3Helper,
  TokenBoxHelper,
  TokenCameraHelper,
  TokenCanvasText,
  TokenDirectionalLightHelper,
  TokenGridHelper,
  TokenHemisphereLightHelper,
  TokenLightProbeHelper,
  TokenPlaneHelper,
  TokenPointLightHelper,
  TokenPolarGridHelper,
  TokenPositionalAudioHelper,
  TokenRectAreaLightHelper,
  TokenSkeletonHelper,
  TokenSpotLightHelper,
  TokenVertexNormalsHelper,
  TokenVertexTangentsHelper,
} from './components/Helpers.types'

import {
  TokenAmbientLight,
  TokenAmbientLightProbe,
  TokenDirectionalLight,
  TokenHemisphereLight,
  TokenHemisphereLightProbe,
  TokenLight,
  TokenLightProbe,
  TokenPointLight,
  TokenRectAreaLight,
} from './components/Lights.types'

import {
  TokenLineBasicMaterial,
  TokenLineDashedMaterial,
  TokenMaterial,
  TokenMeshBasicMaterial,
  TokenMeshDepthMaterial,
  TokenMeshDistanceMaterial,
  TokenMeshLambertMaterial,
  TokenMeshMatcapMaterial,
  TokenMeshNormalMaterial,
  TokenMeshPhongMaterial,
  TokenMeshPhysicalMaterial,
  TokenMeshStandardMaterial,
  TokenMeshToonMaterial,
  TokenPointsMaterial,
  TokenRawShaderMaterial,
  TokenShaderMaterial,
  TokenShadowMaterial,
  TokenSpriteMaterial,
} from './components/Materials.types'

import {
  TokenBone,
  TokenGroup,
  TokenInstancedMesh,
  TokenLOD,
  TokenLine,
  TokenLineLoop,
  TokenLineSegments,
  TokenMesh,
  TokenObject3Ds,
  TokenPoints,
  TokenScene,
  TokenSkeleton,
  TokenSkinnedMesh,
  TokenSprite,
} from './components/Object3D.types'

import { TokenCanvasTexture, TokenTexture, TokenVideoTexture } from './components/Textures.types'

export namespace Triangle {
  export type Bone = TokenBone
  export type Group = TokenGroup
  export type InstancedMesh = TokenInstancedMesh
  export type LOD = TokenLOD
  export type Line = TokenLine
  export type LineLoop = TokenLineLoop
  export type LineSegments = TokenLineSegments
  export type Mesh = TokenMesh
  export type Object3Ds = TokenObject3Ds
  export type Points = TokenPoints
  export type Scene = TokenScene
  export type Skeleton = TokenSkeleton
  export type SkinnedMesh = TokenSkinnedMesh
  export type Sprite = TokenSprite

  export namespace Camera {
    export type CubeCamera = TokenCubeCamera
    export type OrthographicCamera = TokenOrthographicCamera
    export type PerspectiveCamera = TokenPerspectiveCamera
  }
  export namespace Controls {
    export type ArcballControls = TokenArcballControls
    export type DragControls = TokenDragControls
    export type FirstPersonControls = TokenFirstPersonControls
    export type FlyControls = TokenFlyControls
    export type OrbitControls = TokenOrbitControls
    export type PointerLockControls = TokenPointerLockControls
    export type TrackballControls = TokenTrackballControls
    export type TransformControls = TokenTransformControls
  }
  export namespace CSS {
    export type CSS3DObject = TokenCSS3DObject
  }
  export namespace Curve3 {
    export type CatmullRom = TokenCatmullRomCurve3
    export type Line = TokenLineCurve3
    export type QuadraticBezier = TokenQuadraticBezierCurve3
    export type CubicBezier = TokenCubicBezierCurve3
  }
  export namespace Curve {
    export type Ellipse = TokenEllipseCurve
  }
  export namespace Geometry {
    export type Box = TokenBoxGeometry
    export type Buffer = TokenBufferGeometry
    export type Capsule = TokenCapsuleGeometry
    export type Circle = TokenCircleGeometry
    export type Cone = TokenConeGeometry
    export type Convex = TokenConvexGeometry
    export type Cylinder = TokenCylinderGeometry
    export type Decal = TokenDecalGeometry
    export type Dodecahedron = TokenDodecahedronGeometry
    export type Edges = TokenEdgesGeometry
    export type Extrude = TokenExtrudeGeometry
    export type Icosahedron = TokenIcosahedronGeometry
    export type Lathe = TokenLatheGeometry
    export type Octahedron = TokenOctahedronGeometry
    export type Parametric = TokenParametricGeometry
    export type Plane = TokenPlaneGeometry
    export type Polyhedron = TokenPolyhedronGeometry
    export type Ring = TokenRingGeometry
    export type Shape = TokenShapeGeometry
    export type Sphere = TokenSphereGeometry
    export type Tetrahedron = TokenTetrahedronGeometry
    export type Text = TokenTextGeometry
    export type Torus = TokenTorusGeometry
    export type TorusKnot = TokenTorusKnotGeometry
    export type Tube = TokenTubeGeometry
    export type Wireframe = TokenWireframeGeometry
  }

  export namespace Helper {
    export type Arrow = TokenArrowHelper
    export type Axes = TokenAxesHelper
    export type Box3 = TokenBox3Helper
    export type Box = TokenBoxHelper
    export type Camera = TokenCameraHelper
    export type Canv = TokenCanvasText
    export type DirectionalLight = TokenDirectionalLightHelper
    export type Grid = TokenGridHelper
    export type HemisphereLight = TokenHemisphereLightHelper
    export type LightProbe = TokenLightProbeHelper
    export type Plane = TokenPlaneHelper
    export type PointLight = TokenPointLightHelper
    export type PolarGrid = TokenPolarGridHelper
    export type PositionalAudio = TokenPositionalAudioHelper
    export type RectAreaLight = TokenRectAreaLightHelper
    export type Skeleton = TokenSkeletonHelper
    export type SpotLight = TokenSpotLightHelper
    export type VertexNormals = TokenVertexNormalsHelper
    export type VertexTangents = TokenVertexTangentsHelper
  }

  export namespace Light {
    export type AmbientLight = TokenAmbientLight
    export type DirectionalLight = TokenDirectionalLight
    export type HemisphereLight = TokenHemisphereLight
    export type Light = TokenLight
    export type PointLight = TokenPointLight
    export type RectAreaLight = TokenRectAreaLight
  }

  export namespace LightProbe {
    export type AmbientLightProbe = TokenAmbientLightProbe
    export type HemisphereLightProbe = TokenHemisphereLightProbe
    export type LightProbe = TokenLightProbe
  }

  export namespace Material {
    export type LineBasicMaterial = TokenLineBasicMaterial
    export type LineDashedMaterial = TokenLineDashedMaterial
    export type Material = TokenMaterial
    export type MeshBasicMaterial = TokenMeshBasicMaterial
    export type MeshDepthMaterial = TokenMeshDepthMaterial
    export type MeshDistanceMaterial = TokenMeshDistanceMaterial
    export type MeshLambertMaterial = TokenMeshLambertMaterial
    export type MeshMatcapMaterial = TokenMeshMatcapMaterial
    export type MeshNormalMaterial = TokenMeshNormalMaterial
    export type MeshPhongMaterial = TokenMeshPhongMaterial
    export type MeshPhysicalMaterial = TokenMeshPhysicalMaterial
    export type MeshStandardMaterial = TokenMeshStandardMaterial
    export type MeshToonMaterial = TokenMeshToonMaterial
    export type PointsMaterial = TokenPointsMaterial
    export type RawShaderMaterial = TokenRawShaderMaterial
    export type ShaderMaterial = TokenShaderMaterial
    export type ShadowMaterial = TokenShadowMaterial
    export type SpriteMaterial = TokenSpriteMaterial
  }

  export namespace Texture {
    export type CanvasTexture = TokenCanvasTexture
    export type Texture = TokenTexture
    export type VideoTexture = TokenVideoTexture
  }
}
