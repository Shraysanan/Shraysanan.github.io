$(document).ready(function() {
TweenLite.to(needle, 2, {rotation:-31,  transformOrigin:"bottom right"});
	$("input[type='text']").on("click", function () {
	   $(this).select();
	});
	$('#kilometers').keyup(function() { 
		var km = $(this).val();
		var	kmNum = parseInt(km);
		if ( (km <= 195) && !isNaN(kmNum) ){
            var speedkm = kmNum * 2 - 31;	
            $('#numbers').css('text-align', 'center');  
            $('#kilometers').val(km);	
            $('#numbers').html(kmNum.toFixed(0)); 
            $('#km').html('Kmph');
	   } else if (!isNaN(kmNum)){ 
	   		var speedkm = 215;
	   		$('#numbers').css('text-align', 'right');
	   		$('#kilometers').val(km);	
            $('#numbers').html(kmNum.toFixed(0)); 
            $('#km').html('Kmph');  	
	   } else { 
	   		$('#kilometers').val('');
	   		$('#numbers').html('');	
	   		$("#errmsg").html("Numbers Only").show().fadeOut(2000);
	   }
	
		var needle = $("#needle");    
		TweenLite.to(needle, 2, {rotation:speedkm,  transformOrigin:"bottom right"});
	});
});