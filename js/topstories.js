$( document ).ready(function() {
  // Section Top Stories
  $name ='';
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=APIKEY",
    method :"GET",
    data:{name : $name},
    dataType:"JSON",
    success:function(data)
    {
      $.each(data.articles, function( index, value ) {      
        
        var title = data.articles[index].title;
        $('.TopStories').append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="sectionBox clearfix"><div class="sectionImage"><img src="'+data.articles[index].urlToImage+'" class="img-responsive" alt="image"></div><h3 class="newsTitle">'+data.articles[index].title+'</h3><p class="newsParagraph hidden-md hidden-lg">'+data.articles[index].description+'</p><span class="newsSource">'+data.articles[index].source.name+'</span><a class="readMoreLink" href="'+data.articles[index].url+'" target="_blank">Read More..</a></div></div>');
      
      });
    },
    error: function(errorThrown ){
        console.log( errorThrown.responseText);
    }
  });
   
});
