<template>
  <h2>
    Smoke test voor de router. Verwijder deze file als het project verder wordt
    ontwikkeld.
  </h2>

  <ul>
    <li v-for="example in examples">{{ example.name }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { getAllExamples } from "../store";

const examples = getAllExamples.value;
</script>
