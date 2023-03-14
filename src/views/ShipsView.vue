<template>
    <Header :description="shipHeader.description" :title="shipHeader.title" />

    <StarComponentList image="https://rare-gallery.com/uploads/posts/504084-Spaceship-Star.jpg" title="Starships">
        <ShipGroup />
    </StarComponentList>

    <BackButton class="pt-3 pb-5 justify-center"/> 
</template>
  
<script setup lang="ts">
import { useVisibleStore } from '@/stores/visible.store';
import Header from '@/components/Header.vue';
import StarComponentList from '@/components/StarComponentList.vue';
import ShipGroup from '@/components/ShipGroup.vue';
import BackButton from '@/components/BackButton.vue';

const shipHeader = {
    title: "Exploring the Fascinating Spaceships of the Star Wars Universe",
    description: "The Star Wars franchise features a wide variety of spaceships, each with their own unique design and capabilities. These spacecraft are a key element of the Star Wars universe, serving as the primary mode of transportation for characters as they travel between planets and engage in battles. From the iconic Millennium Falcon to the sleek and deadly TIE Fighters, the Star Wars franchise is known for its diverse and fascinating collection of spacecraft. These ships are not just vehicles for transportation; they are integral to the story, representing the technology and power of the various factions in the galaxy."
}

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>
  
<style scoped></style>