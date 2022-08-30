import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue"
import ContactView from "../views/ContactView.vue"
import ServicesView from "../views/ServicesView.vue"
import SiteView from "../views/SiteView.vue"
import LoginView from "../views/Admin/LoginView.vue"
import DashboardView from "../views/Admin/DashboardView.vue"
import WorkspaceView from "../views/Admin/WorkspaceView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: SiteView,
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
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: DashboardView,
    children: [
        {
          path: 'login',
          component: LoginView,         
        }, {
          path: 'workspace',
          component: WorkspaceView,         
        },    
      ],
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
