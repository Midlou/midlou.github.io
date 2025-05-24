<template>
	<table class="w-full">
		<tbody>
			<tr>
				<template v-for="type in cellTypes" :key="getKey(label, type.name)">
					<td v-if="direction === type.name" :class="`${type.class} w-px whitespace-nowrap`">
						<b>{{ label }}</b>
					</td>
					<td v-else class="m-0 p-0">
						<hr />
					</td>
				</template>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { computed, toRef } from "vue";

// Props
const props = defineProps({
	label: {
		type: String,
		default: "",
	},
	direction: {
		type: String,
		default: "center",
	},
});

const label = toRef(props, "label");
const direction = toRef(props, "direction");

const cellTypes = [
	{ name: "left", class: "pr-4" },
	{ name: "center", class: "p-4" },
	{ name: "right", class: "pl-4" },
];

function getKey(label, typeName) {
	return typeName + "-" + label.replace(/\s+/g, "-").toLowerCase();
}
</script>
