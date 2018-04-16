import Vue from 'vue'
import Router from 'vue-router'
import Public from '@/components/Public'
import Private from '@/components/Private'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/public'
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    },
    {
      path: '/private',
      name: 'Private',
      component: Private
    }
  ]
})
