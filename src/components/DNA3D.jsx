import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

class HelixCurve extends THREE.Curve {
  constructor(radius, height, turns, phase) {
    super();
    this.radius = radius;
    this.height = height;
    this.turns = turns;
    this.phase = phase;
  }
  getPoint(t, target = new THREE.Vector3()) {
    const angle = t * this.turns * Math.PI * 2 + this.phase;
    return target.set(
      Math.cos(angle) * this.radius,
      (t - 0.5) * this.height,
      Math.sin(angle) * this.radius
    );
  }
}

function Rungs({ curveA, curveB, count }) {
  const rungs = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const a = curveA.getPoint(t);
    const b = curveB.getPoint(t);
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const dist = a.distanceTo(b);
    const dir = b.clone().sub(a).normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

    rungs.push(
      <mesh key={i} position={mid} quaternion={quat}>
        <cylinderGeometry args={[0.014, 0.014, dist, 8]} />
        <meshBasicMaterial color="#dff6ff" transparent opacity={0.85} />
      </mesh>
    );
  }
  return <>{rungs}</>;
}

function Sparkles({ curveA, curveB, count = 70 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const curve = Math.random() > 0.5 ? curveA : curveB;
      const p = curve.getPoint(t);
      arr[i * 3] = p.x + (Math.random() - 0.5) * 0.25;
      arr[i * 3 + 1] = p.y + (Math.random() - 0.5) * 0.25;
      arr[i * 3 + 2] = p.z + (Math.random() - 0.5) * 0.25;
    }
    return arr;
  }, [curveA, curveB, count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.25;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#9fe9ff" size={0.05} transparent sizeAttenuation />
    </points>
  );
}

function Helix() {
  const groupRef = useRef();
  const curveA = useMemo(() => new HelixCurve(1.05, 7.2, 2.3, 0), []);
  const curveB = useMemo(() => new HelixCurve(1.05, 7.2, 2.3, Math.PI), []);
  const tubeA = useMemo(() => new THREE.TubeGeometry(curveA, 200, 0.065, 10, false), [curveA]);
  const tubeB = useMemo(() => new THREE.TubeGeometry(curveB, 200, 0.065, 10, false), [curveB]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0022;
    const targetX = state.pointer.y * 0.15;
    const targetZ = -state.pointer.x * 0.15;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={tubeA}>
        <meshBasicMaterial color="#22d3ee" toneMapped={false} />
      </mesh>
      <mesh geometry={tubeB}>
        <meshBasicMaterial color="#e879f9" toneMapped={false} />
      </mesh>
      <Rungs curveA={curveA} curveB={curveB} count={30} />
      <Sparkles curveA={curveA} curveB={curveB} />
    </group>
  );
}

export default function DNA3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <Helix />
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSmoothing={0.7} mipmapBlur />
        <Vignette eskil={false} offset={0.25} darkness={0.9} />
      </EffectComposer>
    </Canvas>
  );
}