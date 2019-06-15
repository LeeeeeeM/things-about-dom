import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import VanillaEvent from '@/pages/VanillaEvent'
import SimulateEvent from '@/pages/SimulateEvent'
import VueDataCons from '@/pages/VueDataCons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/vanilla-event',
      name: 'VanillaEvent',
      component: VanillaEvent
    }, {
      path: '/simulate-event',
      name: 'SimulateEvent',
      component: SimulateEvent
    }, {
      path: '/vue-data-cons',
      name: 'VueDataCons',
      component: VueDataCons
    }
  ]
})
