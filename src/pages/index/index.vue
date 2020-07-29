<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<button @click="a.b.c=2">button</button>
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello',
				a:{
					b:{
						c:1
					}
				},
			}
		},
		onLoad() {
			// console.log(123)
		},
		methods: {

		},
		mounted(){
			console.log("mounted")
		},
		watch:{
			a:{
				handler:function(newv,oldv){
					console.log(newv,oldv)
				},
				immediate:true
			}
		}
	});
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
