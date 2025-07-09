import { computed, ref } from "vue";

export interface Product {
  id: number;
  name: string;
  actualAmount: number;
  minimumAmount: number;
}

const products = ref([
  {
    id: 1,
    name: "pruimen",
    actualAmount: 15,
    minimumAmount: 10,
  },
  {
    id: 2,
    name: "appels",
    actualAmount: 20,
    minimumAmount: 5,
  },
  {
    id: 3,
    name: "bananen",
    actualAmount: 12,
    minimumAmount: 70,
  },
  {
    id: 4,
    name: "perziken",
    actualAmount: 8,
    minimumAmount: 9,
  },
  {
    id: 5,
    name: "dadels",
    actualAmount: 50,
    minimumAmount: 30,
  },
  {
    id: 6,
    name: "frambozen",
    actualAmount: 40,
    minimumAmount: 25,
  },
  {
    id: 7,
    name: "bessen",
    actualAmount: 120,
    minimumAmount: 80,
  },
]);

// Getter
export const getAllProducts = computed(() => products.value);
export const getProductById = (id: number) =>
  computed(() => products.value.find((product: Product) => product.id === id));

// Actions
export const addProduct = (product: Product) => {
  if (product.id === undefined) {
    const products: Product[] = getAllProducts.value;
    product.id = Math.max(...products.map((p) => p.id)) + 1;
  }
  console.log(product);
  products.value.push(product);
};
export const updateProduct = (updated: Product) => {
  const index = products.value.findIndex((p: Product) => p.id === updated.id);
  if (index !== -1) {
    products.value[index] = updated;
  }
  console.log(products.value[index]);
};

export const getToOrder = () => {
  return products.value.filter(
    (product: Product) => product.actualAmount < product.minimumAmount
  );
};
