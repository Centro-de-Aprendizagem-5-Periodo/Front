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

watch(() => route.params, fetchData, { immediate: true })

async function fetchData(params) {
  if (params.nome.replaceAll("-", " ") === "Fundamentos do Scrum") {

    if (params.aula == 1 && params.modulo == 1) {
      course = {
        name: "Fundamentos do Scrum",
        image: "https://www.kindpng.com/picc/m/53-539760_scrum-logo-hd-png-download.png",
        parts: 2,
        progress: 100,
        currentPart: {
          number: 1,
          modules: [{ number: 1, title: "Módulo 1", duration: "01:00" }, { number: 2, title: "Módulo 2", duration: "03:21" }],
          currentModule: {
            number: 1,
            title: "Módulo 1",
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
    }

    if (params.aula == 1 && params.modulo == 2) {
      course = {
        name: "Fundamentos do Scrum",
        image: "https://www.kindpng.com/picc/m/53-539760_scrum-logo-hd-png-download.png",
        parts: 2,
        progress: 100,
        currentPart: {
          number: 1,
          modules: [{ number: 1, title: "Módulo 1", duration: "01:00" }, { number: 2, title: "Módulo 2", duration: "03:21" }],
          currentModule: {
            number: 2,
            title: "Módulo 2",
            content: {
              pageType: "video",
              video: "scrum.mp4",
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

    if (params.aula == 2 && params.modulo == 1) {
      course = {
        name: "Fundamentos do Scrum",
        image: "https://www.kindpng.com/picc/m/53-539760_scrum-logo-hd-png-download.png",
        parts: 2,
        progress: 100,
        currentPart: {
          number: 2,
          modules: [{ number: 1, title: "Módulo 1", duration: "01:00" }],
          currentModule: {
            number: 1,
            title: "Módulo 1",
            content: {
              pageType: "slide",
              slides: [
                "https://media.slidesgo.com/storage/23386225/responsive-images/0-daily-scrum-meeting___media_library_original_1600_900.jpg",
                "https://media.slidesgo.com/storage/23386226/responsive-images/1-daily-scrum-meeting___media_library_original_1600_900.jpg",
                "https://media.slidesgo.com/storage/23386227/responsive-images/2-daily-scrum-meeting___media_library_original_1600_900.jpg",
                "https://media.slidesgo.com/storage/23386228/responsive-images/3-daily-scrum-meeting___media_library_original_1600_900.jpg"
              ],
              extraContent: [
                {
                  title: "Scrum Meeting",
                  link: "https://slidesgo.com/theme/daily-scrum-meeting"
                }
              ]
            }
          }
        }
      }
    }
  }

  if (params.nome.replaceAll("-", " ") === "Sistemas Operacionais") {

    if (params.aula == 1 && params.modulo == 1) {
      course = {
        name: "Sistemas Operacionais",
        image: "https://i2.wp.com/comofuncionaque.com/wp-content/uploads/2015/06/El-sistema-operativo-de-Linux-sirvio-de-base-para-desarrollar-Windows-y-posteriormente-Mac.gif",
        parts: 2,
        progress: 50,
        currentPart: {
          number: 1,
          modules: [{ number: 1, title: "Módulo 1", duration: "00:23" }],
          currentModule: {
            number: 1,
            title: "Módulo 1",
            content: {
              pageType: "video",
              video: "so.mp4",
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

    if (params.aula == 2 && params.modulo == 1) {
      course = {
        name: "Sistemas Operacionais",
        image: "https://i2.wp.com/comofuncionaque.com/wp-content/uploads/2015/06/El-sistema-operativo-de-Linux-sirvio-de-base-para-desarrollar-Windows-y-posteriormente-Mac.gif",
        parts: 2,
        progress: 50,
        currentPart: {
          number: 2,
          modules: [{ number: 1, title: "Módulo 1", duration: "01:00" }],
          currentModule: {
            number: 1,
            title: "Módulo 1",
            content: {
              pageType: "slide",
              slides: [
                "https://image3.slideserve.com/5430015/introdu-o-n.jpg",
                "https://image3.slideserve.com/5430015/slide5-n.jpg",
                "https://image3.slideserve.com/5430015/modo-de-acesso-n.jpg"
              ],
              extraContent: [
                {
                  title: "Sistemas Operacionais - Tópicos abordados",
                  link: "https://www.slideserve.com/wattan/sistemas-operacionais-powerpoint-ppt-presentation"
                }
              ]
            }
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
    <HeaderComponent :title="course.currentPart.currentModule.title" />
    <div id="visual-content-position">
      <SlidesComponent v-if="course.currentPart.currentModule.content.pageType == 'slide'" :slides="course.currentPart.currentModule.content.slides" />
      <VideoComponent v-else :video="course.currentPart.currentModule.content.video"></VideoComponent>
    </div>
    <MaterialComplementarComponent :materiaisComplementares="course.currentPart.currentModule.content.extraContent" />
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