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
   let top= $(window).scrollTop();
   if(top>120){
      $('header').css('background-color','#34495e');
      return;
   }
   $('header').css('background-color','unset');

});
