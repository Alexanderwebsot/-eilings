$(document).ready(function () {
  $('.calculator-range').rangeslider({
  	polyfill : false,
  });
  $('.ceilings-slider').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  prevArrow: $('.ceiling-arrow__left'),
	  nextArrow: $('.ceiling-arrow__right')
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
    });
    $('.work-slider').slick({
  	  infinite: true,
  	  arrows: false,
  	  variableWidth: true,
  	  swipe: true,
  	  centerMode: true,
  	  focusOnSelect: true
    });
  $('#file-input').on('change', function() {
  	let file = $('#file-input')[0].files[0]
  	if (file){
  	  $('.calculator-file')[0].innerHTML = file.name;
  	}
  })
});