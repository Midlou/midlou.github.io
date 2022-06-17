import React, { useRef, } from "react";
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, TransformControls } from 'three-stdlib';

extend({ OrbitControls });

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

export default CameraControls;
