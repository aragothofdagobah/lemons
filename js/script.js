var width = $(window).width();
var height = $(window).height();
var clicked = 0;
var onLeft = false;
$(document).ready(function (){
  $(".lemon").mouseenter(function (){
	$(".shadow").fadeIn();
	$(".lemon").transition({y:'-20px'});
  });
  $(".lemon").mouseout(function (){
	$(".shadow").fadeOut();
	$(".lemon").delay(100).transition({y:'20px'});
  });

  $(".lemon").click(function (){
      displayFactOne(); 
  });
  $(".lemon-slice").click(function (){
	if(clicked === 0)
	  displayFactOne();
	else
	  displayFact();
  });
});
   
var displayFactOne = function (){
  $("#why2").fadeOut();
  $("#why3").delay(400).fadeIn();
  setTimeout( function (){
     $(".wrapper").addClass("wrapper-move");
     $(".lemon-slice").addClass("lemon-rotate");
     clicked++;
	}, 1500); 

  $("#buffer").delay(200).fadeIn();
  $("#fact").delay(2000).fadeIn();
};

var displayFact = function(){
  if(onLeft){
	$(".lemon-slice").addClass("lemon-rotate-right");
	$(".wrapper").addClass("wrapper-move-right");
	$(".lemon-slice").removeClass("lemon-rotate-left");
	$(".wrapper").removeClass("wrapper-move-left");
  }
  else{
    $(".lemon-slice").addClass("lemon-rotate-left");
    $(".wrapper").addClass("wrapper-move-left");
	$(".lemon-slice").removeClass("lemon-rotate-right");
	$(".wrapper").removeClass("wrapper-move-right");
  }
  onLeft= !onLeft;
};
