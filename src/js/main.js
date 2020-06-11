$(function () {

  $('.products__slider').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/img/chevron-right.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/img/chevron-left.svg" alt="prev arrow"></button>',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    appendArrows: '.products__arrows-wrap'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "12px",
    readOnly: true,
    ratedFill: "#ffc000"
  });

  $(".rate-star-big").rateYo({
    rating: 4.5,
    starWidth: "16px",
    readOnly: true,
    ratedFill: "#ffc000"
  });

  $('.create__search-click').on('click', function () {
    $('.create__search-categories').slideToggle();
  });

  $('.followers__slider-inner').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/img/chevron-right.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/img/chevron-left.svg" alt="prev arrow"></button>',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    appendArrows: '.followers__arrows-wrap'

  });

  $('.newest__click').on('click', function () {
    $('.newest__filters').slideToggle();
  });

  $('.filters__price').on('click', function () {
    $('.filters__price-filters').slideToggle();
  });

  $('.filters__quantity').on('click', function () {
    $('.filters__quantity-filters').slideToggle();
  });

  $(".js-range-slider").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    grid: false,
    prefix: "$",
    force_edges: false,
    hide_min_max: true,
    hide_from_to: false,
    block: false
  });

  $('.filters__box-grid').on("click", function () {
    $('.items__card-content-grid').addClass("off");
    $('.items__card-content-list').removeClass("off");
  });

  $('.filters__box-list').on("click", function () {
    $('.items__card-content-list').addClass("off");
    $('.items__card-content-grid').removeClass("off");
  });

  $('.filters__box-grid').on("click", function () {
    $('.filters__box-list').addClass("off");
    $('.filters__box-grid').removeClass("off");
  });

  $('.filters__box-list').on("click", function () {
    $('.filters__box-grid').addClass("off");
    $('.filters__box-list').removeClass("off");
  });

  $('.filters__box-grid').on("click", function () {
    $('.items__cards').addClass("list");
    $('.items__cards').removeClass("grid");
  });

  $('.filters__box-list').on("click", function () {
    $('.items__cards').addClass("grid");
    $('.items__cards').removeClass("list");
  });

  $('.header__profile-img').on("click", function () {
    $('.header__profile-menu').toggleClass("active");
    $('.header__icons-mail-menu').removeClass("active");
    $('.header__icons-noti-menu').removeClass("active");
    $('.header__icons-cart-menu').removeClass("active");
  });

  $('.header__icons-cart').on("click", function () {
    $('.header__icons-cart-menu').toggleClass("active");
    $('.header__icons-mail-menu').removeClass("active");
    $('.header__icons-noti-menu').removeClass("active");
    $('.header__profile-menu').removeClass("active");
  });

  $('.header__icons-mail').on("click", function () {
    $('.header__icons-mail-menu').toggleClass("active");
    $('.header__icons-cart-menu').removeClass("active");
    $('.header__icons-noti-menu').removeClass("active");
    $('.header__profile-menu').removeClass("active");
  });

  $('.header__icons-noti').on("click", function () {
    $('.header__icons-noti-menu').toggleClass("active");
    $('.header__icons-cart-menu').removeClass("active");
    $('.header__icons-mail-menu').removeClass("active");
    $('.header__profile-menu').removeClass("active");
  });

  $('input, select').styler();

  $('.single-product__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
});


  var mixer = mixitup('.newest__inner-box');


});

