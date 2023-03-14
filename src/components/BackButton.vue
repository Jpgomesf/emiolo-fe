<template>
    <div class="container mx-auto flex items-center">
        <RouterLink to="/" class="group relative inline-block overflow-hidden border border-indigo-600 px-7 py-2 focus:outline-none focus:ring"
        >
            <span
                class="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

            <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                Go back!
            </span>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>