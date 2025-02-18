import { createRouter, createWebHistory } from 'vue-router'
import SubmitRequest from '../views/SubmitRequest.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'submit-request',
      component: SubmitRequest
    }
  ]
})

export default router
