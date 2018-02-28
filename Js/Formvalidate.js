

function validateForm() {

var valid=true;
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        document.getElementById("error").innerHTML +="* FirstName is required <br>";
		valid = false;
    }
	var y = document.forms["myForm"]["lastname"].value;
    if (y == "") {
        document.getElementById("error").innerHTML +="* LastName is required <br>";
        valid = false;
    }
	var a = document.forms["myForm"]["street"].value;
	if (a == "") {
        document.getElementById("error").innerHTML +="* street is required <br>";
        valid = false;
    }
	var b = document.forms["myForm"]["city"].value;
	if (b == "") {
        document.getElementById("error").innerHTML +="* city is required <br>";
        valid = false;
    }
	

	var c = document.forms["myForm"]["zipcode"].value;
	if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(c)) 
	{
        valid=true;
    }
	else {
	document.getElementById("error").innerHTML +="* zipcode is invalid <br>";
		valid = false;
	}
	
	var d = document.forms["myForm"]["number"].value;
	if (/^\d{10}$/.test(d)) 
	{
		valid=true;
    }
	else {
	document.getElementById("error").innerHTML +="* phone number is invalid <br>";
		valid = false;
	}
	
	var e = document.forms["myForm"]["email"].value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))
	{
		valid = true;
    }
	else {
	document.getElementById("error").innerHTML +="* Email id is invalid <br>";
		valid = false;
	}
	if(document.getElementById('contact').selectedIndex == 0)
		{
			document.getElementById("error").innerHTML +="* Reason is required <br>";
			valid= false;
		}
	if(document.getElementById('state').selectedIndex == 0)
{
			document.getElementById("error").innerHTML +="* state is required <br>";
			valid=false;
}
	document.getElementById('error').scrollIntoView(true);;
	return valid;
}
