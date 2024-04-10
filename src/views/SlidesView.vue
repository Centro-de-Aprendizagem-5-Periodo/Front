<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import SectionTitleComponent from '../components/SectionTitleComponent.vue';
import SlidesComponent from '../components/SlidesComponent.vue';

const slides = [
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide1_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide2_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide3_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide6_2.png",
  "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide7_2.png"
];

const sections = ["Materiais complementares:"];

</script>

<template>
  <NavbarComponent :buttons="buttons"/>
  <div id="page-wrap">
    <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
    <SlidesComponent :slides="slides"></SlidesComponent>
    <SectionTitleComponent :sections="sections"></SectionTitleComponent>
  </div>
</template>