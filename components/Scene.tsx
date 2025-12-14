'use client'

import {Canvas} from '@react-three/fiber'
import Model from "../components/Model"
import {Suspense} from "react"
import { Bounds, ScrollControls } from '@react-three/drei'



export default function Scene() {
  return (
    <Canvas
      // Lower GPU pressure in browsers (helps avoid WebGL context lost on deploys)
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: false }}
      camera={{
        position: [0, 0, 200],
        fov: 11,
        far: 10000,
      }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <directionalLight position={[-2, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Bounds fit margin={1.4}>
          <ScrollControls damping={0.2} pages={7}>
            <Model scale={110} />
          </ScrollControls>
        </Bounds>
      </Suspense>
    </Canvas>
  );
}