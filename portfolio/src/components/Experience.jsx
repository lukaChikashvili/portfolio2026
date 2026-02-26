import { useGLTF, useTexture } from '@react-three/drei'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const Experience = () => {
    //  models
    const office = useGLTF('./severance_tv_show_office.glb');
    const computer = useGLTF('./retro_computer.glb');

    useEffect(() => {
        office.scene.traverse((child) => {
            if(child.name === "Object_38") {
                child.visible = false;
            }
        })
    }, [office]);

  
  


  return (
    <>
    {/* floor  */}
    <mesh rotation = {[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args = {[5, 5, 1, 1]} />
        
    </mesh>
      <primitive object={office.scene} scale = {0.005}  />
      <primitive object={computer.scene} scale = {0.05} position = {[0.3, 0.23, 0.15]} />


    </>
  )
}

export default Experience
