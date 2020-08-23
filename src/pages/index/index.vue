<template>
	<view class="content">
        <img class="logo" src="@/static/banner.png"/>
		<view class="container">

			<view class="topContainer">
				<text class="title">{{title}}</text>

				<view class="_container">
					<view :key="item.key" v-for="item in topList">
						<router-link :to="{path:item.href}">
							<img :src="require('@/static/'+item.icon+'.png')">
							<text>{{item.name}}</text>
						</router-link>
					</view>
				</view>
			</view>

			<view class="navContainer">
				<text class="title">运维管理</text>

				<view class="_container">
					<view :key="item.key" v-for="item in menuList">
						<router-link :to="{path:item.href}">
							<img :src="require('@/static/'+item.icon+'.png')">
							<text>{{item.name}}</text>
						</router-link>
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {menuList} from "@/api/api"

	export default Vue.extend({
		data() {
			return {
				title: '当前任务',
				topList:[{
					key:"wxgd",
					name:"维修工单",
					href:"/pages/index/index",
					icon:"top_wxgd",
				},{
					key:"sbby",
					name:"设备保养",
					href:"/pages/news/index",
					icon:"top_sbby",
				},{
					key:"sbxj",
					name:"设备巡检",
					href:"/pages/map/index",
					icon:"top_sbxj",
				}],
				menuList:[],
			}
		},
		onLoad() {
		},
		methods: {

		}, 
		mounted(){
			(menuList as any).then((data:any) => {
				this.menuList = data.data.menuList;
			})
		},
		
		
	});
</script>

<style scoped lang="less" src="./index.less"></style>
