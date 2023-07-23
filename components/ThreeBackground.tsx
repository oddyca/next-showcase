'use client'

import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>()
  useEffect(() => {
  }, []);
  

  return (
    <div>
      <canvas className='ThreeCanvas' ref={canvasRef as React.RefObject<HTMLCanvasElement>}/>
    </div>
  )
}
