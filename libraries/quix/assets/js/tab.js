!function(i){var t={init:function(){return this.each(function(){var t=i(this);i(window).width();t.width("100%");var e,s,n=t.find("li.tab a"),a=t.width(),h=t.find("li").first().outerWidth(),r=0;e=i(n.filter('[href="'+location.hash+'"]')),0===e.length&&(e=i(this).find("li.tab a.active").first()),0===e.length&&(e=i(this).find("li.tab a").first()),e.addClass("active"),r=n.index(e),r<0&&(r=0),s=i(e[0].hash),t.append('<div class="indicator"></div>');var d=t.find(".indicator");t.is(":visible")&&(d.css({right:a-(r+1)*h}),d.css({left:r*h})),i(window).resize(function(){a=t.width(),h=t.find("li").first().outerWidth(),r<0&&(r=0),0!==h&&0!==a&&(d.css({right:a-(r+1)*h}),d.css({left:r*h}))}),n.not(e).each(function(){i(this.hash).hide()}),t.on("click","a",function(d){if(i(this).parent().hasClass("disabled"))return void d.preventDefault();a=t.width(),h=t.find("li").first().outerWidth(),e.removeClass("active"),s.hide(),e=i(this),s=i(this.hash),n=t.find("li.tab a"),e.addClass("active");r=n.index(i(this)),r<0&&(r=0),s.show(),d.preventDefault()})})},select_tab:function(i){this.find('a[href="#'+i+'"]').trigger("click")}};i.fn.tabs=function(e){return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void i.error("Method "+e+" does not exist on jQuery.tooltip"):t.init.apply(this,arguments)},i(document).ready(function(){i("ul.tabs").tabs()})}(jQuery);