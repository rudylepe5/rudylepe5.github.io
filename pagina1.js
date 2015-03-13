
$(".imagen").hover(
	function(){
		$(".cool").css("visibility","visible");
	}, function(){
		$(".cool").css("visibility","hidden");
	}
);
$(document).ready(function(){ 

	var n = $(document).width();

	if (n > 500) {
		$("#video").css("width","970px").css("height","600px");
		$(body).css("background-color","pink");
	} 
	else {
		$("#video").css("width","100px").css("height","100px");
	}

});

