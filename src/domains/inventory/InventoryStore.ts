import { ref, type Ref } from "vue";

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
    minimumAmount: 7,
  },
  {
    id: 4,
    name: "perziken",
    actualAmount: 8,
    minimumAmount: 8,
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
export const getProducts = products;
