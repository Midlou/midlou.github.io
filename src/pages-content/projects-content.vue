<template>
	<div
		class="text-white grid container mx-auto py-3 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
		<div v-for="project in sortedProjects" :key="project.name" class="w-full">
			<div class="flex flex-col gap-2 justify-center container mx-auto">
				<div>
					<span class="text-gray-400">
						{{ formatDate(project.release_date) }}
					</span>
				</div>
				<div v-if="project.thumbnail_path">
					<a :href="project.page_link">
						<div class="min-w-fit rounded-md">
							<img :src="project.thumbnail_path" :alt="project.description || ''" />
						</div>
					</a>
				</div>
				<div>
					<a :href="project.page_link" class="stylized-link text-2xl">
						<b>{{ project.label }}</b>
					</a>
				</div>
				<div>
					<span class="text-justify">
						{{ project.description }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import _ from 'lodash'
import { DateTime } from 'luxon'
import { ref, computed } from 'vue'

// Assuming you have PROJECT_ITEMS available as a module
import { PROJECT_ITEMS } from '../constants/projects'

const projects = ref(PROJECT_ITEMS)

const sortedProjects = computed(() => {
	return _.orderBy(projects.value, (project) => {
		const releaseDate = project.release_date

		if (!releaseDate) return 0
		
		return new Date(releaseDate).getTime()
	}, 'desc')
})

const formatDate = (isoDate) => {
	return DateTime.fromISO(isoDate).toLocaleString(DateTime.DATE_SHORT)
}
</script>

<style scoped>
/* Optional scoped styles */
</style>
