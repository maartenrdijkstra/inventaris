<template>
  <table class="inventory-table">
    <thead>
      <tr>
        <th>Productnaam</th>
        <th>Aantal aanwezig</th>
        <th>Vereist aantal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.actualAmount }}</td>
        <td>{{ product.minimumAmount }}</td>
        <td>
          <RouterLink :to="`/edit/${product.id}`">Bewerken</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { getAllProducts } from "../InventoryStore";

const products = getAllProducts;
</script>

<style>
table {
  margin: 0 auto;
}

.inventory-table td {
  padding: 0 3rem;
  text-align: left;
}
</style>
