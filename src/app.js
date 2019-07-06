import 'bootstrap';
import './scss/app.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
const $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(document).ready(function () {

    $('.btnMoreLess').on('click', function () {
        if($('.btnText').text() === "Show More") {
            $('.arrow-down').css('visibility', 'hidden');
            $('.arrow-up').css('visibility', 'visible');
            $('.btnText').text('Show Less');
        }else {
            $('.arrow-down').css('visibility', 'visible');
            $('.arrow-up').css('visibility', 'hidden');
            $('.btnText').text('Show More');
        }
    });


    // Stars: on mouseenter
    function onMouseenter(stars) {
        stars.find("span").hover(function() {
            $(this).prevAll().find("span").html("&starf;").nextAll().find("span").html("&star;");
            $(this).find("span").html("&starf;").nextAll().find("span").html("&star;");
            $(this).nextAll().find("span").html("&star;");
        });
    }

    // Stars: on click
    $(".stars > span").click(function() {
        $(this).prevAll().find("span").html("&starf;").nextAll().find("span").html("&star;");
        $(this).find("span").html("&starf;").nextAll().find("span").html("&star;");
        $(this).nextAll().find("span").html("&star;");
        $(this).parent().attr("data-rating", $(this).attr("data-id"));
    });


    // Stars: on mouseleave
    function onMouseleave(stars) {
        // Clear all stars
        stars.find("span").find("span").html("&star;");
        // Fill stars with color
        stars.find("span").each(function() {
           if ($(this).attr("data-id") === stars.attr("data-rating")) {
               $(this).find("span").html("&starf;");
               $(this).prevAll().find("span").html("&starf;");
               $(this).nextAll().find("span").html("&star;");
           }
        });
    }


    $(".stars").mouseenter(function() {
        onMouseenter($(this));
    });


    $(".stars").mouseleave(function() {
        onMouseleave($(this));
    });

//youtube script
    $('#play').on('click', function(e) {
        e.preventDefault();
        $("#player")[0].src += "autoplay=1";
        $('#player').show();
        $('#video-cover').hide();
        $('#play').hide();
    })

});


