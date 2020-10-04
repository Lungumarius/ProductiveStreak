$( document ).ready(function() {

	$( "#register" ).on( "click", function(event) {
		event.preventDefault();
		$("#changeform").empty();
		$("#changeform").load("register.html");
		console.log("stabbed you");
});

	$( "#changeform" ).on( "click", "#login", function(event) {
		event.preventDefault();
		$("#changeform").empty();
		$("#changeform").load("login.html");
		console.log("stabbed you");
});
	$( "#changeform" ).on( "click", "#register2", function(event) {
		event.preventDefault();
		$("#changeform").empty();
		$("#changeform").load("register.html");
		console.log("stabbed you");
});
    
});

