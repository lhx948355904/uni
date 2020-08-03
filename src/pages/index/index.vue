<template>
	<view class="content">
        <img class="logo" src="@/static/banner.png"/>
		<view>
			<view>
				<text class="title">{{title}}</text>
				<view :key="item.key" v-for="item in topList">
					<navigator :url="item.href">
						<img :src="item.icon">
						<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>

			<view>
				<view :key="item.key" v-for="item in topList">
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: '当前任务',
				topList:[{
					key:"wxgd",
					name:"维修工单",
					href:"@",
					icon:"@/static/top_wxgd.png",
				},{
					key:"sbby",
					name:"设备保养",
					href:"@",
					icon:"@/static/top_sbby.png",
				},{
					key:"sbxj",
					name:"设备巡检",
					href:"@",
					icon:"@/static/top_sbxj.png",
				}],
				menuList:[],
			}
		},
		onLoad() {
			// console.log(123)
		},
		methods: {

		},
		mounted(){
		},
		
	});
</script>

<style scoped lang="less" src="./index.less"></style>
