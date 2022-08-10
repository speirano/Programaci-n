$(document).ready(function(){
  var img = $(".img");

  img.mouseenter(function(){
    var titulo=$("#titulo");

    $(this).fadeTo("fast", 0.5);
  });
  img.mouseleave(function(){
    $(this).fadeTo("fast", 1);
  });

});
