//= require_tree .

//example
$(document).ready(function() {
  /* Example Custom Code To move JS file- smooth scrolling for button-trigger */
  $('button-trigger').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top-30;
    $('body,html').animate({scrollTop:posi},700);
  })
});
