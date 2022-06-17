import React, { useEffect, useRef, useState } from "react";
import { extend, Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from "three";
import { OrbitControls, TransformControls } from 'three-stdlib';
import MainLayout from "@components/layouts/main";
import CameraControls from "./components/camera-controls";

const Box = (props) => {
	// This reference will give us direct access to the mesh so we can animate it
	const mesh = useRef();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame((state) => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.002
	})

	let materialSettings = {
		color: "slategrey",
		transparent: false,
		opacity: 1,
		roughness: 0.01,
		metalness: 0.95,
	};

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={[1.5, 1.5, 1.5]}
			// onClick={e => console.log(e)}
			// onPointerOver={e => setHover(true)}
			// onPointerOut={e => setHover(false)}
		>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			{/* <dodecahedronGeometry attach="geometry" args={[1, 0]} /> */}
			<meshStandardMaterial attach="material" {...materialSettings} />
		</mesh>
	)
}

const Sphere = (props) => {
	const mesh = useRef();

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={[1, 1, 1]}
		>
			<sphereGeometry args={[0.1, 32]} />
			<meshStandardMaterial
				attach="material"
				color={"coral"}
			/>
		</mesh>
	)
}

const PageContent = () => {
	let firstLightPos = [-2, 2, 2];
	let secondLightPos = [2, -2, 2];
	let thirdLightPos = [2, 2, -2];

	return <Canvas>
		<CameraControls />
		<ambientLight intensity={3}/>

		<pointLight position={firstLightPos} color="white" intensity={3} />
		<pointLight position={secondLightPos} color="white" intensity={3} />
		<pointLight position={thirdLightPos} color="white" intensity={3} />

		<Box position={[0, 0, 0]} />
		<Sphere position={firstLightPos} shadow={true} />
		<Sphere position={secondLightPos} shadow={true} />
		<Sphere position={thirdLightPos} shadow={true} />
	</Canvas>
}

const Layout = () => <MainLayout title={"Home"} Component={<PageContent />} />;
export default Layout;
