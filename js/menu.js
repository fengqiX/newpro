$(document).ready(function(){
	$(".lmenu li").click(function(){
		var x=$(this).index()+1;
		console.log(x);
		
		$(".rmenu > div").css("display","none");
		
		console.log($(".rmenu > div:nth-child("+x+")").text());
		$(".rmenu > div:nth-child("+x+")").css("display","block");
	});
});