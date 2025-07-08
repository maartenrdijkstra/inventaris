import { ref } from "vue";

const examples = ref([
  {
    id: 1,
    name: "test1",
    address: "test2",
  },
  {
    id: 2,
    name: "test3",
    address: "test4",
  },
]);

// Getter
export const getAllExamples = examples;
