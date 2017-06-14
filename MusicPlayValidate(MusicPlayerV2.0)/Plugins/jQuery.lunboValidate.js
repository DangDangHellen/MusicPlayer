/*
* @Author: hellen
* @Date:   2017-06-08 17:36:44
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-08 23:02:48
*/

'use strict';

var Url = "MusicPlayerImg/";
var LunboArr = ["Music.jpg", "music3.PNG","music2.PNG", "music4.PNG","music5.PNG", "music6.PNG"];

;(function($){
	$.fn.extend({
		lunbo : function(){
			console.log($(this).children('img').attr('src'));
			var i = 0;
			$("#trueImg").fadeTo(1000, 0.2);

			setInterval(function(){

				$("#trueImg").fadeTo(1000, 1);
				/*$("#circles span").removeClass('whiteP').addClass('blackP');*/
				$("#circles img").each(function(index, el) {
					$(this).attr('src', 'MusicPlayerImg/黑点.png');					
				});

				$("#trueImg").attr('src', Url + LunboArr[(i + 1) % 6]);


				var selector = "#circles img:eq(" + ((i + 1) % 6) + ")";
				$(selector).attr('src', 'MusicPlayerImg/白点.png');
				
				i++;

				$("#trueImg").fadeTo(1000, 0.2);
				}, 2000);
		}
	});
})(jQuery)