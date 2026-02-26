import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
      <>
      <directionalLight 
        position={[0, 10, 0]} 
        intensity={1.5} 
        color="#e5e7eb" 
        castShadow
      />

     <pointLight 
        position={[-5, 2, -2]} 
        intensity={0.8} 
        color="#2E4D2C" 
        distance={10}
      />

<Environment frames={Infinity} resolution={256}>
        <group rotation={[0, 0, Math.PI / 4]}>
          <Lightformer
            form="rect"
            intensity={2}
            position={[-5, 2, -1]}
            scale={[10, 5, 1]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[10, 5, 10]}
            scale={[20, 1, 1]}
          />
        </group>
      </Environment>
      
      <ambientLight intensity={0.6} />
      </>
  )
}

export default Lights
