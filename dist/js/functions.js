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
        //home img
        jQuery("#main_img").addClass("show");

        jQuery('.slder_about, .slder_contacts, .slder_stockists').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            controls: false


        });

        jQuery('.gallery').bxSlider({
            nextText: "",
            prevText: "",
            controls: false,
            mode: 'vertical',
            pagerCustom: '.gallery-icons'


        });



        jQuery('.list_media_items').masonry({
            itemSelector: '.media_item',
            //columnWidth: 240,
            /*layoutPriorities: {
                shelfOrder: 1
            }*/
        });
    });


///bar
    jQuery(".menu-icon").on("click", function(){
        jQuery(".content").addClass("opened");
        jQuery(".top").addClass("opened");
        jQuery("#bar_opened").addClass("opened");
        jQuery(".menu-bar").addClass("opened");
    });
    jQuery(".bag-icon").on("click", function(){
        jQuery(".content").addClass("opened_right");
        jQuery(".top").addClass("opened_right");
        jQuery("#bar_opened").addClass("opened");
        jQuery(".bag_bar").addClass("opened");
    });
    jQuery("#bar_opened").click(function(){
        jQuery(".content").removeClass("opened");
        jQuery(".top").removeClass("opened");
        jQuery(".content").removeClass("opened_right");
        jQuery(".top").removeClass("opened_right");
        jQuery("#bar_opened").removeClass("opened");
        jQuery(".menu-bar").removeClass("opened");
        jQuery(".bag_bar").removeClass("opened");

    });
 //end bar

});

window.onload = function(){

    jQuery('.gallery').each(function () {
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




