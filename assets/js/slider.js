$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        dots: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".challenging-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
      },
    },
  ],
});