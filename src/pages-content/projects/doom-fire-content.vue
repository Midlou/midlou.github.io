<template>
	<div class="text-white flex justify-center container mx-auto py-3">
		<div>
			<div>
				<DividerLabel label="Options" />

				<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<button @click="toggleInterval({})"
						:class="['w-full', updateRate !== 0 ? 'bg-blue-600' : 'bg-gray-800', 'text-white py-2 rounded']">
						Toggle
					</button>
					<button @click="incandescentAir = !incandescentAir"
						:class="['w-full', incandescentAir ? 'bg-blue-600' : 'bg-gray-800', 'text-white py-2 rounded']">
						Incandescent air
					</button>
				</div>
			</div>

			<div>
				<DividerLabel label="Doom fire" />

				<div class="flex items-center justify-center">
					<canvas ref="canvasRef" :width="fireWidth * scaleMultiplier" :height="fireHeight * scaleMultiplier"
						class="canvas-crisp-pixels w-full" />
				</div>
			</div>

			<div>
				<div class="col-span-1">
					<DividerLabel label="Parameters" />
				</div>

				<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<div>
						<label class="block text-sm">
							Fire source intensity: {{ selectedFireSourceIntensity }}
						</label>
						<input v-model.number="selectedFireSourceIntensity" type="range" :min="0"
							:max="FIRE_COLORS_PALETTE.length - 1"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
					</div>
					<div>
						<label class="block text-sm">
							Scale Multiplier
						</label>
						<input v-model.number="scaleMultiplier" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Scale Multiplier" />
					</div>
					<div>
						<label class="block text-sm">
							Width
						</label>
						<input v-model.number="fireWidth" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Width" />
					</div>
					<div>
						<label class="block text-sm">
							Height
						</label>
						<input v-model.number="fireHeight" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Height" />
					</div>
					<div>
						<label class="block text-sm">
							Update rate
						</label>
						<input v-model.number="selectedUpdateRate" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Update rate" />
					</div>
					<div>
						<label class="block text-sm">
							Decay
						</label>
						<input v-model.number="decayRandomness" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Decay" />
					</div>
					<div>
						<label class="block text-sm">
							Wind randomness: {{ windRandomness }}
						</label>
						<input v-model.number="windRandomness" type="number"
							class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Wind randomness" />
					</div>
				</div>
			</div>

			<div>
				<DividerLabel label="Info" />
				<b>Inspired by:</b>
				<div>
					<a class="stylized-link" href="https://github.com/fabiensanglard/DoomFirePSX" target="_blank"
						rel="noreferrer">
						Doom fire canvas implementation
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import DividerLabel from "../../components/dividers/divider-label.vue";

const FIRE_COLORS_PALETTE = ["7, 7, 7", "31, 7, 7", "47, 15, 7", "71, 15, 7", "87, 23, 7", "103, 31, 7", "119, 31, 7", "143, 39, 7", "159, 47, 7", "175, 63, 7", "191, 71, 7", "199, 71, 7", "223, 79, 7", "223, 87, 7", "223, 87, 7", "215, 95, 7", "215, 95, 7", "215, 103, 15", "207, 111, 15", "207, 119, 15", "207, 127, 15", "207, 135, 23", "199, 135, 23", "199, 143, 23", "199, 151, 31", "191, 159, 31", "191, 159, 31", "191, 167, 39", "191, 167, 39", "191, 175, 47", "183, 175, 47", "183, 183, 47", "183, 183, 55", "207, 207, 111", "223, 223, 159", "239, 239, 199", "255, 255, 255"];

const canvasRef = ref(null);
const fireArray = ref([]);
const fireWidth = ref(128);
const fireHeight = ref(64);
const updateRate = ref(0);
const selectedUpdateRate = ref(60);
const scaleMultiplier = ref(3);
const windRandomness = ref(1);
const decayRandomness = ref(2);
const incandescentAir = ref(false);
const selectedFireSourceIntensity = ref(36);
const isPrepared = ref(false);
let intervalID = null;

// Force disable on change scale multiplier
watch(scaleMultiplier, () => toggleInterval({ forceDisable: true }));

// Set fire source on change
watch(selectedFireSourceIntensity, setFireSource);

// Reset everything after change of width or height
watch([fireWidth, fireHeight], () => {
	updateRate.value = 0;
	setInitialDataStructure();
});

function toggleInterval({ forceDisable = false }) {
	if (!isPrepared.value) setInitialDataStructure();
	if (updateRate.value !== 0 || forceDisable) return (updateRate.value = 0);
	updateRate.value = selectedUpdateRate.value;
}

function setInitialDataStructure() {
	resetFireDataStructure();
	isPrepared.value = true;
}

function resetFireDataStructure() {
	let numPixels = fireWidth.value * fireHeight.value;
	fireArray.value = Array.from({ length: numPixels }, (_, i) =>
		i < numPixels - fireWidth.value ? 0 : selectedFireSourceIntensity.value
	);
}

function setFireSource() {
	for (let column = 0; column <= fireWidth.value; column++) {
		const pixelIndex =
			fireWidth.value * fireHeight.value - fireWidth.value + column;
		fireArray.value[pixelIndex] = selectedFireSourceIntensity.value;
	}
}

function calculateFirePropagation() {
	let newPixels = [...fireArray.value];
	for (let col = 0; col < fireWidth.value; col++) {
		for (let row = 0; row < fireHeight.value; row++) {
			let idx = col + fireWidth.value * row;
			let below = idx + fireWidth.value;
			if (below >= fireWidth.value * fireHeight.value) continue;

			let decay = Math.round(Math.random() * Math.abs(decayRandomness.value));
			let intensity = fireArray.value[below] - decay;
			let newIntensity =
				intensity >= 0
					? intensity
					: incandescentAir.value
						? fireArray.value[idx]
						: 0;
			let wind = Math.round(Math.random() * windRandomness.value);

			if (idx + wind < newPixels.length) {
				newPixels[idx + wind] = newIntensity;
			}
		}
	}
	fireArray.value = newPixels;
}

function renderCanvas(ctx) {
	for (let row = 0; row < fireHeight.value; row++) {
		for (let col = 0; col < fireWidth.value; col++) {
			let idx = col + fireWidth.value * row;
			let intensity = fireArray.value[idx] || 0;
			let color = FIRE_COLORS_PALETTE[intensity];
			ctx.beginPath();
			ctx.fillStyle = `rgb(${color})`;
			ctx.fillRect(
				col * scaleMultiplier.value,
				row * scaleMultiplier.value,
				scaleMultiplier.value,
				scaleMultiplier.value
			);
			ctx.fill();
		}
	}
}

onMounted(() => {
	// If update rate is valid, then we start the render routine
	watch(
		updateRate,
		(val) => {
			if (intervalID) clearInterval(intervalID);
			if (val) {
				const ctx = canvasRef.value.getContext("2d");
				ctx.imageSmoothingEnabled = false;
				intervalID = setInterval(() => {
					calculateFirePropagation();

					// We have to render the canvas only after the fire propagation calc is finished,
					// although it seems that rendering the canvas on each row/column calculation is more efficient,
					// doing that will break the fire effect 
					renderCanvas(ctx);
				}, val);
			}
		},
		{ immediate: true }
	);
});

onBeforeUnmount(() => {
	if (intervalID) clearInterval(intervalID);
});
</script>

<style scoped>
@import "../../styles/glow-hover.css";
</style>
