<template>
  <view class="login">
    <img class="logo" :src="require('@/static/login-logo.png')" alt />

    <view class="form">
      <view class="username">
        <view class="title">用户名 / 邮箱</view>
        <input class="uni-input" maxlength="10" ref="username" type="text" placeholder="请输入用户名" />
      </view>
      <view class="password">
        <view class="title">密码</view>
        <input class="uni-input" maxlength="10" ref="password" type="password" placeholder="请输入密码" />
      </view>
      <view class="logout" @click="loginMethod">登录</view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { login } from "@/api/api";
import axios from "axios";
// import store from "@/store/store"

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login"]),
    loginMethod() {
      const usernameVal = (this.$refs.username as any).valueSync,
        passwordVal = (this.$refs.password as any).valueSync;
      if (!usernameVal || !passwordVal) {
        uni.showToast({
          title: "填写有误",
          duration: 2000,
          image: "../static/close.png",
        });
      }
      axios
        .post("api/a/login", {
          username: usernameVal,
          password: passwordVal,
          mobileLogin: "1",
        },{
          headers: {'Accept': '*/*'}
        })
        .then((resp) => {
          console.log(resp);
        });
      // this.login({ username: usernameVal, password: passwordVal,mobileLogin:"1" });
    },
  },
  mounted() {},
});
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: url("@/static/login-bg.png") no-repeat;
  background-size: 100% 100%;

  .logo {
    width: 30%;
    .tc_self;
    margin-top: 200rpx;
    margin-bottom: 120rpx;
  }

  .form {
    .tc_self;
    width: 70%;
    color: white;

    view {
      margin-bottom: 30rpx;
    }

    input {
      border-bottom: 1rpx solid white;
      margin-bottom: 40rpx;
      .height(60rpx);
    }

    .logout {
      background: rgba(255, 255, 255, 0.5);
      .tc;
      .height(80rpx);
      border-radius: 100rpx;
      margin-top: 100rpx;
    }
  }
}
</style>