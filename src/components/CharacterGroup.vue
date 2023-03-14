<template>
    <div class="container flex space-x-3">
        <article
            class="rounded-lg w-full flex border border-gray-400 dark:bg-gray-900 py-3 px-3 mt-4 hover:shadow-md transition-shadow duration-300"
            v-for="char in chars" :key="char.name">
            <div class="w-full">
                <h6 class="text-lg font-bold text-gray-200">{{ char.name }}</h6>
                <div class="flex">
                    <div class="mt-3 flex-col space-y-1">
                        <p class="text-sm font-normal text-gray-200">{{ 'Mass: ' + char.mass + 'kg' }}</p>
                        <p class="text-sm font-normal text-gray-200">{{ 'Height: ' + char.height + 'cm' }}</p>
                        <p class="text-sm font-normal text-gray-200">{{ 'Hair color: ' + char.hair_color }}</p>
                        <p class="text-sm font-normal text-gray-200">{{ 'Eye color: ' + char.eye_color }}</p>
                        <p class="text-sm font-normal text-gray-200">{{ 'Birth year: ' + char.birth_year }}</p>
                        <p class="text-sm font-normal text-gray-200">{{ 'Gender: ' + char.gender }}</p>
                    </div>
                </div>
            </div>
    
        </article>
    </div>

</template>

<script setup lang="ts">
import { useStarStore } from '@/stores/star.store';
import { computed } from 'vue';

const starStore = useStarStore();

const chars = computed(() => starStore.getCharacters);

</script>

<style scoped></style>