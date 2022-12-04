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
import BnbDialog from "./components/BnbDialog.vue";
import BnbLink from "./components/BnbLink.vue";

import BnbEquipmentDialog from "./pages/detail/components/BnbEquipmentDialog.vue";
import ReviewDialog from "./pages/detail/components/reviews/ReviewDialog.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("BnbHeader", BnbHeader);
app.component("BnbButton", BnbButton);
app.component("BnbLink", BnbLink);
app.component("BnbCalendar", BnbCalendar);
app.component("BnbDialog", BnbDialog);
app.component("BnbDropdownButton", BnbDropdownButton);
app.component("BnbAccountMenu", BnbAccountMenu);

// Others
app.component("BnbEquipmentDialog", BnbEquipmentDialog);
app.component("ReviewDialog", ReviewDialog);

app.mount("#app");
