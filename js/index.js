$(document).ready(function(){
	
	$("#part2").hide();
  $("#bt1").click(function(){
    $("#part1").hide();
		$("#part2").show();
 });
	
	$("#bt1").dblclick(function(){
		$("#part1").show();
		$("#part2").hide();
	});
	
	$("#p1").hide();
	
	$("#bt2").click(function(){
  $("#p1").fadeToggle();
	});
	
	$(".sub-menu").hide();
	
	  //Submenu
  $('.dropdown').on('click', function() {
    $(this).children('.sub-menu').slideToggle(1);
    //$('body').append('<div id="hide"></div>');
  });

  //Stop from hiding when clicking on input and adding classes
  $('btn .sub-menu').click(function(e) {
    e.stopPropagation();
    $(this).focus();
  });

	$("#text1").hide();
	$("#text2").hide();
	
	$("#op1").click(function(){
  $("#text1").fadeIn();
		$("#text2").hide();
	});
	
	$("#op2").click(function(){
  $("#text2").fadeIn();
		$("#text1").hide();
	});
	
});