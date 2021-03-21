import { createRouter, createWebHistory} from 'vue-router'
import HomeView from'@/views/home'
import AboutView from'@/views/about'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router