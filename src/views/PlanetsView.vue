<template>
    <div class="container mx-auto mt-5 px-4 sm:px-2 md:px-0 pb-7">
        <PlanetHeader />

        <PlanetDescription />
    </div>
</template>

<script setup lang="ts">
import { useVisibleStore } from '@/stores/visible.store';

import PlanetHeader from '@/components/PlanetHeader.vue';
import PlanetDescription from '@/components/PlanetDescription.vue';

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>

<style scoped></style>