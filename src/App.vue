<template>
  <nav>
    <RouterView />
    <RouterLink to="/table">Go to Inventory Table</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
