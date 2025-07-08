<template>
  <nav>
    <RouterLink to="/table">Go to Inventory Table</RouterLink>
    <RouterLink to="/add">Add Product</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
