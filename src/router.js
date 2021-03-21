import { createRouter, createWebHistory} from 'vue-router'
import HomeView from'@/views/home'
import AboutView from'@/views/about'
import DetailsView from'@/views/country'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/:country_code',
    component: DetailsView
  }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router