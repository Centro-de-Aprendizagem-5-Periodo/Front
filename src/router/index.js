import { createRouter, createWebHistory } from "vue-router";
import SlidesView from "../views/SlidesView.vue"
import MeusCursosView from "../views/MeusCursosView.vue"
import MeusCertificadosView from "../views/MeusCertificadosView.vue"
import TodosOsCursosView from "../views/TodosOsCursosView.vue"

const mockedSectionsMeusCursos = [{ title: 'Cursos em andamento', courses: [{ courseTitle: 'Curso teste 3' }, { courseTitle: 'Curso teste 4' }, { courseTitle: 'Curso teste 5' }] },
{ title: 'Cursos concluídos', courses: [{ courseTitle: 'Curso teste 1' }, { courseTitle: 'Curso teste 2', }] }]

const mockedSectionsTodosOsCursos = [{ title: 'Cursos disponíveis', courses: [{ courseTitle: 'Curso teste 1' }, { courseTitle: 'Curso teste 2' }, { courseTitle: 'Curso teste 3' }, { courseTitle: 'Curso teste 4' }, { courseTitle: 'Curso teste 5' }, { courseTitle: 'Curso teste 1' }, { courseTitle: 'Curso teste 6' }] }]
const routes = [
  {
    path: "/",
    name: "Meus Cursos",
    component: MeusCursosView,
    meta: {
      sections: mockedSectionsMeusCursos,
    },
  },
  {
    path: "/certificados",
    name: "Meus Certificados",
    component: MeusCertificadosView
  },
  {
    path: "/cursos",
    name: "Todos Cursos",
    component: TodosOsCursosView,
    meta: {
      sections: mockedSectionsTodosOsCursos
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;