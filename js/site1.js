$( document ).ready(function() {

  //sticky header 
  var stickyOffset = $('.topHeader').offset().top;

  $(document).scroll(function(){
    var sticky = $('.topHeader');
    var scroll = $(this).scrollTop();

    if (scroll > stickyOffset ){
      sticky.fadeIn();
      sticky.addClass('darkheader');
    } 
    else{      
      sticky.addClass('topHeader');
    } 
  });

  $('.hideableDiv').hide(); 

  $name = "";
  $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {       
        console.log(data);
        $.each(data.articles, function( index, value ) {                
          $('.newsHeadlines').append('<h1 class="articleh1">'+data.articles[index].title+'</h1>');      
          $('.newsHeadlines').append('<img src="'+data.articles[index].urlToImage+'" alt="News Image" class="newsImage"></h6>');
          $('.newsHeadlines').append('<p class="articlecont">'+data.articles[index].description+'</p>');
          $('.newsHeadlines').append('<a href="'+data.articles[index].url+'" class="newslink" target="_blank">Read More..</a></h5>');
          $('.newsHeadlines').append('<hr class="style-eight">'); 

          // Carousel
          var title = data.articles[index].title;
          console.log(title +':'+title.length);

          if(title.length < 72){
            title = title + "<br/><br/>";
          }
           
          if(index==0){
              $('.multi-item-carousel .carousel-inner-lg').append('<div class="item active""><div class="col-lg-4"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
              $('.multi-item-carousel .carousel-inner-md').append('<div class="item active""><div class="col-md-6"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
              $('.multi-item-carousel .carousel-inner-sm').append('<div class="item active""><div class="col-sm-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
              $('.multi-item-carousel .carousel-inner-xs').append('<div class="item active""><div class="col-xs-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');      
          }else{
            $('.multi-item-carousel .carousel-inner-lg').append('<div class="item"><div class="col-lg-4"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-md').append('<div class="item"><div class="col-md-6"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-sm').append('<div class="item"><div class="col-sm-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-xs').append('<div class="item"><div class="col-xs-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
          }             
        });

        $('.multi-item-carousel').carousel({
          interval: false // or make it 5000
        });

        // for every slide in carousel, copy the next slide's item in the slide.
        // Do the same for the next, next item.
        $('.carousel-inner-lg .item').each(function(){
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

        $('.carousel-inner-md .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          // if (next.next().length>0) {
          //   next.next().children(':first-child').clone().appendTo($(this));
          // } else {
          //   $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          // }
        });


      }
    });

    // Dropdown Menu
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?q=trump&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {                  
          
          if(index==1){
            $('.dropdown-carousel-inner').append('<div class="item active"><div class="top-image"><a href="#"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="'+data.articles[index].title+'"></a></div><div class="news-title"><h4><small>'+data.articles[index].title+'</small></h4></div></div>');
          }else{
            $('.dropdown-carousel-inner').append('<div class="item"><div class="top-image"><a href="#"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="'+data.articles[index].title+'"></a></div><div class="news-title"><h4><small>'+data.articles[index].title+'</small></h4></div></div>');      
          }    
        });
      }
    }); 

    // second news
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          $('.businessNewsHeadlines').append('<h1 class="articleh1">'+data.articles[index].title+'</h1>');      
          $('.businessNewsHeadlines').append('<img src="'+data.articles[index].urlToImage+'" alt="News Image" class="newsImage"></h6>');
          $('.businessNewsHeadlines').append('<p class="articlecont">'+data.articles[index].description+'</p>');
          $('.businessNewsHeadlines').append('<a href="'+data.articles[index].url+'" class="newslink" target="_blank">Read More..</a></h5>');
          $('.businessNewsHeadlines').append('<hr class="style-eight">'); 
        });
      }
    });

    //Third news
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          $('.abcNewsHeadlines').append('<h1 class="articleh1">'+data.articles[index].title+'</h1>');      
          $('.abcNewsHeadlines').append('<img src="'+data.articles[index].urlToImage+'" alt="News Image" class="newsImage"></h6>');
          $('.abcNewsHeadlines').append('<p class="articlecont">'+data.articles[index].description+'</p>');
          $('.abcNewsHeadlines').append('<a href="'+data.articles[index].url+'" class="newslink" target="_blank">Read More..</a></h5>');
          
          var title = data.articles[index].title;

          var shortTitle = jQuery.trim(title).substring(0, 250)
              .split(" ").slice(0, -1).join(" ") + "...";

          // alert(shortTitle );
          $('.breakingNews').append('<div class="row breakingNewsBlock"><div class="LeftImage"><img src="'+data.articles[index].urlToImage+'" alt="News Image"></div><div class="NewsHeadlines"><a href="'+data.articles[index].url+'" target="_blank">'+shortTitle+'</a></div></div>');

          // $('.breakingNews ul').append('<li><a href="#"><img src="'+data.articles[index].urlToImage+'" alt="News Image" class="newsImage">'+data.articles[index].title+'</a></li>')
        });
      }
    });


    //News HIDE AND SHOW SECTION
    $('.clickableDiv').click(function(){
      $('.hideableDiv').hide();  
      $(this).next('.hideableDiv').show();
    });

    $('.clickableDiv').dblclick(function(){
      $(this).next('.hideableDiv').hide();
    });

    // ABC NEWS AU
    $('.panel_news_abc_au').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_abc_news_au ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });

    // ABC NEWS
    $('.panel_news_abc').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_abc_news ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });

    // CNN
    $('.panel_news_cnn').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_news_cnn ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });

    // CNBC
    $('.panel_news_cnbc').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_news_cnbc ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });

    //BBC
    $('.panel_news_bbc').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_news_bbc ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });

    //Al Jazeera English
    $('.panel_news_al_jazerra').one('click',function(){
      $.ajax({
        url: "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=APIKEY",
        method :"GET",
        data:{name : $name},
        dataType:"JSON",
        success:function(data)
        {
          $.each(data.articles, function( index, value ) {      
            
            var title = data.articles[index].title;

            var shortTitle = jQuery.trim(title).substring(0, 36)
                .split(" ").slice(0, -1).join(" ") + "...";

            $('.trendingNow_news_al_jazerra ul').append('<li>'+shortTitle+'</li>');
            
          });
        }
      });
    });


    //nav side menu
    var country_list = ["Argentina","Australia","Austria","Belgium","Brazil","Bulgaria","Canada","China","Colombia","Cuba","Czech Republic"];

  $.each( country_list, function( key, value ) {
    $('.sub-menu').append("<li>"+value+"</li>");
  });

   
});
