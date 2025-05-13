<template>
	<div class="container mx-auto py-3 px-5">
		<!-- Tag Filters -->
		<div class="mb-6 flex flex-wrap gap-2">
			<button v-for="(info, tag) in PROJECTS_TAGS" :key="tag" @click="toggleTag(tag)" :class="[
				'px-3 py-1 rounded-md',
				selectedTags.includes(tag)
					? 'bg-white text-black'
					: 'bg-gray-800 text-white hover:bg-gray-700'
			]">
				<span v-if="info.icon">{{ info.icon }}</span>
				<span>{{ info.label }}</span>
			</button>
			<button v-if="selectedTags.length" @click="selectedTags = []"
				class="px-3 py-1 rounded-md bg-red-600 text-white border border-red-700 hover:bg-red-700">
				Clear
			</button>
		</div>

		<!-- Projects Grid -->
		<transition-group name="fade" tag="div"
			class="grid text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			<div v-for="project in filteredProjects" :key="project.name" class="w-full">
				<div class="flex flex-col gap-2 justify-center">
					<div v-if="project.thumbnail_path">
						<a :href="project.page_link">
							<div class="rounded-md overflow-hidden">
								<img :src="project.thumbnail_path" :alt="project.description || ''" />
								<div
									class="bg-gray-800 text-gray-400 text-xs px-2 py-1">
									{{ formatDate(project.release_date) }}
								</div>
							</div>
						</a>
					</div>
					<div class="line-clamp-3 break-all">
						<a :href="project.page_link" class="stylized-link text-2xl">
							<b>{{ project.label }}</b>
						</a>
					</div>
					<!-- <div>
						<span class="text-sm text-gray-400">
							{{ formatDate(project.release_date) }}
						</span>
					</div> -->
					<div>
						<span class="text-justify">
							{{ project.description }}
						</span>
					</div>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script setup>
import _ from 'lodash'
import { DateTime } from 'luxon'
import { ref, computed } from 'vue'
import { PROJECT_ITEMS } from '../constants/projects'
import { PROJECTS_TAGS } from '../constants/projects-tags'

const projects = ref(PROJECT_ITEMS)
const selectedTags = ref(['has_page'])

const toggleTag = (tag) => {
	if (selectedTags.value.includes(tag)) {
		selectedTags.value = selectedTags.value.filter((t) => t !== tag)
	} else {
		selectedTags.value.push(tag)
	}
}

const sortedProjects = computed(() => {
	return _.orderBy(
		projects.value,
		(project) => new Date(project.release_date || 0).getTime(),
		'desc'
	)
})

const filteredProjects = computed(() => {
	if (!selectedTags.value.length) return sortedProjects.value

	return sortedProjects.value.filter((project) =>
		project.tags?.some((tag) => selectedTags.value.includes(tag))
	)
})

const formatDate = (isoDate) => {
	return DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_MED)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
