$(document).ready(function(){$(".tabs-control a").click(function(a){a.preventDefault();var t=$(this).closest(".tabs"),s=t.find($(this).data("target"));s.length&&(t.find(".tabs-tab").removeClass("active"),$(this).addClass("active").siblings("a").removeClass("active"),s.addClass("active"))})});