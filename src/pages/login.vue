<template>
  <div @click="loginMethod">登录</div>
</template>

<script lang="ts">
import Vue from "vue";
import { login } from "@/api/api";

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    loginMethod() {
      login({ username: "admin", password: 123 }).then((resp: any) => {
        console.log(resp);
      });
    },
  },
  mounted() {},
});
</script>

<style lang="scss" scoped>
</style>