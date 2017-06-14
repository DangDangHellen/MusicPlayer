/*
* @Author: hellen
* @Date:   2017-06-08 17:01:18
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-08 17:17:47
*/

'use strict';

;(function($){
	$.extend({
		Playing: function(options){
			var options = $.extend({
				sec: '',
				minu:'',
				ave : ''
			},options);

			var sec = parseInt(options.sec);
			var	minu = parseInt(options.minu);
			sec = sec + 1;
			if(sec == 60)
			{
				sec = 0;
				minu = minu + 1;
			}
			//格式化分和秒,sec,minu传进去，再return回来
				
			var secForm = jQuery.formTime({
				sec: sec,
				minu : minu
			}).sec;
			
			var minuForm = jQuery.formTime({
				sec: sec,
				minu : minu
			}).minu;
					
			//设置span（StartTime）内容为当前时间
			$("#startTime").html(minuForm + ":" + secForm);
				//设置小圆点位置
			var leftPos = $("#PlayRound").css('left');
					
			var leftNum = parseFloat(leftPos.substring(0, leftPos.length - 2));
					
			var leftVal = leftNum + options.ave;
					
					
			$("#PlayRound").css('left', leftVal + 'px'); 
			return {
				sec: sec,
				minu: minu
			}			
		}
	});
})(jQuery)