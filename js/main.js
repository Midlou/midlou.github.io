/*========== Loading screen ==========*/
$(window).on('load', function () {
	$(".se-pre-con").fadeOut("slow");
});

$(".theme-link").click(function () {
	$('.se-pre-con').show().delay(100).fadeOut("slow");
});

/*========== Store theme ==========*/

// var supports_storage = supports_html5_storage();

// function supports_html5_storage() {
// 	try {
// 		return 'localStorage' in window && window['localStorage'] !== null;
// 	} catch (e) {
// 		return false;
// 	}
// }

