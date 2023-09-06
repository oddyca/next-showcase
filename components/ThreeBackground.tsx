'use client'

import { Vector3 } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from '@react-three/drei'
import './ThreeBackground.scss';

const ThreeBackground: React.FC = () => {
  return (
    <Canvas 
      shadows dpr={[1, 2]}
      camera={{ position: [-4, 2, 4], fov: 50, near: 2, far: 12 }}
      className='canvas'
    >
      <fog attach="fog" args={['#202020', 5, 20]} />
      <ambientLight intensity={0.015} />
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[2, 3, 1]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[-2, 3.5, 0]} />
    </>
  )
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef<THREE.SpotLight>(null!)
  const viewport = useThree((state) => state.viewport)
 
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 4, (state.mouse.y * viewport.height) / 4, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={5} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
}

export default ThreeBackground
