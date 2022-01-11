import React, { Suspense,useState, useEffect, useUpdate, useLayoutEffect, useMemo} from "react" 
import * as THREE from 'three'
import Helmet from 'react-helmet'
import { Canvas, useFrame } from "@react-three/fiber"
import { Sky, OrbitControls, Line } from "@react-three/drei"
import Grass from "../components/uwb-in-3d/Grass"
import Layout from '../components/layout'
import { useSpring, animated } from '@react-spring/three'
import noise from 'simplenoise'

 
function getStartPositions(){
    const startPositions = [...Array(1000)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place in a grid
      // position.x = (i % 100) - 50
      // position.y = Math.floor(i / 100) - 50

      // // Offset every other column (hexagonal pattern)
      // position.y += (i % 2) * 0.5

      // // Add some noise
      // position.x += Math.random() * 0.3
      // position.y += Math.random() * 0.3
      position.x=0;
      position.y =5;
      position.z=0;
      return position
    })
    return startPositions
  }


function Dots() {
    const ref = React.useRef()
    const { vec, transform, positions } = useMemo(() => {
      const vec = new THREE.Vector3()
      const transform = new THREE.Matrix4()
      const positions = getStartPositions()
      return { vec, transform, positions }
    }, [])

    let tick=0;
    let moveX=0;
    let moveZ=0;
    useFrame(({ clock }) => { 
      if(Math.floor(clock.elapsedTime*10)>tick && tick<999){
        if(Math.floor(clock.elapsedTime*10)%10==0){ //every 5 ticks we change directions
          moveX=(Math.random()*3 * (Math.round(Math.random()) ? 1 : -1))
          moveZ=(Math.random()*3 * (Math.round(Math.random()) ? 1 : -1))
        }
        let newX = moveX+ positions[tick].x;
        let newZ = moveZ+ positions[tick].z;
        if(Math.abs(newX)>50){newX=50*Math.sign(newX)}
        if(Math.abs(newZ)>50){newZ=50*Math.sign(newZ)}
        positions[tick+1].x = newX
        positions[tick+1].z = newZ
        
        console.log("Adding tick"+tick.toString() + "  ["+newX.toString()+","+newZ.toString()+"]")
        transform.setPosition(positions[tick+1])
        ref.current.setMatrixAt(tick+1, transform)
        ref.current.instanceMatrix.needsUpdate = true
        tick++ 
        // let newX = positions[tick].x + (Math.random()*5 * (Math.round(Math.random()) ? 1 : -1))
        // let newZ = positions[tick].z+ (Math.random()*5 * (Math.round(Math.random()) ? 1 : -1))
        // if(Math.abs(newX)>50){newX=50*Math.sign(newX)}
        // if(Math.abs(newZ)>50){newZ=50*Math.sign(newZ)}
        // positions[tick+1].x = newX
        // positions[tick+1].z = newZ
        
        // console.log("Adding tick"+tick.toString() + "  ["+newX.toString()+","+newZ.toString()+"]")
        // transform.setPosition(positions[tick+1])
        // ref.current.setMatrixAt(tick+1, transform)
        // ref.current.instanceMatrix.needsUpdate = true
        // tick++ 
      }
      // const scale = 1 + Math.sin(clock.elapsedTime) * 0.3
      // for (let i = 0; i < 1000; ++i) {
      //   vec.copy(positions[i]).multiplyScalar(scale)
      //   transform.setPosition(vec)
      //   ref.current.setMatrixAt(i, transform)
      // }
      // ref.current.instanceMatrix.needsUpdate = true
    })
    return (
      <instancedMesh ref={ref} args={[null, null, 1000]} castShadow> 
        <sphereBufferGeometry args={[1, 1.5, 1.5 ]} attach="geometry" /> 
        <meshStandardMaterial
        attach="material"
        color="orange"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
      </instancedMesh>
    )
  }


const IndexPage = () => ( 
    <Layout pageTitle="Ultra Wide Band (UWB) 3D Visualiation of indoor positioning">
      <p>Ultra Wide Band (UWB) 3D Visualiation of indoor positioning.</p>
      <div style={{ position:"relative",width: '100%', height: '600px'}}>
      <Canvas camera={{ position: [15, 15, 30] }}>
        <Sky azimuth={1} inclination={0.6} distance={1000} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
            <Grass />
        </Suspense>
        <Dots /> 
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
        </div>
    </Layout>
)

export default IndexPage 




// import * as React from 'react'
// import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

// const IndexPage = () => {
//   return (
//     <Layout pageTitle="Home Page">
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//       {/*<StaticImage
//         alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
//         src="../images/E1oMV3QVgAIr1NT.webp"
//       />*/}
//     </Layout>
//   )
// }

// export default IndexPage
