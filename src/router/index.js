import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePages.vue';
import AboutPages from '../pages/AboutPages.vue';
import HeroesPage from '../components/organism/HeroList.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'AboutPages',
        component: AboutPages,
    },
    {
        path: '/hero',
        name: 'Heroes',
        component: HeroesPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;