<template>
  <div @click="loginMethod">登录</div>
</template>

<script>
import { login } from "@/api/api";

export default {
  data() {
    return {};
  },
  methods: {
      loginMethod(){
          login({username:'admin',password:123}).then(resp => {
              console.log(resp)
          })
      }
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
</style>