<template>
	<div class="flex flex-col h-screen justify-between text-white">
		<main class="flex-grow">
			<slot />
		</main>
		<footer>
			<MiceblocksFooter />
		</footer>
	</div>
</template>

<script setup>
import MiceblocksFooter from '../navbars/miceblocks-footer.vue'
</script>
