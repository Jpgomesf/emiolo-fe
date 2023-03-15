<template>
    <div class="container">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/3" v-for="(row, index) in chunkedChars" :key="index">
                <div class="mr-2" v-for="char in row" :key="char.name">
                    <div
                        class="rounded-lg w-full flex border border-gray-400 dark:bg-gray-900 py-3 px-3 mt-4"
                        >
                        <div class="w-full">
                            <h6 class="text-lg font-bold text-gray-200">{{ char.name }}</h6>
                            <div class="flex flex-row">
                                <div class="mt-3 flex-col space-y-1">
                                    <p class="text-sm font-normal text-gray-200">{{ 'Mass: ' + char.mass + 'kg' }}</p>
                                    <p class="text-sm font-normal text-gray-200">{{ 'Height: ' + char.height + 'cm' }}</p>
                                    <p class="text-sm font-normal text-gray-200">{{ 'Hair color: ' + char.hair_color }}</p>
                                </div>
                                <div class="mt-3 flex-col ml-6 space-y-1">
                                    <p class="text-sm font-normal text-gray-200">{{ 'Eye color: ' + char.eye_color }}</p>
                                    <p class="text-sm font-normal text-gray-200">{{ 'Birth year: ' + char.birth_year }}</p>
                                    <p class="text-sm font-normal text-gray-200">{{ 'Gender: ' + char.gender }}</p>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useStarStore } from '@/stores/star.store';
import { computed } from 'vue';

const starStore = useStarStore();

const chars = computed(() => starStore.getCharacters);
const limit = 1; 

// compute a chunked array of characters based on the limit
const chunkedChars = computed(() => {
  const chunkedArray = [];
  for (let i = 0; i < (chars.value?.length ?? 0); i += limit) {
  chunkedArray.push(chars.value?.slice(i, i + limit));
}
  return chunkedArray;
});

</script>

<style scoped></style>