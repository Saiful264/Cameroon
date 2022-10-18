$(function(){
  //testimonial slider part start
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".left",
        nextArrow: ".right",
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
  //testimonial slider part end
  //news slider part start
  $('.news-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".news-left",
    nextArrow: ".news-right",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });
  //news slider part end
  //stick menu part start
  $(window).scroll(function(){
    var top = $(this).scrollTop()
    if(top>300){
      $(".navbar").addClass("sticky-menu")
    }else{
      $(".navbar").removeClass("sticky-menu")
    }
  })
  //stick menu part end
  //back to top start
  $(window).scroll(function(){
    var top = $(this).scrollTop()

    if (top > 200){
      $(".back_to_top").fadeIn(300)
    }else{

      $(".back_to_top").fadeOut(300)
    }
  })
  $(".back_to_top").click(function(){
    $("html,body").animate({scrollTop: 0},1000)
  })
  //back to top end
  //scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});
});