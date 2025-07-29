'use strict';

$(document).ready(function () {

  //=================================================
  // Layer Slider
  //=================================================

  $('#slider').layerSlider({
    sliderVersion: '6.0.0',
    type: 'fullwidth',
    responsiveUnder: 1280,
    layersContainer: 1280,
    maxRatio: 1,
    hideUnder: 0,
    hideOver: 100000,
    skin: 'v5',
    thumbnailNavigation: 'disabled',
    skinsPath: '../assets/skins/',
    showCircleTimer: false,
    showSlideBarTimer: false,
    showBarTimer: false
  });

  //=================================================
  // Nav icon script
  //=================================================

  $('#nav-icon2').on('click', function () {
    $(this).toggleClass('open');
  });

  // =========================================  
  //*** author-slider
  // =========================================

  var owl = $('#author-slider');
  owl.owlCarousel({
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1200, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [992, 1], // betweem 900px and 601px
    itemsTablet: [768, 1], //2 items between 600 and 0
    itemsMobile: [576, 1], //false // itemsMobile disabled - inherit from itemsTablet option
    pagination: true,
    mouseDrag: false,
    autoPlay: false,
    stopOnHover: true
  });

  //=================================================
  // Owl Carousel script 1
  //=================================================

  var owl = $('#owl-demo');
  owl.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1200, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [992, 3], // betweem 900px and 601px
    itemsTablet: [768, 2], //2 items between 600 and 0
    itemsMobile: [576, 1], //false // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
    mouseDrag: false,
    navigation: true,
    navigationText: ['<i class=\'acro-left-arrow\'></i>', '<i class=\'acro-right-arrow\'></i>']
  });
  $('.owl-carousel').owlCarousel({});
  // Custom Navigation Events
  $('next').on('click', function () {
    owl.trigger('owl.next');
  });
  $('.prev').on('click', function () {
    owl.trigger('owl.prev');
  });
  $('.play').on('click', function () {
    owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
  });
  $('.stop').on('click', function () {
    owl.trigger('owl.stop');
  });

  //=================================================
  // Owl Carousel script 2
  //=================================================

  var owl = $('#owl-demo1');
  owl.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1200, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [992, 3], // betweem 900px and 601px
    itemsTablet: [768, 2], //2 items between 600 and 0
    itemsMobile: [576, 1], //false // itemsMobile disabled - inherit from itemsTablet option
    pagination: true,
    mouseDrag: false,
    autoPlay: false,
    stopOnHover: true
  });

  $('.owl-carousel').owlCarousel({
    //   margin:10
  });
  // Custom Navigation Events
  $('.next').on('click', function () {
    owl.trigger('owl.next');
  });
  $('.prev').on('click', function () {
    owl.trigger('owl.prev');
  });
  $('.play').on('click', function () {
    owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
  });
  $('.stop').on('click', function () {
    owl.trigger('owl.stop');
  });

  //=================================================
  // slick slider
  //=================================================

  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    infinite: false,
    margin: 0,
    asNavFor: '.slider-single',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 552,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });
  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

  //=================================================
  // external js: isotope.pkgd.js
  //=================================================

  // init Isotope
  var $grid = $('.uploads-row').isotope({
    itemSelector: '.col-media',
    layoutMode: 'fitRows',
    getSortData: {
      // fileby:   '.file-by',
      filename: '.file-name'
      // filedate: '[data-ticks]',
      // filesize: function( itemElem ) {
      //   var filesize = $( itemElem ).attr('data-filesize');
      //   return parseInt( filesize );
      // }
    }
  });

  $('.uploads-row').imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });

  // bind filter button click
  //  $('.filters-button-group').on('click', 'button', function () {
  //    var filterValue = $(this).attr('data-filter');
  //    $grid.isotope({ filter: filterValue });

  //   });

  $('.filters-button-group .btn').on('click', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.btn').removeClass('active');
    $(this).addClass('active');
  });

  // bind sort button click
  $('.sort-button-group').on('click', 'button', function () {

    /* Get the element name to sort */
    var sortValue = $(this).attr('data-sort-value');

    /* Get the sorting direction: asc||desc */
    var direction = $(this).attr('data-sort-direction');

    /* convert it to a boolean */
    var isAscending = direction == 'asc';
    var newDirection = isAscending ? 'desc' : 'asc';

    /* pass it to isotope */
    $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });

    $(this).attr('data-sort-direction', newDirection);

    var span = $(this).find('.glyphicon');
    span.toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  // =========================================
  //*** Products List | Input radio button js
  // =========================================

  (function () {
    var form;
    form = {
      init: function init() {
        $('label input[type="checkbox"], label input[type="radio"]').each(form.customReplace);
        $('label input[type="checkbox"]').on('change', function () {
          return form.toggleCheck($(this).prev());
        });
        return $('label input[type="radio"]').on('change', function () {
          return form.toggleRadio($(this));
        });
      },
      customReplace: function customReplace() {
        var status;
        status = $(this).is(':checked') ? 'checked' : '';
        return $(this).hide().before('<span class="' + status + ' ' + $(this).attr('type') + '-input input-replace"></span>');
      },
      toggleRadio: function toggleRadio($this) {
        var siblings;
        siblings = $('[name="' + $this.attr('name') + '"]');
        return siblings.each(function (i, elm) {
          if ($(elm).is(':checked')) {
            return $(elm).prev().addClass('checked');
          } else {
            return $(elm).prev().removeClass('checked');
          }
        });
      },
      toggleCheck: function toggleCheck($this) {
        return $this.toggleClass('checked');
      }
    };

    form.init();

    // extra js - - - - - - - - - - - - - - - - - - - 

    $('#toggle-inputs').on('click', function () {
      return $('input').toggle();
    });

    $('#select-eggs').on('click', function () {
      return $('#radio-button-3, #check-box-2').click();
    });
  }).call(this);

  // =========================================
  //*** Vertical Tab
  // =========================================

  (function () {
    $('.js-vertical-tab-content').hide();

    $('.js-vertical-tab-content:first').show();

    /* if in tab mode */
    $('.js-vertical-tab').on('click', function (event) {
      var activeTab;
      event.preventDefault();
      $('.js-vertical-tab-content').hide();
      activeTab = $(this).attr('data-name');
      $('#' + activeTab).show();
      $('.js-vertical-tab').removeClass('is-active');
      $(this).addClass('is-active');
      $('.js-vertical-tab-accordion-heading').removeClass('is-active');
      $('.js-vertical-tab-accordion-heading[data-name^=\'' + activeTab + '\']').addClass('is-active');
    });

    /* if in accordion mode */
    $('.js-vertical-tab-accordion-heading').on('click', function (event) {
      var accordion_activeTab;
      event.preventDefault();
      $('.js-vertical-tab-content').hide();
      accordion_activeTab = $(this).attr('data-name');
      $('#' + accordion_activeTab).show();
      $('.js-vertical-tab-accordion-heading').removeClass('is-active');
      $(this).addClass('is-active');
      $('.js-vertical-tab').removeClass('is-active');
      $('.js-vertical-tab[data-name^=\'' + accordion_activeTab + '\']').addClass('is-active');
    });
  }).call(this);

  // =========================================
  //*** animation script
  // =========================================

  AOS.init({
    disable: 'mobile'
  });

  // =========================================
  //*** calender
  // =========================================

  $(function () {
    $('.calendar').pignoseCalendar({
      weeks: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    });
  });

  // =========================================  
  //*** jQuery-circle-progress
  // =========================================

  $('#clientRetention').circleProgress({
    value: 0.88,
    size: 225,
    startAngle: -Math.PI / 4 * 2.5,
    thickness: 2,
    fill: { color: '#fff' },
    emptyFill: '#4ebfd8'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(96 * progress) + '<i>%</i>');
  });

  $('#services').circleProgress({
    value: 0.60,
    size: 225,
    startAngle: -Math.PI / 4 * 2,
    thickness: 2,
    fill: { color: '#fff' },
    emptyFill: '#4ebfd8'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(11 * progress));
  });

  $('#professional').circleProgress({
    value: 0.80,
    size: 225,
    startAngle: -Math.PI / 4 * 3,
    thickness: 2,
    fill: { color: '#fff' },
    emptyFill: '#4ebfd8'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(120 * progress));
  });

  $('#clients').circleProgress({
    value: 0.88,
    size: 225,
    startAngle: -Math.PI / 4 * 2.5,
    thickness: 2,
    fill: { color: '#fff' },
    emptyFill: '#4ebfd8'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(2500 * progress));
  });

  // =========================================  
  //*** Google map
  // =========================================

  // Create and Initialise the Map (required) our google map below

  function initialize() {

    // Create an array of styles.
    var styles = [{
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [{
        'saturation': 36
      }, {
        'color': '#000000'
      }, {
        'lightness': 40
      }]
    }, {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [{
        'visibility': 'on'
      }, {
        'color': '#000000'
      }, {
        'lightness': 16
      }]
    }, {
      'featureType': 'all',
      'elementType': 'labels.icon',
      'stylers': [{
        'visibility': 'off'
      }]
    }, {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 20
      }]
    }, {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 17
      }, {
        'weight': 1.2
      }]
    }, {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 20
      }]
    }, {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 21
      }]
    }, {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 17
      }]
    }, {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 29
      }, {
        'weight': 0.2
      }]
    }, {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 18
      }]
    }, {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 16
      }]
    }, {
      'featureType': 'transit',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 19
      }]
    }, {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [{
        'color': '#000000'
      }, {
        'lightness': 17
      }]
    }];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, { name: 'Styled Map' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(55.6468, 37.581),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var myLatlng = new google.maps.LatLng(55.6468, 37.581);

    var contentString = '<div id="content" style="background-color:#ff0000;width:94.2%">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' + '<div id="bodyContent">' + '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' + 'sandstone rock formation in the southern part of the ' + 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' + 'south west of the nearest large town, Alice Springs; 450&#160;km ' + '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' + 'features of the Uluru - Kata Tjuta National Park. Uluru is ' + 'sacred to the Pitjantjatjara and Yankunytjatjara, the ' + 'Aboriginal people of the area. It has many springs, waterholes, ' + 'rock caves and ancient paintings. Uluru is listed as a World ' + 'Heritage Site.</p>' + '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + 'http://en.wikipedia.org/w/index.php?title=Uluru</a> ' + '(last visited June 22, 2009).</p>' + '</div>' + '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var popup = new google.maps.InfoWindow({
      content: '<p id="hook">Hello World!</p>'
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  // =========================================  
  //*** light box js
  // =========================================

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  // =========================================  
  //*** services popup
  // =========================================
  if ($('.popup-anchor').length) {
    $('.popup-anchor').on('click', function (e) {
      $('.popuptext').removeClass('show');
      $(this).siblings('.popuptext').addClass('show');
    });
    $('.popuptext .close').on('click', function () {
      $(this).closest('.popuptext').removeClass('show');
    });
  }

  // =========================================  
  //*** input type number design
  // =========================================
  if ($('.quantity').length) {
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');

      btnUp.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
      });

      btnDown.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
      });
    });
  }

  // =========================================  
  //*** price-range-slider
  // =========================================

  (function () {

    var parent = document.querySelector('.range-slider');
    if (!parent) return;

    var rangeS = parent.querySelectorAll('input[type=range]'),
        numberS = parent.querySelectorAll('input[type=number]');

    rangeS.forEach(function (el) {
      el.oninput = function () {
        var slide1 = parseFloat(rangeS[0].value),
            slide2 = parseFloat(rangeS[1].value);

        if (slide1 > slide2) {
          // var tmp = slide2;
          // slide2 = slide1;
          // slide1 = tmp;
          var _ref = [slide2, slide1];
          slide1 = _ref[0];
          slide2 = _ref[1];
        }

        numberS[0].value = slide1;
        numberS[1].value = slide2;
      };
    });

    numberS.forEach(function (el) {
      el.oninput = function () {
        var number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);

        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
        rangeS[0].value = number1;
        rangeS[1].value = number2;
      };
    });
  })();

  // =========================================  
  //*** SVG circle 
  // =========================================
  if ($('shape').length) {
    var shape = document.getElementById('shape');
    setTimeout(function () {
      shape.setAttribute('stroke-dashoffset', 0);
    }, 0);
  }

  // =========================================  
  //*** Sidebar video
  // =========================================
  if ($('#atlanticlight').length) {
    var atlanticlight = document.querySelector('#atlanticlight video'),
        playpause = document.getElementById('playpause'),
        lefttoplay = document.getElementById('lefttoplay'),
        righttoplay = document.getElementById('righttoplay'),
        lefttopause = document.getElementById('lefttopause'),
        righttopause = document.getElementById('righttopause');
    atlanticlight.removeAttribute('controls');
    playpause.style.display = 'block';
    playpause.addEventListener('click', function () {
      if (atlanticlight.paused) {
        atlanticlight.play();
        playpause.classList.add('playing');
        lefttopause.beginElement();
        righttopause.beginElement();
      } else {
        atlanticlight.pause();
        lefttoplay.beginElement();
        righttoplay.beginElement();
        playpause.classList.remove('playing');
      }
    }, false);
  }
}); // document ready