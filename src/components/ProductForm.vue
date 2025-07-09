<template>
  <form @submit.prevent="saveProduct">
    <table>
      <tbody>
        <tr>
          <td>
            <label for="name">Naam</label>
          </td>
          <td>
            <input id="name" v-model="productToSave.name" required />
          </td>
        </tr>
        <tr>
          <td>
            <label for="actual">Voorraad</label>
          </td>
          <td>
            <input
              id="actual"
              type="number"
              v-model="productToSave.actualAmount"
              required
            />
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
              v-model="productToSave.minimumAmount"
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Product } from "../domains/inventory/InventoryStore";

const emit = defineEmits(["save"]);

const { product } = defineProps<{ product: Product }>();

const router = useRouter();

const productToSave = ref({ ...product });

const saveProduct = () => {
  emit("save", productToSave.value);
  router.push("/table");
};

const cancel = () => {
  router.push("/table");
};
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
