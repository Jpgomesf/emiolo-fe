<template>
    <div class="relative block overflow-hidden rounded-md dark:bg-gray-800 p-4 sm:p-6 lg:p-8" v-for="guest of guests">
        <div class="flex items-center">

            <img class="h-28 w-28 rounded-full" :src="guest.picture" alt="">
   

            <div class="flex-col ml-10 space-y-3">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {{ guest.name }}
                </h3>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                    {{ guest.email }}
                </p>
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