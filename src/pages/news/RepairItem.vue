<template>
  <view>
    <view class="title" ref="title">
      <uni-list-chat
        :avatar-circle="true"
        :title="list.title"
        :avatar="require(`@/static/${list.img}-icon.png`)"
        :note="list.note"
        :time="list.time"
        class="list_1"
      >
        <text class="green"></text>
      </uni-list-chat>
      <view class="list_2">
        <p class="list_2_p1">设备模板：</p>
        <p class="list_2_p2">温控仪</p>
      </view>
    </view>

    <view class="content" ref="content">
      <p class="p1">
        <font class="red">*</font>故障类型
      </p>
      <input type="text" value="标准名称" />
      <p class="p2">
        <font class="red">*</font>故障描述
      </p>
      <textarea type="text" value="请输入故障描述及其原因"></textarea>
      <p class="p3">
        <font class="red">*</font>处理过程及结果
      </p>
      <textarea type="text" value="请输入处理过程及结果"></textarea>
    </view>

    <button class="btn">完成</button>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      list: {
        title: "温控仪网关",
        time: "2020-02-02 20:20",
        note: "300125342553",
        id: "1",
        status: 1,
        img: "xt",
      },
    };
  },
  methods: {},
  mounted() {
    (this.$refs.content as any).$el.style.height =
      "calc(100vh - " +
      (this.$refs.title as any).$el.clientHeight +
      "px - 100px)";
  },
});
</script>

<style scoped lang="less">
.uni-list {
  background: initial;
}
.red {
  color: red;
}
.green {
  color: green;
  font-size: 30rpx;
}
.title {
  margin-bottom: 20rpx;
  background: white;
  padding: 0.1rpx;

  .list_2 {
    padding: 0 20rpx;
    border-top: 1rpx solid rgb(180, 180, 180);

    .list_2_p1 {
      color: #666;
      margin: 20rpx 0;
      font-size: 20rpx;
    }
    .list_2_p2 {
      color: #101010;
      margin: 20rpx 0;
      font-size: 30rpx;
    }
  }
}

.content {
  background: white;
  padding: 20rpx;
  box-sizing: border-box;

  p {
    margin: 10rpx 0;
  }

  input,
  textarea {
    background: #eaeaea;
    padding: 10rpx;
  }

  input {
    .height(20rpx);
  }

  textarea {
    height: 200rpx;
    width: initial;
  }
}

.btn {
  color: white;
  background: rgb(0, 122, 255);
}
</style>