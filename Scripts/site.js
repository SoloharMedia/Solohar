////////////////////////////////////////
//             FADE OUTS              //
////////////////////////////////////////
$('#grow-box').fadeOut(0);
$('#grow-box-text').slideDown();
$('#welcome-message-container').fadeOut(0);
$('#slide-down-container').fadeOut(0);
$('.nav-label').fadeOut(0);
$('#nav-main-container').fadeOut(0);
$('.header-big-text').fadeOut(0);
$('.header-small-text').fadeOut(0);
$('#solohar-logo-container').fadeOut(0);
$('.fade-in').css('opacity', '0');
$('#loading-container').fadeOut(0);

$('.portfolio-point-container-header').slideUp(0);
$('.portfolio-point-container-text').slideUp(0);
$('.portfolio-download-link-container').slideUp(0);

////////////////////////////////////////
//          Global Variables          //
////////////////////////////////////////
var services = new Array(3);
services[0] = "WEB APPLICATIONS";
services[1] = "AND DESIGN LOGOS";
services[2] = "MOBILE APPLICATIONS";
services[3] = "BRANDS";
var charCounter = 0;
var entireLine = "";
var currentService = 0;
var slideTimer = 0;

/////////////////////////////////////////////////////
//          DOCUMENT LOAD / WINDOW RESIZE          //
/////////////////////////////////////////////////////
$(document).ready(function(){
	//SETS WELCOME CONTAINER TO SIZE OF USER'S SCREEN
	var screenHeight = $(window).height();
	var screenWidth = $(window).width();
	$('#main-welcome-container').css({
		'height' : screenHeight,
		'width' : screenWidth 
	});

	//SETS UP SLIDER SIZE
	var slideImageHeight = $('.slide-image').css('height');
	var slideImageWidth = $('.slide-image').css('width');
	$('#about-picture-section').css({
		'height' : slideImageHeight	
	});
	
	//STARTS WELCOME ANIMATION
	setTimeout(welcomeAnimation, 700);
	var spanHeight = $('#banner-text-about').css('height');
	var backgroundWidth = $('#banner-text-about').css('width');
	$('#banner-text-container').css({
		'height' : spanHeight,
		'width' : backgroundWidth
	});
	 
	slideTimer = setTimeout(autoMoveSlider, 9000);
	//STARTS INDEX ANIMATION
	$('#index-loading-one').animate({
		'width' : '100%'
	}, 9000, 'linear', function() {
		$('#index-loading-one').animate({
			'left' : '100%'
		}, 500, 'swing');
	});
});

$(window).resize(function(){
	var screenHeight = $(window).height();
	var screenWidth = $(window).width();
	$('#main-welcome-container').css({
		'height' : screenHeight,
		'width' : screenWidth 
	});
	
	$('#background-test >').css({
		'height' : '100%',
		'width' : '100%' 
	});
	
	var spanHeight = $('#banner-text-about').css('height');
	var backgroundWidth = $('#banner-text-about').css('width');
	$('#banner-text-container').css({
		'height' : spanHeight,
		'width' : backgroundWidth
	});
	
	//SETS UP SLIDER SIZE
	var slideImageHeight = $('.slide-image').css('height');
	var slideImageWidth = $('.slide-image').css('width');
	$('#about-picture-section').css({
		'height' : slideImageHeight
	});
});

/////////////////////////////////////////////
//          Window SCROLLING               //
/////////////////////////////////////////////
var iScrollPos = 0;
$(window).on('scroll', function() {
	//VARIABLES FOR ELEMENTS DISTANCE FROM TOP OF WINDOW
	var distanceAbout = $('#about-content-container').offset().top / 2;
	var distancePortfolio = $('#port-header-container').offset().top - 300;
	var distanceContact = $('#contact-header-container').offset().top - 300;
    var $window = $(window);
	
	//CHECKS FOR SCROLL DISTANCE FOR SECTIONS
	//ABOUT SECTION
	if ( $window.scrollTop() >= distanceAbout ) {
        $('#about-header-big-text').slideDown(800, function() {
			$('#about-header-small-text').slideDown(800);
		});
    }
	//PORTFOLIO SECTION
	if ( $window.scrollTop() >= distancePortfolio ) {
		$('#portfolio-header-big-text').slideDown(800, function() {
			$('#portfolio-header-small-text').slideDown(800);
		});
    }
	//CONTACT SECTION
	if ( $window.scrollTop() >= distanceContact ) {
		$('#contact-header-big-text').slideDown(1200, function() {
			$('#contact-header-small-text').slideDown(1100);
		});
    }
	
	var windowHeight = $(window).height(),
    gridTop = windowHeight * .7;
    // On each scroll check if `fade-in`is in interested viewport
    $('.fade-in').each(function() {
		var website = this;
		var thisTop = $(this).offset().top - $(window).scrollTop();
      // Check if this element is in the interested viewport
      if (thisTop < gridTop) {
        $(this).animate({
			'opacity' : '1'
			}, 600, 'swing');
		}
    });
	//FADES BACK-TOP-ICON IN / OUT
	var iCurScrollPos = $(this).scrollTop();
	
    if (iCurScrollPos > iScrollPos || $(window).scrollTop() === 0) {
        $('#back-top-container').slideUp();
    } else {
       $('#back-top-container').slideDown();
    }
    iScrollPos = iCurScrollPos;
  });

