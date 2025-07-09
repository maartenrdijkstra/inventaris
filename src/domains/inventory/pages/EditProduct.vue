<template>
  <ProductForm :product="product" @save="saveProduct"></ProductForm>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getProductById, type Product } from "../InventoryStore";
import ProductForm from "../../../components/ProductForm.vue";
import { updateProduct } from "../InventoryStore";

const route = useRoute();
const id = Number(route.params.id);

const product = getProductById(id);

const saveProduct = (updatedProduct: Product) => {
  updateProduct(updatedProduct);
};
</script>
