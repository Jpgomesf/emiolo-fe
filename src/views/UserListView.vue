<template>
    <UserList />
    <BackButton class="lg:justify-end justify-center"/>
</template>

<script setup lang="ts">
import UserList from '@/components/UserList.vue';
import { useVisibleStore } from '@/stores/visible.store';
import BackButton from '@/components/BackButton.vue';

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>

<style scoped>

</style>