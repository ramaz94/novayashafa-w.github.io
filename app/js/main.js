$(function(){
  
      $('.burger').on('click', function(){
        $('.header__phones, .header__menu').slideToggle();
      });

      $('.burger').on('click', function(){
        $('.burger').toggleClass('active');
      });
  
  
  });

  function scrollToTop(sectionId) {
    console.log(sectionId);
    var targetScroll =  $(sectionId).offset().top;
    $('html, body').animate({
        scrollTop: (targetScroll - 115)
    }, 500);
  }
  
  $('header li a[href*="#"]').on('click', function(){
    sectionId = $(this).attr('href');
    scrollToTop(sectionId);
  });
  
  
  
  