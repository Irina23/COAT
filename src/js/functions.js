
jQuery(document).ready(function() {

    //form validate
    jQuery("form").validate();


    jQuery(window).load(function() {

        jQuery('#checkout select, #modal_country select, #modal_country_change select').selectbox();

        //home img zoom
        jQuery("#main_img").addClass("show");

        // slider bxslider
        jQuery('.slder_about, .slder_contacts, .slder_stockists, .slder_article').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            pause: 10000
        });

        jQuery('.img_product').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            pause: 10000
        });


        var gallerySlederBx = jQuery('.gallery').bxSlider({
            nextText: "",
            prevText: "",
            controls: false,
            mode: 'vertical',
            pagerCustom: '.gallery-icons',
            pause: 10000,
            speed: 2000
        });


        var height_collettion = $(".block_text_collections").height();
        $(".block_text_collections .bx-viewport").css('height', height_collettion);

        jQuery(window).resize(function() {
            height_collettion = $(".block_text_collections").height();
            $(".block_text_collections .bx-viewport").css('height', height_collettion);
        });


        $(' .collections .gallery').on('wheel', function (e) {
            e.preventDefault();
            var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
            if (delta > 0) {
                gallerySlederBx.goToNextSlide();
            } else {
                gallerySlederBx.goToPrevSlide();
            }
        });


		//preloader
        jQuery('#preloader, #preloader_blue, #preloader_pink, #preloader_green, #preloader_grey, #loader').fadeOut('slow',function(){
            if (location.hash) {
                jQuery('html, body').animate({ scrollTop:  jQuery(location.hash).offset().top - 52 }, 1000);
            }
            jQuery(this).remove();
        });


		//scroll plugin init
        $(".menu-bar .nav-menu-wrapper, .list_product_bag, .list_filters, .modal_div .content-holder, #checkout .selectbox .dropdown, .page_wrapper.product .pdocut_info").mCustomScrollbar({
            theme:"dark",
            mouseWheelPixels: 150
        });
		$("#modal_country .selectbox .dropdown, #modal_country_change .selectbox .dropdown").mCustomScrollbar({
			theme:"light",
			mouseWheelPixels: 150
		});


    });

	///bar open
    jQuery(".menu-icon").on("click", function(){
        jQuery(".content, .top, #bar_opened, .menu-bar, footer").addClass("opened");
        jQuery("body").addClass("no-scroll");

    });
    jQuery(".top .bag-icon").on("click", function(){
        jQuery(".content, .top").addClass("opened_right");
        jQuery("#bar_opened, .bag_bar, footer").addClass("opened");
        jQuery("body").addClass("no-scroll");
    });
    jQuery("#bar_opened, .bag_bar .bag-icon").click(function(){
        jQuery(".content, .top, #bar_opened, .menu-bar, .bag_bar, footer").removeClass("opened");
        jQuery(".content, .top").removeClass("opened_right");
        jQuery("body").removeClass("no-scroll");

    });

    // add cart
    jQuery(".add_bag").change(function(){
        var filter_data, $el;
        $el = $( this );

        filter_data = $el.serialize();

        if(filter_data.length !== 0) {
            jQuery(".add_button")
                .removeAttr("disabled")
                .on("click", function(){
                    jQuery(".content, .top").addClass("opened_right");
                    jQuery("#bar_opened, .bag_bar, footer").addClass("opened");
                    jQuery(".checkout").removeClass("disabled").attr('href', "/checkout");
                });
        }

    });


	//cart null disabled
    if(jQuery(".bag_bar .bag_null").length != 0) {
        jQuery(".checkout").addClass("disabled").attr('href', "javascript:void(0)");
    } else{
        jQuery(".checkout").removeClass("disabled").attr('href', "/checkout");
    }


	// filter open
    jQuery(".filter .title, .active_collections").on("click", function(){
        jQuery(this).next().slideToggle();

    });

    jQuery(".filter .close").on("click", function(){
        jQuery(this).closest(".block_filter").slideUp();

    });


    //modal form
	var overlay = $('#overlay');
	var open_modal = $('.open_modal');
	var close = $('.modal_close');
	var modal = $('.modal_div');

	if($(modal).hasClass('show')){
		var div = $('.modal_div.show').attr('id');
		console.log(div);
		overlay.fadeIn(400,
			function(){
				$('#'+div)
					.css('display', 'block')
					.animate({opacity: 1}, 200);
				$('body').addClass('no-scroll');
			});

	}

	open_modal.click( function(event){
		event.preventDefault();
		var div = $(this).attr('href');
		console.log(div);
		if(div=='#modal_country_change'){
			overlay.addClass('overlay_country_change');
			jQuery(".content, .top, #bar_opened, .menu-bar, .bag_bar, footer").removeClass("opened");

		}
		overlay.fadeIn(400,
			function(){
				$(div)
					.css('display', 'block')
					.animate({opacity: 1}, 200);
				$('body').addClass('no-scroll');
			});
	});

	close.click( function(){
		modal
			.animate({opacity: 0}, 200,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(400).removeClass('overlay_country_change');
					$(".message_modal").removeClass("show");
					$('body').removeClass('no-scroll');
				}
			);
	});

	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
			modal.animate({opacity: 0}, 200,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(400).removeClass('overlay_country_change');
					$(".message_modal").removeClass('show');
					$('body').removeClass('no-scroll');

				}
			);
	});


    //size open
    jQuery("#attribute_size .name").click(function(){
        jQuery(this).next(".attribute_holder").slideToggle();
        jQuery(this).toggleClass("open");
    });
    $("#attribute_size label:not('.disabled')").on('click', function(){
        var size_active = jQuery(this).text();
        $(".attribute_holder").slideUp();
        $("#attribute_size .name").text(size_active);
    });
    $("#attribute_size ").on('click', "label:not('.disabled')", function(){
        var size_active = jQuery(this).text();
        $(".attribute_holder").slideUp();
        $("#attribute_size .name").text(size_active);
    });

});


