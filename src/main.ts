import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './css/index.scss';

// Components
import BnbButton from './components/BnbButton.vue';
import BnbCalendar from './components/BnbCalendar.vue';
import BnbReview from './components/BnbReview.vue';
import BnbHeader from './components/BnbHeader.vue';
import BnbDialog from './components/BnbDialog.vue';
import BnbEquipmentDialog from './views/detail/components/BnbEquipmentDialog.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('BnbHeader', BnbHeader);
app.component('BnbButton', BnbButton);
app.component('BnbCalendar', BnbCalendar);
app.component('BnbReview', BnbReview);
app.component('BnbDialog', BnbDialog);

// Others
app.component('BnbEquipmentDialog', BnbEquipmentDialog);

app.mount('#app');
