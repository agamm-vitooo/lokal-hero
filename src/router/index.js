import { createRouter, createWebHistory } from 'vue-router';
import HomePages from '../pages/HomePages.vue';
import AboutPages from '../pages/AboutPages.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePages },
    { path: '/about', name: 'AboutPages', component: AboutPages },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;