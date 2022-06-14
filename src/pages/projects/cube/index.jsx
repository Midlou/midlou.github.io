import React, { useEffect, useRef, useState } from "react";
import { extend, Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from "three";
import { OrbitControls, TransformControls } from 'three-stdlib';

extend({ OrbitControls, TransformControls });

const Box = (props) => {
	// This reference will give us direct access to the mesh so we can animate it
	const mesh = useRef();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame((state) => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.002
	})

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [3, 3, 3] : [1.5, 1.5, 1.5]}
			onClick={e => setActive(!active)}
			onPointerOver={e => setHover(true)}
			onPointerOut={e => setHover(false)}
		>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial
				attach="material"
				color={hovered ? "lightskyblue" : "lightsteelblue"}
			/>
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

function Controls() {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	return <orbitControls args={[camera, domElement]} />;
}

function CameraHelper() {
	const camera = new PerspectiveCamera(60, 1, 1, 3);
	return <group position={[0, 0, 2]}>
		<cameraHelper args={[camera]} />
	</group>;
}

const IndexPage = () => {
	let firstLightPos = [2, 2, 2];
	let secondLightPos = [-1.5, -1.5, 1.5];

	return <div className="w-screen h-screen">
		<Canvas>
			<ambientLight />
			<pointLight position={firstLightPos} color="red" />
			<pointLight position={secondLightPos} color="purple" />
			<Box position={[0, 0, 0]} />
			<Sphere position={firstLightPos} shadow={false} />
			<Sphere position={secondLightPos} shadow={false} />

			<Controls />
			{/* <CameraHelper /> */}
		</Canvas>
	</div>
}
export default IndexPage
