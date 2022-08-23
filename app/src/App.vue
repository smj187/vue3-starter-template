<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="bg-slate-900 text-slate-300 min-h-screen w-full flex flex-col">
    <div>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      |
      <RouterLink :to="{ name: 'About' }" class="test">About</RouterLink>
      |
      <RouterLink to="/test">does not exist</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
