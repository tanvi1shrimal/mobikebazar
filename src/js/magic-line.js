//global variables
var magicLine;
var curremtItem;



function recalibrateMagicLine(){
  magicLine.width(currentItem.outerWidth())
           .css("left", currentItem.position().left)
           .css("bottom" , -3.5)
           .data("origLeft", currentItem.position().left)
           .data("origWidth", currentItem.outerWidth());
}

function makeMagicLine(){
  $(".accessories__tabs").append("<li id='magic-line'></li>");
  magicLine    = $("#magic-line");  
  currentItem  = $(".accessories__item.active"); 
  recalibrateMagicLine();   
}


$(document).ready( function() {
  makeMagicLine();  
    $(".accessories__item").click(function() {
      currentItem.attr('class', '');
      $(this).attr('class', '.active');
      currentItem = $(this);
      recalibrateMagicLine();
    });
});


$(window).resize( function() {
    recalibrateMagicLine(); 
});

function returnMagicLine(){
  magicLine.stop().animate({
        left: magicLine.data("origLeft"),
        width:magicLine.data("origWidth")});    
}

