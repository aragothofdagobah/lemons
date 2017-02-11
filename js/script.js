var facts = [
  "Lemons are technically berries.", 
  "Historians believe that lemons have been around since the first century A.D.",
  "It is believed that they cultivated from the Mediterranean.",
  "There are three common lemons which are Bearss, Eureka, and Lisbon.",
  "Lemon trees can produce up to 600 pounds in a year and can grow up to 20 feet tall.",
  "California and Arizona produce 95% of the entire lemon crop.",
  "Today, the British Navy requires all ships to carry enough lemons so that every sailor can have an ounce of juice a day.",
  "An average lemon contains eight seeds.",
  "An average lemon holds three tablespoons of juice. ",
  "The juice of a lemon contains 5% of citric acid.",
  "There are roughly fifteen calories in each lemon.",
  "Sprinkling the juice on other fruits can prevent them turning brown.",
  "Lemon juice and hot water is good for a sore throat as it is anti-bacterial.",
  "Lemons used to be so rare that kings used to present them to each other as gifts.",
  "During the California Gold Rush in 1849, miners were willing to pay huge amounts of money for a single lemon.",
  "During the Renaissance, ladies used the juice of a lemon to redden their lips.",
  "For natural highlights in your hair, apply lemon juice daily, for a week.",
  "Wealthy Victorians grew lemons trees in their homes as a sign of prestige and to be a fragrant.",
  "In February and March, Menton in the French Riviera celebrates an annual lemon festival.",
  "Lemon oil is used in unsealed rosewood fingerboards of stringed instruments.",
  "They are high in vitamin C.",
  "They can prevent scurvy.",
  "To power a flashlight bulb, you need 500 wired lemons to conduct electricity.",
  "The heaviest lemon was 11 pounds, 9.7 ounces in 2003.",
  "Lemon was a common unisex name in the 1900’s."
];
var width = $(window).width();
var height = $(window).height();
var clicked = 0;
var factNum = 0;
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
      location.reload();
  });
  $(".lemon-slice").click(function (){
	if(clicked === 0)
	  displayFactOne();
	else
	  moveLemon();
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
  $("#fact").delay(2400).fadeIn();
};

var moveLemon = function(){
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
  displayFact();
};

var displayFact = function(){
  var fact = factNum != facts.length ? facts[factNum] : "Please Click the lemon to reset";
  $("#fact").delay(800).fadeOut();
 setTimeout( function (){  
    $("#fact").empty();
    $("#fact").text(fact);
    $("#fact").fadeIn();
    factNum++;
 }, 2700);
};
