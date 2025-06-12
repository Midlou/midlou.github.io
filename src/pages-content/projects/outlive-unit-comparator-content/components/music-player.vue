<template>
	<div class="music-player w-full">
		<DividerLabel label="Music Player" class="text-white" />

		<!-- Track List With Enable Toggle -->
		<div class="flex flex-col sm:flex-row sm:flex-wrap gap-4">
			<div v-for="(track, index) in tracks" :key="index"
				class="inline-flex rounded-md shadow-sm overflow-hidden">
				<!-- <input type="checkbox" v-model="track.enabled" /> -->

				<button @click="track.enabled = false" v-if="track.enabled" v-tippy="{ content: getLocalizedString('music_player.toggle_music'), delay: 100 }"
					class="flex-1 sm:flex-none px-3 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600">
					<CheckIcon class="h-4 w-4" />
				</button>

				<button @click="track.enabled = true" v-if="!track.enabled" v-tippy="{ content: getLocalizedString('music_player.toggle_music'), delay: 100 }"
					class="flex-1 sm:flex-none px-3 py-2 text-sm bg-gray-500 text-white hover:bg-gray-600">
					<XMarkIcon class="h-4 w-4" />
				</button>

				<button @click="playTrack(index)"
					class="flex-1 sm:flex-none px-3 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 border-l border-blue-700">
					{{ track.name }}
				</button>
			</div>
		</div>

		<!-- Controls -->
		<div v-if="currentTrack !== null" class="pt-4 space-y-4">
			<div class="text-lg font-medium text-white">{{ tracks[currentTrack].name }}</div>

			<div class="flex flex-wrap items-center gap-4">
				<button @click="togglePlay" class="px-2 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600"
					:class="{ 'animate-pulse': isPlaying }">
					<span v-if="isPlaying">
						<PauseIcon class="h-5 w-5" />
					</span>
					<span v-if="!isPlaying">
						<PlayIcon class="h-5 w-5" />
					</span>
				</button>

				<!-- Volume -->
				<div class="flex items-center gap-2 text-white">
					<label>Volume: </label>
					<input type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume"
						class="w-28" />
				</div>
			</div>

			<!-- Progress -->
			<div class="flex items-center gap-2 text-white">
				<span class="w-12 text-right">{{ formatTime(currentTime) }}</span>
				<input type="range" min="0" :max="duration" v-model="currentTime" @input="seek" class="flex-grow" />
				<span class="w-12">{{ formatTime(duration) }}</span>
			</div>

			<div class="flex flex-wrap items-center gap-4">
				<button @click="toggleSequence" v-tippy="{ content: getLocalizedString('music_player.toggle_sequence'), delay: 100 }"
					:class="['px-2 py-1 rounded text-sm text-white', playInSequence ? 'bg-blue-600' : 'bg-gray-800']">
					Sequence: {{ playInSequence ? 'on' : 'off' }}
				</button>

				<button @click="toggleRepeat" v-tippy="{ content: getLocalizedString('music_player.toggle_repeat'), delay: 100 }"
					:class="['px-2 py-1 rounded text-sm text-white', repeat ? 'bg-blue-600' : 'bg-gray-800']">
					Repeat: {{ repeat ? 'on' : 'off' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { getLocalizedString } from '../../../../helpers/localization';
import DividerLabel from '../../../../components/dividers/divider-label.vue';
import { PauseIcon, PlayIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid';

import { directive as tippy } from 'vue-tippy'
// Register the directive
const vTippy = tippy

const tracks = ref([
	// Menu music
	{ name: 'Menu', src: '/assets/projects/outlive-unit-comparator/music/music01.wav', enabled: false },

	// Human
	{ name: 'Humano 1', src: '/assets/projects/outlive-unit-comparator/music/music02.wav', enabled: true },
	{ name: 'Humano 2', src: '/assets/projects/outlive-unit-comparator/music/music03.wav', enabled: true },
	{ name: 'Humano 3', src: '/assets/projects/outlive-unit-comparator/music/music04.wav', enabled: true },

	// Robot
	{ name: 'Robô 1', src: '/assets/projects/outlive-unit-comparator/music/music05.wav', enabled: true },
	{ name: 'Robô 2', src: '/assets/projects/outlive-unit-comparator/music/music06.wav', enabled: true },
	{ name: 'Robô 3', src: '/assets/projects/outlive-unit-comparator/music/music07.wav', enabled: true },

	{ name: 'Humano 2 demo', src: '/assets/projects/outlive-unit-comparator/music/music01_demo.wav', enabled: false },
]);

const currentAudio = ref(null)
const currentTrack = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(0.30)
const playInSequence = ref(true)
const repeat = ref(true)

const playTrack = (index) => {
	stopCurrentTrack()

	const audio = new Audio(tracks.value[index].src)
	audio.volume = volume.value
	audio.play()
	currentAudio.value = audio
	currentTrack.value = index
	isPlaying.value = true

	audio.addEventListener('ended', handleTrackEnd)
	audio.addEventListener('timeupdate', updateProgress)
	audio.addEventListener('loadedmetadata', () => {
		duration.value = audio.duration
	})
}

const togglePlay = () => {
	if (!currentAudio.value) return
	isPlaying.value ? currentAudio.value.pause() : currentAudio.value.play()
	isPlaying.value = !isPlaying.value
}

const toggleSequence = () => {
	playInSequence.value = !playInSequence.value
}

const toggleRepeat = () => {
	repeat.value = !repeat.value
}

const updateVolume = () => {
	if (currentAudio.value) currentAudio.value.volume = volume.value
}

const updateProgress = () => {
	currentTime.value = currentAudio.value.currentTime
}

const seek = () => {
	if (currentAudio.value) {
		currentAudio.value.currentTime = currentTime.value
	}
}

const stopCurrentTrack = () => {
	if (currentAudio.value) {
		currentAudio.value.pause()
		currentAudio.value.currentTime = 0
		currentAudio.value.removeEventListener('ended', handleTrackEnd)
		currentAudio.value.removeEventListener('timeupdate', updateProgress)
		currentAudio.value = null
		isPlaying.value = false
	}
}

// Helper: Find the next enabled track index
const findNextEnabledTrack = (startIndex) => {
	for (let i = startIndex + 1; i < tracks.value.length; i++) {
		if (tracks.value[i].enabled) return i
	}
	return null
}

// Helper: Find the first enabled track
const findFirstEnabledTrack = () => {
	return tracks.value.findIndex(t => t.enabled)
}

const handleTrackEnd = () => {
	isPlaying.value = false

	if (playInSequence.value) {
		const nextIndex = findNextEnabledTrack(currentTrack.value)
		if (nextIndex !== null) {
			playTrack(nextIndex)
		} else if (repeat.value) {
			const first = findFirstEnabledTrack()
			if (first !== -1) playTrack(first)
		}
	}
}

const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60).toString().padStart(2, '0')
	return `${minutes}:${seconds}`
}

onUnmounted(stopCurrentTrack)
</script>

<style scoped>
.music-player input[type='range'] {
	accent-color: #3b82f6;
}
</style>
