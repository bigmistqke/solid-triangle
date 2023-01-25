import { childrenTokens, createToken } from "../ParserFunctions";
import { Flow as ThreeFlow } from "three/examples/jsm/modifiers/CurveModifier.js";
import { PropsFlow, TokenFlow } from "./Modifiers.types";
import * as THREE from "three";
import mapTokens from "../lib/mapTokens";
import { Vector3 } from "three";

export const Flow = createToken<PropsFlow, TokenFlow>((props) => {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 5),
    new THREE.Vector3(10, 0, 10),
  ]);
  const three = new ThreeFlow(
    new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshBasicMaterial()),
    1,
  );
  const tokens = childrenTokens(() => props.children);
  mapTokens(tokens, (token) => {
    /*  if (token.id === 'Mesh') {
      three.object3D = token.three
    } else  */
    if (token.type === "Curve") {
      three.updateCurve(0, token.three);
    }
    /* three.setCurve(0, 0)
    three.moveIndividualAlongCurve(0, Math.random()) */
  });

  return {
    props,
    id: "Flow",
    type: "Modifier",
    three,
  };
});
