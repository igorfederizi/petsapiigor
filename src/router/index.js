import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About/About.vue'
import Parceiros from '../views/Parceiros/Parceiros.vue'
import Contatos from '../views/Contatos/Contatos.vue'
import Clientes from '../views/Clientes/Clientes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  },
  {
    path: '/parceiros',
    name: 'Parceiros',
    component: Parceiros
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
 /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /* '../views/About.vue')*/
  /*}*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
