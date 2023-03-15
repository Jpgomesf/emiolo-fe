<template>
    <div class="container px-3 sm:px-1 lg:px-0 space-y-3 lg:space-y-6">
        <div class="relative overflow-hidden rounded-md dark:bg-gray-800 p-6 lg:p-8" v-for="guest of guests">
            <div class="flex items-center">
                <img class="h-28 w-28 rounded-full" :src="guest.picture" alt="">
       
    
                <div class="flex-col ml-10 pr-4 space-y-2">
                    <h3 class="lg:text-2xl font-bold text-gray-900 dark:text-white text-2xl">
                        {{ guest.name }}
                    </h3>
                    <p class="text-md lg:text-lg font-normal dark:text-gray-300">
                        {{ guest.email }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { computed } from 'vue';
const userStore = useUserStore();
const guests = computed(() => userStore.getUsers);

</script>

<style scoped></style>