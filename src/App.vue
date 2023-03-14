<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

import { useVisibleStore } from '@/stores/visible.store';
import { computed } from 'vue';

const visibleStore = useVisibleStore();

const isVisible = computed(() => visibleStore.isVisible);


// const callback: CallbackTypes.CredentialCallback  = (res) => {
//   const userData: any = decodeCredential(res.credential)
//   console.log("res", userData)
//   console.log("name", userData.name, userData.email, userData.picture)
 
// }
</script>

<template>
  <div class="dark:bg-gray-900 min-h-screen">
    <Navbar v-if="isVisible"/>

    <RouterView />
  </div>
</template>

<style scoped>
</style>
