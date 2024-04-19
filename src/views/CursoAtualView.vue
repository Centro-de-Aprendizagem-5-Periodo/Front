<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponentCursos from '../components/navBar/courseNavbar/CourseNavbarComponent.vue';
import SectionTitleComponent from '../components/SectionTitleComponent.vue';
import SlidesComponent from '../components/cursoAtual/SlidesComponent.vue';
import MateriaComplementarComponent from '../components/cursoAtual/MateriaComplementarComponent.vue';

import { useRoute } from 'vue-router';
import ButtonComponent from '../components/cursoAtual/ButtonComponent.vue';

const slides = [
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide1_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide2_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide3_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide6_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide7_2.png"
];

const route = useRoute();
const currentHeaderTitle = route.name

</script>

<template>
  <NavbarComponentCursos :buttons="buttons" />
  <div id="page-wrap">
    <HeaderComponent :title="currentHeaderTitle" />
    <div id="slide-position">
      <SlidesComponent :slides="slides" />
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