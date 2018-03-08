import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'
import Address from '@/view/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: Cart,
      component: Cart
    },
    {
      path: '/address',
      name: Address,
      component: Address
    }
  ]
})
