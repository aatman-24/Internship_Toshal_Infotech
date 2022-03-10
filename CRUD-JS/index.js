// Return the key.
function getKey() {
    
    // first Name
    var firstName = document.getElementById("first_name").value;
    if(firstName == "") {
        alert("First Name is not specified")
        return -1;
    }

    // last name
    var lastName = document.getElementById("last_name").value; 
    if(lastName == "") {
        alert("Last Name is not specified")
        return -1;
    }

    // key = firstName + lastName.
    return firstName + lastName;
}


function getData() {
    
    var key = getKey();

    // No key found.
    if(key == -1)
        return;

    var data = window.localStorage.getItem(key);
    if(data == null) {
        alert("No data Found");
        return;
    }
    
    // Extract the Person object.
    var Person = JSON.parse(data);

    // set the value of all field.
    document.getElementById("first_name").value = Person.firstName;
    document.getElementById("last_name").value = Person.lastName;
    document.getElementById("nation").value = Person.nationality;
    document.getElementById("mail").value = Person.mail;
    document.getElementById("dob").value = Person.dob;
    document.getElementById("male").checked = Person.gender == "male" ? true: false;
    document.getElementById("female").checked = Person.gender == "female" ? true: false;
    document.getElementById("mob").value = Person.mobile;
    document.getElementById("otp").value = Person.otp;
    document.getElementById("pass").value = Person.password;
    document.getElementById("cpass").value = Person.confirmPassword;
}



// Delete data from the local storage
function deleteData() {
    var key = getKey();
    if(key == -1)
        return;

    var data = window.localStorage.getItem(key);
    if(data != null) {
        window.localStorage.removeItem(key);
        alert("Data deleted Successfully!");
    }
    else {
        alert("No data Found");
    }
}



// update the data in local storage.
function updateData() {

    var key = getKey();
    if(key == -1)
        return;

    var data = window.localStorage.getItem(key);
    if(data == null) {
        alert("No data Found");
    }


    saveData();
}



// save the data in local stoarage.
function saveData() {

    // first Name
    var firstName = document.getElementById("first_name").value;
    if(firstName == "") {
        alert("First Name is not specified")
        return;
    }

    // last name
    var lastName = document.getElementById("last_name").value; 
    if(lastName == "") {
        alert("Last Name is not specified")
        return;
    }

    // nationality, mail, dob
    var nationality = document.getElementById("nation").value;
    var mail = document.getElementById("mail").value;
    var dob = document.getElementById("dob").value;

    
    // gender
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if(male == false && female == false) {
        alert("Gender is not specified")
        return;
    }

    // mobilenumber and otp.
    var mobileNumber = document.getElementById("mob").value;
    if(mobileNumber.length != 10) {
        alert("Mobile Number must be 10 digits.");
        return;
    } 

    var otp = document.getElementById("otp").value;
    if(otp.length != 6) {
        alert("OTP  must be 6 digits.");
        return;
    }

    // password and confirmpassowrd.
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cpass").value;

    if(password == "") {
        alert("Password is not found.")
        return;
    }

    if(password != confirmPassword) {
        alert("Password is not match with confirm password.")
        return;
    }

    // Create Person object.
    var Person = {
        'firstName' : firstName,
        'lastName' : lastName,
        'nationality' : nationality,
        'mail' : mail,
        'dob' : dob,
        'gender' : (male) ? "male" : "female",
        "mobile" : mobileNumber,
        "otp" : otp,
        "password" : password,
        "confirmPassword":confirmPassword
    }

    // Convert into string.
    var person_string = JSON.stringify(Person);

    // Save into the local storage using key = firstName + lastName
    var key = firstName + lastName;

    console.log(key);

    window.localStorage.setItem(key, person_string);

    alert('Data Saved!');
}