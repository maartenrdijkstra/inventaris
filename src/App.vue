<template>
  <nav>
    <RouterView />
    <RouterLink class="addPadding" to="/vb">Go to Examples</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
