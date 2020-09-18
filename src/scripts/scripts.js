$(function () {
  
  //$('marquee li').trigger('mouseout');

  $(".main-news .slider").slick({
    slide: 'article',
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    speed: 1200,
    rtl: true,
    dots: true,
    arrows: false,
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
