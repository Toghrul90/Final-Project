"use strict";$(document).ready(function(){$(".owl-theme").owlCarousel({autoplay:!0,center:!0,items:1,loop:!0,margin:10,dots:!1,nav:!0,responsive:{600:{items:1}}});var t=$(window).scrollTop();$("body").hasClass("home-firs-page")&&($(window).scroll(function(){var s=$(this).scrollTop();if(screen.width>=992){if($("#Lamia").offset().top-($(this).scrollTop()+$(this).height())<200){var s=$(this).scrollTop(),e=$("#Lamia").offset().top-s-450;$("#Lamia").css("transform","scale(1.2) translateY("+e/9+"px)")}else{var e=$("#Lamia").offset().top+s-450;$("#Lamia").css("transform","scale(1.2) translateY("+e/9+"px)")}t=s}}),$(window).scroll(function(){var s=$(this).scrollTop();if(screen.width>=992){if($("#nese").offset().top-($(this).scrollTop()+$(this).height())<200){var s=$(this).scrollTop(),e=$("#nese").offset().top-s-450;$("#nese").css("transform"," translateY("+e/9+"px)")}else{var e=$("#nese").offset().top+s-450;$("#nese").css("transform"," translateY("+e/9+"px)")}t=s}}),$(window).scroll(function(){$(this).scrollTop();if($(".number").offset().top-($(this).scrollTop()+$(this).height())>=-5&&$(".number").offset().top-($(this).scrollTop()+$(this).height())<=0)for(var t=$(".number").text(),s=0;s<=t;s++)$(".number").text(s)}))});var button=document.querySelector(".btn-menu"),button_icon=document.querySelectorAll(".btn-menu span"),menu=document.querySelector(".menu");button.addEventListener("click",function(){"btn-menu"==this.className?(button.classList.add("active"),menu.style.width="100%",menu.style.transition="0.6s ease",menu.style.transitions="0.4s ease",button_icon[0].style.transform="translateY(15px) rotateZ(40deg)",button_icon[0].style.opacity="1",button_icon[0].style.transitions="0.4s ease",button_icon[1].style.opacity="0",button_icon[1].style.transform="translateX(-50px)",button_icon[1].style.transitions="0.4s ease",button_icon[2].style.transform="translateY(-10px) rotateZ(-40deg)",button_icon[2].style.opacity="1",button_icon[2].style.transitions="0.4s ease"):(button.className="btn-menu",menu.style.width="0",menu.style.transition="0.6s ease",menu.style.transitions="0.4s ease",button_icon[0].style.transform="translateY(0px) rotateZ(0deg)",button_icon[0].style.opacity="1",button_icon[0].style.transitions="0.4s ease",button_icon[1].style.opacity="1",button_icon[1].style.transform="translate(0px)",button_icon[1].style.transitions="0.4s ease",button_icon[2].style.transform="translateY(0px) rotateZ(0deg)",button_icon[2].style.opacity="1",button_icon[2].style.transitions="0.4s ease")}),$(document).ready(function(){$(".accardion-box li").click(function(){$(".accardion-box li").find(".text").slideUp(),$(this).find(".text").slideToggle()})}),$(document).ready(function(){$(window).width()<991&&$(".head .navs-item").click(function(){$(this).find(".dropdown-menus").slideToggle()}),$(window).width()>991&&$(".head .navs-item").hover(function(){$(this).find(".dropdown-menus").slideToggle()})});