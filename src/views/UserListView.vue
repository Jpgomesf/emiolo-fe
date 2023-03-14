<template>
    <UserList />
</template>

<script setup lang="ts">
import UserList from '@/components/UserList.vue';
import { useVisibleStore } from '@/stores/visible.store';

const visibleStore = useVisibleStore();
visibleStore.toggleVisibilityOn();
</script>

<style scoped>

</style>