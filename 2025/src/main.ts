import { createApp } from 'vue'
import Aura from '@primevue/themes/aura';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faAws } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faPassport, faMapPin, faMobileScreen, faGlobe } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import PrimeVue from 'primevue/config'


library.add(faEnvelopeOpenText);
library.add(faPassport);
library.add(faMapPin);
library.add(faMobileScreen);
library.add(faLinkedin);
library.add(faGithub);
library.add(faAws);
library.add(faGlobe);


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.fake-dark-selector', // trying to also force a non-usage of the dark mode
                cssLayer: {
                    name: 'primevue',
                    // Enable PrimeVue CSS layer and configure the tailwind styles to have higher specificity with layering
                    order: 'tailwind-base, primevue, tailwind-utilities',
                },
            },
        }
    })
    .mount("#app");
