"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import { getServerTheme, getTheme, subscribeTheme } from "@/lib/theme";

const THEME_STYLE = {
  light: {
    core: "#18181b",
    accent: "#2563eb",
    metalness: 0.1,
    roughness: 0.35,
    wireOpacity: 0.18,
    emissive: 0,
  },
  dark: {
    core: "#3f3f46",
    accent: "#60a5fa",
    metalness: 0.5,
    roughness: 0.2,
    wireOpacity: 0.4,
    emissive: 0.6,
  },
};

type Style = (typeof THEME_STYLE)["light"];

function Core({ reduceMotion, style }: { reduceMotion: boolean; style: Style }) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;

    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x += delta * 0.05;
    }

    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    const targetX = pointer.current.y * 0.15;
    const targetY = pointer.current.x * 0.15;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03;
    group.current.rotation.z += (targetY - group.current.rotation.z) * 0.03;
  });

  return (
    <group
      ref={group}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <MeshDistortMaterial
          color={style.core}
          distort={hovered ? 0.35 : 0.2}
          speed={reduceMotion ? 0 : 1.5}
          roughness={style.roughness}
          metalness={style.metalness}
          emissive={style.accent}
          emissiveIntensity={style.emissive * 0.3}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshBasicMaterial color={style.accent} wireframe transparent opacity={style.wireOpacity} />
      </mesh>
    </group>
  );
}

function Satellite({
  radius,
  speed,
  size,
  offset,
  reduceMotion,
  style,
}: {
  radius: number;
  speed: number;
  size: number;
  offset: number;
  reduceMotion: boolean;
  style: Style;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = reduceMotion ? offset : state.clock.elapsedTime * speed + offset;
    mesh.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.6) * radius * 0.4,
      Math.sin(t) * radius
    );
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={style.accent}
        roughness={0.4}
        emissive={style.accent}
        emissiveIntensity={style.emissive}
      />
    </mesh>
  );
}

export default function Scene({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const style = THEME_STYLE[theme];

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <ambientLight intensity={theme === "dark" ? 0.4 : 0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} />
      <directionalLight position={[-3, -2, -2]} intensity={0.3} />
      <Core reduceMotion={reduceMotion} style={style} />
      <Satellite radius={2.3} speed={0.35} size={0.09} offset={0} reduceMotion={reduceMotion} style={style} />
      <Satellite radius={2.6} speed={0.22} size={0.06} offset={2.1} reduceMotion={reduceMotion} style={style} />
      <Satellite radius={2.1} speed={0.5} size={0.05} offset={4.4} reduceMotion={reduceMotion} style={style} />
    </Canvas>
  );
}
