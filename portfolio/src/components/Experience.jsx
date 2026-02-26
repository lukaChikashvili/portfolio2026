import { UserContext } from '@/context/UserContext';
import { useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import React, { useContext, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

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


    const { start } = useContext(UserContext);

    const { camera } = useThree();



    useEffect(() => {
        if (start) {
          gsap.to(camera.position, {
            x: 0.65,
            y: 0.40,
            z: 0.64,
            duration: 2,
            delay: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
              
              camera.lookAt(0, 0, 0); 
            }
          });
        }
      }, [start, camera]);
      console.log(camera.position)


  return (
    <>
    {/* floor  */}
    <mesh rotation = {[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args = {[5, 5, 1, 1]} />
        <meshBasicMaterial color = "#6F8F72" />
        
    </mesh>
      <primitive object={office.scene} scale = {0.005} position = {[0, -0.03, 0]}  />
      <primitive object={computer.scene} scale = {0.05} position = {[0.3, 0.20, 0.15]} />


    </>
  )
}

export default Experience
