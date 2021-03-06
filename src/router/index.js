import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';
//import { auth } from "../firebase";

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
            meta: {
                layout: 'main',
                requiresAuth: false
            },
            component: () => import('../views/History.vue')
        },  
        {
            path: '/planning',
            name: 'planning',
            meta: {
                layout: 'main',
                requiresAuth: true
            },
            component: () => import('../views/Planning.vue')
        },  
        {
            path: '/record',
            name: 'record',
            meta: {
                layout: 'main',
                requiresAuth: true
            },
            component: () => import('../views/Record.vue')
        },  
        {
            path: '/categories',
            name: 'categories',
            meta: {
                layout: 'main',
                requiresAuth: true
            },
            component: () => import('../views/Categories.vue')
        },
        {
            path: '/food',
            name: 'food',
            meta: {
                layout: 'main',
                requiresAuth: true
            }, 
            component: () => import('../views/Food.vue')
        },
    ]
});

const getCurrentUser = () => {
    return Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
        if(await getCurrentUser()) {
            next();
        } else {
            alert('You dont have access!');
            next('/');
        }
    } else {
        next();
    }


/*
    if (to.path === 'login' && auth.currentUser) {
        next('/');
        return;
    }
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login');
        return;
    }
    next();
    */
})

export default router
