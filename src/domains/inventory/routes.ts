import InventoryList from "./pages/InventoryList.vue";
import Home from "./pages/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: InventoryList,
  },
];
