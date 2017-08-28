
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
        /*$('.lazy').lazyload({
            effect: "fadeIn"
        });*/

        jQuery('#checkout select').selectbox();
        //home img
        jQuery("#main_img").addClass("show");

        jQuery('.slder_about, .slder_contacts, .slder_stockists, .slder_article').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            pause: 10000


        });

        var productSlederBx = jQuery('.img_product').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            mode: 'vertical',
            pause: 10000


        });

        $('.img_product').on('wheel', function (e) {
            e.preventDefault();
            var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
            if (delta > 0) {
                productSlederBx.goToNextSlide();
            } else {
                productSlederBx.goToPrevSlide();
            }
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
                //setTimeout(function() { $(window).trigger("scroll"); }, 100);
            } else {
                gallerySlederBx.goToPrevSlide();
                //setTimeout(function() { $(window).trigger("scroll"); }, 100);
            }
        });









        jQuery('#preloader, #preloader_blue, #preloader_pink, #preloader_green, #preloader_grey, #loader').fadeOut('slow',function(){
            if (location.hash) {
                jQuery('html, body').animate({ scrollTop:  jQuery(location.hash).offset().top - 52 }, 1000);
            }
            jQuery(this).remove();
        });

        $(".menu-bar .nav-menu-wrapper, .list_product_bag, .block_filters2, .modal_div .content-holder, .selectbox .dropdown,.product .pdocut_info").mCustomScrollbar({
            theme:"dark",
            mouseWheelPixels: 150

        });
        /*$(".menu-bar .nav-menu-wrapper, .list_filters, .list_product_bag, .attribute_holder, .modal_div .content-holder").mCustomScrollbar({
            theme:"dark",
            mouseWheelPixels: 150

        });*/

    });

///bar
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

    jQuery(".add_bag").change(function(){
        //e.preventDefault();
        var filter_data, $el;
        $el = $( this );

        filter_data = $el.serialize();
        //console.log(filter_data);
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

    //jQuery(".delivery_select >div.default").siblings().addClass('hidden');
    jQuery("#checkout").change(function(e){
        /*var checkout_data, $el;
         $el = $(this);
         checkout_data = $el.serialize();
         console.log(checkout_data);*/
        var $datacountry = jQuery(".country option:checked").attr('data-country');
        var $dataprice = jQuery(".subtotal_product_price").attr('data-product-price');

        if($datacountry !== '0'){
            jQuery(".delivery_select>div").each( function () {

                if(jQuery(this).attr('data-country')===$datacountry){
                    jQuery(this).removeClass('hidden');
                    //jQuery(".delivery_select ").show();

                }else{
                    jQuery(this).addClass('hidden');
                    //console.log($datacountry);


                }
            });

            jQuery(".delivery_select select").each( function () {

                if(jQuery(this).attr('data-country')===$datacountry){
                    jQuery(this).attr("name", "delivery");
                    jQuery(this).attr("data-validate", "select");
                    //jQuery(".delivery_select ").show();


                }else{
                    //jQuery(this).hide();
                    //console.log($datacountry);
                    jQuery(this).attr("name", "");
                    jQuery(this).attr("data-validate", "");

                }
            });
            jQuery(".delivery_select select").each(function(){
                if(jQuery(this).attr('data-country')===$datacountry) {
                    var $datadelivery = jQuery(this).find("option:checked").attr('data-price');
                    //console.log(this);

                    if (!(typeof($datadelivery) === "undefined")) {
                        var $delivery = '$ ' + $datadelivery;
                        jQuery(".delivery_price").text($delivery);
                        var $price = parseFloat($dataprice) + parseFloat($datadelivery);
                        $price = number_format($price, 0, '', ' ');
                        $price = '$ ' + $price.toString();
                        jQuery(".grand_price").text($price);
                    }
                }
            });

        }




    });


    function number_format( number, decimals, dec_point, thousands_sep ) {

        var i, kw, kd;

        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 2;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = ".";
        }

        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

        kw = i.split( /(?=(?:\d{3})+$)/ ).join( thousands_sep );

        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


        return kw + kd;
    }




    if(jQuery(".bag_bar .bag_null").length != 0) {
        jQuery(".checkout").addClass("disabled").attr('href', "javascript:void(0)");
    } else{
        jQuery(".checkout").removeClass("disabled").attr('href', "/checkout");
    }

    /*jQuery(".bag_bar").on("click", ".delete", function() {

     if(jQuery(".bag_bar .item_product").length != 1) {
     jQuery(".checkout").removeClass("disabled").attr('href', "/checkout");
     var $datacountry = jQuery(".country option:checked").attr('data-country');
     var $datadelivery = jQuery(".delivery option:checked").attr('data-price');
     var $dataprice = jQuery(".subtotal_product_price").attr('data-product-price');
     //console.log($datadelivery);
     if($datacountry !== '0'){
     jQuery(".delivery_price").text('$ 0');
     var $price = '$ '+ number_format($dataprice, 0, '', ' ');
     jQuery(".grand_price").text($price);
     } else{

     if(!(typeof($datadelivery) === "undefined")){
     var $delivery = '$ '+ $datadelivery;
     jQuery(".delivery_price").text($delivery);
     var $price = parseFloat($dataprice) + parseFloat($datadelivery);
     $price = number_format($price, 0, '', ' ');
     $price = '$ ' + $price.toString();
     jQuery(".grand_price").text($price);
     }

     }

     } else{
     jQuery(".checkout").addClass("disabled").attr('href', "javascript:void(0)");
     var hrefcheckout = location.href.replace(/http:\/\/[a-zA-Z.]+\//, '');
     if (hrefcheckout.match("checkout")){
     location.href = '/';
     }
     }
     });*/





    // jQuery(".bag_bar").on("click", ".checkout", function(e) {
    //     if ($(this).hasClass('disabled')) e.preventDefault();
    // });

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
    $("#attribute_size label:not('.disabled')").on('click', function(){
        var size_active = jQuery(this).text();
        $(".attribute_holder").slideUp();
        $("#attribute_size .name").text(size_active);
    });
    $("#attribute_size ").on('click', "label:not('.disabled')", function(){
        //console.log('111');
        var size_active = jQuery(this).text();
        $(".attribute_holder").slideUp();
        $("#attribute_size .name").text(size_active);
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
            //console.log(links);
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



    $('.article .content > .close').click(function () {
        location.href = '/articles';
    });
    $('.product .content > .close').click(function () {
        location.href = '/products';
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
