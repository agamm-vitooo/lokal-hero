import { createRouter, createWebHistory } from 'vue-router';
import AboutPagesVue from '../pages/AboutPages.vue';
import HomePagesVue from '../pages/HomePages.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePagesVue },
    { path: '/about', name: 'AboutPages', component: AboutPagesVue }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;