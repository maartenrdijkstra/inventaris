<template>
  <nav class="somePadding">
    <RouterLink class="somePadding" to="/table"
      >Go to Inventory Table</RouterLink
    >
    <RouterLink class="somePadding" to="/add">Add Product</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.somePadding {
  padding: 2rem;
}
</style>
