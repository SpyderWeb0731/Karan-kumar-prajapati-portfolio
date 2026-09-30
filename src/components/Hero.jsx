import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";


// =====================================================
// 3D CYBER CORE
// =====================================================

function CyberCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15;
      coreRef.current.rotation.y += delta * 0.25;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.y += delta * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.25;
      ring2Ref.current.rotation.z += delta * 0.3;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y -= delta * 0.2;
      ring3Ref.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>

      {/* =========================================
          MAIN CYBER CORE
      ========================================= */}

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.35, 5]} />

        <MeshDistortMaterial
          color="#151515"
          emissive="#00e5ff"
          emissiveIntensity={0.8}
          roughness={0.25}
          metalness={0.9}
          distort={0.18}
          speed={1.5}
        />
      </mesh>


      {/* =========================================
          INNER CORE
      ========================================= */}

      <mesh scale={0.65}>
        <sphereGeometry args={[1, 32, 32]} />

        <meshStandardMaterial
          color="#020202"
          emissive="#00e5ff"
          emissiveIntensity={1.8}
          metalness={1}
          roughness={0.1}
        />
      </mesh>


      {/* =========================================
          ORBITING RING 1
      ========================================= */}

      <mesh
        ref={ring1Ref}
        rotation={[Math.PI / 2.5, 0, 0]}
      >
        <torusGeometry
          args={[2.0, 0.018, 16, 120]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.85}
        />
      </mesh>


      {/* =========================================
          ORBITING RING 2
      ========================================= */}

      <mesh
        ref={ring2Ref}
        rotation={[Math.PI / 3, 0, 0]}
      >
        <torusGeometry
          args={[2.45, 0.012, 16, 120]}
        />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.35}
        />
      </mesh>


      {/* =========================================
          ORBITING RING 3
      ========================================= */}

      <mesh
        ref={ring3Ref}
        rotation={[0, Math.PI / 3, 0]}
      >
        <torusGeometry
          args={[2.8, 0.008, 16, 120]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.3}
        />
      </mesh>


      {/* =========================================
          FLOATING CYBER NODES
      ========================================= */}

      <Float
        speed={3}
        rotationIntensity={2}
        floatIntensity={2}
      >
        <mesh position={[2.1, 0.6, 0]}>
          <sphereGeometry
            args={[0.09, 16, 16]}
          />

          <meshBasicMaterial
            color="#00e5ff"
          />
        </mesh>
      </Float>


      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={2}
      >
        <mesh position={[-2.1, -0.5, 0.5]}>
          <sphereGeometry
            args={[0.07, 16, 16]}
          />

          <meshBasicMaterial
            color="#ffffff"
          />
        </mesh>
      </Float>


      <Float
        speed={2.5}
        rotationIntensity={1}
        floatIntensity={1.5}
      >
        <mesh position={[0.4, 2.1, 0]}>
          <sphereGeometry
            args={[0.06, 16, 16]}
          />

          <meshBasicMaterial
            color="#00e5ff"
          />
        </mesh>
      </Float>


      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <mesh position={[-0.8, -2, 0.4]}>
          <sphereGeometry
            args={[0.05, 16, 16]}
          />

          <meshBasicMaterial
            color="#00e5ff"
          />
        </mesh>
      </Float>

    </group>
  );
}


// =====================================================
// 3D SCENE
// =====================================================

function CyberScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 45,
      }}
      dpr={[1, 2]}
    >

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />


      {/* Cyan key light */}
      <pointLight
        position={[3, 3, 4]}
        intensity={25}
        color="#00e5ff"
      />


      {/* White secondary light */}
      <pointLight
        position={[-4, -2, 2]}
        intensity={10}
        color="#ffffff"
      />


      {/* Background stars */}
      <Stars
        radius={80}
        depth={40}
        count={1800}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />


      {/* Floating Cyber Core */}
      <Float
        speed={1.2}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        <CyberCore />
      </Float>


      {/* Mouse / automatic interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 1.7}
      />

    </Canvas>
  );
}


// =====================================================
// HERO SECTION
// =====================================================

export default function Hero() {

  // -----------------------------------------------
  // Scroll to Projects
  // -----------------------------------------------

  const scrollToProjects = () => {
    const projects =
      document.getElementById("projects");

    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  // -----------------------------------------------
  // Scroll to Contact
  // -----------------------------------------------

  const scrollToContact = () => {
    const contact =
      document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <section
      className="hero"
      id="home"
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="hero-glow hero-glow-one"></div>

      <div className="hero-glow hero-glow-two"></div>


      {/* =========================================
          3D BACKGROUND
      ========================================= */}

      <div className="hero-canvas">
        <CyberScene />
      </div>


      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="hero-overlay"></div>


      {/* =========================================
          MAIN HERO CONTENT
      ========================================= */}

      <div className="hero-content">

        {/* -----------------------------------------
            STATUS
        ----------------------------------------- */}

        <motion.div
          className="hero-status"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <span className="status-dot"></span>

          <span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

        </motion.div>


        {/* -----------------------------------------
            INTRO
        ----------------------------------------- */}

        <motion.p
          className="hero-intro"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          HELLO, I'M
        </motion.p>


        {/* -----------------------------------------
            NAME
        ----------------------------------------- */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.45,
          }}
        >

          KARAN

          <span>
            PRAJAPATI
          </span>

        </motion.h1>


        {/* -----------------------------------------
            PROFESSIONAL IDENTITY
        ----------------------------------------- */}

        <motion.div
          className="hero-role"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
        >

          <span className="role-line"></span>


          <span className="role-primary">
            CYBER SECURITY ANALYST
          </span>


          <span className="role-divider">
            ×
          </span>


          <span className="role-secondary">
            WEB DEVELOPER
          </span>


          <span className="role-line"></span>

        </motion.div>


        {/* -----------------------------------------
            DESCRIPTION
        ----------------------------------------- */}

        <motion.p
          className="hero-description"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >

          I build secure digital experiences while exploring
          the world of cybersecurity, security research,
          networking, and modern web development.

        </motion.p>


        {/* -----------------------------------------
            ACTION BUTTONS
        ----------------------------------------- */}

        <motion.div
          className="hero-buttons"

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >

          {/* Projects */}

          <button
            className="primary-button"
            onClick={scrollToProjects}
          >

            <span>
              EXPLORE MY WORK
            </span>

            <span className="button-arrow">
              ↗
            </span>

          </button>


          {/* Contact */}

          <button
            className="secondary-button"
            onClick={scrollToContact}
          >
            CONTACT ME
          </button>

        </motion.div>

      </div>


      {/* =========================================
          BOTTOM INFORMATION
      ========================================= */}

      <motion.div
        className="hero-bottom"

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >

        {/* Scroll indicator */}

        <div className="hero-scroll">

          <span className="scroll-line"></span>

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>


        {/* Location / domain */}

        <div className="hero-location">

          INDIA

          <span>•</span>

          CYBERSECURITY

          <span>•</span>

          DEVELOPMENT

        </div>

      </motion.div>

    </section>
  );
}