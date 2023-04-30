// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Calendar from '@/components/Calendar';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
