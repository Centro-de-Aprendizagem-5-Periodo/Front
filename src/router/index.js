import { createRouter, createWebHistory } from "vue-router";
import SomeView from "../views/SomeView.vue"

const routes = [
    {
      path: "/",
      name: "home",
      component: SomeView,
      meta: { headerName: "Home" },
    }
  ];
  
const router = createRouter({
history: createWebHistory(),
routes,
});
  
export default router;