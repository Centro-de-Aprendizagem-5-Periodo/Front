import { createApp } from 'vue';
import './assets/global.scss';
import App from "./App.vue";
import router from "./router";
import store from './store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faPhone,
    faBars,
    faTimes,
    faSignOut,
    faPencil,
    faGraduationCap,
    faScroll,
    faBook,
    faPlay,
    faChevronRight,
    faChevronLeft,
    faStar,
    faSquareCheck,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faBars, faTimes, faSignOut, faPencil, faGraduationCap, faScroll, faBook, faPlay, faChevronRight, faChevronLeft, faStar, faSquareCheck, faArrowLeft)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(store).mount("#app");

