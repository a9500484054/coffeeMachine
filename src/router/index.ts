import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import List from '@/views/List.vue';
import Setting from '@/views/Setting.vue';
import NotFound from '@/views/NotFound.vue';


const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/',
    component: Setting,
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
