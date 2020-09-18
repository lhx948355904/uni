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
      <p class="p1">设备名称</p>
      <table cellspacing=0>
        <tr>
          <td>标准名称</td>
          <td>上限</td>
          <td>下限</td>
          <td>参考值</td>
          <td>是否异常</td>
        </tr>
        <tr>
          <td>参数1</td>
          <td>15</td>
          <td>0</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>参数2</td>
          <td>-</td>
          <td>-</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>参数3</td>
          <td>-</td>
          <td>-</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <p class="p2">备注信息</p>
      <textarea type="text" value="请输入内容"></textarea>
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
    (this.$refs.content as any).$el.style.height = ("calc(100vh - " + (this.$refs.title as any).$el.clientHeight + "px - 100px)");
  },
});
</script>

<style scoped lang="less">
.uni-list {
  background: initial;
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
  padding:20rpx;
  box-sizing: border-box;

  p{
      margin: 10rpx 0;
  }

  textarea{
      background: #eaeaea;
      padding: 10rpx;
      height:200rpx;
      width:initial;
  }

  table{
    width: 100%;

    td{
      border:1rpx solid gray;
      padding:10rpx;
      font-size: 26rpx;
    }
  }
}

.btn {
  color: white;
  background: rgb(0, 122, 255);
}
</style>