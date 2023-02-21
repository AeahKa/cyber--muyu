import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

Vue.prototype.ScanAudio = function(musicName) {
	var music = null;
	music = wx.createInnerAudioContext(); //创建播放器对象
	switch (musicName) {
		case 'knockSound':
			music.src = "/static/audio/knock.mp3";
			break;
		case 'music1':
			music.src =
				"http://dl.stream.qqmusic.qq.com/C400001kCHOX2mEKNz.m4a?guid=5430316502&vkey=B2AEE46D7324B5903B9B8AFAB43A17654E32F76AE12DDDC545DADC1347F7DC9C706459AC42311C59BC4CAD7248D1883DF318DE295FF3DCD4&uin=787833695&fromtag=120032";
			break;
	};
	music.play();
	music.onEnded(() => {
		music = null
	})
}
