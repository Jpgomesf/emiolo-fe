<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

import { useVisibleStore } from '@/stores/visible.store';
import { computed } from 'vue';

const visibleStore = useVisibleStore();

const isVisible = computed(() => visibleStore.isVisible);

</script>

<template>
  <div class="dark:bg-gray-900 min-h-screen">
    <Navbar v-if="isVisible"/>

    <RouterView />
  </div>
</template>

<style scoped>
</style>
