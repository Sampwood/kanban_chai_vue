<template>
  <div class="container-login">
    <div class="main-login">
      <div class="login">
        <div class="header">
          <div class="title" :class="{'active': isLogin}" @click="isLogin=true">用户登录</div>
          <div class="title" :class="{'active': !isLogin}" @click="isLogin=false">注册</div>
        </div>
        <div class="form-login">
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">账号</label>
            <div class="col-sm-9 input-login">
              <div class="split"></div>
              <input type="text" class="form-control" id="username" placeholder="Enter username"
                v-model="username">
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">密码</label>
            <div class="col-sm-9 input-login">
              <div class="split"></div>
              <input type="password" class="form-control" id="password" placeholder="Password"
                v-model="password">
            </div>
          </div>
          <div class="form-group row" v-if="isLogin">
            <button type="button" class="btn btn-primary" @click="login">登陆</button>
          </div>
          <div class="form-group row" v-else>
            <button type="button" class="btn btn-primary" @click="register">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import md5 from 'md5'

  export default {
    name: 'login',
    data: function () {
      return {
        username: '',
        password: '',
        isLogin: true,
      }
    },
    methods: {
      ...mapActions({
        'loginAction': 'auth/login',
        'registerAction': 'auth/register',
        'getUserInfo': 'auth/getUserInfo',
      }),
      async login () {
        await this.loginAction({
          username: this.username,
          password: md5(this.password),
        })
        await this.getUserInfo({
          username: this.username,
        })
        this.$router.push('/')
      },
      async register () {
        await this.registerAction({
          username: this.username,
          password: md5(this.password),
        })
        this.isLogin = true
      },
    },
  }
</script>

<style scoped>
  .container-login {
    height: 100vh;
    background: url('~@/assets/img/many.jpg') center top repeat-y;
  }
  .main-login {
    height: 100%;
    background: url('~@/assets/img/bg.jpg') center top no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .login {
    width: 400px;
  }
  .header {
    color: #fff;
    font-weight: bold;
    width: fit-content;
    background: #B49590;
    text-align: left;
    border-radius: 7px 7px 0 0;
    display: flex;
    overflow: hidden;
  }
  .title {
    padding: 1rem 2rem .5rem 2rem;
    cursor: pointer;
    background-color: #9c6b6f;
  }
  .title.active {
    background-color: transparent;
  }
  .form-login {
    background: #B49590;
    text-align: left;
    padding: 2rem 3rem;
    border-radius: 0 7px 7px;
  }
  .row {
    background-color: #8c7277;
    border-radius: 7px;
    color: #fff;
  }
  .split {
    height: 60%;
    float: left;
    border-left: 1px solid #a69290;
    margin-left: -1rem;
  }
  .input-login {
    margin-left: -1rem;
    padding-right: 0;
    display: flex;
    align-items: center;
  }
  input {
    color: #fff;
    background-color: #8c7277;
    border: none;
  }
  input:focus {
    color: #fff;
    background-color: #8c7277;
    box-shadow: none;
  }
  .btn-primary {
    width: 100%;
    background: #514862;
    border: none;
  }
</style>
