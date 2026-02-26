import { UserContext } from '@/context/UserContext';
import { useGLTF, useMatcapTexture, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import React, { useContext, useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const Experience = () => {
    //  models
    const office = useGLTF('./severance_tv_show_office.glb');
    const computer = useGLTF('./retro_computer.glb');
    const chair = useGLTF('./office_chair.glb');
    const frame = useGLTF('./picture_frame.glb');
    const trash = useGLTF('./wireframe_trash_bin.glb');
    let chairRef = useRef();


    const [matcap] = useMatcapTexture('1D2424_565F66_4E555A_646C6E', 256);

    const me = useTexture('./profile.png');

    // zoom in frame
    const showImage = () => {
        gsap.to(camera.position, {
            x: 0.20, 
            y: 0.30, 
            z: 0.20,
            duration: 2,
            delay: 1,
            ease: "power2.inOut",
            onUpdate: () => {
              
              camera.lookAt(0, 0, 0); 
            }
          });
        
    }

   // chair rotation
   const rotateChair = () => {
    
        gsap.to(chairRef.current.rotation, {
            y: 3,
            duration: 1,
            ease: "power2.in"
        })
    
    
   }

   const rotateChairBack = () => {
    gsap.to(chairRef.current.rotation, {
        y: 0,
        duration: 1,
        ease: "power3.in"
    })
   }

   


    useEffect(() => {
        office.scene.traverse((child) => {
            if(child.name === "Object_38") {
                child.visible = false;
            }
        });

        frame.scene.traverse((child) => {
           
            if (child.isMesh) { 
                child.material = new THREE.MeshMatcapMaterial({
                    matcap: matcap,
                  
                    color: new THREE.Color('#ffffff') 
                });
                
               
                child.material.needsUpdate = true;
            }
        });

      
    }, [office, frame, matcap]);


    const { start } = useContext(UserContext);

    const { camera } = useThree();



    useEffect(() => {
        if (start) {
          gsap.to(camera.position, {
            x: 0.65,
            y: 0.35,
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

      <primitive ref = {chairRef} onPointerEnter = {rotateChair} onPointerOut = {rotateChairBack} object={chair.scene} scale = {0.0025} rotation = {[0, 2, 0]}
       position = {[0.18, 0, 0.3]} />

      
       <primitive onClick = {showImage} object={frame.scene} rotation = {[0, -0.9, 0]}  scale = {0.01} position = {[0.15, 0.2, 0.1]}  />
       <mesh  rotation = {[-0.38, 0.61, 0.24]} position = {[0.152, 0.225, 0.101]}>
        <planeGeometry args = {[0.045, 0.045]} />
        <meshBasicMaterial map = {me} />
       </mesh>

       <primitive object={trash.scene} scale = {0.04} position = {[0.4, 0, 0.26]} />
    </>
  )
}

export default Experience
