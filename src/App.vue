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
  <Navbar v-if="isVisible"/>

  <div class="dark:bg-gray-900 min-h-[93vh]">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
