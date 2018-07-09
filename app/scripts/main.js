// $(document).ready(function () {
//     $(".nav-menu .nav-items ").click(function () {
//         $(this).find(".dropdown-menus ").slideToggle("slow");
//         console.log("hello");
//     });
// });


$(document).ready(function () {
  $('.owl-theme').owlCarousel({
    autoplay: true,
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
      600: {
        items: 1
      }
    }
  });


  var position = $(window).scrollTop();

  if($('body').hasClass('home-firs-page')) {
    $(window).scroll(function () {
      //console.log("salam")
      // console.log($("#Lamia").offset().top)
  
      var scroll = $(this).scrollTop();
     
      if (screen.width >= 992) {
        if (($('#Lamia').offset().top - ($(this).scrollTop() + $(this).height())) < 200) {
  
          var scroll = $(this).scrollTop();
          var a = ($('#Lamia').offset().top - scroll) - 450;
          // console.log(a)
          // console.log("salam")
          $('#Lamia').css('transform', 'scale(1.2)' + ' translateY(' + a / 9 + 'px)')
        } else {
          var a = ($('#Lamia').offset().top + scroll) - 450;
          $('#Lamia').css('transform', 'scale(1.2)' + ' translateY(' + a / 9 + 'px)')
  
        }
        position = scroll;
      }
  
    })
    $(window).scroll(function () {
      //console.log("salam")
      // console.log($("#Lamia").offset().top)
  
      var scroll = $(this).scrollTop();
      if (screen.width >= 992) {
        //   console.log(screen.width)
        if (($('#nese').offset().top - ($(this).scrollTop() + $(this).height())) < 200) {
  
          var scroll = $(this).scrollTop();
          var a = ($('#nese').offset().top - scroll) - 450;
          // console.log(a)
          // console.log("salam")
          $('#nese').css('transform', ' translateY(' + a / 9 + 'px)')
        } else {
          var a = ($('#nese').offset().top + scroll) - 450;
          $('#nese').css('transform', ' translateY(' + a / 9 + 'px)')
  
        }
        position = scroll;
      }
  
    })
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (($('.number').offset().top - ($(this).scrollTop() + $(this).height())) >= -5 &&
        ($('.number').offset().top - ($(this).scrollTop() + $(this).height())) <= 0) {
        var text = $('.number').text();
        for (var number = 0; number <= text; number++) {
          ($('.number').text(number));
          console.log(number)
        }
      }
    })
  }
  



 
});

var button = document.querySelector('.btn-menu')
var button_icon = document.querySelectorAll('.btn-menu span');
var menu = document.querySelector('.menu');
// var navbar = document.querySelector('.navbar');
button.addEventListener('click', function animation() {
  console.log(this.className)
  if ((this.className == 'btn-menu')) {
    // bunuda yoxlamiwam
    console.log('var')
    button.classList.add('active');
    console.log('add olundu');
    menu.style.width = '100%';
    menu.style.transition = '0.6s ease';
    // navbar.style.height='280px';
    menu.style.transitions = '0.4s ease';
    button_icon[0].style.transform = 'translateY(15px) rotateZ(40deg)';
    button_icon[0].style.opacity = '1';
    button_icon[0].style.transitions = '0.4s ease';


    button_icon[1].style.opacity = '0';
    button_icon[1].style.transform = 'translateX(-50px)';
    button_icon[1].style.transitions = '0.4s ease';

    button_icon[2].style.transform = 'translateY(-10px) rotateZ(-40deg)';
    button_icon[2].style.opacity = '1';
    button_icon[2].style.transitions = '0.4s ease';




    // $(this).find(".dropdown-menus ").slideToggle("slow");
  } else {
    console.log('yoxdu')
    button.className = 'btn-menu';
    menu.style.width = '0';
    menu.style.transition = '0.6s ease';
    // navbar.style.height='0px';
    menu.style.transitions = '0.4s ease';
    button_icon[0].style.transform = 'translateY(0px) rotateZ(0deg)';
    button_icon[0].style.opacity = '1';
    button_icon[0].style.transitions = '0.4s ease';


    button_icon[1].style.opacity = '1';
    button_icon[1].style.transform = 'translate(0px)';
    button_icon[1].style.transitions = '0.4s ease';

    button_icon[2].style.transform = 'translateY(0px) rotateZ(0deg)';
    button_icon[2].style.opacity = '1';
    button_icon[2].style.transitions = '0.4s ease';
  }

});


$(document).ready(function(){
  $('.accardion-box li').click(function(){
    $('.accardion-box li').find('.text').slideUp();
   $(this).find('.text').slideToggle();
  });
})



$(document).ready(function(){ 
  console.log($(window).width())
  if($(window).width()<991) {
    $('.head .navs-item').click(function(){
      $(this).find('.dropdown-menus').slideToggle()
      })
  }
  if($(window).width()>991){
    $('.head .navs-item').hover(function(){
      $(this).find('.dropdown-menus').slideToggle()
      })
  }


// if($("body").hasClass("ukraine-page")) {
//   var position = $(window).scrollTop();
//   $(window).scroll(function () {
//     //console.log("salam")
//      //console.log($(".content-box .content .image").offset().top)
  
//     var scroll = $(this).scrollTop();
//     if (screen.width >= 992) {
//       if (($('.content-box .content .image').offset().top - ($(this).scrollTop() + $(this).height())) < 200) {
  
//         var scroll = $(this).scrollTop();
//         var a = ($('.content-box .content .image').offset().top - scroll) - 450;
//         // console.log(a)
//         // console.log("salam")
//         $('.content-box .content .image').css('transform',' translateY(' + a / 9 + 'px)')
//       } else {
//         var a = ($('.content-box .content .image').offset().top + scroll) - 450;
//         $('.content-box .content .image').css('transform',' translateY(' + a / 9 + 'px)')
  
//       }
//       console.log(position+"lol" +scroll)
//       position = scroll;
//     }
  
//   })
// }

})


