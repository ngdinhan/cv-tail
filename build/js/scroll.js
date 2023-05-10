const height = 3000;
const secs = 3700;
const ratio = (secs / height);
const time = ratio * $(window).height();

const secs2 = 1000;
const ratio2 = (secs2 / height);
const time2 = ratio2 * $(window).height();
$('.mouse').on('click', function(){
    $('html, body').animate({
    scrollTop:  $('#services').offset().top
    }, time, "linear");
});

$(".scroll-home").click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, time2, 'linear');
});

$(".scroll-services").click(function() {
    $('html,body').animate({
        scrollTop: $('#services').offset().top
    }, time2, 'linear');
});

$(".scroll-experience").click(function() {
  $('html,body').animate({
    scrollTop: $('#experience').offset().top
  }, time2, 'linear');
});

$(".scroll-works").click(function() {
  $('html,body').animate({
    scrollTop: $('#works').offset().top
  }, time2, 'linear');
});

$(".scroll-testimonials").click(function() {
  $('html,body').animate({
    scrollTop: $('#testimonials').offset().top
  }, time2, 'linear');
});

$(".scroll-blog").click(function() {
  $('html,body').animate({
    scrollTop: $('#blog').offset().top
  }, time2, 'linear');
});

$(".scroll-contact").click(function() {
  $('html,body').animate({
    scrollTop: $('#contact').offset().top
  }, time2, 'linear');
});


$("#return-to-top").click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, time2, 'linear');
});