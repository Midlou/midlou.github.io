<template>
    <nav class="text-white text-center p-3 bg-gray-800 drop-shadow-lg">
        <div class="flex flex-wrap justify-between items-center mx-auto">
            <div class="flex justify-between items-center">
                <button type="button" @click="emit('toggleDrawer', true)"
                    class="inline-flex items-center text-4xl text-gray-400 hover:text-white rounded-lg hover:bg-gray-600 default-focus-light">
                    <Bars3BottomLeftIcon class="h-10 w-10" />
                </button>

                <a href="/" class="ml-5 hidden sm:block">
                    <img :src="MidIconLight.src" class="block h-8 w-8" alt="Website logo" />
                </a>

                <h3 class="ml-5 mb-0 font-semibold hidden sm:block">
                    {{ title }}
                </h3>
            </div>
			<div>
				<a href='https://ko-fi.com/H2H2AH0S2' target='_blank' rel='noreferrer' class="px-4 py-3 hover:underline text-blue-400 hover:text-blue-500">
					<slot>Support my work</slot>
				</a>
			</div>
        </div>
    </nav>
</template>

<script setup>
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/solid'
import MidIconLight from '../../assets/icons/mid-icon-light-1.svg'

// Props
defineProps({
    title: {
        type: String,
        default: ''
    }
})

// Emit event for toggling the drawer
const emit = defineEmits(['toggleDrawer'])
</script>
