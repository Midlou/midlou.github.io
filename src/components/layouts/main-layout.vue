<template>
	<div class="flex flex-col min-h-screen justify-between deadpixel">
		<header class="sticky top-0 z-40">
			<NavBar :title="title" @toggleDrawer="setDrawerIsOpen" />
		</header>
		<main class="flex-grow h-full">
			<slot />
		</main>
		<footer>
			<Footer />
		</footer>
		<Drawer :title="title" :isOpen="isDrawerOpen" @update:isOpen="setDrawerIsOpen">
			<DrawerItem v-for="(page, index) in MENU_ITEMS" :key="page?.value || index" :link="page.link"
				:isCurrent="title === page.label" :isOpen="isDrawerOpen">
				{{ page.label }}
			</DrawerItem>
		</Drawer>
	</div>
</template>

<script setup>
import { ref } from 'vue'

// Components
import NavBar from '../navbars/header.vue'
import Footer from '../navbars/footer.vue'
import Drawer from '../navbars/drawer.vue'
import DrawerItem from '../navbars/drawer-item.vue'

// Constants
import { MENU_ITEMS } from '../../constants/menu-items.js'

// Props
const props = defineProps({
	title: {
		type: String,
		required: true
	}
})

// State
const isDrawerOpen = ref(false)

// Methods
function setDrawerIsOpen(value) {
	isDrawerOpen.value = value
}
</script>
