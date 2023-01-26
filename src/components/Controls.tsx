import { createEffect, createSignal, mergeProps } from 'solid-js'
import { createPropsEffect, createRefEffect } from '../Effects'
import { AnimationSet, useTriangle } from '../index'
import { createToken } from '../ParserFunctions'

import {
  OrbitControls,
  TrackballControls,
  DragControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  TransformControls,
} from 'three-stdlib'

import type {
  PropsDragControls,
  PropsFirstPersonControls,
  PropsFlyControls,
  PropsOrbitControls,
  PropsPointerLockControls,
  PropsTrackballControls,
  PropsTransformControls,
  TokenControls,
  TokenDragControls,
  TokenFirstPersonControls,
  TokenFlyControls,
  TokenOrbitControls,
  TokenPointerLockControls,
  TokenTrackballControls,
  TokenTransformControls,
} from './Controls.types'

function createControlEffect<TToken extends TokenControls>(
  props: TToken['props'],
  three: TToken['three'],
  setThree: (three: ReturnType<TToken['three']>) => void,
  callback: (camera: THREE.Camera, renderer: THREE.Renderer) => ReturnType<TToken['three']>,
) {
  const context = useTriangle()
  createEffect(() => {
    const renderer = props.renderer || context.renderer?.()
    const camera = props.camera || context.camera?.()
    if (camera && renderer) {
      setThree(callback(camera, renderer))
      createRefEffect(three, props)
    }
  })
}

export const Controls = {
  Orbit: createToken<PropsOrbitControls, TokenOrbitControls>(props => {
    const [three, setThree] = createSignal<OrbitControls>()
    const merged = mergeProps({}, props)
    createControlEffect(
      props,
      three,
      setThree,
      (camera, renderer) => new OrbitControls(camera, renderer.domElement),
    )
    /* const context = useTriangle()
    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new OrbitControls(camera, renderer.domElement))
        createRefEffect(three, merged)
      }
    }) */

    return {
      props,
      id: 'OrbitControls',
      type: 'Controls',
      three,
    }
  }),
  Trackball: createToken<PropsTrackballControls, TokenTrackballControls>(props => {
    const [three, setThree] = createSignal<TrackballControls>()
    const merged = mergeProps({}, props)

    const context = useTriangle()
    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new TrackballControls(camera, renderer.domElement))
        createRefEffect(three, merged)
      }
    })

    return {
      props,
      id: 'TrackballControls',
      type: 'Controls',
      three,
    }
  }),
  Drag: createToken<PropsDragControls, TokenDragControls>(props => {
    const [three, setThree] = createSignal<DragControls>()
    const merged = mergeProps({}, props)

    const context = useTriangle()
    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new DragControls(props.objects, camera, renderer.domElement))
        createRefEffect(three, merged)
      }
    })

    return {
      props,
      id: 'DragControls',
      type: 'Controls',
      three,
    }
  }),
  FirstPerson: createToken<PropsFirstPersonControls, TokenFirstPersonControls>(props => {
    const [three, setThree] = createSignal<FirstPersonControls>()

    let lt = performance.now()
    const update = () => {
      const now = performance.now()
      const secs = (now - lt) / 1000
      lt = now
      three()?.update(secs)
    }

    const context = useTriangle()
    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new FirstPersonControls(camera, renderer.domElement))
        createRefEffect(three, props)
        AnimationSet.add(update)
      } else {
        AnimationSet.delete(update)
      }
    })

    return {
      props,
      id: 'FirstPersonControls',
      type: 'Controls',
      three,
    }
  }),
  Fly: createToken<PropsFlyControls, TokenFlyControls>(props => {
    const [three, setThree] = createSignal<FlyControls>()
    const merged = mergeProps(
      {
        dragToLook: false,
        movementSpeed: 3,
        rollSpeed: Math.PI / 24,
        autoForward: false,
      },
      props,
    )
    const context = useTriangle()

    let lt = performance.now()
    const update = () => {
      const now = performance.now()
      const secs = (now - lt) / 1000
      lt = now
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      three()?.update(secs)
    }

    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        const flyControls = new FlyControls(camera, renderer.domElement)
        setThree(flyControls)
        AnimationSet.add(update)
      } else {
        AnimationSet.delete(update)
      }
    })

    createPropsEffect(three, merged)

    return {
      props,
      id: 'FlyControls',
      type: 'Controls',
      three,
    }
  }),
  PointerLock: createToken<PropsPointerLockControls, TokenPointerLockControls>(props => {
    const [three, setThree] = createSignal<PointerLockControls>()
    const merged = mergeProps({}, props)
    const context = useTriangle()

    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new PointerLockControls(camera, renderer.domElement))
        createRefEffect(three, merged)
      }
    })
    return {
      props,
      id: 'PointerLockControls',
      type: 'Controls',
      three,
    }
  }),
  Transform: createToken<PropsTransformControls, TokenTransformControls>(props => {
    const [three, setThree] = createSignal<TransformControls>()
    const merged = mergeProps({}, props)
    const context = useTriangle()

    createEffect(() => {
      const renderer = props.renderer || context.renderer?.()
      const camera = props.camera || context.camera?.()
      if (camera && renderer) {
        setThree(new TransformControls(camera, renderer.domElement))
        createRefEffect(three, merged)
      }
    })

    return {
      props,
      id: 'TransformControls',
      type: 'Controls',
      three,
    }
  }),
}
