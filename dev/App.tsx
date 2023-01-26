import { Component, createEffect, createSelector, createSignal, For, Index, Show } from 'solid-js'
import * as THREE from 'three'
import {
  AnimationSet,
  Camera,
  Canvas,
  Controls,
  CSS,
  Geometry,
  Group,
  Material,
  Mesh,
  Scene,
  Selector,
  tween,
} from '../src'
import { XYZ } from '../src/BaseTypes'
import Planet from './Planet'

import shuffle from './utils/shuffle'

const [hoveredProjectIndex, setHoveredProjectIndex] = createSignal<number>(-1)
const isProjectHovered = createSelector(hoveredProjectIndex)

const Planets = (props: { projects: any[] }) => {
  const [shouldPlay, setShouldPlay] = createSignal(true)

  const [r, setRotation] = createSignal(0)
  const animate = () => {
    if (shouldPlay() || isProjectHovered('info')) setRotation(r => r + 0.001)
  }
  AnimationSet.add(animate)

  return (
    <Scene id="planets">
      <Group
        rotation={new THREE.Euler(0, 0, Math.random() - 0.5)}
        position={new THREE.Vector3(0, -0.5, 3)}
      >
        <Index each={props.projects.slice(0, 100)}>
          {(project, i) => (
            <Planet
              image={project().image[0]}
              index={i}
              shouldPlay={shouldPlay()}
              selected={isProjectHovered(i)}
              title={project().title}
            />
          )}
        </Index>
        <Mesh
          position={new THREE.Vector3(0, 0.5, -3)}
          rotation={new THREE.Euler(0, r(), 0)}
          userData={{ index: 'info' }}
        >
          <Material.Mesh.Basic
            color={new THREE.Color('white')}
            map={'./earth.jpg'}
            side={THREE.DoubleSide}
          />
          <Geometry.Plane width={0.4} height={0.2} />
        </Mesh>
      </Group>
      <CSS.Object position={{ x: 0, y: -300, z: 500 }}>
        <div>
          <div
            style={{
              'z-index': 10,
              'font-size': '64pt',
              'pointer-events': 'none',
              'font-family': 'apple',
              color: '#424242',
              'text-align': 'center',
              background: 'rgb(238, 238, 238)',
              'border-radius': '50px',
              'padding-left': '50px',
              'padding-top': '5px',
              'padding-bottom': '5px',
              'padding-right': '50px',
              width: '90%',
            }}
          >
            Cyberspatial Research Center
          </div>
        </div>
      </CSS.Object>
    </Scene>
  )
}

