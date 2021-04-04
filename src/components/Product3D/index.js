import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { ContactShadows, useGLTF, OrbitControls } from "drei";

import { proxy } from "valtio";

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
});

function Shoe({ colors }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("shoe-draco.glb");

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 10;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group
      ref={ref}
      dispose={null}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={colors.colors.laces.color}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={colors.colors.mesh.color}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={colors.colors.caps.color}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={colors.colors.inner.color}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={colors.colors.sole.color}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={colors.colors.stripes.color}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={colors.colors.band.color}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={colors.colors.patch.color}
      />
    </group>
  );
}

export default function App({ colors }) {
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 1]} camera={{ position: [0, 0, 2.3] }}>
        <ambientLight intensity={0.3} />
        <spotLight
          intensity={0.8}
          angle={1}
          penumbra={1}
          position={[10, 25, 20]}
        />
        <Suspense fallback={null}>
          <Shoe colors={colors} />

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.4}
            width={10}
            height={10}
            blur={2}
            far={2}
          />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          enableZoom={true}
          enablePan={false}
        />
      </Canvas>
    </>
  );
}
