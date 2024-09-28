import { createRouter, createMemoryHistory } from 'vue-router'
// import HomeView from '@/views/Home.vue'
import MapsView from '@/views/Maps.vue'

const routes = [
  {
    path: '/',
    redirect: '/maps'  // Redirect root path to /maps
  },
  {
    path: '/maps',
    name: 'maps',
    component: MapsView
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
