import { createRouter, createWebHistory } from "vue-router";
import CursoAtual from "../views/CursoAtual.vue"
import MeusCursosView from "../views/MeusCursosView.vue"
import MeusCertificadosView from "../views/MeusCertificadosView.vue"
import TodosOsCursosView from "../views/TodosOsCursosView.vue"

const routes = [
  {
    path: "/",
    name: "Meus Cursos",
    component: MeusCursosView,
  },
  {
    path: "/certificados",
    name: "Meus Certificados",
    component: MeusCertificadosView
  },
  {
    path: "/curso-atual",
    name: "Fundamentos do Scrum",
    component: CursoAtual
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