function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	
	error_message.style.padding = "10px";
	
	if(name.length <5){
		text = "Please enter valid name."
		error_message.innerHTML = text;
		return false;
	}
	
	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Please enter valid E-mail."
		error_message.innerHTML = text;
		return false;
	}
	
	if(message.length <= 8){
		text = "Please enter more characters in message."
		error_message.innerHTML = text;
		return false;
	}
	
	alert("E-mail has been sent!")
	return true;
}