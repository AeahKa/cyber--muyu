<template>
	<view @click="voice" class="muyu">
		<image src="../../static/muyu.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: "muyu",
		data() {
			return {

			};
		},
		methods: {
			voice() {
				this.ScanAudio('knockSound');
				console.log('敲了一下');
			}
		}

	}
</script>

<style lang="scss">
	.muyu {
		>image {
			width: 60vw;
			height: 60vw;
		}
	}
</style>
