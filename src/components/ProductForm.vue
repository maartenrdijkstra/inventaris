<template>
  <form @submit.prevent="saveProduct">
    <table>
      <tbody>
        <tr>
          <td>
            <label for="name">Naam</label>
          </td>
          <td>
            <input id="name" v-model="name" required />
          </td>
        </tr>
        <tr>
          <td>
            <label for="actual">Voorraad</label>
          </td>
          <td>
            <input id="actual" type="number" v-model="actualAmount" required />
          </td>
        </tr>
        <tr>
          <td>
            <label for="minimum">Vereist aantal</label>
          </td>
          <td>
            <input
              id="minimum"
              type="number"
              v-model="minimumAmount"
              required
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">
            <button type="submit">Toevoegen</button>
            <button @click.prevent="cancel">Annuleren</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAllProducts } from "../domains/inventory/InventoryStore";

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

<style scoped>
.text-align-center {
  text-align: center;
}

td {
  padding: 0 1rem;
}

tfoot td {
  text-align: center;
  padding: 1rem;
}
</style>
