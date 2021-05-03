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
	  <div class="container">
	  	<div id="TorBarContent" class="row">
	  		<div id="CarouselContent" class="col-md-9">
				<div id="text-carousel" class="carousel" data-ride="carousel">
				    <!-- Wrapper for slides -->
				    <div class="row carousel-inner-row">
				        <div class="col-xs-offset-1 col-xs-6">
				            <div class="carousel-inner slide">				                
				                <div class="item active">
				                    <div class="carousel-content">
				                        <div>
				                            <ul id="topRowItems" class="firstUL">
											  <li>1</li>
											  <li>2</li>
											  <li>3</li>
											</ul> 
				                        </div>
				                    </div>
				                </div>
				                <div class="item">
				                    <div class="carousel-content">
				                        <div>
				                            <ul id="topRowItems" class="secondUL">
											  <li>4</li>
											  <li>5</li>
											  <li>6</li>
											</ul> 
				                        </div>
				                    </div>
				                </div>
				                <div class="item">
				                    <div class="carousel-content">
				                        <div>
				                            <ul id="topRowItems" class="thirdUL">
											  <li>7</li>
											  <li>8</li>
											  <li>9</li>
											</ul> 
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				    <!-- Controls --> 
				    <a class="left carousel-control" href="#text-carousel" data-slide="prev">
				    	<span class="carousel-control-prev-icon" aria-hidden="true">&#x25c0;</span>
				  	</a>
				 	<a class="right carousel-control" href="#text-carousel" data-slide="next">
				    	<span class="carousel-control-next-icon" aria-hidden="true">&#x25b6;</span>
				  	</a>
				</div>
	  		</div>
	  		<div id="LoginContent" class="col-md-3">
	  			<a id="LoggedInUsername" class="show-desktop" href="/account">Login</a>
	  			<span class="show-desktop">|</span>
	  			<a href="javascript:void(0)" class="Logout">Sign Up</a>
	  		</div>
	  	</div>	  	
	  </div>
	</div>


	<!--Second row -->
	<div class="row contentRowBg">
	<div class="contentrowbgoverlay">
	</div>
	<div class="container containerpadding">
		<div class="wrapperinsidecontainer wrapperinsidecontainer_no_bg">
			<div class="row">
				<div id="content">					
					<nav class="navbar navbar-default">
    <div class="navbar-header">
		<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">MegaMenu</a>
	</div>
	
	
	<div class="collapse navbar-collapse js-navbar-collapse">
		<ul class="nav navbar-nav">
			<li class="dropdown mega-dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Collection <span class="glyphicon glyphicon-chevron-down pull-right"></span></a>
				
				<ul class="dropdown-menu mega-dropdown-menu row">
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">New in Stores</li>                            
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                              <div class="carousel-inner">
                                <div class="item active">
                                    <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" class="img-responsive" alt="product 1"></a>
                                    <h4><small>Summer dress floral prints</small></h4>                                        
                                    <button class="btn btn-primary" type="button">49,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>       
                                </div><!-- End Item -->
                                <div class="item">
                                    <a href="#"><img src="http://placehold.it/254x150/ef5e55/f5f5f5/&text=New+Collection" class="img-responsive" alt="product 2"></a>
                                    <h4><small>Gold sandals with shiny touch</small></h4>                                        
                                    <button class="btn btn-primary" type="button">9,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>        
                                </div><!-- End Item -->
                                <div class="item">
                                    <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" class="img-responsive" alt="product 3"></a>
                                    <h4><small>Denin jacket stamped</small></h4>                                        
                                    <button class="btn btn-primary" type="button">49,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>      
                                </div><!-- End Item -->                                
                              </div><!-- End Carousel Inner -->
                            </div><!-- /.carousel -->
                            <li class="divider"></li>
                            <li><a href="#">View all Collection <span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Dresses</li>
							<li><a href="#">Unique Features</a></li>
							<li><a href="#">Image Responsive</a></li>
							<li><a href="#">Auto Carousel</a></li>
							<li><a href="#">Newsletter Form</a></li>
							<li><a href="#">Four columns</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Tops</li>
							<li><a href="#">Good Typography</a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Jackets</li>
							<li><a href="#">Easy to customize</a></li>
							<li><a href="#">Glyphicons</a></li>
							<li><a href="#">Pull Right Elements</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Pants</li>
							<li><a href="#">Coloured Headers</a></li>
							<li><a href="#">Primary Buttons & Default</a></li>
							<li><a href="#">Calls to action</a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Accessories</li>
							<li><a href="#">Default Navbar</a></li>
							<li><a href="#">Lovely Fonts</a></li>
							<li><a href="#">Responsive Dropdown </a></li>							
							<li class="divider"></li>
                            <li class="dropdown-header">Newsletter</li>
                            <form class="form" role="form">
                              <div class="form-group">
                                <label class="sr-only" for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email">                                                              
                              </div>
                              <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                            </form>                                                       
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

		<div class="wrapperinsidecontainer">
			<div class="row">
				<div id="content">
					<div id="contentCarousel" class="carousel slide" data-ride="carousel">
				    <!-- Indicators -->
				    <ol class="carousel-indicators">
				      <li data-target="#contentCarousel" data-slide-to="0" class="active"></li>
				      <li data-target="#contentCarousel" data-slide-to="1"></li>
				      <li data-target="#contentCarousel" data-slide-to="2"></li>
				    </ol>

				    <!-- Wrapper for slides -->
				    <div class="carousel-inner carousel-inner-second">

				      <div class="item active">
				        <img src="images/main_bg.jpg" alt="Los Angeles" style="width:100%;">
				        <div class="carousel-caption">
				          <h3>Los Angeles</h3>
				          <p>LA is always so much fun!</p>
				        </div>
				      </div>

				      <div class="item">
				        <img src="images/main_bg.jpg" alt="Chicago" style="width:100%;">
				        <div class="carousel-caption">
				          <h3>Chicago</h3>
				          <p>Thank you, Chicago!</p>
				        </div>
				      </div>
				    
				      <div class="item">
				        <img src="images/main_bg.jpg" alt="New York" style="width:100%;">
				        <div class="carousel-caption">
				          <h3>New York</h3>
				          <p>We love the Big Apple!</p>
				        </div>
				      </div>
				  
				    </div>

				    <!-- Left and right controls -->
				    <a class="left carousel-control" href="#contentCarousel" data-slide="prev">
				      <span class="glyphicon glyphicon-chevron-left"></span>
				      <span class="sr-only">Previous</span>
				    </a>
				    <a class="right carousel-control" href="#contentCarousel" data-slide="next">
				      <span class="glyphicon glyphicon-chevron-right"></span>
				      <span class="sr-only">Next</span>
				    </a>
				  </div>
					
				</div>
			</div>		
		</div>

		<div class="row rowMargin">
			<div class="firstBlock blockBg">
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
		                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
		                  <a href="#"><i class="fa fa-gift fa-lg"></i> UI Elements <span class="arrow"></span></a>
		                </li>
		                <ul class="sub-menu collapse" id="products">
		                    <li class="active"><a href="#">CSS3 Animation</a></li>
		                    <li><a href="#">General</a></li>
		                    <li><a href="#">Buttons</a></li>
		                    <li><a href="#">Tabs & Accordions</a></li>
		                    <li><a href="#">Typography</a></li>
		                    <li><a href="#">FontAwesome</a></li>
		                    <li><a href="#">Slider</a></li>
		                    <li><a href="#">Panels</a></li>
		                    <li><a href="#">Widgets</a></li>
		                    <li><a href="#">Bootstrap Model</a></li>
		                </ul>
		                <li data-toggle="collapse" data-target="#service" class="collapsed">
		                  <a href="#"><i class="fa fa-globe fa-lg"></i> Services <span class="arrow"></span></a>
		                </li>		                
		                <ul class="sub-menu collapse" id="service">
		                  <li>New Service 1</li>
		                  <li>New Service 2</li>
		                  <li>New Service 3</li>
		                </ul>
		                <li data-toggle="collapse" data-target="#new" class="collapsed">
		                  <a href="#"><i class="fa fa-car fa-lg"></i> New <span class="arrow"></span></a>
		                </li>		                
		                <ul class="sub-menu collapse" id="new">
		                  <li>New New 1</li>
		                  <li>New New 2</li>
		                  <li>New New 3</li>
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
			</div>
			<div class="gapBlock">
			</div>
			<div class="secondBlock blockBg">
				<div class="col-md-12 col-news clickableDiv">
					<div class="panel panel-default">
						<div class="panel-heading text-center panel-topic">H1</div>
					</div>
				</div>
				<div class="hideableDiv">
					<div class="col-md-6 col-news">
					    <div class="panel panel-default ">
						    <div class="panel-heading text-center panel-news">S1</div>
						    <div class="panel-body newsHeadlines">
						    </div>
					   	</div>
					</div>

					<div class="col-md-6 col-news">
					    <div class="panel panel-default ">
						    <div class="panel-heading text-center panel-news">S2</div>
						    <div class="panel-body businessNewsHeadlines">
						    </div>
					   	</div>
					</div>
				</div>
			</div>
			<div class="gapBlock">
			</div>
			<div class="thirdBlock blockBg">
			right
			</div>
		</div>		
	</div>

	</div>

	<!-- -->
</body>
</html>