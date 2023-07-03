/* eslint-disable no-unused-vars */
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'



const Money = (props) => {

  const ref = useRef()

  const sphere =  random.inSphere(new Float32Array(5000), { radius: 1.2 })

  // useFrame é uma propriedade do React 3 fiber, que faz os pontinhos que criei rodar nos eixos x, e y 
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthwrite={false}
        />
      </Points>
    </group>
  )
}

const MoneyCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Money />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default MoneyCanvas