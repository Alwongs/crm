import { createRouter, createWebHistory } from 'vue-router';
import { auth } from "../firebase";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'empty'},
            component: () => import('../views/Register.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('../views/Login.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {layout: 'main'},
            component: () => import('../views/Profile.vue')
        },  
        {
            path: '/',
            name: 'home',
            meta: {
                layout: 'main',
                requiresAuth: true
            },
            component: () => import('../views/Home.vue')
        },  
        {
            path: '/history',
            name: 'history',
            meta: {layout: 'main'},
            component: () => import('../views/History.vue')
        },  
        {
            path: '/planning',
            name: 'planning',
            meta: {layout: 'main'},
            component: () => import('../views/Planning.vue')
        },  
        {
            path: '/record',
            name: 'record',
            meta: {layout: 'main'},
            component: () => import('../views/Record.vue')
        },  
        {
            path: '/categories',
            name: 'categories',
            meta: {layout: 'main'},
            component: () => import('../views/Categories.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === 'login' && auth.currentUser) {
        next('/');
        return;
    }
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login');
        return;
    }
    next();
})

export default router
