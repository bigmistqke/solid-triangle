import { createToken } from "../ParserFunctions";
import { PropsHtml, TokenHtml } from "./Html.types";
import { createRefEffect, createTransformEffect } from "../Effects";
import * as THREE from "three";
import { AnimationSet as Animation, ThreeContext } from "../";
import { children, createEffect, useContext } from "solid-js";

const v1 = new THREE.Vector3();
const v2 = new THREE.Vector3();
const v3 = new THREE.Vector3();

function objectScale(el: THREE.Object3D, camera: THREE.Camera) {
  if (camera instanceof THREE.OrthographicCamera) {
    return camera.zoom;
  } else if (camera instanceof THREE.PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const vFOV = (camera.fov * Math.PI) / 180;
    const dist = objectPos.distanceTo(cameraPos);
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
    return 1 / scaleFOV;
  } else {
    return 1;
  }
}

function objectZIndex(el: THREE.Object3D, camera: THREE.Camera, zIndexRange: Array<number>) {
  if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const dist = objectPos.distanceTo(cameraPos);
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
    const B = zIndexRange[1] - A * camera.far;
    return Math.round(A * dist + B);
  }
  return undefined;
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value);

function getCSSMatrix(matrix: THREE.Matrix4, multipliers: number[], prepend = "") {
  let matrix3d = "matrix3d(";
  for (let i = 0; i !== 16; i++) {
    matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? "," : ")");
  }
  return prepend + matrix3d;
}

const getCameraCSSMatrix = ((multipliers: number[]) => {
  return (matrix: THREE.Matrix4) => getCSSMatrix(matrix, multipliers);
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);

const getObjectCSSMatrix = ((scaleMultipliers: (n: number) => number[]) => {
  return (matrix: THREE.Matrix4, factor: number) =>
    getCSSMatrix(matrix, scaleMultipliers(factor), "translate(-50%,-50%)");
})((f: number) => [
  1 / f,
  1 / f,
  1 / f,
  1,
  -1 / f,
  -1 / f,
  -1 / f,
  -1,
  1 / f,
  1 / f,
  1 / f,
  1,
  1,
  1,
  1,
  1,
]);

export const Html = createToken<PropsHtml, TokenHtml>((props) => {
  const child = children(() => props.children);
  const context = useContext(ThreeContext);

  const three = new THREE.Group();

  createTransformEffect(three, props);
  createRefEffect(three, props);

  const transformInner = (
    <div
      style={{
        position: "absolute",
      }}
    >
      {props.element}
    </div>
  ) as HTMLDivElement;
  const transformOuter = (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: context.size().width + "px",
        height: context.size().height + "px",
        "transform-style": "preserve-3d",
        "pointer-events": "none",
      }}
    >
      {context.size().width}
      {transformInner}
    </div>
  ) as HTMLDivElement;
  document.body.appendChild(transformOuter);

  const animate = () => {
    if (!(props.element instanceof HTMLElement)) return;
    const [widthHalf, heightHalf] = [context.size().width / 2, context.size().height / 2];

    const fov = context.camera.projectionMatrix.elements[5] * heightHalf;
    const { isOrthographicCamera, top, left, bottom, right } =
      context.camera as THREE.OrthographicCamera;
    const cameraMatrix = getCameraCSSMatrix(context.camera.matrixWorldInverse);
    const cameraTransform = isOrthographicCamera
      ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)`
      : `translateZ(${fov}px)`;
    let matrix = three.matrixWorld;

    props.element.setAttribute("width", context.size().width + "px");
    props.element.setAttribute("height", context.size().height + "px");

    /*   props.element.style.width = context.size().width + "px";
    props.element.style.height = context.size().height + "px"; */

    transformOuter.style.width = context.size().width + "px";
    transformOuter.style.height = context.size().height + "px";

    props.element.style.perspective = isOrthographicCamera ? "" : `${fov}px`;
    if (transformOuter && transformInner) {
      transformOuter.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
      transformInner.style.transform = getObjectCSSMatrix(
        matrix,
        1 / ((props.distanceFactor || 10) / 400),
      );
    }
  };

  Animation.add(animate);

  return {
    props,
    three,
    type: "CSS",
    id: "Html",
  };
});
