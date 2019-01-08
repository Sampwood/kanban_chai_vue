<template>
  <div class="container-login">
    <div class="main-login">
      <div class="login">
        <div>
          <div class="title">用户登录</div>
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
          <div class="form-group row">
            <button type="button" class="btn btn-primary" @click="login">登陆</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        await this.loginAction({
          username: this.username,
          password: this.password
        })
        this.$router.push('/')
      },
      ...mapActions({
        'loginAction': 'auth/login'
      })
    }
  }
</script>

<style scoped>
  .container-login {
    height: 100vh;
    background: url('../assets/img/many.jpg') center top repeat-y;
  }
  .main-login {
    height: 100%;
    background: url('../assets/img/bg.jpg') center top no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .login {
    width: 400px;
  }
  .title {
    color: #fff;
    font-weight: bold;
    width: fit-content;
    background: #B49590;
    padding: 1rem 2rem 0 2rem;
    text-align: left;
    border-radius: 7px 7px 0 0;
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
