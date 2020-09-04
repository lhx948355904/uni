<template>
  <view id="myRepair">
    <view class="title">
      <image src="../../static/xt-icon.png" />
      <view class="titles">
        <text class="text1">系统通知</text>
        <text class="text2">2020-09-03 16:41:09</text>
      </view>
    </view>

    <view class="content">用户测试。</view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>

<style scoped lang="less">
#myRepair {
  background-color: white;
  height: 100vh;
  padding-top:30rpx;
}

.title {
  
  padding: 0 20rpx;
  image {
    width: 80rpx;
    height: 80rpx;
  }

  .titles {
    .ilb;
    width: ~"calc(100% - 80rpx)";
    padding: 0 20rpx;
    box-sizing: border-box;

    text {
      .height(80rpx);
    }

    .text2 {
      color: gainsboro;
      font-size: 24rpx;
      float: right;
    }
  }
}

.content{
  padding:0 20rpx;
  font-size: 30rpx;
  text-indent: 60rpx;
}
</style>