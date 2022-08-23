<script lang="ts" setup>
const publicEnvVar = import.meta.env.VITE_MY_ENV_VARIABLE
</script>

<template>
  <div>
    <p>message: {{ $t("studio.headline", { name: "Tom" }) }}</p>
  </div>
  <div>
    {{ publicEnvVar }}
  </div>
</template>
