<template>
    <div
        class="rounded-lg flex border border-gray-400 dark:bg-gray-900 p-6 mt-4 hover:shadow-md transition-shadow duration-300"
        v-for="resident in residents" :key="resident.name">
        <div class="w-full">
            <h6 class="text-lg font-bold text-gray-200">{{ resident.name }}</h6>
            <div class="flex-col lg:flex lg:flex-row mt-1 lg:space-x-4">
                <div class="">
                    <p class="text-sm font-normal text-gray-200">{{ 'Mass: ' + resident.mass + 'kg' }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Height: ' + resident.height + 'cm' }}</p>
                </div>

                <div>
                    <p class="text-sm font-normal text-gray-200">{{ 'Hair color: ' + resident.hair_color }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Eye color: ' + resident.eye_color }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useStarStore } from '@/stores/star.store';
import { computed } from 'vue';

const startStore = useStarStore();
const residents = computed(() => startStore.getResidents);

</script>

<style scoped>

</style>