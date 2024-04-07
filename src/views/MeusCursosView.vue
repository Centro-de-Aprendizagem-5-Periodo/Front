<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import { useRoute } from 'vue-router';
import SectionTitleComponent from '../components/SectionTitleComponent.vue';

const route = useRoute();
const currentHeaderTitle = route.name

const buttons = [
  { title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
  { title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
  { title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

</script>

<template>
  <NavbarComponent :buttons="buttons" />

  <div id="page-wrap">
    <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
    <SectionTitleComponent></SectionTitleComponent>
  </div>
</template>