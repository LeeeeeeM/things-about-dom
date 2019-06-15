import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import VanillaEvent from '@/pages/VanillaEvent'
import SimulateEvent from '@/pages/SimulateEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vanilla-event',
      name: 'VanillaEvent',
      component: VanillaEvent
    }, {
      path: '/simulate-event',
      name: 'SimulateEvent',
      component: SimulateEvent
    }
  ]
})
