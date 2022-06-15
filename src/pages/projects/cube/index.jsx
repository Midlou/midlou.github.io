import React, { useEffect, useRef, useState } from "react";
import { extend, Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from "three";
import { OrbitControls, TransformControls } from 'three-stdlib';
import MainLayout from "@components/layouts/main";

extend({ OrbitControls, TransformControls });

// const CameraController = () => {
// 	const { camera, gl } = useThree();
// 	useEffect(
// 		() => {
// 			const controls = new OrbitControls(camera, gl.domElement);

// 			controls.enableDamping = true;
// 			controls.dampingFactor = 0.05;
// 			controls.update();
// 			return () => {
// 				controls.dispose();
// 			};
// 		},
// 		[camera, gl]
// 	);
// 	return null;
// };

const CameraControls = () => {
	const {
		camera,
		gl: { domElement },
	} = useThree();
	const controls = useRef();

	let configs = {
		ref: controls,
		enableDamping: true,
		dampingFactor: 0.05,
		rotateSpeed: 0.25,
		minZoom: 0.5,
		maxZoom: 1,
	}

	useFrame((state) => controls.current.update());
	return <orbitControls {...configs} args={[camera, domElement]} />;
};

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

// function Controls() {
// 	const {
// 		camera,
// 		gl: { domElement }
// 	} = useThree();

// 	const controls = <OrbitControls args={[camera, domElement]} />

// 	controls.enableDamping = true; 
// 	controls.dampingFactor = 0.05;

// 	return controls;
// }

function CameraHelper() {
	const camera = new PerspectiveCamera(60, 1, 1, 3);
	return <group position={[0, 0, 2]}>
		<cameraHelper args={[camera]} />
	</group>;
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

		{/* <CameraHelper /> */}
	</Canvas>

}

const Layout = () => <MainLayout title={"Home"} Component={<PageContent />} />;
export default Layout;
