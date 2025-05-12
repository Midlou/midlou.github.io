<template>
	<div class="text-white flex justify-center container mx-auto p-3">
		<div class="flex flex-col items-center justify-center text-center p-4">
			<h1 class="text-4xl font-bold mb-6">🚧 Work in Progress</h1>
			<p class="text-lg mb-6">
				This project page is still under construction. I'll be adding content later!
			</p>
			<div class="rounded-md font-medium">
				<HyperLink :link="'/projects'" :label="'Go back to Projects'" :target="'_self'" />
			</div>
		</div>
	</div>
</template>

<script setup>
import HyperLink from '../../components/links/hyper-link.vue';

</script>

<style scoped></style>
