/*
* @Author: hellen
* @Date:   2017-06-13 20:54:13
* @Last Modified by:   hellen
* @Last Modified time: 2017-06-13 20:54:57
*/

'use strict';

;(function($){
	$.extend({
		initlistStyle: function(options){
			var options = $.extend({
				selector: ''
			}, options);
			$(options.selector).each(function(index, el) {
				$(el).removeClass('Playing');		
			});
		}
	});
	
})(jQuery)