/////////////////////////////////////////////
//          NAVBAR SCROLLING               //
/////////////////////////////////////////////

//SCROLLS TO WELCOME SCREEN (TOP OF SCREEN)
$("#button-welcome, #footer-back-top, #back-top-container").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-welcome-container").offset().top
    }, 1300);
});

//SCROLLS TO ABOUT SECTION
$("#slide-down-button, #button-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-content-container").offset().top
    }, 1300);
});

//SCROLLS TO PORTFOLIO SECTION
$("#button-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-content-container").offset().top
    }, 1300);
});

//SCROLLS TO CONTACT SECTION
$("#button-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-content-container").offset().top
    }, 1300);
});

/////////////////////////////////////////////
//          Welcome Animation              //
/////////////////////////////////////////////	
function welcomeAnimation() {
	$('#loading-container').fadeIn(800, function() {
		$('#loading-line').animate({
			'width' : '200px'
		}, 800, 'swing', function() {
			$('#loading-container-top').animate({
				'top' : '-3px'
			}, 100, 'swing');
			$('#loading-container-bottom').delay(800).animate({
				'top' : '63px'
			}, 100, 'swing', function() {
					$('#loading-line').css({
						'border-radius' : '100%',
						'background' : 'transparent',
						'border' : '6px solid #1F2833'
					});
					$('#loading-container-top').css({
						'transform' : 'rotate(-45deg)',
						'top' : '-8px',
						'left' : '-5px'
					});
					$('#loading-container-bottom').css({
						'transform' : 'rotate(-45deg)',
						'top' : '68px',
						'left' : '5px'
					});
					$('#loading-line').css({
						'height' : '200px',
						'top' : '-43px'
					});
					$('#loading-wrapper').fadeOut(3200, function() {
						var screenWidth = $(window).width();
						$('#grow-box').fadeIn('slow', function() {
							$('#grow-box').animate({
								'width' : '200px'
							}, 600, 'swing', function() {
								$('#grow-box-text').animate({
								'bottom' : '0'
								}, 600, 'swing', function() {
									$('#grow-box').delay(1100).animate({
										'height' : '59px'
									}, 600, 'swing', function() {
										$('#grow-box').delay(300).animate({
										'width' : '4px',
										'left' : '50%'
										}, 600, 'swing');
										$('#grow-box-text').delay(300).animate({
										'width' : '0',
										'left' : '50%'
										}, 600, 'swing', function() {
											$('#grow-box').css({
												'border-radius' : '100%',
												'background' : '#45A29E',
												'height' : '4px',
												'top' : '53%',
												boxShadow : '0px 0px 25px 25px #45A29E'
											}).delay(100).fadeOut(100, function() {
												$('#solohar-logo-container').fadeIn(2300);
												$('#welcome-message-container').fadeIn(2300, function() {
													setTimeout(hideCursor,300);
													$('#slide-down-container').fadeIn(2300);
													if (screenWidth > 768) {
														$('#nav-main-container').fadeIn(2300);
													}
													setTimeout(typeCode,500);
												});
											}); 
										});
									});
								});
							}); 
						});
					});
				});
			});
	});
}

//////////////////////////////////////
//          WELCOME TYPING          //
//////////////////////////////////////
function hideCursor() {
	$('#header-cursor').hide();
	setTimeout(showCursor,500);
}

function showCursor() {
	$('#header-cursor').show();
	setTimeout(hideCursor,500);
}
function typeCode() {
    if(charCounter <= services[currentService].length)
    {
        var charToDisplay = services[currentService].charAt(charCounter);
        entireLine += charToDisplay;
        $("#header-changer").html(entireLine);
        charCounter++;
        setTimeout(typeCode, 100);
    }
    else
    {
        entireLine = "";
        setTimeout(backspaceCode,2400);
        charCounter = 0;
    }
}
function backspaceCode() {
	
	//Gets the string inside <p>
	var codeToRemove = $('#header-changer').html();
	codeToRemove = codeToRemove.substring(0, codeToRemove.length - 1);
	if($('#header-changer').html().length > 0)
	{
		$('#header-changer').html(codeToRemove);
		
		setTimeout(backspaceCode,100);
	}
	else
	{
		currentService++;
		if(currentService >= services.length)
		{
			currentService = 0;
		}
		setTimeout(typeCode,3000);
	}
}

