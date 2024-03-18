import { createRouter, createWebHistory } from "vue-router";
import MeusCursosView from "../views/MeusCursosView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: MeusCursosView,
    meta: { headerName: "Home" },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;