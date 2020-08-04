<template>
	<view class="content">
        <img class="logo" src="@/static/banner.png"/>
		<view class="container">
			<view>
				<text class="title">{{title}}</text>
				<view :key="item.key" v-for="item in topList">
					<navigator :url="item.href">
						<img :src="require('@/static/'+item.icon+'.png')">
						<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>

			<view>
				<view :key="item.key" v-for="item in menuList">
					<navigator :url="item.href">
						<img :src="require('@/static/'+item.icon+'.png')">
						<text>{{item.name}}</text>
					</navigator>
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
					icon:"top_wxgd",
				},{
					key:"sbby",
					name:"设备保养",
					href:"@",
					icon:"top_sbby",
				},{
					key:"sbxj",
					name:"设备巡检",
					href:"@",
					icon:"top_sbxj",
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
			(this as any).$http.get("/api/menulist").then((data:any) => {
				this.menuList = data.data.menuList;
			})

			console.log((this as any).$route);
			
		},
		
	});
</script>

<style scoped lang="less" src="./index.less"></style>
