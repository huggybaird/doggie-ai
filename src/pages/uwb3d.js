import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import Layout from '../components/layout'

const Box = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  )
}

const Uwb3dPage = () => (
    
    <Layout pageTitle="Ultra Wide Band (UWB) 3D Visualiation of indoor positioning">
      <p>Ultra Wide Band (UWB) 3D Visualiation of indoor positioning.</p>
      <div style={{ position:"relative",width: '100%', height: '600px'}}>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-2.5, 0, 0]} />
            <Box position={[2.5, 0, 0]} />
        </Canvas>
        </div>
    </Layout>
)

export default Uwb3dPage
/*import * as React from 'react'
import Layout from '../components/layout'
const Uwb3dPage = () => {
  return (
    <Layout pageTitle="Ultra Wide Band (UWB) 3D Visualiation of indoor positioning">
      <p>Ultra Wide Band (UWB) 3D Visualiation of indoor positioning.</p>
    </Layout>
  )
}
export default Uwb3dPage
*/