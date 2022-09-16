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
        },
        {
          path: 'about',
          component: AboutView,         
        },
        {
          path: 'projects',
          component: ProjectsView,         
        },
        {
        path: 'contact',
        component: ContactView,         
        },
        {
          path: 'services',
          component: ServicesView,         
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
