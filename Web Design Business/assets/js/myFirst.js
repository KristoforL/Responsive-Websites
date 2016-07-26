function light(){
	$(".light").click(function(){
		$("html").css({"color":"black","background-color":"white"});
	})
}
function dark(){
	$(".dark").click(function(){
		$("html").css({"color":"white","background-color":"black"});
	})
}

function startTime() {
	 var today = new Date();
     var h = today.getHours();
	 var m = today.getMinutes();
	 var s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('txt').innerHTML =
	 h + " Hours " + m + " Minutes " + "and counting "+ s;
	 var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
}
function box(){
	('#dialog').dialog();
}