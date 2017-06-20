import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloFromVux from '@/components/HelloFromVux'
import Group from '@/components/Group'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Hello},
    {path: '/HelloFromVux', component: HelloFromVux},
    {path: '/Group', component: Group}
  ]
})