///////////////////////////
//          NAV          //
///////////////////////////
$('#button-welcome').mouseenter(function() {
	$('#nav-extender-welcome').stop(true, true).animate({
		'width' : '30px'
	}, 300, 'swing', function() {
		$('#nav-label-welcome').fadeIn(300);
	});
});
$('#button-welcome').mouseleave(function() {
	$('#nav-extender-welcome').clearQueue().animate({
		'width' : '0px'
	}, 300, 'swing');
	$('#nav-label-welcome').fadeOut(300);
});

$('#button-about').mouseenter(function() {
	$('#nav-extender-about').stop(true, true).animate({
		'width' : '30px'
	}, 300, 'swing', function() {
		$('#nav-label-about').fadeIn(300);
	});
});
$('#button-about').mouseleave(function() {
	$('#nav-extender-about').clearQueue().animate({
		'width' : '0px'
	}, 300, 'swing');
	$('#nav-label-about').fadeOut(300);
});

$('#button-portfolio').mouseenter(function() {
	$('#nav-extender-portfolio').stop(true, true).animate({
		'width' : '30px'
	}, 300, 'swing', function() {
		$('#nav-label-portfolio').fadeIn(300);
	});
});
$('#button-portfolio').mouseleave(function() {
	$('#nav-extender-portfolio').clearQueue().animate({
		'width' : '0px'
	}, 300, 'swing');
	$('#nav-label-portfolio').fadeOut(300);
});

$('#button-contact').mouseenter(function() {
	$('#nav-extender-contact').stop(true, true).animate({
		'width' : '30px'
	}, 300, 'swing', function() {
		$('#nav-label-contact').fadeIn(300);
	});
});
$('#button-contact').mouseleave(function() {
	$('#nav-extender-contact').clearQueue().animate({
		'width' : '0px'
	}, 300, 'swing');
	$('#nav-label-contact').fadeOut(300);
});

/////////////////////////////////
//          PORTFOLIO          //
/////////////////////////////////
$('.applications-info-wrapper').mouseenter(function() {
	var lightbox = this;
	if($(lightbox).children('.portfolio-download-link-container:animated').length > 0 || 
		$(lightbox).children('.portfolio-point-container-text:animated').length > 0 || 
		$(lightbox).children('.portfolio-download-link-container:animated').length > 0) {
		//DO NOTHING
	}else {
		$(lightbox).stop(false, false).siblings('.applications-content').children('.applications-lightbox').css({
			'opacity' : '0.9'		
			});
		$(lightbox).siblings('.applications-content').css('transform', 'scale(1.3, 1.3)');
		$(lightbox).children('.portfolio-point-container-header').slideDown(700, function() {
			$(lightbox).children('.portfolio-point-container-text').slideDown(700, function() {
				$(lightbox).children('.portfolio-download-link-container').slideDown(700);
			});
		});	
	}
});
$('.applications-info-wrapper').mouseleave(function() {
	var lightbox = this;
	$(lightbox).stop(false, false).siblings('.applications-content').children('.applications-lightbox').clearQueue().css({
		'opacity' : '0.1'		
		});
	$(lightbox).siblings('.applications-content').stop(true, true).css('transform', 'scale(1, 1)');
	$(lightbox).children('.portfolio-point-container-header').stop(true, true).slideUp(0);
	$(lightbox).children('.portfolio-point-container-text').stop(true, true).slideUp(0);
	$(lightbox).children('.portfolio-download-link-container').stop(true, true).slideUp(0);
});

///////////////////////////////////////
//          CONTACT BUTTONS          //
///////////////////////////////////////
$('.contact-link').mouseenter(function() {
	$(this).next().stop(false, false).css({
		'left' : '100%'		
		});	
});
$('.contact-link').mouseleave(function() {
	$(this).next().stop(false, false).css({
		'left' : '-20%'		
		});	
});

//////////////////////////////
//          SLIDER          //
//////////////////////////////
var index = 1;

