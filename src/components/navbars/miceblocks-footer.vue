<template>
	<div class="text-white text-center p-5 bg-slate-800">
		<p class="mb-5">
			Miceblocks Resource Pack and Miceblocks website by Midlou.
		</p>

		<div class="mb-5 flex justify-center">
			<a href="/">
				<div class="flex justify-center container mx-auto py-3">
					<img :src="MidIconLight.src" class="block w-40" alt="Midlou logo" />
				</div>
			</a>
		</div>

		<div>
			<small>
				<a class="stylized-link" href="https://www.minecraft.net/" target="_blank"
					rel="noreferrer">Minecraft</a>
				is copyright of
				<a class="stylized-link" href="https://www.mojang.com/" target="_blank" rel="noreferrer">Mojang AB</a>
				and is not affiliated with this project.
			</small>
			<p>
				Copyright © 2020 - {{ currentYear }} Mice Blocks, all rights reserved.
			</p>
		</div>
	</div>
</template>

<script setup>
import MidIconLight from '../../assets/icons/mid-icon-light-1.svg'

const currentYear = new Date().getFullYear()

</script>
