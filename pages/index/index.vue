<template>
	<view class="content">
		<view class="music">
			<player></player>
		</view>
		<view class="main">
			<muyu></muyu>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		background-color: black;
	}
	.main {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		button: 0;
		height: 100vh;
	}
	.music{
		position: absolute;
		right: 16px;
		top: 16px;
		z-index: 10;
	}
</style>
