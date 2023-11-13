import { useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/components/intro/shaders";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

interface SceneProps {
  count: number;
  theme?: string;
}

export const ParticleScene = (props: SceneProps) => {
  const { count, theme } = props;
  const radius = 2;

  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
      uIsDarkMode: { value: theme === "dark" ? true : false },
    }),
    [theme]
  );

  useFrame((state) => {
    const { clock } = state;

    if (points.current) {
      const material = points.current.material as THREE.ShaderMaterial;

      if (material.uniforms.uTime) {
        material.uniforms.uTime.value = clock.elapsedTime;
      }
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export const Scene = () => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      className="absolute w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Canvas key={resolvedTheme} camera={{ position: [1.1, 1.1, 1.1] }}>
        <ambientLight intensity={0.5} />
        <ParticleScene count={5000} theme={resolvedTheme} />
      </Canvas>
    </motion.div>
  );
};
