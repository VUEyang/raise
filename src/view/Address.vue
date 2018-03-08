<template>
  <div>
    <div class="checkout-page">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 31 32">
            <title>add</title>
            <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
          <symbol id="icon-question" viewBox="0 0 32 32">
            <title>question</title>
            <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
            <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
          </symbol>
        </defs>
      </svg>
      <nav-header></nav-header>
      <nav-bread>订单页</nav-bread>
      <div class="container">
        <div class="checkout-addr">
          <div class="page-title-normal">
            <h2 class="page-title-h2"><span>check out</span></h2>
          </div>
          <!-- process step -->
          <div class="check-step">
            <ul>
              <li class="cur"><span>Confirm</span> address</li>
              <li><span>View your</span> order</li>
              <li><span>Make</span> payment</li>
              <li><span>Order</span> confirmation</li>
            </ul>
          </div>

          <!-- address list -->
          <div class="page-title-normal checkout-title">
            <h2><span>Shipping address</span></h2>
          </div>
          <div class="addr-list-wrap">
            <div class="addr-list">
              <ul>
                <li v-for="(item, index) in addressList" :key="index" :class="{check:item.isDefault}">
                  <dl>
                    <dt>{{ item.userName }}</dt>
                    <dd class="address">{{ item.streetName }}</dd>
                    <!-- <dd class="address">{{ item.addressId }}</dd> -->
                    <dd class="tel">{{ item.tel }}</dd>
                  </dl>
                  <div class="addr-opration addr-del">
                    <a href="javascript:;" class="addr-del-btn" @click="delId(item)">
                      <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                    </a>
                  </div>
                  <div class="addr-opration addr-default" v-show="item.isDefault">默认地址</div>
                  <div class="addr-opration" v-show="!item.isDefault">
                    <a href="javascript:;" class="addr-set-default-btn"><i @click="setDefault(item.addressId)">设为默认地址</i></a>
                  </div>
                  
                </li>
                <li class="addr-new">
                  <div class="add-new-inner" @click="addAdd = true">
                    <i class="icon-add">
                      <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                    </i>
                    <p>添加新地址</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="shipping-addr-more">
              <a class="addr-more-btn up-down-btn" href="javascript:;">
                more
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
          </div>

          <!-- shipping method-->
          <div class="page-title-normal checkout-title">
            <h2><span>Shipping method</span></h2>
          </div>
          <div class="lemall-msg-info hidden">
            <span>The region you selected is not within our delivery area. Please select another shipping address within our delivery areas.</span>
          </div>
          <div class="shipping-method-wrap">
            <div class="shipping-method">
              <ul>
                <li class="check">
                  <div class="name">Standard shipping</div>
                  <div class="price">Free</div>
                  <div class="shipping-tips">
                  <p>Once shipped，Order should arrive in the destination in 1-7 business days</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="next-btn-wrap">
            <a class="btn btn--m btn--red" @click="nextStep">下一步</a>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>

    <modal :mdShow="modalConfirm" @niubi="modalConfirm = false">
      <a href="javascript:;" slot="message">
        确定删除此地址？
      </a>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn btn--m" @click="delAddress">确定</a>
        <a href="javascript:;" class="btn btn--m" @click="modalConfirm = false">取消</a>
      </div>
    </modal>

    <modal :mdShow="addAdd" @niubi="addAdd = false">
      <a href="javascript:;" slot="message">
        <div class="md-content">
          <div class="confirm-tips">
            <div class="error-wrap">
              <span class="error error-show" v-show="false">用户名或密码错误</span>
            </div>
            <ul>
              <li class="regi_form_input">
                <input type="text" tabindex="1" name="loginname" v-model="userName" placeholder="收件人姓名" data-type="loginname" class="regi_login_input regi_login_input_left">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="text" tabindex="2" name="password" v-model="postCode" placeholder="邮编" class="regi_login_input regi_login_input_left login-input-no input_text">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="text" tabindex="3" name="password" v-model="userTel" placeholder="电话" class="regi_login_input regi_login_input_left login-input-no input_text">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="text" tabindex="4" name="password" v-model="streetName" placeholder="地址" class="regi_login_input regi_login_input_left login-input-no input_text">
              </li>
            </ul>
          </div>

          <!-- <div class="login-wrap">
            <a href="javascript:;" class="btn-login" @click="login">登录</a>
          </div> -->
        </div>
      </a>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn btn--m" @click="addAddress">确定</a>
        <a href="javascript:;" class="btn btn--m" @click="addAdd  = false">取消</a>
      </div>
    </modal>

  </div>
</template>

<script>
import NavBread from '@/components/NavBread'
import NavHeader from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

import axios from 'axios'
export default {
  name: 'Address',
  components: {
    NavBread,
    NavHeader,
    Footer,
    Modal
  },
  data () {
    return {
      addressList: [],
      modalConfirm: false,
      addAdd: false,
      delAddressId: '',
      userName: '',
      streetName: '',
      userTel: '',
      postCode: '',
      num: 11000
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/addressList').then((response) => {
        let result = response.data
        if (result.status === 0) {
          this.addressList = result.result
        }
        if (this.addressList) {
          this.addressList.filter((item) =>{
          return item.isDefault = true
            })
          // this.addressList[0].isDefault = true
          this.setDefault(this.addressList[0].addressId)
        }
      })
    },
    addAddress () {
      axios.post('/users/addadd', {
        addressId: ++this.num,
        userName: this.userName,
        streetName: this.streetName,
        postCode: this.postCode,
        userTel: this.userTel,
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          console.log(res)
          this.init()
          this.addAdd = false
        }
      })
    },
    delId (item) {
      // console.log(item)
      this.modalConfirm = true
      this.delAddressId = item.addressId
    },
    delAddress () {
      axios.post('/users/delAddress', {
        addressId: this.delAddressId
      }).then((response) => {
        console.log(response)
        this.init()
        this.modalConfirm = false
      })
    },
    setDefault (AddressId) {
      axios.post('/users/setDefault', {
        'addressId': AddressId
      }).then((response) => {
        let res = response.data
        let a = res.result.filter((item) => {
         return (item.addressId === AddressId)
        }).concat(res.result.filter((item) => {
         return(item.addressId !== AddressId)
        }))
        this.addressList = a
      })
    },
    nextStep () {
      if(
      this.addressList.filter((item) =>{
        return item.isDefault = true
      })) {
        this.$router.push({
          path: '/orderSuccess'
        })
      } else {
        alert('请选择地址')
      }
    }
  }
}
</script>
