/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Graphs = () => {

  const graph = useGLTF("/statistic_charts_with_arrow/scene.gltf");
  // console.log(graph);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={2.5} />
      <spotLight 
        position={[-2, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={24}
      />
      <primitive 
        object={graph.scene}
        scale={1}
        position={[0.5,-3,0]} 
      />
    </mesh>
  )
}


const GraphsCanvas = () => {
  return (
    <Canvas height="100vh" width="100vw" frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // da um limite pra "camera" não conseguir olhar completamente para baixo
          minPolarAngle={0} // limita a "camera" de olhar completamente pra cima
          />
          <Graphs />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default GraphsCanvas;
