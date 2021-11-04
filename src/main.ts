import { createApp } from 'vue';
import Vue3TouchEvents from 'vue3-touch-events';
import FontAwesomeIcon from '@/plugins/font-awesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(Vue3TouchEvents)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
