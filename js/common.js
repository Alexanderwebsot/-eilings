$(document).ready(function () {
  $('.calculator-range').rangeslider({
  	polyfill : false,
  });
  new WOW().init();
  $('.ceilings-slider').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  prevArrow: $('.ceiling-arrow__left'),
	  nextArrow: $('.ceiling-arrow__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          dots: true,
        }
      }
    ]
  });
  $('.solutions-slick').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.solutions-arrow_l'),
    nextArrow: $('.solutions-arrow_r'),
  });
  $('.calculator-checkbox').on('change', function() {
  	let parent = $(this).parents('.calculator-block');
  	if ($(this).prop('checked')) {
  	   $(parent).removeClass('calculator-block-disabled');
  	}
  	else{
  		$(parent).addClass('calculator-block-disabled');
  	}
  })
  $('.solutions-slick__block').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.solutions-modal').addClass('solutions-modal-active');
    $('html').addClass('body-scrool');
  })
  let count_slide = $('.solutions-slick__slide').length;
  let counter_slider = 1;
  $('.solutions-now')[0].innerHTML = count_slide;
  $('.solutions-arrow_r').on('click', function() {
  	if (counter_slider < count_slide) {
  		counter_slider += 1;
  		$('.solutions-count_num')[0].innerHTML = counter_slider;
  	}
  })
  $(".footer-item").on("click", 'a', function (event) {
    event.preventDefault();
    $('.menu-modal').removeClass('menu-modal-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".header-content-wrapper").on("click", 'a', function (event) {
    event.preventDefault();
    $('.menu-modal').removeClass('menu-modal-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.nav-burger').on('click', function() {
    $('.menu-modal').addClass('menu-modal-active');
  })
  $('.menu-modal-close').on('click', function() {
    $('.menu-modal').removeClass('menu-modal-active');
  })
  $('.header-play-button').on('click', function() {
    $('.modal-video').addClass('modal-video-active');
    $('.dark-window').addClass('dark-window-active');
  })
  $('.work-slide').on('click', function() {
    let element = $('.modal-image__content');
    let src = $(this).attr('href');
    $(element).attr("src",src);
    $('.modal-image').addClass('modal-image-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.modal-video-close').on('click', function() {
    $('.modal-video').removeClass('modal-video-active');
    $('.modal-image').removeClass('modal-image-active');
    $('.dark-window').removeClass('dark-window-active');
    $('.solutions-modal').removeClass('solutions-modal-active');
    $('.modal-map').removeClass('modal-map-active');
    $('html').removeClass('body-scrool');
  })

  $('.ftr-link-1').on('click', function() {
    $('.modal-map-1').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.ftr-link-2').on('click', function() {
    $('.modal-map-2').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.ftr-link-3').on('click', function() {
    $('.modal-map-3').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.ftr-link-4').on('click', function() {
    $('.modal-map-4').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.ftr-link-5').on('click', function() {
    $('.modal-map-5').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.ftr-link-6').on('click', function() {
    $('.modal-map-6').addClass('modal-map-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.modal-video').removeClass('modal-video-active');
    $('.modal-image').removeClass('modal-image-active');
    $('.dark-window').removeClass('dark-window-active');
  })
  $('.solutions-arrow_l').on('click', function() {
  	if (counter_slider > 1) {
  		counter_slider -= 1;
  		$('.solutions-count_num')[0].innerHTML = counter_slider;
  	}
  })
  $('.calculator-range').on('input', function() {
  	let parent = $(this).parents('.calculator-row-block');
  	let child = $(parent).children('.calculator-row__left');
  	child[0].innerHTML = this.value
  })
    $('.orders-slider').slick({
  	  infinite: true,
  	  slidesToShow: 4,
  	  slidesToScroll: 1,
  	  prevArrow: $('.ceiling-arrow__left_o'),
  	  nextArrow: $('.ceiling-arrow__right_o'),
  	  variableWidth: true,
  	  swipe: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
          }
        }
      ]
    });
    $('.work-slide').on('click', function() {
    	return false;
    })
    $('.reviews-slider').slick({
  	  infinite: true,
  	  slidesToShow: 2,
  	  slidesToScroll: 1,
  	  arrows: true,
  	  prevArrow: $('.ceiling-arrow__left_r'),
  	  nextArrow: $('.ceiling-arrow__right_r'),
  	  variableWidth: true,
  	  swipe: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            dots: true,
            variableWidth: false,
          }
        }
      ]
    });
    $('.work-slider').slick({
  	  infinite: true,
  	  arrows: false,
  	  variableWidth: true,
  	  swipe: true,
  	  centerMode: true,
  	  focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
          }
        }
      ]
    });
  $('#file-input').on('change', function() {
  	let file = $('#file-input')[0].files[0]
  	if (file){
  	  $('.calculator-file')[0].innerHTML = file.name;
  	}
  })
});