function autoMoveSlider() {
	slideTimer = setTimeout(autoMoveSlider, 9000);
	if(index == 1){
		//STARTS INDEX ANIMATION
		$('#index-loading-two').animate({
			'width' : '100%'
		}, 9000, 'linear', function() {
			$('#index-loading-two').animate({
				'left' : '100%'
			}, 500, 'swing');
		});
		$('#slide-wrapper-four').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-one').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-three').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-two').animate({
				'opacity' : '1'
			}, 700, 'swing', function() {
				$('#index-loading-one').css({
					'width' : '0%',
					'left' : '0'
				});
			});	
	}else if(index == 2) {
		//STARTS INDEX ANIMATION
		$('#index-loading-three').animate({
			'width' : '100%'
		}, 9000, 'linear', function() {
			$('#index-loading-three').animate({
				'left' : '100%'
			}, 500, 'swing');
		});
		$('#slide-wrapper-four').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-one').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-three').animate({
				'opacity' : '1'
			}, 700, 'swing');
			$('#slide-wrapper-two').animate({
				'opacity' : '0'
			}, 700, 'swing', function() {
				$('#index-loading-two').css({
					'width' : '0%',
					'left' : '0'
				});
			});
	}else if(index == 3) {
		//STARTS INDEX ANIMATION
		$('#index-loading-four').animate({
			'width' : '100%'
		}, 9000, 'linear', function() {
			$('#index-loading-four').animate({
				'left' : '100%'
			}, 500, 'swing');
		});
		$('#slide-wrapper-four').animate({
				'opacity' : '1'
			}, 700, 'swing');
			$('#slide-wrapper-one').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-three').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-two').animate({
				'opacity' : '0'
			}, 700, 'swing', function() {
				$('#index-loading-three').css({
					'width' : '0%',
					'left' : '0'
				});
			});
	}else if(index == 4) {
		//STARTS INDEX ANIMATION
		$('#index-loading-one').animate({
			'width' : '100%'
		}, 9000, 'linear', function() {
			$('#index-loading-one').animate({
				'left' : '100%'
			}, 500, 'swing');
		});
		$('#slide-wrapper-four').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-one').animate({
				'opacity' : '1'
			}, 700, 'swing');
			$('#slide-wrapper-three').animate({
				'opacity' : '0'
			}, 700, 'swing');
			$('#slide-wrapper-two').animate({
				'opacity' : '0'
			}, 700, 'swing', function() {
				$('#index-loading-four').css({
					'width' : '0%',
					'left' : '0'
				});
			});
		}
		index ++;
		if(index > 4){
			index = 1;
		}
}
//PREVIOUS AND NEXT ARROWS
$('#next-slide-arrow').bind('click', function() {
	if($('.slider-wrapper:animated').length > 0) {
		//DO NOTHING
	}else {
		$('#index-loading-one').stop();
		$('#index-loading-two').stop();
		$('#index-loading-three').stop();
		$('#index-loading-four').stop();
		$('#index-loading-one').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-two').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-three').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-four').css({
			'width' : '0',
			'left' : '0'
		});
		clearTimeout(slideTimer);
		autoMoveSlider();
	}
});
$('#previous-slide-arrow').bind('click', function() {
	if($('.slider-wrapper:animated').length > 0) {
		//DO NOTHING
	}else {
		if(index == 1) {
			index = 3;
		}else if(index == 2) {
			index = 4;
		}else if(index == 3) {
			index = 1;
		}else if(index == 4) {
			$('.loading-ball').stop();
			index = 2;
		}	
		$('#index-loading-one').stop();
		$('#index-loading-two').stop();
		$('#index-loading-three').stop();
		$('#index-loading-four').stop();
		$('#index-loading-one').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-two').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-three').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-four').css({
			'width' : '0',
			'left' : '0'
		});
		clearTimeout(slideTimer);
		autoMoveSlider();
	}
});
//INDEX TABS
function switchTabs(ele) {
	if(ele.id == "index-one") {
		index = 4;
	}else if(ele.id == "index-two") {
		index = 1;
	}else if(ele.id == "index-three") {
		index = 2;
	}else if(ele.id == "index-four") {
		index = 3;
	}
	$('#index-loading-one').stop();
		$('#index-loading-two').stop();
		$('#index-loading-three').stop();
		$('#index-loading-four').stop();
		$('#index-loading-one').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-two').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-three').css({
			'width' : '0',
			'left' : '0'
		});
		$('#index-loading-four').css({
			'width' : '0',
			'left' : '0'
		});
		clearTimeout(slideTimer);
		autoMoveSlider();
}

$(".float-away").mouseover(function(){
    $(this).css({
        left:(Math.random()*40)+"%",
        top:(Math.random()*40)+"%"
    });
});

///////////////////////