import { createJSXParser } from './lib/Parser'
import type { TokenGeometries } from './components/Geometries.types'
import type { TokenLights } from './components/Lights.types'
import type { TokenMaterials } from './components/Materials.types'
import type { TokenTextures } from './components/Textures.types'
import type { TokenObject3Ds } from './components/Object3D.types'
import type { TokenCurves } from './components/Curves.types'
import type { TokenModifiers } from './components/Modifiers.types'
import { TokenCameras } from './components/Cameras.types'
import type { TokenHelpers } from './components/Helpers.types'
import { TokenCSSs } from './components/CSS.types'
import { TokenHtml } from './components/Html.types'
import { TokenControls } from './components/Controls.types'

export type ThreeToken =
  | TokenObject3Ds
  | TokenMaterials
  | TokenGeometries
  | TokenLights
  | TokenTextures
  | TokenCurves
  | TokenModifiers
  | TokenCameras
  | TokenHelpers
  | TokenCSSs
  | TokenHtml
  | TokenControls

export const { childrenTokens, createToken, getToken, isToken } =
  createJSXParser<ThreeToken>('THREE-parser')
