// bug: isNaN will treat * & ^ % ... as valid characters
// create functions
// use regex

//alert("main.js");

/*
var errorFlag = function(errorNum) {
	switch (errorNum) {
		case 1: // phone number 
		break;
		case 2: // birth date 
		break;
		case 3:  // state 
		break;
		case 4: // zip code 
		break;
		default:
		break;
	}
}
*/

// validate user phone number
var userPhoneNumber = prompt("Enter Your Phone Number: ", "Enter xxx-xxx-xxxx format");

var errorPhoneFlag = false;

// validate the entered phone number 
for (var i=0; i<12; i++) {
	if (userPhoneNumber.length < 12)
	{	
		//alert("Error Length: Your Number is invalid.");
		errorPhoneFlag = true;
		break;
	}	
	
	if ((i===3) || (i===7)) {
		if (userPhoneNumber.charAt(i) !== "-") {
			//alert("Error -: Your Number is invalid."); 
			errorPhoneFlag = true;
			break;
		}	
	} else {
		if (isNaN(userPhoneNumber.charAt(i))) {			
			//alert("Error Number " + i + ": Your Number is invalid.");
			errorPhoneFlag = true;
			break;
		}
	}
	
}
if (errorPhoneFlag === false)
	alert("Your Phone Number is " + userPhoneNumber);
else
	alert("Your Phone Number is invalid");

// validate user birth date
var errorBirthFlag = false;
var userBirthDate = prompt("Enter Your Bith Date","Enter MM/DD/YY format");

for (var i=0; i<8;i++) {
	if ((i===2) || (i===5)) {
		if (userBirthDate.charAt(i) !== "/") {
			errorBirthFlag = true;
			break;	
		}
	} else {	
		if (isNaN(userBirthDate.charAt(i))) {
			errorBirthFlag = true;
			break;
		}
	}	
}

if (errorBirthFlag === false)
	alert("Your Birth Date is " + userBirthDate);
else
	alert("Your Birth Date is invalid");

// validate postal code
var errorPostalFlag = false;
var userPostalCode = prompt("Enter Your Postal Code","Enter xxxxx or xxxxx-xxxxx format");

for (var i=0; i<11; i++) {
	if (userPostalCode.length === 5) {
		if (isNaN(userPostalCode.charAt(i))) {
			errorPostalFlag = true;
			break;
		}	
	}
	
	if (userPostalCode.length === 11) {
		if (userPostalCode.charAt(5) != "-") {
			console.log(userPostalCode.charAt(5));
			errorPostalFlag = true;
			break;
		} else {
			if (isNaN(userPostalCode.charAt(i))) {
				errorPostalFlag = true;
				break;
			}
		}
	}
}

if (errorPostalFlag === false) 
	alert("Your Postal Code is " + userPostalCode);
else
	alert("Your Postal Code is invalid");

// validate state abbreviation
var errorStateFlag = false;
var userState = prompt("Enter Your State", "ENTER ALL CAPS");

for (var i=0; i<2; i++) {
	if (userState.length == 2) {
		if (isNaN(userState.charAt(i))) {
			//console.log(userState.charAt(i));
			errorStateFlag = false;
		} else {
			errorStateFlag = true;
			break;
		}
	}
}

if (userState.toUpperCase() === userState) 
	errorStateFlag = false;
else
	errorStateFlag = true;

if (errorStateFlag === false) 
	alert("Your State is " + userState);
else
	alert("Your State is invalid");

// validate married
var errorMarriedFlag = false;
var userStatus = prompt("Are You Married?", "Answer Yes or No");

if (userStatus.toUpperCase() === "YES" || userStatus.toUpperCase() === "NO") {
	if (userStatus.toUpperCase() === "YES")
		alert("You are married.");

	if (userStatus.toUpperCase() === "NO") 
		alert("You are single.");
} else {
	erroMarriedFlag = true;
}

if (errorMarriedFlag === true) 
	alert("Your enter an invalid answer.");



