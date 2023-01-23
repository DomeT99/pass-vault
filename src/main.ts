import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

/**Router */
import router from "./router";
/**Pinia */
const pinia = createPinia();

/**CSS*/
import "./assets/scss/global.scss";
createApp(App).use(router).use(pinia).mount("#app");
