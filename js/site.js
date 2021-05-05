$( document ).ready(function() {

  // sticky header 
  var stickyOffset = $('.topHeader').offset().top;

  $(document).scroll(function(){
    var topHeader = $('.topHeader');
    var scroll = $(this).scrollTop();

    if (scroll -1 >= stickyOffset ){
      $('#back-top').fadeIn();   
      topHeader.addClass('sticky');
      $('.topHeader a').css('color','#FFFFFF');
      $('.fa-envelope-o').css('color','#FFFFFF');
    } 
    else{           
      topHeader.removeClass('sticky');
      $('#back-top').fadeOut();      
      $('.topHeader a').css('color','rgb(0, 1, 47)');
      $('.fa-envelope-o').css('color','rgb(0, 1, 47)');
    } 
  });

  // hide image icon on loading  
  function imageError(){
    $('img').error(function(){
        // $( this ).css( "opacity", "0" );        
        $(this).attr("src","images/alternate_image.jpeg");

    });
  };
  //scroll top
  $('#back-top').hide();

  $("a[href=#top]").click(function(){
    $('html, body').animate({
        scrollTop: $(".contentRowBg").offset().top
    }, 1000);
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
          $('.top-headlines-abc-news-au').append('<h2 class="newsTitle">'+data.articles[index].title+'</h2>');      
          $('.top-headlines-abc-news-au').append('<img class="newsImage" src="'+data.articles[index].urlToImage+'" alt="News Image"></h6>');
          $('.top-headlines-abc-news-au').append('<p class="newsParagraph">'+data.articles[index].description+'</p>');          
          $('.top-headlines-abc-news-au').append('<span class="newsSource">'+data.articles[index].source.name+'</span>');
          $('.top-headlines-abc-news-au').append('<span class="newsPublishedAt">'+data.articles[index].publishedAt+'</span>');
          $('.top-headlines-abc-news-au').append('<a class="readMoreLink" href="'+data.articles[index].url+'" class="newslink" target="_blank">Read More..</a>');           
          $('.top-headlines-abc-news-au').append('<hr class="style-eight">'); 

          // Carousel
          var title = data.articles[index].title;
          console.log(title +':'+title.length);

          if(title.length < 72){
            title = title + "<br/><br/>";
          }
           
          if(index==0){
            $('.multi-item-carousel .carousel-inner-lg').append('<div class="item active""><div class="col-lg-4"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-md').append('<div class="item active""><div class="col-md-6"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-sm').append('<div class="item active""><div class="col-sm-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-xs').append('<div class="item active""><div class="col-xs-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');      
          }else{
            $('.multi-item-carousel .carousel-inner-lg').append('<div class="item"><div class="col-lg-4"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-md').append('<div class="item"><div class="col-md-6"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-sm').append('<div class="item"><div class="col-sm-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
            $('.multi-item-carousel .carousel-inner-xs').append('<div class="item"><div class="col-xs-12"><div class="top-image"><a href="'+data.articles[index].url+'"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></a></div><h3 class="carousel-text">'+data.articles[index].source.name +' : '+title+'</h3></div></div>');
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
            $('.dropdown-carousel-inner').append('<div class="item active"><div class="top-image"><a href="#"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image" alt="'+data.articles[index].title+'"></a></div><div class="news-title"><h4><small>'+data.articles[index].title+'</small></h4></div></div>');
          }else{
            $('.dropdown-carousel-inner').append('<div class="item"><div class="top-image"><a href="#"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image" alt="'+data.articles[index].title+'"></a></div><div class="news-title"><h4><small>'+data.articles[index].title+'</small></h4></div></div>');      
          }    
        });
      }
    });

    // Side News
    // CNBC
    $title ='';
    $urlToImage = '';
    $description = '';
    $sourceName = '';
    $publishedAt = '';
    $url = '';
    
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          
          var $title = data.articles[index].title;

          var $shortTitle = jQuery.trim($title).substring(0, 36)
              .split(" ").slice(0, -1).join(" ") + "...";

          var $urlToImage = data.articles[index].urlToImage;
          var $description = data.articles[index].description;
          var $sourceName = data.articles[index].source.name;
          var $publishedAt = data.articles[index].publishedAt;
          var $url = data.articles[index].url;
          var $content = data.articles[index].content;

          console.log($content);

          var $appendContent = '<div class="sourceNewsBlock-inner"><div class="col-xs-12 col-md-5 col-lg-12"><img class="newsImage" src="'+$urlToImage+'" alt="News Image"></div><div class="col-xs-12 col-md-7 col-lg-12"><p>'+$title+'</p><p class="hidden-lg newsParagraph">'+$description+'</p><span class="newsSource">'+$sourceName+'</span><span class="newsPublishedAt">'+$publishedAt+'</span><a class="readMoreLink" href="'+$url+'" class="newslink" target="_blank">Read More..</a></div></div>';

          $('.top-headlines-cnn').append($appendContent);
          imageError();          
        });
      }
    });
    
    // BBC    
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          
          var $title = data.articles[index].title;

          var $shortTitle = jQuery.trim($title).substring(0, 36)
              .split(" ").slice(0, -1).join(" ") + "...";
          var $urlToImage = data.articles[index].urlToImage;
          var $description = data.articles[index].description;
          var $sourceName = data.articles[index].source.name;
          var $publishedAt = data.articles[index].publishedAt;
          var $url = data.articles[index].url;

          var $appendContent = '<div class="sourceNewsBlock-inner"><div class="col-xs-12 col-md-5 col-lg-12"><img class="newsImage" src="'+$urlToImage+'" alt="News Image"></div><div class="col-xs-12 col-md-7 col-lg-12"><p>'+$title+'</p><p class="hidden-lg newsParagraph">'+$description+'</p><span class="newsSource">'+$sourceName+'</span><span class="newsPublishedAt">'+$publishedAt+'</span><a class="readMoreLink" href="'+$url+'" class="newslink" target="_blank">Read More..</a></div></div>';

          $('.top-headlines-bbc').append($appendContent);
          imageError();
          
        });
      }
    });

    //ABC
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          
          var $title = data.articles[index].title;

          var $shortTitle = jQuery.trim($title).substring(0, 36)
              .split(" ").slice(0, -1).join(" ") + "...";
          var $urlToImage = data.articles[index].urlToImage;
          var $description = data.articles[index].description;
          var $sourceName = data.articles[index].source.name;
          var $publishedAt = data.articles[index].publishedAt;
          var $url = data.articles[index].url;

          var $appendContent = '<div class="sourceNewsBlock-inner"><div class="col-xs-12 col-md-5 col-lg-12"><img class="newsImage" src="'+$urlToImage+'" alt="News Image"></div><div class="col-xs-12 col-md-7 col-lg-12"><p>'+$title+'</p><p class="hidden-lg newsParagraph">'+$description+'</p><span class="newsSource">'+$sourceName+'</span><span class="newsPublishedAt">'+$publishedAt+'</span><a class="readMoreLink" href="'+$url+'" class="newslink" target="_blank">Read More..</a></div></div>';

          $('.top-headlines-abc').append($appendContent);
          imageError();
        });
      }
    });
    // Side News End 
    // second news
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=APIKEY",
      method :"GET",
      data:{name : $name},
      dataType:"JSON",
      success:function(data)
      {
        $.each(data.articles, function( index, value ) {      
          $('.top-headlines-cnbc').append('<h2 class="newsTitle">'+data.articles[index].title+'</h2>');      
          $('.top-headlines-cnbc').append('<img class="newsImage" src="'+data.articles[index].urlToImage+'" alt="News Image">');
          $('.top-headlines-cnbc').append('<p class="newsParagraph">'+data.articles[index].description+'</p>');          
          $('.top-headlines-cnbc').append('<span class="newsSource">'+data.articles[index].source.name+'</span>');
          $('.top-headlines-cnbc').append('<span class="newsPublishedAt">'+data.articles[index].publishedAt+'</span>');
          $('.top-headlines-cnbc').append('<a class="readMoreLink" href="'+data.articles[index].url+'" class="newslink" target="_blank">Read More..</a>'); 
          $('.top-headlines-cnbc').append('<hr class="style-eight">'); 
          imageError();
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
          imageError();
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

            $('.insideBox').append('<li>'+shortTitle+'</li>');
            
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

  // Section Top Stories
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        var title = data.articles[index].title;

        $('.TopStories').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        imageError();        
      });
    }
  });

  // National News
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        if(index<=1){
          $('.NationalItems').append('<div class="col-xs-12 col-sm-6"><div class="sectionBox1 clearfix"><div class="sectionImage1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h2 class="newsTitle">'+data.articles[index].title+'</h2><p class="newsParagraph">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }else{
          $('.NationalItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }
        imageError();
      });
    }
  });

  // Section World
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) { 
        var title = data.articles[index].title;        
        $('.WorldItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        imageError();
      });
    }
  });

  // Section Sports
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) { 
        var title = data.articles[index].title;        
        $('.SportsItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        imageError();
      });
    }
  });

  // Section Health
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        if(index<=1){
          $('.HealthItems').append('<div class="col-xs-12 col-sm-6"><div class="sectionBox1 clearfix"><div class="sectionImage1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h2 class="newsTitle">'+data.articles[index].title+'</h2><p class="newsParagraph">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }else{
          $('.HealthItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }
        imageError();
        
      });
    }
  });

  // Section Business
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        var title = data.articles[index].title;
        $('.BusinessItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        imageError();
      });
    }
  });

  // Section Science
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        if(index<=1){
          $('.ScienceItems').append('<div class="col-xs-12 col-sm-6"><div class="sectionBox1 clearfix"><div class="sectionImage1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h2 class="newsTitle">'+data.articles[index].title+'</h2><p class="newsParagraph">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }else{
          $('.ScienceItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }
        imageError();
      });
    }
  });

  // Section Entertainment
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        var title = data.articles[index].title;        
        $('.EntertainmentItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        imageError();
      });
    }
  });

  // Section Technology
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {
        if(index<=1){
          $('.TechnologyItems').append('<div class="col-xs-12 col-sm-6"><div class="sectionBox1 clearfix"><div class="sectionImage1"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h2 class="newsTitle">'+data.articles[index].title+'</h2><p class="newsParagraph">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }else{
          $('.TechnologyItems').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
        }
        imageError();        
      });
    }
  });

  //nav side menu
  var country_list = ["Argentina","Australia","Austria","Belgium","Brazil","Bulgaria","Canada","China","Colombia","Cuba","Czech Republic"];

  $.each( country_list, function( key, value ) {
    $('.sub-menu').append("<li>"+value+"</li>");
  });
   
});
