$(function () {
  
  //$('marquee li').trigger('mouseout');

  $(".services__slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    slidesPerRow: 1,
    speed: 1200,
    rtl: true,
    dots: false,
    arrows: true,
    prevArrow: '<div class="prevArrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" viewBox="0 0 256 512"><path fill="" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg></div>',
    nextArrow: '<div class="nextArrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" viewBox="0 0 256 512"><path fill="" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></div>',
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false
  });

  
  
});


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle('#vacancyProgress', {
  strokeWidth: 15,
  easing: 'easeInOut',
  duration: 2500,
  color: '#125541',
  trailColor: '#e0e2ea',
  trailWidth: 15,
  round: true,
  svgStyle: { width: '100%', height: '100%' },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#125541',
      left: '50%',
      position: 'absolute',
      margin: 0,
      'font-size': '1rem',
      'font-weight': 'bold',
      top: 'auto',
      direction: 'ltr'
    },
    autoStyleContainer: false
  },
  from: { color: '#FFEA82' },
  to: { color: '#ED6A5A' },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.6);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.SemiCircle('#askProgress', {
  strokeWidth: 15,
  easing: 'easeInOut',
  duration: 2500,
  color: '#125541',
  trailColor: '#e0e2ea',
  trailWidth: 15,
  round: true,
  svgStyle: { width: '100%', height: '100%' },
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#125541',
      left: '50%',
      position: 'absolute',
      margin: 0,
      'font-size': '1rem',
      'font-weight': 'bold',
      top: 'auto',
      direction: 'ltr'
    },
    autoStyleContainer: false
  },
  from: { color: '#FFEA82' },
  to: { color: '#ED6A5A' },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar2.animate(0.8);  // Number from 0.0 to 1.0
