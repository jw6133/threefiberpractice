import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { House } from './House'
import { Dog } from './Dog'
import styled from 'styled-components'

export default function Main() {
  return (
    <>
    <TotalWrapper>
      <Canvas camera={{position:[20,5,-8]}}>
        <OrbitControls/>
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={1} />
        <group rotation-y={-Math.PI / 2}>
          <House scale={[100,100,100]}/>
        </group>
      </Canvas>
    </TotalWrapper>
    </>
  )
}

const TotalWrapper = styled.div`
    width:100%;
    height:1200px;
`