// gallery full product
window.onload = function(){

    jQuery('.gallery, .img_product, .gallery_mobile').each(function () {
        this.onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    });

};
//up
jQuery(document).ready(function($){

    var goUp = (function () {

        var $el = $('.scrollTop'),
            speed = 500,
            timingFunction = 'swing',
            state = false,
            paused = false,
            plg = {
                up: function () {
                    paused = true;
                    state = true;

                    $("html, body").stop().animate({scrollTop:0}, speed, timingFunction, function () {
                        paused = false;
                    }).one('touchstart mousewheel DOMMouseScroll wheel', function () {
                        $(this).stop(false, false).off('touchstart mousewheel DOMMouseScroll wheel');
                        paused = false;
                    });
                    plg.hide();

                },
                show: function () {
                    if (!state && !paused) {
                        $el.addClass('opened');
                        state = true;
                    }
                },
                hide: function () {
                    if (state) {
                        $el.removeClass('opened');
                        state = false;
                    }
                },
                $el: $el
            };

        $el.on('click', function () {
            plg.up();

        });
        return plg;

    })();

// init
    $(document).on('scroll', function () {
        var top = $(this).scrollTop();
        // top > than we neet show arrow
        if (top > 150) {
            $('.scrollTop').show();
        } else {
            $('.scrollTop').hide();
        }
    });



    document.ontouchmove = function ( event ) {
        var isTouchMoveAllowed = true, target = event.target;
        while ( target !== null ) {
            if ( target.classList && target.classList.contains( 'disable-scrolling' ) ) {
                isTouchMoveAllowed = false;
                break;
            }
            target = target.parentNode;
        }
        if ( !isTouchMoveAllowed ) {
            event.preventDefault();
        }

    };

    function removeIOSRubberEffect( element ) {
        element.addEventListener( "touchstart", function () {
            var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;
            if ( top === 0 ) {
                element.scrollTop = 1;
            } else if ( currentScroll === totalScroll ) {
                element.scrollTop = top - 1;
            }

        } );

    }

    removeIOSRubberEffect( document.querySelector( ".scrollable" ) );


});
