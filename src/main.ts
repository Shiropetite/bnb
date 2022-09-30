import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./css/index.scss";

// Components
import BnbButton from "./components/BnbButton.vue";
import BnbCalendar from "./components/BnbCalendar.vue";
import BnbReview from "./components/BnbReview.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("BnbButton", BnbButton);
app.component("BnbCalendar", BnbCalendar);
app.component("BnbReview", BnbReview);

app.mount("#app");
