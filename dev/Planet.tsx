import { createSignal, onCleanup } from 'solid-js'
import { AnimationSet, Curve3, Geometry, Group, Line, Material, THREE } from '../src'
import { Triangle } from '../src/types'

export default (props: {
  index: number
  shouldPlay: boolean
  selected: boolean
  image: string
  title: string
}) => {
  const [fraction, setFraction] = createSignal(Math.random())
  const [rotation, setRotation] = createSignal(0)
  const speed = Math.random() / 8000 + 0.000025

  const scale = Math.random() + 1
  const pos = new THREE.Vector2()
  const position = () => curve()?.getPoint(fraction(), pos) as any as THREE.Vector3

  const [curve, setCurve] = createSignal<THREE.CatmullRomCurve3>()
  const curveJSX = (
    <Curve3.QuadraticBezier
      amount={100}
      ref={setCurve}
      v0={new THREE.Vector3(0, 1, 0)}
      v1={new THREE.Vector3(2, 1, 0)}
      v2={new THREE.Vector3(3, 1, 0)}
    />
  )

  const x = curveJSX as any as Triangle.Curve3.QuadraticBezier
  console.log('x.type', x.type)

  const animate = () => {
    let s = props.selected ? 0 : props.shouldPlay ? speed : speed * 0.125
    setFraction(value => (value + s) % 1)
    if (props.selected) {
      setRotation(rotation => {
        rotation += speed * 20
        return rotation
      })
    } else {
      setRotation(rotation => {
        rotation += s * 20
        return rotation
      })
    }
  }

  AnimationSet.add(animate)

  onCleanup(() => AnimationSet.delete(animate))

  return (
    <>
      <Group
        position={new THREE.Vector3(-1, 1, -4)}
        rotation={new THREE.Euler(90 + Math.random() / 10, 0, 0)}
      >
        {/* <Group position={position()} scale={new THREE.Vector3(scale, scale, scale)}>
          <CSS.Object
            position={new THREE.Vector3(0, 0, -100)}
            rotation={{ x: Math.PI / -2, y: 0, z: 0 }}
            scale={{ x: 1, y: 1, z: 1 }}
          >
            <div
              style={{
                'pointer-events': 'none',
                'font-size': '24pt',
                color: '#353535',
                'font-family': 'arial',
                'backface-visibility': 'visible',
                'border-radius': '25px',
                'padding-left': '25px',
                'padding-right': '25px',
              }}
            >
              {props.title}
            </div>
          </CSS.Object>
          <Mesh userData={{ index: props.index }} rotation={new THREE.Euler(90, 0, 0)}>
            <Material.Mesh.Basic
              color={new THREE.Color('white')}
              side={THREE.DoubleSide}
              map={<Texture.Default image={props.image} />}
            />
            <Geometry.Plane width={0.6} height={0.4} />
          </Mesh>
        </Group> */}
        <Line>
          <Geometry.Buffer points={curveJSX} />
          <Material.Line.Basic color={new THREE.Color('rgb(200,200,200)')} linewidth={0.1} />
        </Line>
      </Group>
    </>
  )
}
