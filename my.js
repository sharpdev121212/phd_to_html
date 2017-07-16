"use strict";

$('#slider-carousel').carouFredSel({
   responsive:true,
   width:'100%',
   circular:true,
   scroll: {
      items:1,
      duration:500,
      pauseOnHover:true
   },
   auto:false,
   items: {
      visible:{
         min:1,
         max:1
      },
      height:"variable"
   },
   pagination: {
      container: ".sliderpager",
      anchorBuilder: false,
   }


});


$('.portofolio-carousel').carouFredSel({
   responsive:true,
   width:'100%',
   circular:true,
   prev:'#prev',
   next:'#next',
   scroll: {
      items:1,
      duration:500,
      pauseOnHover:true
   },
   auto:true,
   items: {
      visible:{
         min:1,
         max:4
      },
      height:"variable"
   }

});

$('.testimonial-carousel').carouFredSel({
   responsive:true,
   width:'100%',
   circular:true,
   scroll: {
      items:1,
      duration:500,
      pauseOnHover:true
   },
   auto:false,
   items: {
      visible:{
         min:1,
         max:1
      },
      height:"variable"
   },
   // pagination: {
   //    container: ".sliderpager",
   //    anchorBuilder: false,
   // }


});

$(window).scroll(function(){
   let scrollTop= $(window).scrollTop();
   if(scrollTop>120){
      $('header').css('background-color','#34495e');

   }else{$('header').css('background-color','unset');}

   let portofolioOffset = $('.portofolio').offset().top - scrollTop;

   if(portofolioOffset < 700){
      $('.portofolio').css('visibility','visible');
      $('.portofolio').addClass('animated fadeInLeft');
   }

   let testimonialsOffset = $('.testimonials').offset().top - scrollTop;

   if(testimonialsOffset < 700){
      $('.testimonials').css('visibility','visible');
      $('.testimonials').addClass('animated fadeInRight');
   }

   let blogOffset = $('.blog').offset().top - scrollTop;

   if(blogOffset < 700){
      $('.blog').css('visibility','visible');
      $('.blog').addClass('animated fadeInUp');
   }

   let contactOffset = $('.contact').offset().top - scrollTop;

   if(contactOffset < 700){

      $('.transform').removeClass('transform');
   }

   let footerOffset = $('footer>.container').offset().top - scrollTop;

   if(footerOffset < 700){
      $('footer>.container').css('visibility','visible');
      $('footer>.container').addClass('animated lightSpeedIn');
   }


});

setTimeout( function(){
   $('.services').css('visibility','visible');
   $('.services').addClass('animated lightSpeedIn');
}

   ,1000);
