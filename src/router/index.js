import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MeusCursosView from "../views/MeusCursosView.vue"
import MeusCertificadosView from "../views/MeusCertificadosView.vue"
import TodosOsCursosView from "../views/TodosOsCursosView.vue"
import CursoView from "../views/CursoView.vue";
import EditarUsuarioView from "../views/EditarUsuarioView.vue"
import CadastrarUsuarioView from "../views/CadastrarUsuarioView.vue"

const routes = [
  {
    path: "/meus-cursos",
    name: "Meus Cursos",
    component: MeusCursosView,
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
  },
  {
    path: "/curso/:nome/:aula/:modulo",
    name: "Curso",
    component: CursoView
  },
  {
    path: "/",
    name: "Login",
    component: LoginView
  },
  {
    path: "/cadastrar",
    name: "Cadastrar Usuário",
    component: CadastrarUsuarioView
  },
  {
    path: "/editar",
    name: "Editar Usuário",
    component: EditarUsuarioView
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;