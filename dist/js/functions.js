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

        jQuery('.img_product').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false,
            mode: 'vertical'


        });

        jQuery('.gallery').bxSlider({
            nextText: "",
            prevText: "",
            controls: false,
            mode: 'vertical',
            pagerCustom: '.gallery-icons'


        });

        $(" .menu-bar, .text_block, .collections_block .collections, .list_product_bag, .list_filters, .modal_div .content-holder, .selectbox .dropdown").mCustomScrollbar({
            theme:"dark"
        });

        jQuery(".collections .item.active").each( function(){
            var collections_active = jQuery(this).find("span").attr("data-color");
            //console.log(collections_active);
            jQuery(".collections .active_collections").css("background", collections_active);
        });



    });


///bar
    jQuery(".menu-icon").on("click", function(){
        jQuery(".content").addClass("opened");
        jQuery(".top").addClass("opened");
        jQuery("#bar_opened").addClass("opened");
        jQuery(".menu-bar").addClass("opened");
        jQuery("footer").addClass("opened");
    });
    jQuery(".bag-icon, .add_button").on("click", function(){
        jQuery(".content").addClass("opened_right");
        jQuery(".top").addClass("opened_right");
        jQuery("#bar_opened").addClass("opened");
        jQuery(".bag_bar").addClass("opened");
        jQuery("footer").addClass("opened");
    });
    jQuery("#bar_opened").click(function(){
        jQuery(".content").removeClass("opened");
        jQuery(".top").removeClass("opened");
        jQuery(".content").removeClass("opened_right");
        jQuery(".top").removeClass("opened_right");
        jQuery("#bar_opened").removeClass("opened");
        jQuery(".menu-bar").removeClass("opened");
        jQuery(".bag_bar").removeClass("opened");
        jQuery("footer").removeClass("opened");

    });
 //end bar


    jQuery(".filter .title").on("click", function(){
        jQuery(this).next().slideToggle();

    });
    jQuery(".active_collections").on("click", function(){
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

jQuery(document).ready(function($){

    var
        speed = 500,
        $scrollTop = $('.scrollTop');
    $scrollTop.click(function(e){
        e.preventDefault();

        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });



});




