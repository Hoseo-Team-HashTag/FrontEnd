/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

import router from './router/index';

import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;

const app = createApp(App).use(router);

registerPlugins(app);

app.mount('#app');
