import {
  createRouter,
  createWebHistory,
  Router,
  RouterOptions
} from 'vue-router'

const router: Router = createRouter(<RouterOptions>{
  history: createWebHistory(process.env.BASE_URL),
  routes: []
})

export default router
