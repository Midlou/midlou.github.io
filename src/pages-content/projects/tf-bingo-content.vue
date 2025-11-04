<!-- /src/components/BingoCard.vue -->
<template>
	<div
		class="text-tf-text font-sans md:max-w-3xl flex flex-col gap-5 items-center justify-center container mx-auto p-3 my-10 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.60)] bg-tf-foreground">
		<div>
			<h1>
				<b>TF2 Summer 2025 Community Map Bingo!</b>
			</h1>
			<p>
				Think you know what maps Valve’s gonna add next? Pick the maps you believe will make it into
				the Summer 2025 Update. Make your bingo card. Lock in your predictions. Then wait... and suffer... until
				the update drops.
			</p>
		</div>
		<div id="bingo-board" class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-tf-foreground p-2">
			<button v-for="(map, index) in maps" :key="index" @click="map.active = !map.active; lastSelectedMap = map"
				class="rounded shadow-md overflow-hidden hover:opacity-75 hover:cursor-pointer active:scale-95 transition-transform">
				<!-- {{ map.name }} -->

				<img v-if="map.active" :src="`/assets/projects/tf-bingo/summer-2025/${map.name}.jpeg`"
					:alt="map.name || ''" />

				<div v-if="!map.active" class="relative">
					<img class="w-full h-auto opacity-25"
						:src="`/assets/projects/tf-bingo/summer-2025/${map.name}.jpeg`" :alt="map.name || ''" />
					<div
						class="text-red-700 absolute top-0 left-0 inset-0 flex items-center justify-center w-full h-full z-10 text-5xl">
						X</div>
				</div>

			</button>
		</div>
		<div>
			<button
				class="tf-shine-border bg-tf-button hover:bg-tf-button-shine font-bold px-4 py-1 rounded-md shadow-[2px_2px_8px_rgba(0,0,0,0.40)] active:scale-95 transition-transform"
				@click="downloadImage">
				Download as Image
			</button>
		</div>
		<div class="text-lg transition">
			<a v-if="lastSelectedMap" :href="lastSelectedMap.link" target="_blank" class="underline">{{
				lastSelectedMap.name }}</a>
			<p v-if="!lastSelectedMap" class="text-sm">Select a map to see details</p>
		</div>
		<div>
			<p class="mb-3">
				You think this is the year your favorite map finally
				escapes the workshop dungeon and gets blessed by the mighty hand of Valve?
				Craft your very own bingo card by picking the maps you believe will be added in the <b>Summer 2025
					Update</b>.
				Will it be that one PL map everyone's been begging for? Another koth map? Multiple koth maps?
				Or maybe... just maybe... they'll finally fix Wutville. Select and Pray because when the update drops...
				you'll either bask in the glory of being a psychic
				genius... or wallow in the bitter, bitter shame of being <b>WRONG</b>. Either way, you win. Kind of.
			</p>
		</div>
		<div>
			<h1><b>Disclaimer</b></h1>
			<p>
				This project is a <b>fan-made community project</b> and is not affiliated with Valve Corporation or Team
				Fortress 2 in any way. All trademarks, game assets, and references to Team Fortress 2 are the property
				of Valve Corporation. This bingo exists solely for fun, chaos, and broken dreams when Valve
				inevitably ignores half your picks.
			</p>
		</div>
	</div>

</template>

<script setup>
import { ref } from 'vue';

import html2canvas from 'html2canvas';

const lastSelectedMap = ref(null);

const maps = ref([
	{ active: true, name: 'koth_gamma', link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2964782550' },
	{ active: true, name: 'koth_icetower', link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2964782550' },
]);

async function downloadImage() {
	const element = document.getElementById('bingo-board');
	if (!element) return;

	const canvas = await html2canvas(element);
	const data = canvas.toDataURL('image/png');

	const link = document.createElement('a');
	link.href = data;
	link.download = 'bingo.png';
	link.click();
}
</script>
