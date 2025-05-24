<template>
	<div class="relative w-full">
		<!-- Trigger -->
		<div class="flex items-center gap-2">
			<button @click="toggleDropdown"
				class="flex-1 flex justify-between items-center px-4 py-2 rounded shadow-sm bg-gray-800 hover:bg-slate-700 text-white">
				<div class="flex items-center gap-2">
					<!-- <img v-if="modelValue?.icon" :src="modelValue.icon" class="w-10 h-10" alt="unit icon" /> -->
					<span v-if="modelValue" class="truncate">{{ modelValue?.name }}</span>
					<span v-if="!modelValue" class="truncate text-gray-400">{{ 'Selecionar...' }}</span>
				</div>
				<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<button v-if="modelValue" type="button" @click="clearSelection"
				class="text-white bg-gray-800 rounded inline-flex px-4 py-2 hover:bg-gray-600 hover:text-white">
				Limpar
			</button>

			<button v-if="!modelValue" type="button" :disabled="!modelValue"
				class="text-gray-400 rounded inline-flex px-4 py-2 bg-slate-700 cursor-not-allowed"> 
				Limpar
			</button>
		</div>

		<!-- Dropdown -->
		<div v-if="open"
			class="absolute z-10 mt-1 w-full bg-gray-800 rounded-lg shadow-lg max-h-64 overflow-auto text-white">
			<!-- Search Input -->
			<div class="p-2">
				<input v-model="search" type="text" placeholder="Pesquisar..."
					class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-gray-700" />
			</div>

			<!-- Filtered List -->
			<ul>
				<li v-for="unit in filteredUnits" :key="unit.id" @click="selectUnit(unit)"
					class="flex items-center px-4 py-2 cursor-pointer border-l-4 hover:bg-slate-700 hover:border-blue-500 border-zinc-600">
					<img v-if="unit?.icon" :src="unit.icon" class="w-10 h-10 mr-2" alt="unit icon" />
					<span :class="{
						'font-bold': modelValue?.id === unit.id,
						'text-white': modelValue?.id !== unit.id
					}">
						{{ unit.name }}
					</span>
				</li>
				<li v-if="filteredUnits.length === 0" class="px-4 py-2 text-gray-400">
					Nada encontrado
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'

import { ref, computed, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
	units: {
		type: Array,
		required: true
	},
	modelValue: {
		type: Object,
		default: null
	}
})

const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const search = ref('')

const filteredUnits = computed(() => {
	const searchTerm = search.value.toLowerCase()
	return props.units.filter(unit =>
		unit.name.toLowerCase().includes(searchTerm)
	)
})

function selectUnit(unit) {
	emit('update:modelValue', unit)
	open.value = false
	search.value = ''
}

function toggleDropdown() {
	open.value = !open.value
	if (!open.value) {
		search.value = ''
	}
}

function clearSelection() {
	emit('update:modelValue', null)
	open.value = false
	search.value = ''
}
</script>
