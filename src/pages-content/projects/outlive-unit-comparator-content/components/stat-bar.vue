<template>
	<div class="grid grid-cols-12 items-center text-white">
		<!-- Left value -->
		<div class="col-span-5 text-center py-3">
			<div class="flex items-center font-mono">
				<div class="flex-1 h-4 bg-gray-700 rounded overflow-hidden">
					<div v-for="(leftBar, index) in statData.left_bars" :key="index"
						class="h-full cursor-pointer leading-none float-end" :class="{
							'bg-green-600 border-green-800': isLeftBetter,
							'bg-red-600 border-red-800': !isLeftBetter,
							'border-2 border-dashed': statData.left_bars.length > 1,
						}" :style="{ width: getSegmentPercentage(leftBar.value, statData.left_total, leftBarPercentage) + '%' }"
						v-tippy="`${leftBar.description}: ${leftBar.value}`">
						<b>{{ leftBar.value }}</b>
					</div>
				</div>

				<span :key="statData.left_total + '_green'" v-if="isLeftBetter"
					class="w-12 m-2 rounded bg-green-600 inline-block text-center">
					{{ statData.left_total }}
				</span>
				<span :key="statData.left_total + '_red'" v-else-if="statData.left_total !== 0"
					class="w-12 m-2 rounded bg-red-600 inline-block text-center">
					{{ statData.left_total }}
				</span>
				<span :key="statData.left_total + '_gray'" v-else
					class="w-12 m-2 rounded bg-gray-700 inline-block text-center">
					{{ statData.left_total }}
				</span>
			</div>
		</div>

		<!-- Center label -->
		<div class="col-span-2 text-center py-3">
			<div class="bg-gray-800 rounded overflow-hidden m-2 p-2 font-mono">
				{{ statLabel }}
			</div>
		</div>

		<!-- Right value -->
		<div class="col-span-5 text-center py-3">
			<div class="flex items-center font-mono">
				<!-- <transition name="bounce" mode="out-in"> -->
				<span :key="statData.right_total + '_green'" v-if="isRightBetter"
					class="w-12 m-2 rounded bg-green-600 inline-block text-center">
					{{ statData.right_total }}
				</span>
				<span :key="statData.right_total + '_red'" v-else-if="statData.right_total !== 0"
					class="w-12 m-2 rounded bg-red-600 inline-block text-center">
					{{ statData.right_total }}
				</span>
				<span :key="statData.right_total + '_gray'" v-else
					class="w-12 m-2 rounded bg-gray-700 inline-block text-center">
					{{ statData.right_total }}
				</span>

				<div class="flex w-full h-4 bg-gray-700 rounded overflow-hidden">
					<div v-for="(rightBar, index) in statData.right_bars" :key="index"
						class="h-full cursor-pointer leading-none" :class="{
							'bg-green-600 border-green-800': isRightBetter,
							'bg-red-600 border-red-800': !isRightBetter,
							'border-2 border-dashed': statData.right_bars.length > 1,
						}" :style="{ width: getSegmentPercentage(rightBar.value, statData.right_total, rightBarPercentage) + '%' }"
						v-tippy="`${rightBar.description}: ${rightBar.value}`">
						<b>{{ rightBar.value }}</b>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script setup>
import { ref, toRef, watch, onMounted, onUpdated } from "vue";
import { getLocalizedString } from "../../../../helpers/localization.js";

import { directive as tippy } from 'vue-tippy'
// Register the directive
const vTippy = tippy

// Props
const props = defineProps({
	statData: { type: Object, default: {}, },
	statName: { type: String, default: '', }
});
const statData = toRef(props, "statData");
const statName = toRef(props, "statName");

const statLabel = ref('');

onMounted(() => {
	statLabel.value = getLocalizedString(statName.value);
	calcBars();
});

watch([statData], () => {
	calcBars();
}, { deep: true });

function calcBars() {
	let [rightBarPercentageToSet, leftBarPercentageToSet] = getBarPercentages();

	rightBarPercentage.value = rightBarPercentageToSet;
	leftBarPercentage.value = leftBarPercentageToSet;
}

// Right bar
const isRightBetter = ref(false);
const rightBarPercentage = ref(0);

// Left bar
const isLeftBetter = ref(false);
const leftBarPercentage = ref(0);

function getBarPercentages() {
	isRightBetter.value = false;
	isLeftBetter.value = false;

	let currentRightValue = statData.value.right_total;
	let currentLeftValue = statData.value.left_total;
	if (!currentRightValue && !currentLeftValue) {
		return [0, 0];
	}

	let currentMax = 0
	if (currentRightValue > currentLeftValue) {
		isRightBetter.value = true;

		currentMax += currentRightValue;
	} else if (currentRightValue < currentLeftValue) {
		isLeftBetter.value = true;

		currentMax += currentLeftValue;
	} else {
		isRightBetter.value = true;
		isLeftBetter.value = true;
	}

	let leftPercentage = Math.min(100, (currentLeftValue / currentMax) * 100)
	let rightPercentage = Math.min(100, (currentRightValue / currentMax) * 100)

	return [rightPercentage, leftPercentage];
}

function getSegmentPercentage(value, total, barPercentage) {
	if (!total || total === 0) return 0;
	return (value / total) * barPercentage;
}

</script>
