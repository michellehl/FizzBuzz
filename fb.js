$(document).ready(function() {
for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0){
		//console.log("fizzbuzz")
		$("h3").append("fizzbuzz" + "<br/>");
	
	}
	 else if (i % 3 == 0 && i % 5 != 0){
	 //	console.log("fizz");
	 	$("h3").append("fizz" + "<br/>");
	 }
	 else if (i % 3 != 0 && i % 5 == 0) {
	// 	console.log("buzz")
	 	$("h3").append("buzz" + "<br/>");
	 }
	 else {
	// 	console.log(i);
	 	$("h3").append(i + "<br/>");
	 }
}
})