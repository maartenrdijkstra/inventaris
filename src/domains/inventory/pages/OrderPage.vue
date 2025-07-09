<template>
  <h1>Bestellingen</h1>
  <table>
    <thead>
      <tr>
        <th>Naam</th>
        <th>Hoeveelheid</th>
        <th>Vereist aantal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          {{ product.name }}
        </td>
        <td>
          {{ product.actualAmount }}
        </td>
        <td>
          {{ product.minimumAmount }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { getToOrder } from "../InventoryStore";

const products = getToOrder();
</script>

<style scoped>
table td,
th {
  padding-right: 5rem;
}
</style>
