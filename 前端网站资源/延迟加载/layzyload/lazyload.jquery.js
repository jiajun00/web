/*  
* Lazy Load - jQuery plugin for lazy loading images  
*  
* Copyright (c) 2007-2009 Mika Tuupola  
*  
* Licensed under the MIT license:  
*   http://www.opensource.org/licenses/mit-license.php  
*  
* Project home: 
*   http://www.appelsiini.net/projects/lazyload 
* 
* Version:  1.5.0 
*  
* Modify by @cnbaiying 
* Modify time: 
*/


(function($) { 

 $.fn.lazyload = function(options) { 
	 var settings = { 
		 threshold    : 0,        //阀值 
		 failurelimit : 0, 
		 event        : "scroll", 
		 effect       : "show", 
		 container    : window 
	 }; 
			  
	 if(options) { 
		  
		 $.extend(settings, options); 
	 } 
	  
	 /* Fire one scroll event per scroll. Not one scroll event per image. */ 
	 var elements = this; 
	  
	 if ("scroll" == settings.event) { 
		 $(settings.container).bind("scroll", function(event) { 
			 var counter = 0; 
			 elements.each(function() { 
				 if ($.abovethetop($(this).parent(), settings) || $.leftofbegin($(this).parent(), settings)) { 
						 /* Nothing. */ 
				 } else if (!$.belowthefold($(this).parent(), settings) && !$.rightoffold($(this).parent(), settings)) { 
					 $(this).trigger("appear"); 
				 } else { 
					 if (counter++ > settings.failurelimit) { 
						 return false; 
					 } 
				 } 
			 }); 
			 /* Remove image from array so it is not looped next time. */ 
			 var temp = $.grep(elements, function(element) { 
				 return !element.loaded; 
			 }); 
			 elements = $(temp); 
		 }); 
	 } 
	  
	 this.each(function() { 
		 var self = this; 
		 /* When appear is triggered load original image. */ 
		 $(self).one("appear", function() { 
			 if (!this.loaded) { 
				 //alert($(self).parent().html($(self).html())); 
				 var tmp_str = $(self).html(); 
				 tmp_str = tmp_str.replace("&lt;", "<"); 
				 tmp_str = tmp_str.replace("&gt;", ">"); 
				 $(self).parent().append(tmp_str); 
				 self.loaded = true; 
			 } 
		 }); 

		 /* When wanted event is triggered load original image */ 
		 /* by triggering appear.                              */ 
		 if ("scroll" != settings.event) { 
			 $(self).bind(settings.event, function(event) { 
				 if (!self.loaded) { 
					 $(self).trigger("appear"); 
				 } 
			 }); 
		 } 
	 }); 
	  
	 /* Force initial check if images should appear. */ 
	 $(settings.container).trigger(settings.event); 
	  
	 return this; 

 }; 

 /* Convenience methods in jQuery namespace.           */ 
 /* Use as  $.belowthefold(element, {threshold : 200, container : window}) */ 

 $.belowthefold = function(element, settings) { 
	 if (settings.container === undefined || settings.container === window) { 
		 var fold = $(window).height() + $(window).scrollTop(); 
	 } else { 
		 var fold = $(settings.container).offset().top + $(settings.container).height(); 
	 } 
	 return fold <= $(element).offset().top - settings.threshold;
 };
 
 $.rightoffold = function(element, settings) {
	 if (settings.container === undefined || settings.container === window) {
		 var fold = $(window).width() + $(window).scrollLeft();
	 } else {
		 var fold = $(settings.container).offset().left + $(settings.container).width();
	 }
	 return fold <= $(element).offset().left - settings.threshold;
 };
	 
 $.abovethetop = function(element, settings) {
	 if (settings.container === undefined || settings.container === window) {
		 var fold = $(window).scrollTop();
	 } else {
		 var fold = $(settings.container).offset().top;
	 }
	 return fold >= $(element).offset().top + settings.threshold  + $(element).height();
 };
 
 $.leftofbegin = function(element, settings) {
	 if (settings.container === undefined || settings.container === window) {
		 var fold = $(window).scrollLeft();
	 } else {
		 var fold = $(settings.container).offset().left;
	 }
	 return fold >= $(element).offset().left + settings.threshold + $(element).width();
 };
 /* Custom selectors for your convenience.   */
 /* Use as $("img:below-the-fold").something() */

 $.extend($.expr[':'], {
	 "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
	 "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
	 "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
	 "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
 });
 
})(jQuery);