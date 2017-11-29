(function() {
  'use strict';

  var slideshow = [{
    'image': 'images/slideshow_1.jpeg',
    'caption': 'Cloudy with a chance of moon'
  }, {
    'image': 'images/slideshow_2.jpeg',
    'caption': 'Half moon mountain'
  }, {
    'image': 'images/slideshow_3.jpeg',
    'caption': 'Moonrise'
  }];

  let $prevButton = $('#prev');
  let $nextButton = $('#next');

  let currentImageIndex = 0;

  function addImages(){
    for(let i = 0; i < 3; i++){

      let $img = $('<img>').attr('src', slideshow[i].image).attr('title', slideshow[i].caption).attr('alt', slideshow[i].caption);



      if(i == 0){
        $img.addClass('current');
        $prevButton.attr('disabled', true);
        $('#caption').text(slideshow[i].caption);
      }
      $('.slideshow-wrapper').append($img);
    }
  }

  function registerImageButtons(){

    $prevButton.on('click', function(){

      if(currentImageIndex == 1){
        $prevButton.attr('disabled', true);
      }else if(currentImageIndex == 2){
        $nextButton.attr('disabled', false);
      }

      let previous = currentImageIndex+1;
          currentImageIndex--;
      $('#caption').text(slideshow[currentImageIndex].caption);

      let current = currentImageIndex+1;

      $(`img:nth-of-type(${previous})`).removeClass('current');
      $(`img:nth-of-type(${current})`).addClass('current');

    });

    $nextButton.on('click', function(){

      if(currentImageIndex == 1){
        $nextButton.attr('disabled', true);
      }else if(currentImageIndex == 0){
        $prevButton.attr('disabled', false);
      }

      let previous = currentImageIndex+1;
      currentImageIndex++;
      $('#caption').text(slideshow[currentImageIndex].caption);

      let current = currentImageIndex+1;

      $(`img:nth-of-type(${previous})`).removeClass('current');
      $(`img:nth-of-type(${current})`).addClass('current');

    });
  }

  addImages();
  registerImageButtons();
})();


/*
(function() {
  'use strict';

  var slideshow = [{
    'image': 'images/slideshow_1.jpeg',
    'caption': 'Cloudy with a chance of moon'
  }, {
    'image': 'images/slideshow_2.jpeg',
    'caption': 'Half moon mountain'
  }, {
    'image': 'images/slideshow_3.jpeg',
    'caption': 'Moonrise'
  }];

  let $prevButton = $('#prev');
  let $nextButton = $('#next');

  let currentImageIndex = 0;

  function addImages(){
    for(let i = 0; i < 3; i++){

      let $img = $('<img>').attr('src', slideshow[i].image).attr('title', slideshow[i].caption).attr('alt', slideshow[i].caption);

      if(i == 0){
        $img.addClass('current');
      }
      $('.slideshow-wrapper').append($img);
    }
  }

  function registerImageButtons(){

    $prevButton.on('click', function(){

      let last = currentImageIndex+1;
      let now = null;
      if(currentImageIndex == 0){
        currentImageIndex = 2;
      }else{
        currentImageIndex--;
      }

      now = currentImageIndex +1;

      $(`img:nth-of-type(${last})`).removeClass('current');
      $(`img:nth-of-type(${now})`).addClass('current');

    });

    $nextButton.on('click', function(){

      let last = currentImageIndex+1;
      let now = null;
      if(currentImageIndex == 2){
        currentImageIndex = 0;
      }else{
        currentImageIndex++;
      }

      now = currentImageIndex +1;

      $(`img:nth-of-type(${last})`).removeClass('current');
      $(`img:nth-of-type(${now})`).addClass('current');

    });
  }

  addImages();
  registerImageButtons();
})();

*/
