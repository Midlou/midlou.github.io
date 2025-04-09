<template>
    <a :href="link" :tabindex="isOpen ? 0 : -1" :class="[
        'flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light',
        isCurrent
            ? 'bg-slate-700 border-blue-500'
            : 'hover:bg-slate-700 hover:border-blue-500 border-zinc-600'
    ]">
        <slot />
    </a>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    link: {
        type: String,
        default: '/'
    },
    isCurrent: {
        type: Boolean,
        default: false
    }
})
</script>
