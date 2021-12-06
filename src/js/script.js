function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.header__menu-open');
    let links = menu.find('.header__menu-links');
    let close = menu.find('.header__menu-close');

     button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());
    close.on('click', () => toggleMenu());


    function toggleMenu() {
        menu.toggleClass('active');
    }
}

burgerMenu('.header__menu');


 $(document).ready(function(){
  new WOW().init();

    $('.reviews__carousel').slick({
        infinite: false,
        dots: true,
        slidesToShow: 1,
        speed: 400,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png" alt="next"></button>'
    });

    function validateForms(form){
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2,
            },
            phone: "required",
            email:  {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
          }
      });
      };

    validateForms('#consultation__form');
    validateForms('#contacts__form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
      $('input[name="phone"]').click(function(){
        $(this).setCursorPosition(4);  // set position number
      });


      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) { 
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){ 
      const _href = $(this).attr("href"); 
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
    
});

