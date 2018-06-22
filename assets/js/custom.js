/*=========================================================================
        Preloader
=========================================================================*/
$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function(){
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Portfolio filter
    =========================================================================*/
      if($('#works .item-outer').length > 0){
        var filterizd = $('#works .item-outer').filterizr();
      }
      $( '.control ul li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/
      $(".customer-carousel").owlCarousel({
        items: 4
      });

      $(".resume-carousel, .testimonial-carousel").owlCarousel({
        singleItem:true
      });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
		
		"assets/images/iphone3.jpg",
		"assets/images/macbook.jpg",
        
    ], {duration: 4000, fade: 1000});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});

    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
      type: 'image'
    });

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

});



/*gradient*/

/*
Background Gradients From -- 
https://uigradients.com



var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10); */


/* ------------------*/
/*     WEATHER APP   */
/* ------------------*/


$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 200) {
    $("#popUp").css("margin-left", "-1500px");
    $("#plus").css("margin-left", "0px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "0px");
  $("#plus").css("margin-left", "-1500px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-1500px");
  $("#plus").css("margin-left", "0px");
});


/* app */

var g;
$.ajax({
    type: 'GET',
    url: 'https://ipinfo.io/json/',
    success: Mohc
  });


function Mohc(data) {
           $("#city").text(data.city);
           $("#country").text(data.country); 
           
          $.ajax({
    type: 'GET',
    url: 'https://api.darksky.net/forecast/fa929ec72287732ea0a342cbea4610ef/'+data.loc+'',dataType:'jsonp',
    success: weather
  });
  
  function weather(v){
              $("#description").text(v.currently.summary);
 $("#temp").text(v.currently.temperature);
       
             
// Handle Button Click
        
             $("#degree").click(function(){
          if($("#degree").text()=="F")
             {
               $("#degree").text("C");
                                    $("#temp").text(((($("#temp").text()*1)-32)/1.8).toFixed(2)*1);
             }
            else if($("#degree").text()=="C"){
              $("#degree").text("F");
              $("#temp").text(((($("#temp").text()*1)*1.8)+32).toFixed(2)*1);
            }   
            })
        
// Handle Button Click     
             
// Skycons 
       $("canvas").attr("id",v.currently.icon);      
               
             var icons = new Skycons({"color": "white"});

icons.set("clear-day", Skycons.CLEAR_DAY);
icons.set("clear-night", Skycons.CLEAR_NIGHT);
icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
icons.set("cloudy", Skycons.CLOUDY);
icons.set("rain", Skycons.RAIN);
icons.set("sleet", Skycons.SLEET);
icons.set("snow", Skycons.SNOW);
icons.set("wind", Skycons.WIND);
icons.set("fog", Skycons.FOG);

icons.play();
             
// Skycons
             
           }
}


/* ------------------*/
/*     WEATHER APP   */
/* ------------------*/





/* Go back button */

function goBack() {
    window.history.back();
}


/* Single post script */

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}