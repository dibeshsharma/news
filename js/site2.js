$( document ).ready(function() {
  // Instantiate the Bootstrap carousel


$name = "";
$.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {

          if(index==1){
              $('.multi-item-carousel .carousel-inner').append('<div class="item active"><div class="col-xs-4"><a href="#1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div></div>');      
          }else{
            $('.multi-item-carousel .carousel-inner').append('<div class="item"><div class="col-xs-4"><a href="#1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div></div>');
          } 
        });

        $('.multi-item-carousel').carousel({
          interval: false
        });

        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.multi-item-carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });

      }
    });



   
});
