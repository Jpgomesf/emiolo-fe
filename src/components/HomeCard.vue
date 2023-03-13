<template>
    <div class="flex-col w-full mt-5">
        <article class="overflow-hidden rounded-lg border h-max border-gray-400 shadow-sm">
            <img alt="Office" :src="picture" class="h-80 w-full object-cover" />

            <div class="p-4 sm:p-6">
                <a>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-xl ">
                        {{ title }}
                    </h3>
                </a>

                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400">
                    {{ message }}
                </p>

                <RouterLink :to="link" class="group mt-2 relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                    <span
                        class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class="relative block border border-current bg-white px-6 py-2">
                        Read More
                    </span>
                </RouterLink>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    message: string,
    picture: string,
    link: string
}>()

const { message, title, picture } = props
</script>

<style scoped></style>