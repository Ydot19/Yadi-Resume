/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker, faEnvelope, faGlobeAmericas, faMobile, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import './assets/css/global.css';

Vue.use(Buefy);
library.add(faMapMarker, faEnvelope, faGlobeAmericas, faMobile, faArrowRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
