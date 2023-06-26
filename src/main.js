// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

import router from './router/index';
// Axios
import axios from 'axios';

// Import Vuetify
import { createVuetify } from 'vuetify';

// Create app
const app = createApp(App).use(router);

// Use Vuetify plugin
app.use(createVuetify());

// Use other plugins
registerPlugins(app);

// Mount app
app.mount('#app');

// Axios / HTTP communication
app.config.globalProperties.$axios = axios;
