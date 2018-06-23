import Vue from 'vue'
import Router from 'vue-router'
import Sample from '@/views/Sample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sample',
      component: Sample
    }
  ]
})
