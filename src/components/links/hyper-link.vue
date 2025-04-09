<template>
	<a :href="link" :target="target" rel="noreferrer" :class="[
		className,
		'hover:underline text-blue-400 hover:text-blue-500'
	]">
		<slot>{{ label }}</slot>
	</a>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: ''
	},
	link: {
		type: String,
		default: ''
	},
	target: {
		type: String,
		default: '_blank'
	},
	className: {
		type: String,
		default: ''
	}
})
</script>
