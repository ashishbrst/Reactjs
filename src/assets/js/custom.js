import jQuery  from 'jquery';
jQuery(document).ready(function() {
    jQuery("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        jQuery(this).siblings('a.active').removeClass("active");
        jQuery(this).addClass("active");
        var index = jQuery(this).index();
        jQuery("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        jQuery("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
	jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        jQuery("header").addClass("darkHeader");
    }
	else {
        jQuery("header").removeClass("darkHeader");
    }
}); //missing );
    });
