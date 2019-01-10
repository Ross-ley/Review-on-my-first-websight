/*
this is the code which brings up the coolkie alert which people can click to alow the use of coolkies and remove the div
*/
//use sesion storige
// do if else statements to make sure that if cookie is there dont show div
//test zone for "code" below

//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//test zone ^ for "code"


$(document).ready(function(){
  if (typeof(Storage) !== "undefined") {
    let tess = sessionStorage.getItem("cookie")
    if (!tess) {
      $('#1').append("<div id='cookie'> We use technical and analytics cookies to ensure that we give you the best experience on our websight! <button id=cookies> click this to accept</button> <div>"); ;
    } else {
      document.getElementById("1")
    }
  }
})
$(document).ready(function(){
  $("#cookies").click(function(){
    sessionStorage.setItem("cookie", "true")
    $("#cookie").remove();
  });
});


/*--------------this is the end of the coolkie code -------------*/

/*
this is the code which gives tab 1 the class 'active' and removes it from the other tabs
This also gives the table section of tab 1 the display of 'block' while seting the other two table boxes to display 'none'
*/
$(document).ready(function(){
  $('.link1tab').click(function() {
    $(this).addClass('active');
    $('.link2tab').removeClass('active');
    $('.link3tab').removeClass('active');
    $('#tabel1').css('display', 'block');
    $('#tabel2').css('display', 'none');
    $('#tabel3').css('display', 'none');
    });
});
/*
this is the end of tab 1 code
*/
/*
this is the code which gives tab 2 the class 'active' and removes it from the other tabs
This also gives the table section of tab 2 the display of 'block' while seting the other two table boxes to display 'none'
*/
$(document).ready(function(){
  $('.link2tab').click(function() {
    $(this).addClass('active');
    $('.link1tab').removeClass('active');
    $('.link3tab').removeClass('active');
    $('#tabel2').css('display', 'block');
    $('#tabel3').css('display', 'none');
    $('#tabel1').css('display', 'none');
    });
});
/*
this is the end of tab 2 code
*/
/*
this is the code which gives tab 3 the class 'active' and removes it from the other tabs
This also gives the table section of tab 3 the display of 'block' while seting the other two table boxes to display 'none'
*/
$(document).ready(function(){
  $('.link3tab').click(function() {
    $(this).addClass('active');
    $('.link2tab').removeClass('active');
    $('.link1tab').removeClass('active');
    $('#tabel3').css('display', 'block');
    $('#tabel2').css('display', 'none');
    $('#tabel1').css('display', 'none');
  });
});
/*
 this is the end of tab 3 code
*/


 /*----JQuery plugin---------------------------------*/

 $(document).ready(function(){
   $('.car').slick({
     //setting-name: setting-value;
     dots: true,
     arrows: false,
     mobileFirst: true,
     autoplay: true,
     autoplaySpeed: 7000,
   });
 });
