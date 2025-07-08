import InventoryTable from "./pages/InventoryTable.vue";
import Home from "./pages/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/table",
    component: InventoryTable,
  },
];
