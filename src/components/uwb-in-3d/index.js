import React, { Suspense,useState, useEffect, useUpdate } from "react" 
import * as THREE from 'three'
import Helmet from 'react-helmet'
import { Canvas, useFrame } from "@react-three/fiber"
import { Sky, OrbitControls, Line } from "@react-three/drei"
import Grass from "./Grass"
import Layout from '../layout'
import { useSpring, animated } from '@react-spring/three'

const dogWalkPoints = [[0, 2, 0], [10, 2, 0], [10, 2, 20]];
let tick = 0;
  

 

  function MyLine() {
    const myMesh = React.useRef();
    const myLineRef = React.useRef();
    const myLinePointRef = React.useRef();
    const [active, setActive] = useState(false);
      
    
const countyCount = setInterval(() => {
    //let lastDogWalkPoint = [dogWalkPoints[tick][0],dogWalkPoints[tick][1],dogWalkPoints[tick][2]];
    let lastDogWalkPoint = [dogWalkPoints[2][0],dogWalkPoints[2][1],dogWalkPoints[2][2]];
    if(tick>10)
    return;
    tick++; //let timeLeft = countdown( new Date(2020, 4, 28) );

    let xOry = Math.floor(Math.random() * 2); //0 or 1
    //let upOrDown = Math.floor(Math.random() * 2); //0 or 1
    if(xOry==0){
        lastDogWalkPoint[0] = lastDogWalkPoint[0]+1;
    }
    else{
        lastDogWalkPoint[2] = lastDogWalkPoint[2]+1; 
    }
    dogWalkPoints.push(lastDogWalkPoint);
    dogWalkPoints[2] = [lastDogWalkPoint[0],lastDogWalkPoint[1],lastDogWalkPoint[2]];
    //console.log(dogWalkPoints);
    //myLineRef.current.points = dogWalkPoints;
    //const a = clock.getElapsedTime();
    //myMesh.current.rotation.x ++;
    //console.log("tick: "+ tick.toString() );
  }, 1000);
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      //const tempObject = new THREE.Object3D()
      //myMesh.current.render();
      //myMesh.current.rotation.x = a;
      //myMesh.current.Line.points={dogWalkPoints}
       myLineRef.current.points = dogWalkPoints;
       myMesh.current.verticesNeedUpdate = true;
       myLineRef.current.verticesNeedUpdate = true; 
       console.log(myLineRef.current.points);
       //myMesh.current.Line.points = dogWalkPoints;
       //myMesh.current.instanceMatrix.needsUpdate = true;
    });
    
    return (
      <instancedMesh
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >  
           <Line
            ref={myLineRef}
            points={dogWalkPoints} //{[[0, 2, 0], [10, 2, 0], [10, 2, 20]]}       // Array of points
            color="rgb(226, 148, 3)" //{[226, 148, 3]} //rgb(226, 148, 3) //"black"                   // Default
            lineWidth={5}                   // In pixels (default)
            dashed={true}                  // Default 
              />   
      </instancedMesh>
    );
  }




const Uwb3dPage = () => ( 
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
        
        <MyLine   />
        {/*<Line
            points={dogWalkPoints} //{[[0, 2, 0], [10, 2, 0], [10, 2, 20]]}       // Array of points
            color="rgb(226, 148, 3)" //{[226, 148, 3]} //rgb(226, 148, 3) //"black"                   // Default
            lineWidth={5}                   // In pixels (default)
            dashed={false}                  // Default
            //vertexColors={[[0, 0, 0]]} // Optional array of RGB values for each point
            //{...lineProps}                  // All THREE.Line2 props are valid
            //{...materialProps}              // All THREE.LineMaterial props are valid
        />*/}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
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