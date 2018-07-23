(function($, Drupal, window, document){

    Drupal.behaviors.awaled8theme = {
        attach: function (context, settings) {

            if($(".js-slick-single-item-center").hasClass('slick-initialized')) {
                $(".js-slick-single-item-center").slick("unslick");}

            $(".item-list .js-slick-single-item-center").slick({
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '460px',
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            centerPadding: '300px',
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            adaptiveHeight: true,
                            centerPadding: '100px',
                        }
                    },
                ]
            });
            
        }
    };
}
)(jQuery, Drupal, this, this.document);