<template>
  <view id="myNews">
    <uni-list>
      <uni-list-chat
        v-for="item in list"
        :key="item.id"
        :avatar-circle="true"
        :title="item.title"
        :avatar="require(`@/static/${item.img}-icon.png`)"
        :note="item.note"
        :time="item.time"
        :to="item.url"
      ></uni-list-chat>
    </uni-list>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      list: [
        {
          title: "系统通知",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "1",
          status: 1,
          img: "xt",
          url: "/pages/news/SystemNews",
        },
        {
          title: "故障申报",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "2",
          status: 2,
          img: "bx",
          url: "/pages/news/ReportRepair",
        },
        {
          title: "保养工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "3",
          status: 3,
          img: "by",
          url: "/pages/news/Maintain",
        },
        {
          title: "巡检工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "4",
          status: 4,
          img: "xj",
          url: "/pages/news/Inspection",
        },
        {
          title: "维修工单",
          time: "2020-02-02 20:20",
          note: "DEMO设备异常",
          id: "5",
          status: 5,
          img: "gd",
          url: "/pages/news/Repair",
        },
      ],
    };
  },
});
</script>

<style lang="less" scoped>
</style>