const App: Component = () => {
  const [hoveredMesh, setHoveredMesh] = createSignal<THREE.Object3D | undefined>(undefined)

  const [selectedMesh, setSelectedMesh] = createSignal<THREE.Object3D | undefined>(undefined)

  const [mainCamera, setMainCamera] = createSignal<THREE.Camera>()
  const [cameraPosition, setCameraPosition] = createSignal<{ x: number; y: number; z: number }>({
    x: 0,
    y: 0,
    z: 6,
  })

  /*   const onraycast = (intersects: THREE.Intersection<THREE.Object3D<THREE.Event>>[]) => {
    const mesh = intersects.filter((i) => {
      return i.object.type === "Mesh" && "index" in i.object.userData;
    })[0]?.object;

    if (!mesh) {
      setShouldPlay(true);
      setHoveredMesh(undefined);
      setHoveredIndex(undefined);
    } else {
      setShouldPlay(false);
      setHoveredMesh(mesh);
      setHoveredIndex(mesh.userData.index);
    }
  }; */

  let oldMainCameraPos = new THREE.Vector3()
  const tweenCamera = (position: XYZ) => {
    mainCamera()!.getWorldPosition(oldMainCameraPos)
    tween(1000, alpha => {
      const currentPosition = {
        x: (1 - alpha) * oldMainCameraPos.x + alpha * position.x,
        y: (1 - alpha) * oldMainCameraPos.y + alpha * position.y,
        z: (1 - alpha) * oldMainCameraPos.z + alpha * position.z,
      }
      setCameraPosition(currentPosition)
    })
  }

  let pos = new THREE.Vector3(0, 0, 0)
  const onMouseDown = () => {
    console.log(hoveredMesh())
    if (hoveredMesh()) {
      setSelectedMesh(hoveredMesh())
      hoveredMesh()!.getWorldPosition(pos)
      tweenCamera(pos)
    }
  }

  // onCleanup(() => AnimationSet.delete(animate));

  /*   const title = CanvasText('Cyberspatial Research Group', 'black', 'helvetica', 1200)
  title.magFilter = THREE.NearestMipMapNearestFilter
  title.minFilter = THREE.LinearMipMapLinearFilter */

  const [projects, setProjects] = createSignal(
    shuffle([
      {
        title: 'the dating project',
        image: [''],
      },
      {
        title: 'dvrsm.com',
        image: ['./assets/dvrsm.png'],
      },
      {
        title: 'samenschool.org',
        image: ['./assets/samenschool.png'],
      },
      {
        title: 'oaktreemusic.net',
        image: [''],
      },
      {
        title: 'dust.oaktreemusic.net',
        image: ['./assets/dust.png'],
      },
      {
        title: 'al?ve',
        image: [''],
      },
      {
        title: 'communicator',
        image: ['./assets/communicator.png'],
      },
      {
        title: 'alternator.space',
        image: ['./assets/alternator.png'],
      },
      {
        title: 'hannelorevandijck.org',
        image: [''],
      },
      {
        title: 'massa.media',
        image: ['./assets/massa.png'],
      },
      {
        title: 'adriaanderoover.net',
        image: [''],
      },
      {
        title: 'devlieg.eu',
        image: [''],
      },
      {
        title: 'post-neon.com',
        image: ['./assets/post-neon.png'],
      },
      {
        title: 'serenpedia.com',
        image: [''],
      },
      {
        title: 'b0dy',
        image: ['./assets/body.png'],
      },
      {
        title: 'icons',
        image: [''],
      },
      {
        title: 'linear intuitive view',
        image: [''],
      },
      {
        title: 'maricademichele.com',
        image: ['./assets/marica.png'],
      },
      {
        title: 'sorry you sat passenger side while i crashed down a canyon in my mind',
        image: ['./assets/crash.png'],
      },
      {
        title: 'a single rose, a single thorn',
        image: ['./assets/a_single_rose_a_single_thorn.png'],
      },
      {
        title: 'designers without borders',
        image: [''],
      },
    ]),
  )

  const [totalVisible, setTotalVisible] = createSignal(0)

  const initAnimation = () => {
    if (totalVisible() > projects().length) return
    setTotalVisible(v => v + 1)
    setTimeout(initAnimation, 100)
  }
  initAnimation()

  createEffect(() => console.log('mainCamera', mainCamera()))

  const [activeScene, setActiveScene] = createSignal('intro')

  setTimeout(() => setActiveScene('planets'), 1000)
  return (
    <>
      <div
        style={{
          height: '100vh',
          background: 'radial-gradient(white, lightgrey)',
          cursor: hoveredMesh() ? 'pointer' : 'default',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            'z-index': 4,
            display: 'flex',
            'font-size': '8pt',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              gap: '5px',
              padding: '5px',
              'align-items': 'flex-start',
              'flex-wrap': 'wrap',
            }}
          >
            <Show
              when={!selectedMesh()}
              fallback={
                <button
                  style={{ 'font-family': 'helvetica' }}
                  onClick={() => {
                    tweenCamera({ x: 0, y: 0, z: 6 })
                    setSelectedMesh(undefined)
                  }}
                >
                  close
                </button>
              }
            >
              <For each={projects().slice(0, totalVisible())}>
                {(value, index) => (
                  <button
                    style={{ 'font-family': 'helvetica' }}
                    classList={{ '.hovered': isProjectHovered(index()) }}
                  >
                    {value.title}
                  </button>
                )}
              </For>
            </Show>
          </div>
          <div
            style={{
              flex: 0,
              display: 'flex',
              gap: '5px',
              padding: '5px',
              'align-items': 'flex-start',
            }}
          >
            <button style={{ 'font-family': 'helvetica', 'font-size': '12pt' }}>about</button>
          </div>
        </div>
        <Canvas /* onraycast={onraycast} */ onmousedown={onMouseDown}>
          <Controls.Orbit active />
          <Camera.Perspective
            id="main"
            ref={setMainCamera}
            active
            position={cameraPosition()}
            far={10000}
          />
          <Selector.Scene id={activeScene()}>
            <Scene id="intro">
              <Group
                rotation={new THREE.Euler(0, 0, Math.random() - 0.5)}
                position={new THREE.Vector3(0, -0.5, 3)}
              >
                <Mesh
                  position={new THREE.Vector3(0, 0.5, -3)}
                  rotation={new THREE.Euler(0, 0, 0)}
                  userData={{ index: 'info' }}
                >
                  <Material.Mesh.Basic color={new THREE.Color('red')} side={THREE.DoubleSide} />
                  <Geometry.Plane width={0.4} height={0.2} />
                </Mesh>
              </Group>
            </Scene>
          </Selector.Scene>
        </Canvas>
        gv
      </div>
    </>
  )
}

export default App
