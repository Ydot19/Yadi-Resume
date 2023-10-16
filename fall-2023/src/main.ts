import { createApp } from 'vue'
import "primevue/resources/themes/mdc-light-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faAws } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faPassport, faMapPin, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import PrimeVue from 'primevue/config'


library.add(faEnvelopeOpenText);
library.add(faPassport);
library.add(faMapPin);
library.add(faMobileScreen);
library.add(faLinkedin);
library.add(faGithub);
library.add(faAws);


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(PrimeVue)
    .mount("#app");