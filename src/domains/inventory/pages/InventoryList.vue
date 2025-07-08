<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      Naam: {{ product.name }}<br />
      Voorraad: {{ product.actualAmount }}<br />
      Minimale voorraad: {{ product.minimumAmount }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { getProducts } from "../InventoryStore";

const products = getProducts.value;
</script>
