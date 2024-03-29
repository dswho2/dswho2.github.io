jQuery(document).ready(function($) {
    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */
    
    $('.smoothscroll').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });


    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/

    var sections = $("section");
    var navigation_links = $("#headerNav a");

    sections.waypoint({

        handler: function(event, direction) {

            var active_section;

            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('#headerNav a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

        },
        offset: '35%'

    });

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', function() {

    var h = $('header').height();
    var y = $(window).scrollTop();
    var nav = $('#headerNav');

    if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
        nav.fadeOut('fast');
    }
    else {
        if (y < h*.20) {
        nav.removeClass('opaque').fadeIn('fast');
        }
        else {
        nav.addClass('opaque').fadeIn('fast');
        }
    }
	});


});

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

$('form#contactForm button.submit').click(function() {

    $('#image-loader').fadeIn();

    var contactName = $('#contactForm #contactName').val();
    var contactEmail = $('#contactForm #contactEmail').val();
    var contactSubject = $('#contactForm #contactSubject').val();
    var contactMessage = $('#contactForm #contactMessage').val();

    var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
            '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

    $.ajax({

        type: "POST",
        url: "inc/sendEmail.php",
        data: data,
        success: function(msg) {

        // Message was sent
        if (msg == 'OK') {
            $('#image-loader').fadeOut();
            $('#message-warning').hide();
            $('#contactForm').fadeOut();
            $('#message-success').fadeIn();   
        }
        // There was an error
        else {
            $('#image-loader').fadeOut();
            $('#message-warning').html(msg);
            $('#message-warning').fadeIn();
        }

        }

    });
    return false;
});
