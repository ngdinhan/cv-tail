// active menu start
var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll("nav .vertical-menu li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
            console.log("current: ", current);
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};
// active menu end

// menu button start
$('.menu-icon button').on( 'click', function() {
    $('header.desktop-header, .main-layout, header.mobile-header').toggleClass('open');
});

$('main.main-layout').on( 'click', function() {
    $('header.desktop-header, .main-layout, header.mobile-header').removeClass('open');
});

$('.vertical-menu li a').on( 'click', function() {
    $('header.desktop-header, .main-layout, header.mobile-header').removeClass('open');
});

$('.search-button').on( 'click', function() {
    $('.search-popup').addClass('open');
});

$('.search-popup .close').on( 'click', function() {
    $('.search-popup').removeClass('open');
});

$( ".reply-title" ).prependTo( ".comment-respond" );
// menu button end

// progress bar start
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {     
        if (!$('#skills').hasClass('active')) {
            $('#skills').addClass('active');
            $('.progress-bar').toggleClass('coding');
            $('.progress-bar.addWordpress').toggleClass('wordpress');
            $('.progress-bar.addSketch').toggleClass('sketch');
            $('.progress-bar.addJquery').toggleClass('jQuery');  
        }
    } 
});
// progress bar end

// return to top start
$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {        
        $("#return-to-top").css("display", "block");  
    } else {
        $("#return-to-top").css("display", "none");
    }
});
// return to top end

// counter up number start
// let CountNumber=0
// if(CountNumber==0){
    $('.count').counterUp({
        delay:10,
        time:1000,    
    });
//     CountNumber=1;
// }
// console.log(CountNumber)

// counter up number end 

