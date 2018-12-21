/*
this is the code which brings up the coolkie alert which people can click to alow the use of coolkies and reove the div
*/

$(document).ready(function(){
  $('#1').append("<div id='cookes'> We use technical and analytics cookies to ensure that we give you the best experience on our websight! click this to accept<div>");
  $("#cookes").click(function(){
    $(this).remove();
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



// /*------------------------------*/
// $(document).ready(function(){
//   $('.link3tab').click(function() {
//     window.alert('it works');
//     });
// });
 /*----JQuery plugin---------------------------------*/
