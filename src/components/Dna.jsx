import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Dna(props) {
  const { scene } = useGLTF("/dna.glb");
  const groupRef = useRef();
  const [, setReady] = useState(false);

  useEffect(() => {
    if (!scene || !groupRef.current) return;

    const model = scene.clone(true);

    // Measure the model exactly as it actually is
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Recenter it at the origin, no matter where it was exported
    model.position.x -= center.x;
    model.position.y -= center.y;
    model.position.z -= center.z;

    // Scale it so it's always ~4 units tall, regardless of source units
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = maxDim > 0 ? 4 / maxDim : 1;
    model.scale.setScalar(scaleFactor);

    groupRef.current.clear();
    groupRef.current.add(model);
    setReady(true);

    console.log("DNA model size:", size, "center:", center, "scaleFactor:", scaleFactor);
  }, [scene]);

  return <group ref={groupRef} {...props} />;
}

useGLTF.preload("/dna.glb");