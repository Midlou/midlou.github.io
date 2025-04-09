<template>
    <div class="text-white text-center p-4 bg-gray-800">
        <HyperLink :link="EXTERNAL_LINKS.github.link" :label="EXTERNAL_LINKS.github.label" />
    </div>
</template>

<script setup>
// Components
import HyperLink from '../links/hyper-link.vue'

// Constants
import { EXTERNAL_LINKS } from '../../constants/external-links.js'
</script>
