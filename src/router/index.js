import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import DashboardView from '../views/DashboardView.vue'
import BuscarView from '../views/BuscarView.vue'
import firebase from 'firebase'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: BuscarView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta=>ruta.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    }else{
      next({
        name: 'login'
      });
    }
  }else{
    next();
  }

});


export default router
