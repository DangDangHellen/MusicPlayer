/*
* @Author: hellen
* @Date:   2017-06-13 21:17:23
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-13 21:26:18
*/

'use strict';

;(function(){
	$.extend({
		updateAll : function(options){
			var options = $.extend({
				audioSrc : '',
				autoplay :'autoplay',
				musicName: '',
				singer: '',
				musicImg: '',
				imgUrl: ''
			}, options);
			$("#Play").attr(
				{'src': options.audioSrc,
				 'autoplay': options.autoplay
				});
								
			$("#MusicName").text(options.musicName + "\n" + options.singer);
			$("#MusicImg").attr({
				'src' : options.musicImg
			});
			//加播放图片
			$("#ImgUrl").attr('src', options.imgUrl);
		}
	})
})(jQuery)