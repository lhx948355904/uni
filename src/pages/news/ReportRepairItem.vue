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

    <view class="tabs" ref="content">
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        style-type="text"
        active-color="#4494F2"
      ></uni-segmented-control>
    </view>

    <view class="content">
      <view v-if="current === 0">
        <uni-list class="unilist">
          <uni-list-item title="故障编号" rightText="E124T4173"></uni-list-item>
          <uni-list-item title="设备信息" rightText="风力电站"></uni-list-item>
          <uni-list-item title="故障描述" rightText="故障描述"></uni-list-item>
          <uni-list-item title="故障图片" rightText="右侧文字"></uni-list-item>
          <uni-list-item title="联系人" rightText="张三"></uni-list-item>
          <uni-list-item title="联系电话" rightText="13312341234"></uni-list-item>
        </uni-list>

        <uni-list class="unilist">
          <uni-list-item title="接单人" rightText="右侧文字"></uni-list-item>
          <uni-list-item title="接单人联系方式" rightText="13412341234"></uni-list-item>
          <uni-list-item title="接单时间" rightText="2020-09-04 14:27:40"></uni-list-item>
        </uni-list>
      </view>

      <view v-if="current === 1">
        <uni-steps :options="stepsOption" direction="column" :active="2" active-color="rgb(0, 122, 255)"></uni-steps>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      items: ["详细资料", "进度追踪"],
      current: 0,
      list: {
        title: "温控仪网关",
        time: "2020-02-02 20:20",
        note: "300125342553",
        id: "1",
        status: 1,
        img: "xt",
      },
      stepsOption: [
        { title: "完成", desc: "2018-11-11" },
        { title: "接单", desc: "2018-11-12" },
        { title: "派单", desc: "2018-11-13" },
        { title: "报修", desc: "2018-11-14" },
      ],
    };
  },
  methods: {
    onClickItem(e: any) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
  mounted() {},
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

.tabs,
.unilist {
  background: white;
  margin: 20rpx 0;
}
</style>