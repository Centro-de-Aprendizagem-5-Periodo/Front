<script setup>

import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';
import { useRoute } from 'vue-router';
import CardsSectionComponent from '../components/CardsSectionComponent.vue';

const route = useRoute();
const currentHeaderTitle = route.name

const buttons = [
  { title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
  { title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
  { title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const sections = [
  {
    title: 'Cursos em andamento',
    courses: [
      { title: 'Curso teste 3', img: "" },
      { title: 'Curso teste 4', img: "" },
      { title: 'Curso teste 5', img: "" }
    ]
  },
  {
    title: 'Cursos concluídos',
    courses: [
      { title: 'Fundamentos do Scrum', img: "" },
      { title: 'Curso teste 2', img: ""  }
    ]
  }
]

</script>

<template>

  <NavbarComponent :buttons="buttons" />
  <div id="page-wrap">
    <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
    <CardsSectionComponent :sections="sections"></CardsSectionComponent>
  </div>

</template>