<template>
  <view class="content">
    <view class="status_bar">
      <view class="left_btn">
        <img :src="require('@/static/my-qrcode.png')" />
      </view>

      <view class="right_btn">
        <img :src="require('@/static/my-sz.png')" />
        <img :src="require('@/static/my-news.png')" />
      </view>
    </view>

    <view class="userInfo">
      <img :src="require('@/static/logo.png')" />
      <text>用户名</text>
    </view>

    <view>
      <uni-list>
        
        <uni-list-item
          title="我的维修"
          to="https://www.baidu.com"
          clickable
          link
          :thumb="require('@/static/gd-icon.png')"
          thumb-size="lg"
        />

        <uni-list-item
            title="我的报修"
            to="https://www.baidu.com"
            clickable
            link
            :thumb="require('@/static/bx-icon.png')"
            thumb-size="lg"
          />

        <uni-list-item
            title="我的保养"
            to="https://www.baidu.com"
            clickable
            link
            :thumb="require('@/static/by-icon.png')"
            thumb-size="lg"
          />

        <uni-list-item
            title="我的巡检"
            to="https://www.baidu.com"
            clickable
            link
            :thumb="require('@/static/xj-icon.png')"
            thumb-size="lg"
          />

        <uni-list-item
            title="系统设置"
            to="https://www.baidu.com"
            clickable
            link
            :thumb="require('@/static/sz-icon.png')"
            thumb-size="lg"
          />
        </uni-list>
    </view>

    <view class="logout">
      <text>退出登录</text>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import { uniList, uniListItem, uniListChat } from "@dcloudio/uni-ui";
export default {
  components: {
    uniList,
    uniListItem,
    uniListChat,
  },
};
</script>

<style scoped lang="less" src="./index.less"></style>