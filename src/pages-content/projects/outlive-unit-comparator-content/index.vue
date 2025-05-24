<template>
	<div class="container mx-auto p-2 md:max-w-5xl">
		<div class="text-white flex justify-center container mx-auto p-3">
			<div class="flex flex-col items-center justify-center text-center p-4">
				<h1 class="text-4xl font-bold mb-2">🚧 Work in Progress</h1>
				<p class="text-lg mb-2">
					This project page is still under construction. Current selectable units are placeholders
				</p>
				<div class="rounded-md font-medium">
					<HyperLink :link="'/projects'" :label="'Go back to Projects'" :target="'_self'" />
				</div>
			</div>
		</div>

		<!-- Unit Selection -->
		<div class="grid grid-cols-12">
			<div class="col-span-5">
				<DividerLabel label="Unidade 1" class="text-white" />

				<UnitSelect v-model="selectedUnitLeft" :units="units" />

				<img v-if="selectedUnitLeft?.image" :src="selectedUnitLeft?.image"
					class="w-full h-32 object-contain mb-4" />

				<!-- Researches for Unit Left -->
				<div v-if="selectedUnitLeft" class="mt-4 text-white">
					<h3 class="font-bold mb-2">
						Pesquisas
					</h3>

					<div v-for="research in selectedUnitLeft.researches" :key="research.id"
						class="flex items-center gap-2">
						<input type="checkbox" :id="`research-left-${research.id}`" :value="research.id"
							v-model="unitLeftResearchs[research.id]"
							class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
						<label :for="`research-left-${research.id}`">{{ research.description }}</label>
					</div>
				</div>
			</div>

			<div class="col-span-2"></div>

			<div class="col-span-5">
				<DividerLabel label="Unidade 2" class="text-white" />

				<UnitSelect v-model="selectedUnitRight" :units="units" />

				<img v-if="selectedUnitRight?.image" :src="selectedUnitRight?.image"
					class="w-full h-32 object-contain mb-4" />

				<!-- Researches for Unit Right -->
				<div v-if="selectedUnitRight" class="mt-4 text-white">
					<h3 class="font-bold mb-2">
						Pesquisas
					</h3>

					<div v-for="research in selectedUnitRight.researches" :key="research.id"
						class="flex items-center gap-2">
						<input type="checkbox" :id="`research-right-${research.id}`" :value="research.id"
							v-model="unitRightResearchs[research.id]"
							class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
						<label :for="`research-right-${research.id}`">{{ research.description }}</label>
					</div>
				</div>
			</div>
		</div>

		<StatBar v-for="(statData, statName) in preparedStatBars" :key="statName" :stat-data="statData"
			:stat-name="statName" />

		<div class="text-white">
			<DividerLabel label="TO-DO" class="text-white" />
			<ul class="list-disc list-inside">
				<li>Added all units</li>
				<li>Added all buildings</li>
				<li>Music player</li>
				<li>Better unit selection (filters, tags, modal)</li>
				<li>Outlive interface</li>
				<li>Transition indicator when select research</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import _ from 'lodash'
import { ref, watch } from 'vue';
import StatBar from "./components/stat-bar.vue";
import DividerLabel from '../../../components/dividers/divider-label.vue';
import UnitSelect from './components/unit-select.vue';

// import Popover from '../../../components/popvers/popver.vue';
// import Tooltip from '../../../components/tooltips/tooltip.vue';

// data
import unitsData from './data/units.json';
const units = unitsData.units;

import localizationData from './lang/pt-br.json';
const localizationStrings = localizationData.localization;

const selectedUnitLeft = ref(null);
const selectedUnitRight = ref(null);
const unitLeftResearchs = ref({});
const unitRightResearchs = ref({});

const preparedStatBars = ref({
	// example
	// armor: {
	// 	label: "Blindagem",

	// 	left_total: 3,
	// 	left_bars: [
	// 		{ value: 1, description: "Blindagem base"},
	// 		{ value: 2, description: "Blindagem leve"},
	// 	],

	// 	right_total: 5,
	// 	right_bars: [
	// 		{ value: 3, description: "Blindagem base"},
	// 		{ value: 2, description: "Blindagem leve"},
	// 	],
	// },
});

// Watchs
watch(selectedUnitLeft, () => {
	unitLeftResearchs.value = {};

	prepareStatBars();
});
watch(selectedUnitRight, () => {
	unitRightResearchs.value = {};

	prepareStatBars();
});
watch(unitLeftResearchs, () => {

	prepareStatBars();

}, { deep: true });
watch(unitRightResearchs, () => {

	prepareStatBars();

}, { deep: true });

// Methods

function prepareStatBars() {
	preparedStatBars.value = {};

	// left
	_.each(selectedUnitLeft.value?.stats, (statValue, statName) => {
		let currentStat = preparedStatBars.value[statName];
		if (!currentStat) {
			currentStat = {
				left_total: 0, left_bars: [],

				right_total: 0, right_bars: []
			}
		}

		currentStat.left_bars.push({
			value: statValue,
			description: localizationStrings[statName] || 'N/A'
		});
		currentStat.left_total += statValue;

		// Add research attributes to bars list
		_.each(unitLeftResearchs.value, (activeResearch, keyResearch) => {
			if (!activeResearch) return;

			let hasResearchActive = selectedUnitLeft.value.researches.find(unitResearch => keyResearch === unitResearch.id);
			if (!hasResearchActive) return;

			let attributeValue = hasResearchActive.attributes[statName];
			if (!attributeValue) return;

			currentStat.left_bars.push({
				value: attributeValue,
				description: hasResearchActive.name || 'N/A'
			});
			currentStat.left_total += attributeValue;
		});

		preparedStatBars.value[statName] = currentStat;
	});

	// right
	_.each(selectedUnitRight.value?.stats, (statValue, statName) => {
		let currentStat = preparedStatBars.value[statName];
		if (!currentStat) {
			currentStat = {
				left_total: 0, left_bars: [],

				right_total: 0, right_bars: []
			}
		}

		currentStat.right_bars.push({
			value: statValue,
			description: localizationStrings[statName] || 'N/A'
		});
		currentStat.right_total += statValue;

		// Add research attributes to bars list
		_.each(unitRightResearchs.value, (activeResearch, keyResearch) => {
			if (!activeResearch) return;

			let hasResearchActive = selectedUnitRight.value.researches.find(unitResearch => keyResearch === unitResearch.id);
			if (!hasResearchActive) return;

			let attributeValue = hasResearchActive.attributes[statName];
			if (!attributeValue) return;

			currentStat.right_bars.push({
				value: attributeValue,
				description: hasResearchActive.name || 'N/A'
			});
			currentStat.right_total += attributeValue;
		});

		preparedStatBars.value[statName] = currentStat;
	});
}

</script>
