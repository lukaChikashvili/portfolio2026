"use client"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { OrbitControls } from "@react-three/drei"
import Lights from "./Lights"
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

const CanvasPage = () => {
  return (
     <>
       <Canvas  camera={{
        position: [0, 2.5, 0.5],
        fov: 45,
        near: 0.1,
        far: 100
      }} >
       
        <Lights />
         <Experience />
 
         <EffectComposer>
         <Noise blendFunction={BlendFunction.MULTIPLY} opacity={0.5} />
       
         </EffectComposer>
       </Canvas>
     </>
  )
}

export default CanvasPage
