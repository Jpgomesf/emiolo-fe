<template>
    <article
        class="rounded-lg flex border border-gray-400 dark:bg-gray-900 p-6 mt-4 hover:shadow-md transition-shadow duration-300"
        v-for="ship in ships" :key="ship.name">
        <div class="w-full">
            <h6 class="text-lg font-bold text-gray-200">{{ ship.name }}</h6>
            <div class="flex">
                <div class="mt-1 flex-col">
                    <p class="text-sm font-normal text-gray-200">{{ 'Length: ' + ship.length }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Manufacturer: ' + ship.manufacturer }}</p>
                </div>
                <div class="mt-1 ml-4 flex-col">
                    <p class="text-sm font-normal text-gray-200">{{ 'Price: ' + ship.cost_in_credits }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Model: ' + ship.model }}</p>
                </div>
                <div class="mt-1 ml-4 flex-col">
                    <p class="text-sm font-normal text-gray-200">{{ 'Max A. Speed: ' + ship.max_atmosphering_speed }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Crew: ' + ship.crew }}</p>
                </div>
                <div class="mt-1 ml-4 flex-col">
                    <p class="text-sm font-normal text-gray-200">{{ 'Cargo capacity: ' + ship.cargo_capacity }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Consumables: ' + ship.consumables }}</p>
                </div>
                <div class="mt-1 ml-4 flex-col">
                    <p class="text-sm font-normal text-gray-200">{{ 'Hyperdrive rating: ' + ship.hyperdrive_rating }}</p>
                    <p class="text-sm font-normal text-gray-200">{{ 'Starship class: ' + ship.starship_class }}</p>
                </div>
            </div>
        </div>

    </article>
</template>

<script setup lang="ts">
import { useStarStore } from '@/stores/star.store';
import { computed } from 'vue';

const starStore = useStarStore();
const ships = computed(() => starStore.getShips);

</script>

<style scoped></style>