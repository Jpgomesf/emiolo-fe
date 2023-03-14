<template>
    <header class="dark:bg-gray-900">
        <div class="container mx-auto py-8 ">
            <div class="mt-3 flex-col">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    {{ title }}
                </h1>

                <p class="mt-1 text-md leading-relaxed text-gray-300 dark:text-gray-400">
                    {{ description }}
                </p>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    description: string,
}>()

const { title, description } = props
</script>

<style scoped></style>