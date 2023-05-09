// Composables
// 이떄, '@' 는 src 디렉토리를 가리키는 alias이다.
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Calendar from '@/components/Calendar';
import SignUp from '@/views/SignUp';
import PwPage from '@/views/PwPage';
import NewPassword from '@/views/NewPassword';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/PwPage',
    name: 'PwPage',
    component: PwPage,
  },
  {
    path: '/NewPassword/:token',
    name: 'NewPassword',
    component: NewPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
