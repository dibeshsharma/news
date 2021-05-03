$( document ).ready(function() {
   
  $('.hideableDiv').hide();

  $('.clickableDiv').click(function(){
    $('.hideableDiv').hide();    
    $(this).next('.hideableDiv').show();
  });

  $('.clickableDiv').dblclick(function(){
    $(this).next('.hideableDiv').hide();
  });
   
});