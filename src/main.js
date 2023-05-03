// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

import router from './router/index';
// Axios
import axios from 'axios';

// == createApp(App).use(router).mount('#app')

// 앱 생성 실시, 라우터 사용 설정
const app = createApp(App).use(router);

// 플러그인 (아마 vuetify 플러그인)
registerPlugins(app);

// main아이디: 렌더링 시작점
app.mount('#app');

// axios / http 통신
app.config.globalProperties.$axios = axios;
