/*
* @Author: hellen
* @Date:   2017-06-13 22:01:34
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-13 22:04:17
*/

'use strict';

;(function($){
	$.extend({
		initPage : function(options){
			var options = $.extend({
				arrMusic : ''
			}, options);
			$("#MusicList").empty();
			/*console.log(options.arrMusic);*/
			var len = options.arrMusic.length;
			//将数组中的这些全部渲染到页面上  
			for(var i = 0; i < len; i++)
			{
				$("#MusicList").append($("<li>" + options.arrMusic[i].MusicName + "<br /><span class= 'describe'>" + options.arrMusic[i].Singer + "</span></li>"));
			}
		}
	});
})(jQuery)