/*
* @Author: hellen
* @Date:   2017-06-08 15:07:47
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-09 22:19:48
*/

'use strict';

/*var playModeArr = ['单曲循环_32.png', '随机播放_32.png', '循环播放.png'];*/

;(function($){
	$.extend({
		initMusicList : function(){
			var arrMusic = [
			{
				MusicName: '灰色的彩虹',
				MusicUrl: 'Musics/灰色的彩虹.mp3',
				Singer : '范玮琪',
				MusicImg: 'MusicImg/Fanfan.jpg'
			},
			{
				MusicName: '101',
				MusicUrl: 'Musics/101.mp3',
				Singer : '梁静茹',
				MusicImg: 'MusicImg/MusicImg.jpg'
			},
			{
				MusicName: '贝壳风铃',
				MusicUrl: 'Musics/贝壳风铃.mp3',
				Singer : '刘惜君',
				MusicImg: 'MusicImg/刘惜君.jpg'
			},
			{
				MusicName: '长腿叔叔',
				MusicUrl: 'Musics/长腿叔叔.mp3',
				Singer : '白雅言',
				MusicImg: 'MusicImg/白雅言.jpg'
			}
			];
			return arrMusic;
		},
		RealWidth: function(options){
			var options = $.extend({
				body : '',
				id : ''
			}, options);   //覆盖参数

			var TotalWidth = $(options.body).width();
			var WidthPer = $(options.id).width();
				   
			var realWidth = TotalWidth * WidthPer / 100;
			
			return realWidth;
		},
		clickAction : function(options){
			var options = $.extend({
				id: '',
				s1: '',
				currPos: '',
				ProcessLeft:'',
				ave:''
			}, options);
			if(options.id == "#returnArrow"){
				$("#PlayerPage").hide();
				$("#Musicbox").show();
			}
			else if(options.id == "#MusicFooter")
			{
				$("#PlayerPage").show();
				$("#Musicbox").hide();
			}
		},
		formTime: function(options){
			var options = $.extend({
				sec: '',
				minu : ''
			}, options);

			if(options.sec < 10)
			{
				options.sec = '0' + options.sec;
			}
			if(options.minu < 10)
			{
				options.minu = '0' + options.minu;
			}
			return {
				sec : options.sec,
				minu: options.minu
			}
		}
	});	
})(jQuery)
