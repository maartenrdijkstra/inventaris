import InventoryTable from "./pages/InventoryTable.vue";
import Home from "./pages/Home.vue";
import CreateProduct from "./pages/CreateProduct.vue";
import EditProduct from "./pages/EditProduct.vue";
import OrderPage from "./pages/OrderPage.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/table",
    component: InventoryTable,
  },
  {
    path: "/add",
    component: CreateProduct,
  },
  {
    path: "/edit/:id",
    component: EditProduct,
  },
  {
    path: "/order",
    component: OrderPage,
  },
];
