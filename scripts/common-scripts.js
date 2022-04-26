;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = '';

            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
                /*$(this).parent().addClass('complete')*/

            }else if(this.value !== this.defaultValue){
                console.log('no value')
                $(this).parent().addClass('complete')
            }else{
                $(this).parent().removeClass('complete')
            }
        })
        // Ends input common focus and blur for value.


        $('.phone-nav').on('click', function(){
            $(this).toggleClass('open')
            $('.main-nav').toggleClass("show");
            if($(window).width() < 768){
                $('.nav-wrap').slideToggle();
            }
        });
        
        $(window).resize(function(){
            $(".logo-wrap").removeClass('show');
        })
        


        
    }) // End ready function.

    $(window).on('load', function () {
        // Begin common slider
        if ($('div.slider-wrap').length == 0) return false

        $('div.slider-wrap').flexslider({
            animation: "fade",
            slideshow: true,
            directionNav: false,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })

        $('div.slider-wrap video').trigger('play');

    })


})(jQuery)