

/*========== Loading screen ==========*/
$(window).on('load', function() {
    $(".se-pre-con").fadeOut("slow");  
});

$(".theme-link").click(function() {
    $('.se-pre-con').show().delay(100).fadeOut( "slow" );
});

/*========== Theme components ==========*/

var themes = {
    "Default": "css/bootstrap/default/bootstrap.min.css",
    "Cyborg" : "css/bootstrap/cyborg/bootstrap.min.css",
    "Darkly" : "css/bootstrap/darkly/bootstrap.min.css"
}

defaulTheme = "Darkly";

$(function(){
    var themesheet = $('<link href="'+themes[defaulTheme]+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
        set_theme($(this).attr('data-theme'))
        var themeurl = themes[$(this).attr('data-theme')]; 
        themesheet.attr('href',themeurl);
    });
});

/*========== Store theme ==========*/

var supports_storage = supports_html5_storage();

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function set_theme(theme) {
    defaulTheme = theme;
    if (supports_storage) {
        localStorage.theme = theme;
    }
}

if (supports_storage) {
    var theme = localStorage.theme;
    if (theme) {
        set_theme(theme);
    }
} 