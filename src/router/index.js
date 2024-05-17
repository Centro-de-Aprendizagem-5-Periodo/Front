import { createRouter, createWebHistory } from "vue-router";
import MeusCursosView from "../views/MeusCursosView.vue"
import MeusCertificadosView from "../views/MeusCertificadosView.vue"
import TodosOsCursosView from "../views/TodosOsCursosView.vue"
import LoginView from "../views/LoginView.vue";
import CursoAtualView from "../views/CursoAtualView.vue";
import EditarUsuarioView from "../views/EditarUsuarioView.vue"

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
    path: "/curso-atual/:curso/:modulo",
    name: "Curso Atual",
    component: CursoAtualView
  },
  {
    path: "/cursos",
    name: "Todos Cursos",
    component: TodosOsCursosView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/editar",
    name: "Editar Usuário",
    component: EditarUsuarioView
  }
];
666
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;