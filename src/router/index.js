import { createRouter, createWebHistory } from "vue-router";
import MeusCursosView from "../views/MeusCursosView.vue"
import MeusCertificadosView from "../views/MeusCertificadosView.vue"
import TodosOsCursosView from "../views/TodosOsCursosView.vue"

const routes = [
  {
    path: "/",
    name: "Meus Cursos",
    component: MeusCursosView
  },
  {
    path: "/certificados",
    name: "Meus Certificados",
    component: MeusCertificadosView
  },
  {
    path: "/cursos",
    name: "Todos Cursos",
    component: TodosOsCursosView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;