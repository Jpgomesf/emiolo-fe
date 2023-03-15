<template>
    
    <StarComponentList image="https://awesomewallpapers.files.wordpress.com/2015/06/9lafz7o-imgur.jpg" title="Residents of Tatooine">
        <ResidentsGroup />
    </StarComponentList>
    
    <BackButton class="py-3 lg:justify-end justify-center" />
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import ResidentsGroup from '@/components/ResidentsGroup.vue';
import StarComponentList from '@/components/StarComponentList.vue';
import { useVisibleStore } from '@/stores/visible.store';

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>

<style scoped>

</style>