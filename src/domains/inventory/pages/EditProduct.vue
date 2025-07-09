<template>
  <ProductForm :product="product" @save="saveProduct"></ProductForm>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getProductById } from "../InventoryStore";
import ProductForm from "../../../components/ProductForm.vue";
import { updateProduct } from "../InventoryStore";

const route = useRoute();
const id = Number(route.params.id);

const product = getProductById(id);

const saveProduct = (updatedProduct) => {
  updateProduct(updatedProduct);
};
</script>
