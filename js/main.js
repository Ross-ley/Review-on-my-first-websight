$(document).ready(function(){
  $('#1').append("<div id='cookes'> We use technical and analytics cookies to ensure that we give you the best experience on our websight! click this to accept<div>");
  $("#cookes").click(function(){
    $(this).remove();
  });
});
/*---------------------------*/
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



// /*------------------------------*/
// $(document).ready(function(){
//   $('.link3tab').click(function() {
//     window.alert('it works');
//     });
// });
 /*----JQuery plugin---------------------------------*/
