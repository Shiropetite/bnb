import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./css/index.scss";

// Components
import BnbButton from "./components/BnbButton.vue";
import BnbDropdownButton from "./components/BnbDropdownButton.vue";
import BnbAccountMenu from "./components/BnbAccountMenu.vue";
import BnbCalendar from "./components/BnbCalendar.vue";
import BnbHeader from "./components/BnbHeader.vue";
import BnbPopup from "./components/BnbPopup.vue";
import BnbLink from "./components/BnbLink.vue";

import BnbEquipmentPopup from "./pages/detail/components/BnbEquipmentPopup.vue";
import CommentPopup from "./pages/detail/components/reviews/CommentPopup.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("BnbHeader", BnbHeader);
app.component("BnbButton", BnbButton);
app.component("BnbLink", BnbLink);
app.component("BnbCalendar", BnbCalendar);
app.component("BnbPopup", BnbPopup);
app.component("BnbDropdownButton", BnbDropdownButton);
app.component("BnbAccountMenu", BnbAccountMenu);

// Popups
app.component("BnbEquipmentPopup", BnbEquipmentPopup);
app.component("CommentPopup", CommentPopup);

app.mount("#app");
