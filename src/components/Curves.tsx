import { Accessor, createMemo, mergeProps } from 'solid-js'
import * as THREE from 'three'
import { Vector3 } from 'three'
import { createPropsEffect, createRefEffect } from '../Effects'
import { createToken } from '../ParserFunctions'
import type {
  PropsCatmullRomCurve3,
  PropsCubicBezierCurve3,
  PropsEllipseCurve,
  PropsLineCurve3,
  PropsQuadraticBezierCurve3,
  TokenCatmullRomCurve3,
  TokenCubicBezierCurve3,
  TokenCurves,
  TokenCurves3,
  TokenEllipseCurve,
  TokenLineCurve3,
  TokenQuadraticBezierCurve3,
} from './Curves.types'

export const Curve = {
  Ellipse: createToken<PropsEllipseCurve, TokenEllipseCurve>(props => {
    const merged = mergeProps(
      {
        aX: 1,
        aY: 1,
        xRadius: 1,
        yRadius: 1,
        aStartAngle: 0,
        aEndAngle: 2 * Math.PI,
        aClockwise: false,
        aRotation: 0,
        type: '',
        arcLengthDivisions: 4,
      },
      props,
    )
    const three = new THREE.EllipseCurve(
      merged.aX,
      merged.aY,
      merged.xRadius,
      merged.yRadius,
      merged.aStartAngle,
      merged.aEndAngle,
      merged.aClockwise,
      merged.aRotation,
    )

    const points = createMemo(() => three.getPoints(props.amount ?? 50))

    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'EllipseCurve',
      type: 'Curve',
      three,
      points,
    }
  }),
  Arc: createToken<PropsArcCurve, TokenArcCurve>(props => {
    const merged = mergeProps(
      {
        aX: 1,
        aY: 1,
        xRadius: 1,
        yRadius: 1,
        aStartAngle: 0,
        aEndAngle: 2 * Math.PI,
        aClockwise: false,
        aRotation: 0,
      },
      props,
    )
    const three = new THREE.ArcCurve(
      merged.aX,
      merged.aY,
      merged.xRadius,
      merged.yRadius,
      merged.aStartAngle,
      merged.aEndAngle,
    )

    const points = createMemo(() => three.getPoints(props.amount ?? 50))

    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'ArcCurve',
      type: 'Curve',
      three,
      points,
    }
  }),
}

/* function createCurveEffect<TToken extends TokenCurves | TokenCurves3>(
  props: TToken['props'],
  defaultValues: TToken['props'],
  callback: (props: Required<TToken['props']>) => ReturnType<TToken['three']>,
) {
  const merged = mergeProps(
    {
      ...defaultValues,
      amount: 50,
    },
    props,
  )

  // TODO: ugly typecast
  const three = createMemo(() => callback(merged)) as TToken['three']
  const points = createMemo(() => {
    const t = three()
    if (t instanceof THREE.EllipseCurve)
      return t.getPoints(merged.amount).map(point => new THREE.Vector3(point.x, point.y, 0))
    return t.getPoints(merged.amount)
  })

  createRefEffect(three, merged)
  createPropsEffect(three, merged)

  return { three, points }
} */

export const Curve3 = {
  CatmullRom: createToken<PropsCatmullRomCurve3, TokenCatmullRomCurve3>(props => {
    const merged = mergeProps(
      {
        points: [],
        closed: false,
        curveType: 'centripetal',
        tension: 0,
        amount: 50,
      },
      props,
    )
    const three = createMemo(
      () =>
        new THREE.CatmullRomCurve3(merged.points, merged.closed, merged.curveType, merged.tension),
    )
    const points = createMemo(() => three().getPoints(merged.amount))
    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'CatmullRomCurve3',
      type: 'Curve3',
      three,
      points,
    }
  }),
  CubicBezier: createToken<PropsCubicBezierCurve3, TokenCubicBezierCurve3>(props => {
    const merged = mergeProps(
      {
        v0: new THREE.Vector3(),
        v1: new THREE.Vector3(),
        v2: new THREE.Vector3(),
        v3: new THREE.Vector3(),
        amount: 50,
      },
      props,
    )
    const three = createMemo(
      () => new THREE.CubicBezierCurve3(merged.v0, merged.v1, merged.v2, merged.v3),
    )
    const points = createMemo(() => three().getPoints(merged.amount))
    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'CubicBezierCurve3',
      type: 'Curve3',
      three,
      points,
    }
  }),
  Line: createToken<PropsLineCurve3, TokenLineCurve3>(props => {
    const merged = mergeProps(
      {
        v0: new THREE.Vector3(),
        v1: new THREE.Vector3(),
        amount: 50,
      },
      props,
    )
    const three = createMemo(() => new THREE.LineCurve3(merged.v0, merged.v1))

    const points = createMemo(() => three().getPoints(merged.amount))

    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'LineCurve3',
      type: 'Curve3',
      three,
      points,
    }
  }),
  QuadraticBezier: createToken<PropsQuadraticBezierCurve3, TokenQuadraticBezierCurve3>(props => {
    const merged = mergeProps(
      {
        v0: new THREE.Vector3(),
        v1: new THREE.Vector3(),
        v2: new THREE.Vector3(),
        amount: 50,
      },
      props,
    )
    const three = createMemo(() => new THREE.QuadraticBezierCurve3(merged.v0, merged.v1, merged.v2))

    const points = createMemo(() => three().getPoints(merged.amount))

    createRefEffect(three, merged)
    createPropsEffect(three, merged)

    return {
      props,
      id: 'QuadraticBezierCurve3',
      type: 'Curve3',
      three,
      points,
    }
  }),
}
