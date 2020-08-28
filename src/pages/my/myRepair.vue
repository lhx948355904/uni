<template>
  <view id="myRepair">
    <uni-segmented-control
      :current="current"
      :values="items"
      @clickItem="onClickItem"
      style-type="text"
      active-color="#4494F2"
    ></uni-segmented-control>
    <view class="content">
      <view v-if="current === 0">
        <uni-list>
          <view class="list" :key="item.id" v-for="item in list">
            <uni-list-chat
              :avatar-circle="true"
              :title="item.title"
              :avatar="require('@/static/gd-icon.png')"
              :note="item.note"
              :time="item.time"
            ></uni-list-chat>
            <img class="statusImg" :src="chooseStatus(item.status)" />
          </view>
        </uni-list>
      </view>
      <view v-if="current === 1">
          <uni-list>
          <view class="list" :key="item.id" v-for="item in list">
            <uni-list-chat
              :avatar-circle="true"
              :title="item.title"
              :avatar="require('@/static/gd-icon.png')"
              :note="item.note"
              :time="item.time"
            ></uni-list-chat>
            <img class="statusImg" :src="chooseStatus(item.status)" />
          </view>
        </uni-list>
      </view>
      <view v-if="current === 2">
          <uni-list>
          <view class="list" :key="item.id" v-for="item in list">
            <uni-list-chat
              :avatar-circle="true"
              :title="item.title"
              :avatar="require('@/static/gd-icon.png')"
              :note="item.note"
              :time="item.time"
            ></uni-list-chat>
            <img class="statusImg" :src="chooseStatus(item.status)" />
          </view>
        </uni-list>
      </view>
      <view v-if="current === 3">
          <uni-list>
          <view class="list" :key="item.id" v-for="item in list">
            <uni-list-chat
              :avatar-circle="true"
              :title="item.title"
              :avatar="require('@/static/gd-icon.png')"
              :note="item.note"
              :time="item.time"
            ></uni-list-chat>
            <img class="statusImg" :src="chooseStatus(item.status)" />
          </view>
        </uni-list>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue";

export default Vue.extend({
  components: {
    uniSegmentedControl,
  },
  data() {
    return {
      items: ["全部", "待接单", "已接单", "已完成"],
      current: 0,
      list:[{
          title:"维修1",
          time:"2020-02-02 20:20",
          note:"DEMO设备异常",
          id:"1",
          status:1
      },{
          title:"维修2",
          time:"2020-02-02 20:20",
          note:"DEMO设备异常",
          id:"2",
          status:2
      },{
          title:"维修3",
          time:"2020-02-02 20:20",
          note:"DEMO设备异常",
          id:"3",
          status:3
      },{
          title:"维修4",
          time:"2020-02-02 20:20",
          note:"DEMO设备异常",
          id:"4",
          status:4
      }]
    };
  },
  computed: {},
  methods: {
    onClickItem(e: any) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    chooseStatus(val: number): string {
      let imgSrc = "";
      if (val == 1) {
        imgSrc = require(`@/static/status-ywc.png`);
      } else if (val == 2) {
        imgSrc = require(`@/static/status-yjd.png`);
      } else if (val == 3) {
        imgSrc = require(`@/static/status-ypd.png`);
      } else if (val == 4) {
        imgSrc = require(`@/static/status-dcl.png`);
      }
      return imgSrc;
    },
  },
});
</script>

<style scoped lang="less">
.uni-list {
  padding: 0 30rpx;
  background-color: initial;

  .list {
    position: relative;
    margin-top: 30rpx;
  }

  .statusImg {
    position: absolute;
    left: 0;
    top: 0;
    height:50%;
  }
}

.segmented-control {
  padding: 0 20rpx;
  background-color: white;
}
</style>