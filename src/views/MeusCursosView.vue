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
      { title: 'Sistemas Operacionais', img: "https://tse1.mm.bing.net/th?id=OIP.948ARNFx15GUXG1T__MidwHaEK&pid=Api&P=0&h=180" },
    ]
  },
  {
    title: 'Cursos concluídos',
    courses: [
      { title: 'Fundamentos do Scrum', img: "https://www.inesdi.com/sites/default/files/inline-images/531x354xmetodologia,P20scrum,P202.jpg.pagespeed.ic.FVz7Rkz-by.jpg" }
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