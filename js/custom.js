(function($) {

    "use strict";
    // caching selectors
    var mainWindow              =  $(window),
        mainHeader              =  $('header'),
        mainBody                =  $('body'),
        preLoader               =  $('#preloader'),
        staTus                  =  $('#status'),
        scrollToUp              =  $('.scrollup'),
        sfMenu                  =  $(".sf-menu"),
        counter                 =  $('.counter'),
        galleryPhoto            =  $('.gallery-photo'),
        testimonialCarousel     =  $('.testimonial-carousel'),
        slideCarousel           =  $('.slide-carousel'),
        miuContainer            =  $('#miu_container'),
        testPopUp               =  $('.test-popup-link');

        // $(window).scroll(function(){
        //     if ($(this).scrollTop() > 5){  
        //     $(".ami").addClass("fixed-top");
        // }
        // else{
        //      $(".ami").removeClass("fixed-top");
        // }

        // })



    mainWindow.on('load', function() {
            
        
        // Preloader
        staTus.fadeOut(); // will first fade out the loading animation
            preLoader.delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            mainBody.delay(350).css({
            'overflow': 'visible'
        });

         //Sticky header
         mainWindow.on("scroll", function() {
            if ($(this).scrollTop() > 98){  
                mainHeader.addClass("sticky");
                mainBody.addClass("sticky");
                scrollToUp.show();
            }
            else{
                mainHeader.removeClass("sticky");
                mainBody.addClass("sticky");
                scrollToUp.hide();
            }
        } );

        //Super-Fish  Menu
        sfMenu.slicknav({
            delay:       1000,                            // one second delay on mouseout
            animation:   {opacity:'show', height:'show'},  // fade-in and slide-down animation
            speed:       'fast',                          // faster animation speed
            autoArrows:  false
        });


        //magnificPopup
        galleryPhoto.magnificPopup({
            type: 'image',
            gallery: {
            enabled: true
            },
        });

        //owlCarousel
        slideCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            responsiveClass: true,
             autoplayTimeout:2000,
            autoplayHoverPause:true,
			mouseDrag: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots:false,
                    autoplay:true

                },
                600: {
                    items: 1,
                    dots: true,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: true,
                    nav: false,
                    loop: true
                }
            }
        });


        slideCarousel.on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        slideCarousel.on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });

        //owlCarousel
        testimonialCarousel.owlCarousel({
            loop: true,
            autoplay: false,
            margin: 15,
            dots: false,
            animateIn: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true
                }
            }
        });

        //mixItUp
        miuContainer.mixItUp();

        //magnificPopup
        testPopUp.magnificPopup({
            type: 'image',
            gallery: {
            enabled: true
            },
        }); 
        
        //scrollTop
        mainWindow.on("scroll",function() {
            if ($(this).scrollTop() > 100) {
                scrollToUp.fadeIn();
            }else {
                scrollToUp.fadeOut();
            }
        });
        scrollToUp.on("click",function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        setTimeout(function(){
            mainBody.addClass('loaded');
            $('h1').css('color','#222222');
        }, 3000); 
		
		
		counter.counterUp({
         delay: 10,
         time: 2000
        });
    
    });

})(jQuery);