import { createRouter, createWebHistory } from 'vue-router'
import SubmitRequest from '../views/SubmitRequest.vue'
import AppFooter from '../components/AppFooter.vue'  // Add this import

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/footer',
      name: 'footer',
      component: AppFooter
    },
    {
      path: '/',
      name: 'submit-request',
      component: SubmitRequest
    }
  ]
})

export default router
