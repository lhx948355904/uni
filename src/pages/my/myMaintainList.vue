<template>
  <view>
    <uni-list>
      <view v-for="item in list" :key="item.id" class="list">
        <uni-list-chat
          :avatar-circle="true"
          :title="item.title"
          :avatar="require(`@/static/${item.img}-icon.png`)"
          :note="item.note"
          :time="item.time"
          :to="'/pages/my/myMaintainItem?id='+item.id"
          class="list_1"
        >
          <text class="green">已提交</text>
        </uni-list-chat>
        <view class="list_2">
            <p class="list_2_p1">设备模板：</p>
            <p class="list_2_p2">温控仪</p>
        </view>
      </view>
    </uni-list>

    <button class="btn">提交</button>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      list: [
        {
          title: "温控仪网关",
          time: "2020-02-02 20:20",
          note: "300125342553",
          id: "1",
          status: 1,
          img: "xt",
        },
        {
          title: "故障申报",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "2",
          status: 2,
          img: "bx",
        },
        {
          title: "保养工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "3",
          status: 3,
          img: "by",
        },
        {
          title: "巡检工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "4",
          status: 4,
          img: "xj",
        },
        {
          title: "维修工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "5",
          status: 5,
          img: "gd",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
});
</script>

<style scoped lang="less">
.uni-list{
    background: initial;
}
    .green{
        color:green;
        font-size: 30rpx;
    }
    .list{
        margin-top: 20rpx;
        background: white;

        .list_2{
            padding: 0 20rpx;
            border-top:1rpx solid rgb(180, 180, 180);

            .list_2_p1{
                color:#666;
                margin:20rpx 0;
                font-size: 20rpx;
            }
            .list_2_p2{
                color:#101010;
                margin:20rpx 0;
                font-size: 30rpx;
            }
        }
    }

    .btn{
        color:white;
        background: rgb(0, 122, 255);
        margin-top: 30rpx;
    }
</style>