<template>
  <div class="sdf">
    <nav-header></nav-header>
    <nav-bread>首页</nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a href="javascript:void(0)" @click="setPriceFilter('all')" :class="{'cur': priceChecked=='all'}">All</a>
              </dd>
              <dd v-for="(price, index) in priceFilter" :key="index">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur': priceChecked==index}">{{ price.startPrice}} - {{ price.endPrice }}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in GoodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/img/' + item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ item.productName }}</div>
                    <div class="price">{{ item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                  ...
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>

      <!-- 未登录 -->
      <model :mdShow="mdShow" @niubi="!mdShow">
        <p slot="message">请先登录否则无法加入购物车</p>
        <div slot="btnGroup">
          <a href="javascript:;" class="btn-login" @click="mdShow = false">关闭</a>
        </div>
      </model>

      <!-- 登录 -->
      <model :mdShow="mdShowCart" @niubi="mdShowCart = false">
        <p slot="message">加入购物车成功</p>
        <div slot="btnGroup">
          <a href="javascript:;" class="btn btn--m" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn-m"  to="/cart"> 查看购物车</router-link>
        </div>
      </model>

  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/NavBread'
import Model from '@/components/Modal'

import '@/assets/css/base'
import '@/assets/css/login'
import '@/assets/css/checkout'
import '@/assets/css/product'

import axios from 'axios'
export default {
  name: 'GoodsList',
  data () {
    return {
      GoodsList: Array,
      sortFlag: true,
      priceChecked: 'all',
      page: 0,
      pagesize: -8,
      // flag: false,
      busy: true,
      mdShow: false,
      mdShowCart: false,
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '100.00'
        },
        {
          startPrice: '100.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '2000.00'
        },
        {
          startPrice: '2000.00',
          endPrice: '5000.00'
        }
      ]
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Model
  },
  mounted () {
    this.getGoodsList()
    // this.checkLogin()
  },
  methods: {
    getGoodsList (flag) {
      let param = {
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked,
        page: this.page,
        pagesize: this.pagesize
      }
      axios.get('goods/list', {params: param}).then((result) => {
        let res = result.data
        // console.log(res)
        if (res.status === 0) {
          if (flag) {
            if (res.result !== undefined) {
              this.GoodsList = this.GoodsList.concat(res.result)
            } else {
              this.busy = true
              return
            }
            console.log(this.GoodsList, res.result)
            if (res.result.length === 0) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.GoodsList = res.result
            this.busy = false
          }
        } else {
          this.busy = false
        }
      })
    },
    sortGoods () {
      this.sortFlag = !this.sortFlag
      this.getGoodsList()
    },
    setPriceFilter (index) {
      console.log(index)
      this.page = 0
      this.priceChecked = index
      this.getGoodsList()
    },
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getGoodsList(true)
      }, 500)
    },
    addCart (productId) {
      var userId = document.cookie.split(';')[1].split('=')[1]
      if (userId) {
        this.mdShowCart = !this.mdShowCart
        axios.post('goods/addCart', {
          'productId': productId
        }).then((result) => {
          console.log(result)
        })
      } else {
        this.mdShow = true
      }
    }
    // checkLogin () {
    //   var username = document.cookie.split(';')[1].split('=')[1]
    //   if (username) {
    //     axios.get('users/checkLogin').then((response) => {
    //       console.log(response)
    //       if (response.data.status === 0) {
    //         this.username = response.data.result
    //         console.log(23)
    //       }
    //     })
    //   }
    // }
  }
}
</script>

<style>

</style>
