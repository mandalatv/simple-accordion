(function(w, d, $) {
	$(document).ready(() => {
        $('.accordion__icon').click(function(){
            
            // close any open siblings and their children
            let parent = $(this).parent();
            let siblings = parent.siblings();
            siblings.removeClass('active');
            siblings.find('.accordion__icon').html('+');
            siblings.find('.has-submenu').removeClass('active');
            
            $(this).parent().toggleClass('active');
            
            // change icon based on activity
            if($(this).parent().hasClass('active')){
                $(this).html('-');
            }else{
                $(this).html('+');
                parent.find('.has-submenu').removeClass('active');
                parent.find('.accordion__icon').html('+');
            }
        });
	});
})(window, document, jQuery);
