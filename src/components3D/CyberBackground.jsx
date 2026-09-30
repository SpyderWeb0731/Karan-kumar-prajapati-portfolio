import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* =========================================================
   ABOUT SECTION VISIBILITY
========================================================= */

function AboutVisibility({ onChange }) {
  useEffect(() => {
    const aboutSection =
      document.querySelector(".about-section");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onChange(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, [onChange]);

  return null;
}

/* =========================================================
   SCROLL TRACKER
========================================================= */

function ScrollTracker({ onScroll }) {
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? window.scrollY / maxScroll
          : 0;

      onScroll(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [onScroll]);

  return null;
}

/* =========================================================
   SHIELD SHAPE
========================================================= */

function createShieldShape() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 1.35);

  shape.lineTo(0.82, 1.02);

  shape.lineTo(0.76, 0.25);

  shape.bezierCurveTo(
    0.72,
    -0.42,
    0.35,
    -0.95,
    0,
    -1.25
  );

  shape.bezierCurveTo(
    -0.35,
    -0.95,
    -0.72,
    -0.42,
    -0.76,
    0.25
  );

  shape.lineTo(-0.82, 1.02);

  shape.closePath();

  return shape;
}

/* =========================================================
   CYBER SHIELD
========================================================= */

function CyberShield({
  scrollProgress,
  visible,
}) {
  const group = useRef();

  const targetScale = visible ? 1.7 : 0;

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    /* Smooth appearance */
    group.current.scale.x = THREE.MathUtils.lerp(
      group.current.scale.x,
      targetScale,
      0.06
    );

    group.current.scale.y = THREE.MathUtils.lerp(
      group.current.scale.y,
      targetScale,
      0.06
    );

    group.current.scale.z = THREE.MathUtils.lerp(
      group.current.scale.z,
      targetScale,
      0.06
    );

    /* Continuous subtle rotation */
    group.current.rotation.y =
      Math.sin(time * 0.35) * 0.08 +
      scrollProgress * Math.PI * 2;

    group.current.rotation.x =
      Math.sin(time * 0.25) * 0.04 +
      scrollProgress * 0.2;
  });

  return (
    <group ref={group} scale={0}>
      {/* Outer shield */}
      <mesh>
        <shapeGeometry
          args={[createShieldShape()]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.75}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner shield */}
      <mesh scale={0.78}>
        <shapeGeometry
          args={[createShieldShape()]}
        />

        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.16}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Central security core */}
      <mesh>
        <icosahedronGeometry
          args={[0.32, 2]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry
          args={[0.14, 24, 24]}
        />

        <meshBasicMaterial
          color="#ffffff"
        />
      </mesh>

      {/* Vertical security line */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry
          args={[0.025, 1.15, 0.025]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Horizontal security line */}
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry
          args={[0.75, 0.025, 0.025]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ORBITAL RING
========================================================= */

function OrbitalRing({
  radius,
  rotation,
  speed,
  scrollProgress,
  visible,
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const targetOpacity = visible ? 0.5 : 0;

    ref.current.rotation.z =
      rotation[2] +
      state.clock.elapsedTime * speed +
      scrollProgress * Math.PI * 2;

    ref.current.rotation.x =
      rotation[0];

    const material =
      ref.current.material;

    material.opacity = THREE.MathUtils.lerp(
      material.opacity,
      targetOpacity,
      0.06
    );
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
    >
      <torusGeometry
        args={[
          radius,
          0.008,
          8,
          128,
        ]}
      />

      <meshBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0}
      />
    </mesh>
  );
}

/* =========================================================
   NETWORK NODES
========================================================= */

function NetworkNodes({
  scrollProgress,
  visible,
}) {
  const group = useRef();

  const nodes = useMemo(() => {
    const result = [];

    for (let i = 0; i < 18; i++) {
      const angle =
        (i / 18) * Math.PI * 2;

      result.push({
        angle,
        radius:
          2.7 + (i % 3) * 0.3,
        y:
          Math.sin(i * 1.7) * 0.65,
        size:
          0.035 +
          (i % 3) * 0.015,
      });
    }

    return result;
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.05 +
      scrollProgress * Math.PI * 2;
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => {
        const angle =
          node.angle +
          stateTime() *
            (0.15 + (index % 4) * 0.03);

        const x =
          Math.cos(angle) *
          node.radius;

        const z =
          Math.sin(angle) *
          node.radius;

        return (
          <mesh
            key={index}
            position={[
              x,
              node.y,
              z,
            ]}
            scale={visible ? 1 : 0}
          >
            <sphereGeometry
              args={[
                node.size,
                12,
                12,
              ]}
            />

            <meshBasicMaterial
              color={
                index % 4 === 0
                  ? "#ffffff"
                  : "#00e5ff"
              }
              transparent
              opacity={
                visible ? 0.85 : 0
              }
            />
          </mesh>
        );
      })}
    </group>
  );
}

function stateTime() {
  return performance.now() * 0.0001;
}

/* =========================================================
   CONNECTION LINES
========================================================= */

function ConnectionLines({
  scrollProgress,
  visible,
}) {
  const ref = useRef();

  const positions = useMemo(() => {
    const points = [];

    for (let i = 0; i < 12; i++) {
      const angle =
        (i / 12) * Math.PI * 2;

      const innerRadius = 1.8;
      const outerRadius = 2.8;

      points.push(
        Math.cos(angle) *
          innerRadius,
        0,
        Math.sin(angle) *
          innerRadius
      );

      points.push(
        Math.cos(angle) *
          outerRadius,
        0,
        Math.sin(angle) *
          outerRadius
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.05 +
      scrollProgress * Math.PI * 2;

    ref.current.material.opacity =
      THREE.MathUtils.lerp(
        ref.current.material.opacity,
        visible ? 0.18 : 0,
        0.06
      );
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <lineBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0}
      />
    </lineSegments>
  );
}

/* =========================================================
   DATA PARTICLES
========================================================= */

function DataParticles({
  scrollProgress,
  visible,
}) {
  const group = useRef();

  const particles = useMemo(() => {
    const result = [];

    for (let i = 0; i < 70; i++) {
      result.push({
        angle:
          Math.random() *
          Math.PI *
          2,

        radius:
          1.8 +
          Math.random() * 2.2,

        y:
          (Math.random() - 0.5) * 3,

        speed:
          0.1 +
          Math.random() * 0.35,

        size:
          0.008 +
          Math.random() * 0.018,
      });
    }

    return result;
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.08 +
      scrollProgress * Math.PI * 2;
  });

  return (
    <group ref={group}>
      {particles.map(
        (particle, index) => {
          const angle =
            particle.angle +
            stateTime() *
              particle.speed;

          const x =
            Math.cos(angle) *
            particle.radius;

          const z =
            Math.sin(angle) *
            particle.radius;

          return (
            <mesh
              key={index}
              position={[
                x,
                particle.y,
                z,
              ]}
            >
              <sphereGeometry
                args={[
                  particle.size,
                  6,
                  6,
                ]}
              />

              <meshBasicMaterial
                color="#00e5ff"
                transparent
                opacity={
                  visible ? 0.5 : 0
                }
              />
            </mesh>
          );
        }
      )}
    </group>
  );
}

/* =========================================================
   CYBER OBJECT
========================================================= */

function CyberObject({
  scrollProgress,
  visible,
}) {
  return (
    <group>
      <CyberShield
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <OrbitalRing
        radius={1.65}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        speed={0.18}
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <OrbitalRing
        radius={2.15}
        rotation={[
          1,
          0.4,
          0.2,
        ]}
        speed={-0.13}
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <OrbitalRing
        radius={2.65}
        rotation={[
          0.4,
          1.1,
          1.2,
        ]}
        speed={0.09}
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <NetworkNodes
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <ConnectionLines
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />

      <DataParticles
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />
    </group>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene({
  scrollProgress,
  visible,
}) {
  return (
    <>
      <ambientLight
        intensity={0.3}
      />

      <pointLight
        position={[
          2,
          2,
          4,
        ]}
        color="#00e5ff"
        intensity={4}
        distance={8}
      />

      <pointLight
        position={[
          -3,
          -2,
          2,
        ]}
        color="#ffffff"
        intensity={1.5}
        distance={6}
      />

      <CyberObject
        scrollProgress={
          scrollProgress
        }
        visible={visible}
      />
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CyberBackground() {
  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);

  const [
    aboutVisible,
    setAboutVisible,
  ] = useState(false);

  return (
    <div className="cyber-background">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ScrollTracker
          onScroll={
            setScrollProgress
          }
        />

        <AboutVisibility
          onChange={
            setAboutVisible
          }
        />

        <Scene
          scrollProgress={
            scrollProgress
          }
          visible={
            aboutVisible
          }
        />
      </Canvas>
    </div>
  );
}