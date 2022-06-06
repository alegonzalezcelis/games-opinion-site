import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import OpinionesView from '@/views/OpinionesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EditOpinionView from '@/views/EditOpinionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: OpinionesView
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: AdminView
  },
  {
    path: '/administracion/:id',
    name: 'EditOpinion',
    component: EditOpinionView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
