import { createApp } from 'vue';
import './assets/global.scss';
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faBars, faTimes, faSignOut } from "@fortawesome/free-solid-svg-icons";


library.add(faPhone, faBars, faTimes, faSignOut)
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
