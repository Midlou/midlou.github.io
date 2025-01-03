import { useState, useEffect, useRef } from "react";

// styles
import '../../styles/glow-hover.css'

// Components
import DividerLabel from "../../components/dividers/divider-label";
import Button from "../../components/buttons/button";
import Input from "../../components/inputs/input";

const FIRE_COLORS_PALETTE = ["7, 7, 7", "31, 7, 7", "47, 15, 7", "71, 15, 7", "87, 23, 7", "103, 31, 7", "119, 31, 7", "143, 39, 7", "159, 47, 7", "175, 63, 7", "191, 71, 7", "199, 71, 7", "223, 79, 7", "223, 87, 7", "223, 87, 7", "215, 95, 7", "215, 95, 7", "215, 103, 15", "207, 111, 15", "207, 119, 15", "207, 127, 15", "207, 135, 23", "199, 135, 23", "199, 143, 23", "199, 151, 31", "191, 159, 31", "191, 159, 31", "191, 167, 39", "191, 167, 39", "191, 175, 47", "183, 175, 47", "183, 183, 47", "183, 183, 55", "207, 207, 111", "223, 223, 159", "239, 239, 199", "255, 255, 255"];

const DoomFireContent = () => {
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

	// Reset everything after change of width or height
	useEffect(() => {
		setUpdateRate(0);
		setInitialDataStructure();
	}, [fireWidth, fireHeight]);

	// If update rate is valid, when start render routine
	useEffect(() => {
		let intervalID;

		if (updateRate) {
			const canvasCtx = canvasRef.current.getContext('2d');
			canvasCtx.imageSmoothingEnabled = false;

			intervalID = setInterval(() => {
				calculateFirePropagation();

				// We have to render the canvas only after the fire propagation calc is finished,
				// although it seems that rendering the canvas on each row/column calculation is more efficient,
				// doing that will break the fire effect 
				renderCanvas(canvasCtx);
			}, updateRate);
		}
		return () => {
			clearInterval(intervalID);
		}
	}, [updateRate, windRandomness, decayRandomness, incandescentAir]);

	function toggleInterval(forceDisable = false) {
		if (!isPrepared) {
			setInitialDataStructure();
		}

		if (updateRate !== 0 || forceDisable) {
			return setUpdateRate(0);
		}

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

				if (belowPixelIndex >= (fireWidth * fireHeight)) {
					continue;
				}

				let decay = Math.round(Math.random() * Math.abs(decayRandomness));
				let belowPixelFireIntensity = fireArray[belowPixelIndex];

				let fireIntensityAfterDecay = belowPixelFireIntensity - decay;

				if (fireIntensityAfterDecay >= 0) {

					var newFireIntensity = fireIntensityAfterDecay;
				} else {

					var newFireIntensity = incandescentAir ? fireArray[currentPixelIndex] : 0;
				}

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
				ctx.fillStyle = `rgb(${colorString})`;
				ctx.fillRect(column * scaleMultiplier, row * scaleMultiplier, fireWidth, fireHeight);
				ctx.fill();
			}
		}
	}

	return <div className="text-white flex justify-center container mx-auto py-3">
		<div className="bg-gray-800 p-4 rounded-lg shadow-lg">
			<div>
				<DividerLabel label="Options" />

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<Button
						label={"Toggle"}
						onClick={() => toggleInterval()}
						toggle={updateRate !== 0}
						className={'w-full'}
					/>
					<Button
						label={"Incandescent air"}
						onClick={() => setIncandescentAir(!incandescentAir)}
						toggle={incandescentAir}
						className={'w-full'}
					/>
				</div>

			</div>

			<div>
				<DividerLabel label="Doom fire" />

				<div className="flex items-center justify-center">
					<canvas ref={canvasRef} width={fireWidth * scaleMultiplier} height={fireHeight * scaleMultiplier} className="canvas-crisp-pixels w-full" />
				</div>
			</div>

			<div>

				<div className="col-span-1">
					<DividerLabel label="Parameters" />
				</div>

				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<div>
						<label className="block text-sm">
							{`Fire source intensity: ${selectedFireSourceIntensity}`}
						</label>
						<Input
							setState={setSelectedFireSourceIntensity}
							value={selectedFireSourceIntensity}
							type='range'
							placeholder='Fire source intensity'
							min={0}
							max={FIRE_COLORS_PALETTE.length - 1}
						/>
					</div>
					<div>
						<label className="block text-sm">
							Scale Multiplier
						</label>
						<Input
							setState={setScaleMultiplier}
							value={scaleMultiplier}
							type='number'
							placeholder='Scale Multiplier'
						/>
					</div>
					<div>
						<label className="block text-sm">
							Width
						</label>
						<Input
							setState={setFireWidth}
							value={fireWidth}
							type='number'
							placeholder='Width'
						/>
					</div>
					<div>
						<label className="block text-sm">
							Height
						</label>
						<Input
							setState={setFireHeight}
							value={fireHeight}
							type='number'
							placeholder='Height'
						/>
					</div>
					<div>
						<label className="block text-sm">
							Update rate
						</label>
						<Input
							setState={setSelectedUpdateRate}
							value={selectedUpdateRate}
							type='number'
							placeholder='Update rate'
						/>
					</div>
					<div>
						<label className="block text-sm">
							Decay
						</label>
						<Input
							setState={setDecayRandomness}
							value={decayRandomness}
							type='number'
							placeholder='Decay'
						/>
					</div>
					<div>
						<label className="block text-sm">
							{`Wind randomness: ${windRandomness}`}
						</label>
						<Input
							setState={setWindRandomness}
							value={windRandomness}
							type='number'
							placeholder='Wind randomness'
							label='Wind randomness'
						/>
					</div>
				</div>

			</div>

			<div>
				<DividerLabel label="Info" />
				<b>Inspired by:</b>
				<div>
					<a
						className="stylized-link"
						href={"https://github.com/fabiensanglard/DoomFirePSX"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						Doom fire canvas implementation
					</a>
				</div>
			</div>

		</div>
	</div>;
}

export default DoomFireContent;
