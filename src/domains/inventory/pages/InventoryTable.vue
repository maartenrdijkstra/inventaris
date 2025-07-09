<template>
  <table>
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
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { getAllProducts } from "../inventoryStore";

const products = getAllProducts;
</script>

<style>
table {
  margin: 0 auto;
}
</style>
