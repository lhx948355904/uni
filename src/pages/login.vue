<template>
  <div @click="loginMethod">登录</div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapActions} from 'vuex'
import { login } from "@/api/api";
import store from "@/store/store"

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "login"
    ]),
    loginMethod() {
      
      this.login({ username: "admin", password: 123456 }).then((resp: any) => {
        console.log(resp)
      });
    },
  },
  mounted() {
    console.log(this.store)
  },
});
</script>

<style lang="scss" scoped>
</style>