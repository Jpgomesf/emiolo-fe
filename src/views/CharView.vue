<template>
    <Header :description="charHeader.description" :title="charHeader.title" />

    <StarComponentList image="https://i.imgur.com/5Ke5t6f.jpg" title="Characters">
        <CharacterGroup />
    </StarComponentList>
</template>
  
<script setup lang="ts">
import { useVisibleStore } from '@/stores/visible.store';
import Header from '@/components/Header.vue';
import { useStarStore } from '@/stores/star.store';
import { onMounted } from 'vue';
import StarComponentList from '@/components/StarComponentList.vue';
import CharacterGroup from '@/components/CharacterGroup.vue';

const starStore = useStarStore();

onMounted(() => {
    starStore.fetchCharacters();
})

const charHeader = {
    title: "The Epic Struggle of Good and Evil in Star Wars",
    description: `The Star Wars franchise is known for its epic battles between the forces of good and evil, where the fate of the galaxy hangs in the balance. The characters are often faced with difficult choices that require them to make sacrifices and confront their deepest fears and weaknesses.
    \n Throughout the series, we see the Jedi, the protectors of peace and justice in the galaxy, battle against the Sith, who seek to dominate and control through fear and power. The conflict between these two opposing forces is the driving force behind the story, and it is the struggle between good and evil that gives the characters depth and complexity.
    \n The characters in Star Wars are not one-dimensional heroes or villains. They are complex individuals who are constantly tested and forced to confront their flaws and weaknesses. Luke Skywalker, for example, must confront his fear of becoming like his father, Darth Vader, and must resist the temptation to give in to the dark side of the Force. Ultimately, it is the struggle between good and evil that makes Star Wars such a compelling story.
    \n The characters are relatable because they are flawed and imperfect, and their struggles reflect our own. We can all identify with the difficult choices they must make and the sacrifices they must endure, and we can all appreciate the triumph of good over evil in the end.`
}

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>
  
<style scoped></style>