<template>
	<div class="flex flex-col min-h-screen justify-between">
		<header class="sticky top-0 z-40 shadow-[0px_0px_16px_rgba(0,0,0,0.80)]">
			<nav class="tf-navbar-background text-[#d1cdc9] text-center p-3 drop-shadow-lg">
				<div class="flex flex-wrap justify-between items-center mx-auto max-w-4xl">
					<h3 class="ml-5 mb-0">
						The Team Fortress 2 Update Bingo!
					</h3>
				</div>
			</nav>
		</header>
		<main class="flex-grow h-full">
			<slot />
		</main>
	</div>
</template>

<script setup>

</script>
