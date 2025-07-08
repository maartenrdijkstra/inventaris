<template>
  <ProductForm :product="product" @save="addProductItem"></ProductForm>
</template>

<script setup>
import ProductForm from "../../../components/ProductForm.vue";
import { addProduct } from "../InventoryStore";

const product = { name: "", actualAmount: 0, minimumAmount: 0 };

function addProductItem(newProduct) {
  addProduct(newProduct);
}
</script>
