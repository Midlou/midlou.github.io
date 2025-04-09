<template>
    <div class="fixed overflow-hidden z-50 inset-0 transform ease-in-out text-white" :class="isOpen
        ? 'transition-opacity opacity-100 duration-200 -translate-x-0'
        : 'transition-all delay-200 opacity-0 -translate-x-full'">
        <!-- Drawer Panel -->
        <div class="w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/5 left-0 absolute bg-gray-800 h-full delay-400 duration-500 ease-in-out transition-all transform shadow-xl shadow-slate-600"
            :class="isOpen ? '-translate-x-0' : '-translate-x-full'">
            <div class="relative pb-10 flex flex-col default-scrollbar overflow-y-auto h-full">
                <div class="p-4 flex justify-between items-center rounded-t border-b border-gray-600">
                    <h3 class="font-bold mb-0">
                        {{ title }}
                    </h3>
                    <button type="button" @click="closeDrawer"
                        class="text-gray-400 rounded-lg text-sm inline-flex hover:bg-gray-600 hover:text-white p-1"
                        :tabindex="isOpen ? 0 : -1">
                        <XMarkIcon class="h-10 w-10" />
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <slot />
            </div>
        </div>

        <!-- Backdrop -->
        <div class="w-screen h-full cursor-pointer" @click="closeDrawer"></div>
    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'

// Props
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    isOpen: {
        type: Boolean,
        required: true
    }
})

// Emit
const emit = defineEmits(['update:isOpen'])

// Methods
function closeDrawer() {
    emit('update:isOpen', false)
}
</script>
