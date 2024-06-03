<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponentCursos from '../components/navBar/courseNavbar/CourseNavbarComponent.vue';
import SlidesComponent from '../components/curso/slide/SlidesComponent.vue';
import MaterialComplementarComponent from '../components/curso/MaterialComplementarComponent.vue';

import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import ButtonComponent from '../components/curso/ButtonComponent.vue';
import VideoComponent from '../components/curso/video/VideoComponent.vue';

const route = useRoute();

let course = ref(null);

// watch the params of the route to fetch the data again
watch(() => route.params, fetchData, { immediate: true })

async function fetchData(params) {
 // buscar do "BE" pelo nome do curso route.params.nome
 if (route.params.nome.replaceAll("-", " ") === "Fundamentos do Scrum" && (params.aula == 1 && route.params.modulo == 1)) {
    course = {
      name: "Fundamentos do Scrum",
      image: "img",
      parts: 5,
      progress: 50,
      currentPart: {
              number: 1,
              modules: [{number: 1, title: "Processos", duration: "01:00"}, {number: 2, title: "Modulo 2", duration: "02:00"}, {number: 3, title: "Modulo 3", duration: "03:00"}],
              currentModule: {
                number: 1,
                content: {
                            pageType: "slide",
                            slides: [
                                        "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide1_2.png",
                                        "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide2_2.png",
                                        "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide3_2.png",
                                        "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide6_2.png",
                                        "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide7_2.png"
                                    ],
                            extraContent: [
                                            {
                                                title: "O que é o scrum?",
                                                link: "https://www.atlassian.com/br/agile/scrum"
                                            },
                                            {
                                                title: "Scrum",
                                                link: "https://youtu.be/3aCww_1RnL0"
                                            },
                                            {
                                                title: "Scrum Guide",
                                                link: "https://www.scrum.org/resources/scrum-guide"
                                            }
                            ],
                            references: [
                                          {
                                            reference: "https://www.google.com/"
                                          }
                            ]
                }
              }
      }
    }
  } else if (route.params.nome.replaceAll("-", " ") === "Fundamentos do Scrum" && (route.params.aula == 2 || params.modulo == 2)) {
    course = {
      name: "Fundamentos do Scrum",
      image: "img",
      parts: 5,
      progress: 60,
      currentPart: {
              number: 1,
              modules: [{number: 1, title: "Processos", duration: "01:00"}, {number: 2, title: "Modulo 2", duration: "02:00"}, {number: 3, title: "Modulo 3", duration: "03:00"}],
              currentModule: {
                number: 2,
                content: {
                            pageType: "slide",
                            slides: [
                                      "https://png.pngtree.com/back_origin_pic/04/06/56/c16a17e4484e1bdf02d1d83fdc19461c.jpg",
                                      "https://i.pinimg.com/originals/e6/dd/7d/e6dd7dcb605aa52e65754c899ffbb1a4.jpg",
                                      "https://i.pinimg.com/originals/4d/48/a8/4d48a89ac4e59d79ef3f8ef38047bf33.jpg",
                                      "https://todaatual.com/wp-content/uploads/2014/07/Imagens-mais-Lindas-do-Mundo-4.jpg"
                                    ],
                            extraContent: [
                                {
                                    title: "Outras imagens",
                                    link: "https://www.google.com/search?q=imagens"
                                }
                            ]
                }
              }
      }
    }
  } else {
    course = {
      name: "Outro Curso",
      image: "img",
      parts: 5,
      progress: 50,
      currentPart: {
        number: 1,
        modules: [{number: 1, title: "Modulo 1", duration: "01:00"}, {number: 2, title: "Modulo 2", duration: "02:00"}, {number: 3, title: "Modulo 3", duration: "03:00"}],
        currentModule: {
          number: 1,
          content: {
                      pageType: "slide",
                      slides: [
                                "https://png.pngtree.com/back_origin_pic/04/06/56/c16a17e4484e1bdf02d1d83fdc19461c.jpg",
                                "https://i.pinimg.com/originals/e6/dd/7d/e6dd7dcb605aa52e65754c899ffbb1a4.jpg",
                                "https://i.pinimg.com/originals/4d/48/a8/4d48a89ac4e59d79ef3f8ef38047bf33.jpg",
                                "https://todaatual.com/wp-content/uploads/2014/07/Imagens-mais-Lindas-do-Mundo-4.jpg"
                              ],
                      extraContent: [
                          {
                              title: "Outras imagens",
                              link: "https://www.google.com/search?q=imagens"
                          }
                      ]
          }
        }
      }      
    }
  }
}
</script>

<template>
  <NavbarComponentCursos :course="course" />
  <div id="page-wrap">
    <HeaderComponent :title="course.name" />
    <div id="visual-content-position">
      <SlidesComponent v-if="course.currentPart.currentModule.content.pageType == 'slide'" :slides="course.currentPart.currentModule.content.slides" />
      <VideoComponent v-else ></VideoComponent>
    </div>
    <MaterialComplementarComponent :materiaisComplementares="course.currentPart.currentModule.content.extraContent"/>
    <ButtonComponent />
  </div>
</template>

<style lang="scss" scoped>
  #visual-content-position {
    height: 60dvh;
    padding-top: 75px;
    padding-bottom: 75px;
  }
</style>