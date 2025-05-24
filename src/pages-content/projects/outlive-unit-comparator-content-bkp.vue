<template>
	<div class="grid grid-cols-2 gap-6">
		<UnitCard v-for="(unit, index) in [selectedUnitA, selectedUnitB]" :key="index" :unit="unit" :allUnits="OUTLIVE_UNITS"
			:maxStats="maxStats" @update="updateUnit(index, $event)" />
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import UnitCard from '../../components/projects/outlive-unit-comparator/unit-card.vue'
import { OUTLIVE_UNITS } from '../../constants/outlive-units'

const selectedUnitA = ref({ id: 'knight', activeResearch: [] })
const selectedUnitB = ref({ id: 'archer', activeResearch: [] })

const updateUnit = (index, newState) => {
	if (index === 0) selectedUnitA.value = newState
	else selectedUnitB.value = newState
}

const getEffectiveStats = (unit) => {
	const base = unit.baseStats
	const effective = { ...base }

	for (const res of unit.research || []) {
		if (unit.activeResearch?.includes(res.id)) {
			for (const [key, val] of Object.entries(res.modifiers)) {
				effective[key] = (effective[key] || 0) + val
			}
		}
	}

	return effective
}

// Calculate max stats dynamically
const maxStats = computed(() => {
	const statKeys = ['health', 'attack', 'armor', 'speed']
	const stats = {}
	for (const key of statKeys) {
		stats[key] = Math.max(
			getEffectiveStats({ ...OUTLIVE_UNITS.find(u => u.id === selectedUnitA.value.id), ...selectedUnitA.value })[key],
			getEffectiveStats({ ...OUTLIVE_UNITS.find(u => u.id === selectedUnitB.value.id), ...selectedUnitB.value })[key]
		)
	}
	return stats
})
</script>
