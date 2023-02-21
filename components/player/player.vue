<template>
	<view class="player">
		<!-- 		<view class="menu" v-if="isShow">
			<text @click="play" id="0">停止</text>
			<text @click="play" id="1">大悲咒</text>
			<text @click="play" id="2">Back In Black</text>
		</view> -->
		<audio id="music" loop="" hidden
			src="http://dl.stream.qqmusic.qq.com/C400001kCHOX2mEKNz.m4a?guid=5430316502&vkey=B2AEE46D7324B5903B9B8AFAB43A17654E32F76AE12DDDC545DADC1347F7DC9C706459AC42311C59BC4CAD7248D1883DF318DE295FF3DCD4&uin=787833695&fromtag=120032" type="audio/mpeg">
		</audio>
		<view @click="play" class='musicIcon'>
			<image src="../../static/music.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "player",
		data() {
			return {
				isShow: false,
			};
		},
		methods: {
			play() {
				// console.log(this.id);
				// var music = null;
				// music = wx.createInnerAudioContext(); //创建播放器对象
				// music.src =
				// 	'http://dl.stream.qqmusic.qq.com/C400001kCHOX2mEKNz.m4a?guid=5430316502&vkey=B2AEE46D7324B5903B9B8AFAB43A17654E32F76AE12DDDC545DADC1347F7DC9C706459AC42311C59BC4CAD7248D1883DF318DE295FF3DCD4&uin=787833695&fromtag=120032'
				// music.src = "";
				// const e = event.target.id
				// switch (e) {
				// 	case '0':
				// 		music.offPlay();
				// 		break;
				// 	case '1':
				// 		music.src = 'http://dl.stream.qqmusic.qq.com/C400001MIl2u420YW4.m4a?guid=3967506154&vkey=A04869B3F0B2A43D908178D245F579143FB278D1A21173200EDEA779144B494E9DD3F6007B400DBB51F159BD3333A3086ECD1279ADDD5C9D&uin=787833695&fromtag=120032'
				// 		break;
				// 	case '2':
				// 		music.src = 'http://dl.stream.qqmusic.qq.com/C400001kCHOX2mEKNz.m4a?guid=5430316502&vkey=B2AEE46D7324B5903B9B8AFAB43A17654E32F76AE12DDDC545DADC1347F7DC9C706459AC42311C59BC4CAD7248D1883DF318DE295FF3DCD4&uin=787833695&fromtag=120032'
				// 		break;
				// }
				this.ScanAudio('music1');
			},
			click() {
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style lang="scss" scoped>
	.player {
		position: relative;
		display: flex;
	}

	.musicIcon {
		position: relative;
		right: 0;

		>image {
			width: 18px;
			height: 18px;
		}
	}

	.menu {
		display: flex;
		color: #999999;
		flex-direction: column;

		>text {
			margin-bottom: 6px;
		}
	}
</style>
