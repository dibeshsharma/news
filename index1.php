<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta https-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="latest news,online chat,weather,date and time,classified">
        
    <title>News | Weather</title>
    
    <link rel="icon" href="favicon.ico">

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

    <!-- Site CSS -->
    <link href="css/main_style.css" media="screen" rel="stylesheet" type="text/css"/>
    <!-- font-awesome -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Site JavaScript -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/site.js"></script>
    <!-- Google Analytics Code -->
    <!-- Facebook Pixel Code -->
    <!-- Linkedin Code -->
</head>
<body>
    
    <div class="row topHeader">
      <div class="container TopBarContent">
        
        <div class="row hidden-md hidden-lg">            
            <div class="col-xs-12">
                <i class="fa fa-envelope-o">  </i>
                <a  href="mailto:webmaster@example.com">webmaster@example.com</a>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ul class="list-inline socialIcons">
                   <li><a href=""><i class="fa fa-facebook"></i></a></li>
                   <li><a href=""><i class="fa fa-twitter"></i></a></li>
                   <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                  <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                </ul>               
            </div>
            <div class="col-xs-12 col-sm-6">
                <a id="LoggedInUsername" class="show-desktop" href="/account">Login</a>
                <span class="show-desktop">|</span>
                <a href="javascript:void(0)" class="Logout">Sign Up</a>                 
            </div>                                   
        </div>

        <div class="row hidden-xs hidden-sm">
            <div class="col-md-12 text-centre">
                <div class="blockInline">
                    <ul class="list-inline socialIcons">
                       <li><a href=""><i class="fa fa-facebook"></i></a></li>
                       <li><a href=""><i class="fa fa-twitter"></i></a></li>
                       <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                      <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>

                <div class="blockInline">
                    <i class="fa fa-envelope-o">  </i>
                    <a  href="mailto:webmaster@example.com">webmaster@example.com</a>
                </div>
                <div class="blockInline">
                    <a id="LoggedInUsername" class="show-desktop" href="/account">Login</a>
                    <span class="show-desktop">|</span>
                    <a href="javascript:void(0)" class="Logout">Sign Up</a>
                </div>
                
            </div>
        </div>      
      </div>
    </div>

    <div class="row contentRowBg">
    <!-- Overlya -->
    <!-- <div class="contentrowbgoverlay">
    </div> -->

    <!-- Mega Menu -->     
        <div class="row">
            <div class="container">
                <nav class="navbar navbar-default">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">News</a>
                    </div>
                    <div class="collapse navbar-collapse js-navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class="dropdown mega-dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Categories <span class="glyphicon glyphicon-chevron-down pull-right"></span></a>
                                <ul class="dropdown-menu mega-dropdown-menu row">                                
                                    <li class="col-md-3 liFixedHeight hidden-xs hidden-sm pull-right">
                                        <ul>
                                            <li class="dropdown-header">Top Stories</li>                            
                                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                              <div class="carousel-inner dropdown-carousel-inner">
                                                <!-- contents come from jquery -->                        
                                              </div><!-- End Carousel Inner -->
                                            </div><!-- /.carousel -->
                                                                     
                                        </ul>
                                    </li>
                                    
                                    <li class="col-xs-12 col-sm-6 col-md-3 liFixedHeight">
                                        <ul>
                                            <li class="dropdown-header">Business</li>
                                            <li><a href="#">Business Insider</a></li>
                                            <li><a href="#">Business Insider (UK)</a></li>                            
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Sports</li>
                                            <li><a href="#">BBC Sport</a></li>
                                            <li><a href="#">Fox Sports</a></li>
                                            <li><a href="#">TalkSport</a></li>
                                            <li><a href="#">The Sport Bible</a></li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Technology</li>
                                            <li><a href="#">Ars Technica</a></li>
                                            <li><a href="#">TechCrunch</a></li>
                                            <li><a href="#">TechCrunch (CN)</a></li>
                                            <li><a href="#">TechRadar</a></li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">BBC</li>
                                            <li><a href="#">BBC News</a></li>
                                            <li><a href="#">BBC Sport</a></li>
                                            <li class="dropdown-header">CNN</li>
                                            <li><a href="#">CNN</a></li>
                                            <li><a href="#">CNN Spanish</a></li>
                                        </ul>
                                    </li>
                                    <li class="col-xs-12 col-sm-6 col-md-3 liFixedHeight">
                                        <ul>
                                            <li class="dropdown-header">Science</li>
                                            <li><a href="#">New Scientist</a></li>                            
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Financial</li>
                                            <li><a href="#">Australian Financial Review</a></li>
                                            <li><a href="#">Financial Post</a></li>
                                            <li><a href="#">Financial Times</a></li>
                                            <li><a href="#">The Huffington Post</a></li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Geographic</li>
                                            <li><a href="#">National Geographic</a></li>
                                            <li class="divider"></li>
                                            <li class="dropdown-header">Crypto Currency</li>                            
                                            <li><a href="#">Crypto Coin News</a></li>             
                                            <li class="divider"></li>
                                            <li class="dropdown-header">ABC News</li>                            
                                            <li><a href="#">ABC News</a></li>
                                            <li><a href="#">ABC News (AU)</a></li>             
                                            <li class="divider"></li>                             
                                        </ul>
                                    </li>                                
                                    <li class="col-xs-12 col-sm-12 col-md-3 liFixedHeight">
                                        <ul>
                                            <li class="dropdown-header">Newsletter</li>
                                            <form class="form" role="form">
                                              <div class="form-group">
                                                <label class="sr-only" for="email">Email address</label>
                                                <input type="email" class="form-control" id="email" placeholder="Enter email">                                                              
                                              </div>
                                              <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                            </form>                            
                                            <li class="dropdown-header">Google</li>
                                            <li><a href="#">Google News (All)</a></li>
                                            <li><a href="#">Google News (Argentina)</a></li>
                                            <li><a href="#">Google News (Australia)</a></li>
                                            <li><a href="#">Google News (Brasil)</a></li>
                                            <li><a href="#">Google News (Canada)</a></li>
                                            <li><a href="#">Google News (France)</a></li>
                                            <li><a href="#">Google News (India)</a></li>
                                            <li><a href="#">Google News (Israel)</a></li>
                                            <li><a href="#">Google News (Italy)</a></li>
                                            <li><a href="#">Google News (Russia)</a></li>
                                            <li><a href="#">Google News (Saudi Arabia)</a></li>
                                            <li><a href="#">Google News (UK)</a></li>                            
                                                                                                 
                                        </ul>
                                    </li>                                
                                </ul>
                            </li>
                        </ul>        
                    </div><!-- /.nav-collapse -->
                </nav>
            </div>
        </div>
        <!-- End Mega Menu -->
        <!-- Third Sectio Carousel -->
        <div class="row visible-lg ">
            <div class="container">                
                <div class="carousel slide multi-item-carousel" id="theCarousel">
                    <div class="carousel-inner carousel-inner-lg">                
                    </div>
                    <!-- <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-triangle-left"></i></a> -->
                    <!-- <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-triangle-right"></i></a> -->
                    <a class="left carousel-control" href="#theCarousel" data-slide="prev"><img src="images/scrolldown.png" class="scrollLeft" alt="Our Offices"></a>                    
                    <a class="right carousel-control" href="#theCarousel" data-slide="next"><img src="images/scrolldown.png" class="scrollRight" alt="Our Offices"></a>
                </div>                
            </div>
        </div>

        <div class="row visible-md">            
            <div class="container">
                <div class="carousel slide multi-item-carousel" id="theCarousel1">
                    <div class="carousel-inner carousel-inner-md">                     
                    </div>
                    <!-- <a class="left carousel-control" href="#theCarousel1" data-slide="prev"><i class="glyphicon glyphicon-triangle-left"></i></a>
                    <a class="right carousel-control" href="#theCarousel1" data-slide="next"><i class="glyphicon glyphicon-triangle-right"></i></a> -->
                    <a class="left carousel-control" href="#theCarousel1" data-slide="prev"><img src="images/scrolldown.png" class="scrollLeft" alt="Our Offices"></a>                    
                    <a class="right carousel-control" href="#theCarousel1" data-slide="next"><img src="images/scrolldown.png" class="scrollRight" alt="Our Offices"></a>
                </div>
            </div>            
        </div>

        <div class="row visible-sm">
            <div class="container">                
                <div class="carousel slide multi-item-carousel" id="theCarousel2">
                    <div class="carousel-inner carousel-inner-sm">                     
                    </div>
                    <!-- <a class="left carousel-control" href="#theCarousel2" data-slide="prev"><i class="glyphicon glyphicon-triangle-left"></i></a>
                    <a class="right carousel-control" href="#theCarousel2" data-slide="next"><i class="glyphicon glyphicon-triangle-right"></i></a> -->
                    <a class="left carousel-control" href="#theCarousel2" data-slide="prev"><img src="images/scrolldown.png" class="scrollLeft" alt="Our Offices"></a>                    
                    <a class="right carousel-control" href="#theCarousel2" data-slide="next"><img src="images/scrolldown.png" class="scrollRight" alt="Our Offices"></a>
                </div>                
            </div>
        </div>

        <div class="row visible-xs">
            <div class="container">                
                <div class="carousel slide multi-item-carousel" id="theCarousel3">
                    <div class="carousel-inner carousel-inner-xs">                     
                    </div>
                    <!-- <a class="left carousel-control" href="#theCarousel3" data-slide="prev"><i class="glyphicon glyphicon-triangle-left"></i></a>
                    <a class="right carousel-control" href="#theCarousel3" data-slide="next"><i class="glyphicon glyphicon-triangle-right"></i></a> -->
                    <a class="left carousel-control" href="#theCarousel3" data-slide="prev"><img src="images/scrolldown.png" class="scrollLeft" alt="Our Offices"></a>                    
                    <a class="right carousel-control" href="#theCarousel3" data-slide="next"><img src="images/scrolldown.png" class="scrollRight" alt="Our Offices"></a>
                </div>
            </div>
        </div>
        <!--End Third Sectio Carousel -->
        <!--Start content section -->
        
        <div class="row">            
            <div class="container ContentBox">

                <section>                    
                    <div class="col-xs-12 TopNews">
                        <h2 class="topHeading">Top Stories</h2>
                        <div class="sectionItems TopStories">                                
                        </div>
                    </div>                    
                </section>

                <section>                    
                    <div class="col-xs-12 NationalNews">
                        <h2 class="topHeading">National News</h2>
                        <div class="sectionItems1 NationalItems">                               
                        </div>
                    </div>                    
                </section>

                <section>                    
                    <div class="col-xs-12 WorldNews">
                        <h2 class="topHeading">World News</h2>
                        <div class="sectionItems WorldItems">                               
                        </div>
                    </div>                    
                </section>

                <section>
                <div class="ContentBoxShadow">
                    <div class="col-xs-12 col-lg-3">
                        <h2 class="topHeading">Sources</h2>
                    </div>
                    <div class="col-xs-12 col-lg-9">
                        <h2 class="topHeading">In The News</h2>
                    </div>

                    <div class="col-xs-12 col-lg-3 insideBox">
                            
                        <div class="blockInsideBox">                            
                            
                            <div class="col-xs-12">
                                 <div class="col-xs-6 sourceItems">
                                <a href="#bbc">BBC</a>
                                </div>
                                <div class="col-xs-6 sourceItems">
                                <a href="#abc_news_au">ABC News (AU)</a>
                                </div>
                                <div class="col-xs-6 sourceItems">
                                <a href="#cnbc">CNBC</a>
                                </div>
                                <div class="col-xs-6 sourceItems">
                                <a href="#cnbc">CNBC</a>
                                </div>
                            </div>                           
                                                     
                            <div class="row sourceNewsBlock-outer top-headlines-cnn" id="cnbc">
                            &nbsp;
                            <h2 class="newsTitle">CNBC</h2>
                            </div>
                            
                            <div class="row sourceNewsBlock-outer top-headlines-bbc" id="bbc">
                            &nbsp;
                            <h2 class="newsTitle" >BBC</h2>
                            </div>
                            
                            <div class="row sourceNewsBlock-outer top-headlines-abc" id="abc_news_au">
                            &nbsp;
                            <h2 class="newsTitle" >ABC News (AU)</h2>
                            </div>
                        </div>
                                                
                    </div>
                    <!-- <div class="col-xs-12 col-lg-1">
                    &nbsp;                    
                    </div> -->
                    <!--Start Main News -->
                    <div class="col-xs-12 col-lg-9 insideBox">    
                        <div class="col-xs-12 col-md-6 blockInsideBox top-headlines-abc-news-au">
                        </div>
                        <!-- <div class="col-xs-12 col-md-1 blockInsideBox">
                        </div>  -->
                        <div class="col-xs-12 col-md-6 blockInsideBox top-headlines-cnbc">
                        </div>                                            
                    </div>
                    <!--End Main News -->                                      
                </div>
                </section>
                <!--Start Sports Section -->
                <section>                    
                    <div class="col-xs-12 Sports">
                        <h2 class="topHeading">Sports</h2>
                        <div class="sectionItems SportsItems">                                
                        </div>
                    </div>                    
                </section>
                <!--End Sports Section -->
                <section>
                    <div class="col-xs-12 Health">
                        <h2 class="topHeading">Health</h2>
                        <div class="sectionItems1 HealthItems">                                
                        </div>
                    </div> 
                </section>

                <section>
                    <div class="col-xs-12 Business">
                        <h2 class="topHeading">Business</h2>
                        <div class="sectionItems BusinessItems">                                
                        </div>
                    </div> 
                </section>

                <section>
                    <div class="col-xs-12 Science">
                        <h2 class="topHeading">Science</h2>
                        <div class="sectionItems1 ScienceItems">                                
                        </div>
                    </div> 
                </section>

                <section>
                    <div class="col-xs-12 Entertainment">
                        <h2 class="topHeading">Entertainment</h2>
                        <div class="sectionItems EntertainmentItems">
                        </div>
                    </div> 
                </section>

                <section>
                    <div class="col-xs-12 Technology">
                        <h2 class="topHeading">Technology</h2>
                        <div class="sectionItems1 TechnologyItems">
                        </div>
                    </div> 
                </section>
            </div>

        </div>
        <!--End content section -->
        
        
        <!--Scroll Up -->
        <p id="back-top" style="display: block;"><a href="#cnbc"><span></span></a></p>        
    </div>

    

    

</body>
</html>