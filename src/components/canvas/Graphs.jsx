/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Graphs = () => {

  const graph = useGLTF("../../public/desktop_pc/scene.gltf");
  console.log(graph);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
        object={graph.scene}
        scale={0.75}
        position={[0,0,0]} 
      />
    </mesh>
  )
}


const GraphCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Graphs />
      </Suspense>
      <Preload all />

    </Canvas>
    
  )
}

export default GraphCanvas;
