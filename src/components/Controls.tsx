import { createEffect, mergeProps } from 'solid-js'
import { createRefEffect } from '../Effects'
import { useTriangle } from '../index'
import { createToken } from '../ParserFunctions'
import { OrbitControls as OrbitControlsThree } from '../three/OrbitControlsThree'
import type { PropsOrbitControls, TokenOrbitControls } from './Controls.types'

export const Controls = {
  Orbit: createToken<PropsOrbitControls, TokenOrbitControls>(props => {
    const merged = mergeProps({}, props)

    let three: OrbitControlsThree | undefined = undefined

    const context = useTriangle()

    createEffect(() => {
      const renderer = props['renderer'] || context.renderer?.()
      const camera = props['camera'] || context.camera?.()

      if (camera && renderer) {
        three = new OrbitControlsThree(camera, renderer.domElement)
        createRefEffect(three, merged)
      }
    })

    return {
      props,
      id: 'OrbitControls',
      type: 'Controls',
      three,
    }
  }),
}
