import VoorbeeldFile from "./pages/VoorbeeldFile.vue";
import Home from "./pages/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/vb",
    component: VoorbeeldFile,
  },
];
