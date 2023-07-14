import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Cube = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={4} />
      <directionalLight position={[3, 2, 1]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <color attach="background" args={["#dc9dcd"]} />
            <Text fontSize={3} color="#555">
              sugar
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </Canvas>
  );
};

export default Cube;
// import React, { useRef } from "react";
// import {
//   OrbitControls,
//   PerspectiveCamera,
//   RenderTexture,
//   Text,
// } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Canvas } from "@react-three/fiber";
// const Cube = () => {
//   const textRef = useRef();
//   useFrame(
//     (state) =>
//       (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
//   );
//   return (
//     <Canvas>
//       <OrbitControls enableZoom={false} autoRotate={true} />
//       <ambientLight intensity={1} />
//       <directionalLight position={[3, 2, 1]} />
//       <mesh>
//         <boxGeometry args={[5, 5, 5]} />
//         <meshStandardMaterial>
//           <RenderTexture attach="map">
//             <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//             <color attach="background" args={["#dc9dcd"]} />
//             <Text ref={textRef} fontSize={3} color="#555">
//               hello
//             </Text>
//           </RenderTexture>
//         </meshStandardMaterial>
//       </mesh>
//     </Canvas>
//   );
// };

// export default Cube;
