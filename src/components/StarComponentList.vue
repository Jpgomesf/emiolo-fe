<template>
    <div class="container mx-auto mt-5">
        <div class="relative block overflow-hidden rounded-lg dark:bg-gray-800 border border-gray-700 p-4 sm:p-6 lg:p-8">
            <img :src="image" alt="Image description" class="absolute inset-0 h-full w-full object-cover opacity-5">

            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex inline-flex items-center sm:justify-between sm:gap-4">
                <div>
                    <h3 class="text-lg font-bold text-white sm:text-2xl">
                        {{ title }}
                    </h3>
                </div>
            </div>

            <div>
                <slot>
                </slot>
            </div>

            <dl class="mt-6">
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
 const props = defineProps<{
    image: string,
    title: string,
}>()

const { image, title } = props
 

</script>

<style scoped>

</style>