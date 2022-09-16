import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue"
import ContactView from "../views/ContactView.vue"
import ServicesView from "../views/ServicesView.vue"
import SiteView from "../views/SiteView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: SiteView,
    props: {malocaprop:Object},
    children: [
        {
          path: '/',
          component: HomeView,         
          props: true         
        },
        {
          path: '/about',
          component: AboutView,         
          props: true         
        },
        {
          path: '/projects',
          component: ProjectsView,         
          props: true         
        },
        {
          path: '/projects/:id',
          component: ProjectsView,
          props: true         
        },
        {
        path: '/contact',
        component: ContactView,         
        props: true         
      },
        {
          path: '/services',
          component: ServicesView,         
          props: true         
        }         
      ],
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  props:true
})

export default router
