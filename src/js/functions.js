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


    });



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
});






