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
            <div class="col-xs-6">
                <ul class="list-inline socialIcons">
                   <li><a href=""><i class="fa fa-facebook"></i></a></li>
                   <li><a href=""><i class="fa fa-twitter"></i></a></li>
                   <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                  <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                </ul>               
            </div>
            <div class="col-xs-6">
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


    <!--Second row -->
    <div class="row contentRowBg">
    <div class="contentrowbgoverlay">
    </div>
    <div class="container container_body containerpadding">
        <div class="wrapperinsidecontainer wrapperinsidecontainer_no_bg">
            <div class="row">
                <div id="content">                  
                    <!-- Mega Menu --> 
    <div class="row">
        <div class="container container_body">
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
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Countries and categories <span class="glyphicon glyphicon-chevron-down pull-right"></span></a>
                            <ul class="dropdown-menu mega-dropdown-menu row">                                
                                <li class="col-sm-3 liFixedHeight">
                                    <ul>
                                        <li class="dropdown-header">Top Stories</li>                            
                                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                          <div class="carousel-inner dropdown-carousel-inner">
                                            <!-- contents come from jquery -->                        
                                          </div><!-- End Carousel Inner -->
                                        </div><!-- /.carousel -->
                                                                 
                                    </ul>
                                </li>
                                
                                <li class="col-sm-3 liFixedHeight">
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
                                <li class="col-sm-3 liFixedHeight">
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
                                <li class="col-sm-3 liFixedHeight">
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
                </div>
            </div>      
        </div>

        <div class="wrapperinsidecontainer wrapperinsidecontainer_no_bg">
            <div class="row">
                <div id="content">
                    <div class="carousel slide multi-item-carousel" id="theCarousel">
				        <div class="carousel-inner">
				         
				        </div>
				        <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-triangle-left"></i></a>
				        <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-triangle-right"></i></a>
				    </div>
                    
                </div>
            </div>      
        </div>

        <div class="row rowMargin ">
            <div class="firstBlock blockBg ">
                <div class="nav-side-menu">
                <div class="brand">Brand Logo</div>
                <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                <div class="menu-list">           
                    <ul id="menu-content" class="menu-content collapse out">
                        <li>
                          <a href="#">
                          <i class="fa fa-dashboard fa-lg"></i> Dashboard
                          </a>
                        </li>
                        <li  data-toggle="collapse" data-target="#business" class="collapsed active">
                          <a href="#"><i class="fa fa-briefcase fa-lg"></i> Business <span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse" id="business">
                            <li class="active"><a href="#">Everywhere</a></li>
                            <!-- lists come from jquery -->
                        </ul>
                        <li data-toggle="collapse" data-target="#entertainment" class="collapsed">
                          <a href="#"><i class="fa fa-angle-double-right fa-lg"></i> Entertainment <span class="arrow"></span></a>
                        </li>                       
                        <ul class="sub-menu collapse" id="entertainment">
                          <!-- lists come from jquery -->
                        </ul>
                        <li data-toggle="collapse" data-target="#health" class="collapsed">
                          <a href="#"><i class="fa fa-medkit fa-lg"></i> Health <span class="arrow"></span></a>
                        </li>                       
                        <ul class="sub-menu collapse" id="health">
                          <!-- lists come from jquery -->
                        </ul>
                        <li data-toggle="collapse" data-target="#science" class="collapsed">
                          <a href="#"><i class="fa fa-flask fa-lg"></i> Science <span class="arrow"></span></a>
                        </li>                       
                        <ul class="sub-menu collapse" id="science">
                          <!-- lists come from jquery -->
                        </ul>
                        <li data-toggle="collapse" data-target="#sports" class="collapsed">
                          <a href="#"><i class="fa fa-flask fa-lg"></i> Sports <span class="arrow"></span></a>
                        </li>                       
                        <ul class="sub-menu collapse" id="sports">
                          <!-- lists come from jquery -->
                        </ul>
                        <li data-toggle="collapse" data-target="#technology" class="collapsed">
                          <a href="#"><i class="fa fa-trophy fa-lg"></i> Technology <span class="arrow"></span></a>
                        </li>                       
                        <ul class="sub-menu collapse" id="technology">
                          <!-- lists come from jquery -->
                        </ul>
                        <li>
                          <a href="#">
                          <i class="fa fa-user fa-lg"></i> Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                          <i class="fa fa-users fa-lg"></i> Users
                          </a>
                        </li>
                    </ul>
                </div>
                </div>

                <div class="col-news-first">
                <div class="panel panel-default ">
                    <div class="panel-heading text-center panel-news panel-news-source">SOURCES</div>
                    <!--ABC NEWS (AU)-->
                    <div class="panel-heading text-center panel-news clickableDiv panel_news_abc_au">ABC NEWS (AU)<span class="glyphicon glyphicon-chevron-down"></div>
                    <div class="panel-body trendingNow_abc_news_au hideableDiv">
                        <ul></ul>
                    </div>
                    <!--ABC NEWS-->
                    <div class="panel-heading text-center panel-news clickableDiv panel_news_abc">ABC NEWS<span class="glyphicon glyphicon-chevron-down"></div>
                    <div class="panel-body trendingNow_abc_news hideableDiv">
                        <ul></ul>
                    </div>
                    <!--CNN-->
                    <div class="panel-heading text-center panel-news panel_news_cnn clickableDiv">CNN<span class="glyphicon glyphicon-chevron-down"></div>
                    <div class="panel-body trendingNow_news_cnn hideableDiv">
                        <ul></ul>
                    </div>
                    <!--CNBC-->
                    <div class="panel-heading text-center panel-news panel_news_cnbc clickableDiv">CNBC<span class="glyphicon glyphicon-chevron-down"></span></div>
                    <div class="panel-body trendingNow_news_cnbc hideableDiv">
                        <ul></ul>
                    </div>
                    <!--BBC-->
                    <div class="panel-heading text-center panel-news panel_news_bbc clickableDiv">BBC<span class="glyphicon glyphicon-chevron-down"></div>
                    <div class="panel-body trendingNow_news_bbc hideableDiv">
                        <ul></ul>
                    </div>
                    <!--AL JAZEERA-->
                    <div class="panel-heading text-center panel-news panel_news_al_jazerra clickableDiv">AL JAZEERA<span class="glyphicon glyphicon-chevron-down"></span></div>
                    <div class="panel-body trendingNow_news_al_jazerra hideableDiv">
                        <ul></ul>
                    </div>                      
                </div>
                </div>
            </div>
            <div class="gapBlock">
            </div>
            <div class="secondBlock blockBg">               
                <div class="row">
                    <div class="col-md-6 col-news">
                        <div class="panel panel-default no-panel-default-border">
                            <div class="panel-heading text-center panel-news panel-news-first">BBC HOT NEWS</div>
                            <div class="panel-body newsHeadlines">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-news">
                        <div class="panel panel-default no-panel-default-border">
                            <div class="panel-heading text-center panel-news panel-news-second">CNBC HOT NEWS</div>
                            <div class="panel-body businessNewsHeadlines">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gapBlock">
            </div>
            <div class="thirdBlock blockBg">
                <div class="col-md-12 col-news">
                <div class="panel panel-default no-panel-default-border">
                    <div class="panel-heading text-center panel-news panel-news-first">BREAKING NEWS</div>
                    <div class="panel-body breakingNews no-panel-body-padding">
                                        
                    </div>                  
                </div>
                </div>
            </div>
        </div>      
    </div>

    </div>

    <!-- -->
</body>
</html>