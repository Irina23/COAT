jQuery(document).ready(function() {

    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            address:{
                required: true
            }
        }
    });



    jQuery(window).load(function() {
        jQuery('#checkout select').selectbox();
        //home img
        jQuery("#main_img").addClass("show");

        jQuery('.slder_about, .slder_contacts, .slder_stockists, .slder_article').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false


        });

        var productSlederBx = jQuery('.img_product').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            mode: 'vertical'


        });

        $('.img_product, .collections .gallery').on('wheel', function (e) {
            e.preventDefault();
            var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
            if (delta > 0) {
                productSlederBx.goToNextSlide();
            } else {
                productSlederBx.goToPrevSlide();
            }
        });


        jQuery('.gallery').bxSlider({
            nextText: "",
            prevText: "",
            controls: false,
            mode: 'vertical',
            pagerCustom: '.gallery-icons'
        });



        $(".menu-bar .nav-menu-wrapper, .text_block, .collections_block .collections, .list_product_bag, .list_filters, .modal_div .content-holder, .selectbox .dropdown").mCustomScrollbar({
            theme:"dark"

        });



        jQuery('#preloader').fadeOut('slow',function(){
            if (location.hash) {
                jQuery('html, body').animate({ scrollTop:  jQuery(location.hash).offset().top - 52 }, 1000);
            }
            jQuery(this).remove();
        });


    });

///bar
    jQuery(".menu-icon").on("click", function(){
        jQuery(".content, .top, #bar_opened, .menu-bar, footer").addClass("opened");

    });
    jQuery(".bag-icon").on("click", function(){
        jQuery(".content, .top").addClass("opened_right");
        jQuery("#bar_opened, .bag_bar, footer").addClass("opened");
    });
    jQuery("#bar_opened").click(function(){
        jQuery(".content, .top, #bar_opened, .menu-bar, .bag_bar, footer").removeClass("opened");
        jQuery(".content, .top").removeClass("opened_right");
        
    });

    jQuery(".add_bag").change(function(){
        //e.preventDefault();
        var filter_data, $el;
        $el = $( this );
        filter_data = $el.serialize();
        if(filter_data.length !== 0) {
            jQuery(".add_button")
                .removeAttr("disabled")
                .on("click", function(){
                    jQuery(".content, .top").addClass("opened_right");
                    jQuery("#bar_opened, .bag_bar, footer").addClass("opened");
                    jQuery(".checkout").removeClass("disabled");
                });
        }
        
    });

    jQuery("#checkout select").change(function(){
        /*var filter_data, $el;
        $el = $( this );
        filter_data = $el.serialize();*/
        var $datacountry = jQuery(".country option:checked").attr('data-country');
        var $datadelivery = jQuery(".delivery option:checked").attr('data-price');
        var $dataprice = jQuery(".subtotal_product_price").attr('data-product-price');
        console.log($datadelivery);
        if($datacountry === 'true'){
            jQuery(".delivery_price").text('$ 0');
            var $price = '$ '+ $dataprice;
            jQuery(".grand_price").text($price);
        } else{


            if(!(typeof($datadelivery) === "undefined")){
                var $delivery = '$ '+ $datadelivery;
                jQuery(".delivery_price").text($delivery);
                var $price = parseFloat($dataprice) + parseFloat($datadelivery);
                jQuery(".grand_price").text($price);
            }

        }



    });
    

    if(jQuery(".bag_bar .bag_null").length != 0) {
        jQuery(".checkout").addClass("disabled");
    } else{
        jQuery(".checkout").removeClass("disabled");
    }
    
    jQuery(".bag_bar").on("click", ".delete", function() {
        if(jQuery(".bag_bar .item_product").length != 1) {
            jQuery(".checkout").removeClass("disabled");
            if (jQuery(".page_wrapper").hasClass(".checkout")){
                $(location).attr('href', '/');
            }
        } else{
            jQuery(".checkout").addClass("disabled");
        }
    });
    
    jQuery(".bag_bar").on("click", ".checkout", function(e) {
        if ($(this).hasClass('disabled')) e.preventDefault();
    });

    //end bar


    jQuery(".filter .title, .active_collections").on("click", function(){
        jQuery(this).next().slideToggle();

    });
   
    jQuery(".filter .close").on("click", function(){
        jQuery(this).closest(".block_filter").slideUp();

    });


    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);

                }
            );
    });



    //size
    jQuery("#attribute_size .name").click(function(){
        jQuery(this).next(".attribute_holder").slideToggle();
        jQuery(this).toggleClass("open");
    });
    jQuery("#attribute_size label").click(function(){
        var size_active = jQuery(this).text();
        jQuery(".attribute_holder").slideUp();
        jQuery("#attribute_size .name").text(size_active);
    });

});

window.onload = function(){

    jQuery('.gallery, .img_product, .gallery_mobile').each(function () {
        this.onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            console.log(links);
            blueimp.Gallery(links, options);
        };
    });


};
//up
jQuery(document).ready(function($){

    /*var
     speed = 500,
     $scrollTop = $('.scrollTop');
     $scrollTop.click(function(e){
     e.preventDefault();

     $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
     });*/



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

});