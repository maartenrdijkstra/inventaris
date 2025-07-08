<template>
  <nav>
    <RouterView />
    <RouterLink to="/list">Go to Inventory List</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
