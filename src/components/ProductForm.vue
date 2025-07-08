<template>
  <form @submit.prevent="saveProduct">
    <p>Naam</p>
    <input v-model="name" required />
    <p>Voorraad</p>
    <input type="number" v-model="actualAmount" required />
    <p>Vereist aantal</p>
    <input type="number" v-model="minimumAmount" required />
    <button type="submit">Toevoegen</button>
    <button @click.prevent="cancel">Annuleren</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAllProducts } from "../domains/inventory/inventoryStore";

const emit = defineEmits(["save"]);
const props = defineProps({
  product: Object,
});

const router = useRouter();

const name = ref(props.product.name);
const actualAmount = ref(props.product.actualAmount);
const minimumAmount = ref(props.product.name);

function saveProduct() {
  const newProduct = { ...props.product };
  if (newProduct.id === undefined) {
    const products = getAllProducts.value;
    const maxId = Math.max(...products.map((p) => p.id));
    newProduct.id = maxId + 1;
  }
  newProduct.name = name.value;
  newProduct.actualAmount = actualAmount.value;
  newProduct.minimumAmount = minimumAmount.value;
  emit("save", newProduct);
  router.push("/table");
}

function cancel() {
  router.push("/table");
}
</script>
