import { useState, useEffect, useRef } from "react";

const FIRE_COLORS_PALETTE = ["7, 7, 7", "31, 7, 7", "47, 15, 7", "71, 15, 7", "87, 23, 7", "103, 31, 7", "119, 31, 7", "143, 39, 7", "159, 47, 7", "175, 63, 7", "191, 71, 7", "199, 71, 7", "223, 79, 7", "223, 87, 7", "223, 87, 7", "215, 95, 7", "215, 95, 7", "215, 103, 15", "207, 111, 15", "207, 119, 15", "207, 127, 15", "207, 135, 23", "199, 135, 23", "199, 143, 23", "199, 151, 31", "191, 159, 31", "191, 159, 31", "191, 167, 39", "191, 167, 39", "191, 175, 47", "183, 175, 47", "183, 183, 47", "183, 183, 55", "207, 207, 111", "223, 223, 159", "239, 239, 199", "255, 255, 255"];

function DoomFireController() {
	// Core states
	const [fireArray, setFireArray] = useState([]);

	// Custom behavior states
	const [fireWidth, setFireWidth] = useState(128);
	const [updateRate, setUpdateRate] = useState(0);
	const [fireHeight, setFireHeight] = useState(64);
	const [isPrepared, setIsPrepared] = useState(false);
	const [windRandomness, setWindRandomness] = useState(1);
	const [decayRandomness, setDecayRandomness] = useState(2);
	const [scaleMultiplier, setScaleMultiplier] = useState(3);
	const [incandescentAir, setIncandescentAir] = useState(false);
	const [selectedUpdateRate, setSelectedUpdateRate] = useState(100);
	const [selectedFireSourceIntensity, setSelectedFireSourceIntensity] = useState(36);

	// Canvas variables
	const canvasRef = useRef(null)

	// Force disable on change scale multiplier
	useEffect(() => {
		toggleInterval(true);
	}, [scaleMultiplier]);

	// Set fire source on change
	useEffect(() => {
		let newFireArray = fireArray;
		for (let column = 0; column <= fireWidth; column++) {
			const overflowPixelIndex = fireWidth * fireHeight
			const pixelIndex = (overflowPixelIndex - fireWidth) + column

			newFireArray[pixelIndex] = selectedFireSourceIntensity;
		}

		setFireArray(newFireArray);
	}, [selectedFireSourceIntensity]);

	useEffect(() => {
		setUpdateRate(0);
		setInitialDataStructure();
	}, [fireWidth, fireHeight]);

	useEffect(() => {
		let intervalID;

		if (updateRate) {
			const canvasCtx = canvasRef.current.getContext('2d');
			canvasCtx.imageSmoothingEnabled = false;

			intervalID = setInterval(() => {
				calculateFirePropagation();
				renderCanvas(canvasCtx);
			}, updateRate);
		}
		return () => {
			clearInterval(intervalID);
			setInitialDataStructure();
		}
	}, [updateRate, windRandomness, decayRandomness, incandescentAir]);

	function toggleInterval(forceDisable = false) {
		if (!isPrepared) setInitialDataStructure();

		if (updateRate !== 0 || forceDisable) return setUpdateRate(0);

		setUpdateRate(selectedUpdateRate);
	}

	function setInitialDataStructure() {
		resetFireDataStructure();
		setIsPrepared(true);
	}

	function resetFireDataStructure() {
		let numberOfPixels = fireWidth * fireHeight;

		let fireArray = [];
		for (let currentPixel = 0; currentPixel < numberOfPixels; currentPixel++) {
			if (numberOfPixels - fireWidth > currentPixel) {
				fireArray[currentPixel] = 0;
				continue;
			}
			fireArray[currentPixel] = selectedFireSourceIntensity;
		}

		setFireArray(fireArray);
	}

	function calculateFirePropagation() {
		let newPixelsArray = fireArray;

		for (let column = 0; column < fireWidth; column++) {
			for (let row = 0; row < fireHeight; row++) {
				let currentPixelIndex = column + (fireWidth * row);

				let belowPixelIndex = currentPixelIndex + fireWidth;

				if (belowPixelIndex >= fireWidth * fireHeight) continue;

				let decay = Math.round(Math.random() * Math.abs(decayRandomness));
				let belowPixelFireIntensity = fireArray[belowPixelIndex];

				let newFireIntensity = belowPixelFireIntensity - decay >= 0
					? belowPixelFireIntensity - (decay)
					: incandescentAir
						? fireArray[currentPixelIndex]
						: 0;

				let randomizedWindValue = Math.round(Math.random() * windRandomness);

				newPixelsArray[currentPixelIndex + randomizedWindValue] = newFireIntensity;
			}
		}

		setFireArray(newPixelsArray);
	}

	function renderCanvas(ctx) {
		for (let row = 0; row < fireHeight; row++) {
			for (let column = 0; column < fireWidth; column++) {
				let pixelIndex = column + (fireWidth * row);

				let fireIntensity = fireArray[pixelIndex];

				let colorString = fireIntensity ? FIRE_COLORS_PALETTE[fireIntensity] : FIRE_COLORS_PALETTE[0];

				ctx.beginPath();
				ctx.fillStyle = `rgb(${colorString})` || '#000';
				ctx.fillRect(column * scaleMultiplier, row * scaleMultiplier, fireWidth, fireHeight);
				ctx.fill();
			}
		}
	}

	return {
		canvasRef,
		updateRate,
		fireWidth,
		fireHeight,
		windRandomness,
		decayRandomness,
		scaleMultiplier,
		incandescentAir,
		selectedUpdateRate,
		FIRE_COLORS_PALETTE,
		selectedFireSourceIntensity,
		setFireWidth,
		setFireHeight,
		toggleInterval,
		setWindRandomness,
		setScaleMultiplier,
		setDecayRandomness,
		setIncandescentAir,
		setSelectedUpdateRate,
		setSelectedFireSourceIntensity,
	};
}

export default DoomFireController;
