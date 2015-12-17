//<![CDATA[
jQuery(document).ready(function() {
    jQuery('a.mycart').click(function() {
        jQuery('.bag').slideToggle('medium');
        return false;
    });

    /* Superfish */
    jQuery('.nav').superfish({
        delay: 200,
        animation: {
            opacity: 'show'
        },
        speed: 'fast',
        autoArrows: true,
        dropShadows: false
    })
    /* Superfish */
    jQuery('ul#top-nav').superfish({
        delay: 200,
        animation: {
            opacity: 'show'
        },
        speed: 'fast',
        autoArrows: true,
        dropShadows: false
    })

    /* Style View */
    var $box = jQuery('.post'),
    $grid = jQuery('a.grid_view');
    $list = jQuery('a.list_view');
    $list.click(function() {
        $box.removeClass("grid");
        jQuery(this).addClass('active');
        $grid.removeClass('active');
        jQuery.cookie('list_style', 0);
        return false;
    });
    $grid.click(function() {
        $box.addClass("grid");
        jQuery(this).addClass('active');
        $list.removeClass('active');
        jQuery.cookie('list_style', 1);
        return false;
    });
    if (jQuery.cookie('list_style') == 0) {
        $box.removeClass("grid");
        $list.addClass('active');
    } else {
        $box.addClass("grid");
        $grid.addClass('active');
    }

    jQuery('#featured-product').carouFredSel({
        curcular: false,
        infinite: false,
        auto: true,
        prev: {
            button: '#featured-product_prev',
            key: 'left'
        },
        next: {
            button: '#featured-product_next',
            key: 'right'
        },
        pagination: '#featured-product_pag'
    });

jQuery('.footer-right a').hover(function(){
            jQuery(this).stop().animate({
                opacity: 1
            }, 400);
        }, function(){
            jQuery(this).stop().animate({
                opacity: 0.5
            }, 400);
        });
});
//end of ready function

//]]>
