$(document).ready(function(){
// 		$("img").hide();
// 		$("img:first").show();
// 		setInterval(function(){
// 			// alert(1);
// 			$("img:first").fadeOut(2000).next().fadeIn(2000).end().appendTo(".banner");
// 		},3000)

	$(".blackbox").hide();

	$(".pro_img").mouseenter(function(){
		$(this).children(".blackbox").fadeIn(1000);

	})

	$(".pro_img").mouseleave(function(){
		$(this).children(".blackbox").fadeOut(1000);
	})
	


	//menu list tab
	$(".menu_list_contents").hide();
	// $(".menu_list_contents:first").show();

	$(".menu_list li").mouseenter(function(){
		position = $(this).index();
		// alert(position);
		$(".menu_list_contents").hide();
		$(".menu_list_contents").eq(position).slideDown(500);
	})
	$(".menu_list li").mouseleave(function(){
		position = $(this).index();
		// alert(position);
		$(".menu_list_contents").hide();
		$(".menu_list_contents").eq(position).slideUp(500);
	})
	// tab examples
 	
 })
