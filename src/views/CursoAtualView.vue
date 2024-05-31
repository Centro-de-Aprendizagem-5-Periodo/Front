<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponentCursos from '../components/navBar/courseNavbar/CourseNavbarComponent.vue';
import SectionTitleComponent from '../components/SectionTitleComponent.vue';
import SlidesComponent from '../components/cursoAtual/SlidesComponent.vue';
import MateriaComplementarComponent from '../components/cursoAtual/MateriaComplementarComponent.vue';

import { useRoute } from 'vue-router';
import ButtonComponent from '../components/cursoAtual/ButtonComponent.vue';

const route = useRoute();
const currentHeaderTitle = route.name
const partOne = route.params[0]

</script>

<template>
  <NavbarComponentCursos :buttons="buttons" />
  <div id="page-wrap">
    <HeaderComponent :title="currentHeaderTitle" />
    <div id="slide-position">
      <SlidesComponent :slides="partOne.slides" />
    </div>
    <SectionTitleComponent :title="'Materiais complementares:'" />
    <MateriaComplementarComponent />
    <ButtonComponent />
  </div>
</template>

<style lang="scss" scoped>
  #slide-position {
    height: 60dvh;
    padding-top: 75px;
    padding-bottom: 75px;
  }
</style>