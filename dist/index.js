"use strict";
var submitForm = (e) => {
    e.preventDefault();
    console.log("Hello");
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var addressLine1 = document.getElementById("line1").value;
    var addressLine2 = document.getElementById("line2").value;
    var state = document.getElementById("state").value;
    var postalCode = document.getElementById("postalCode").value;
    var isValid = true;
    if (isValid) {
        console.log({
            FirstName: firstName,
            LastName: lastName,
            MailID: mail,
            Contact: contactNumber,
            Gender: gender,
            DateOfBirth: dob,
            AddressLine1: addressLine1,
            AddressLine2: addressLine2,
            State: state,
            PostalCode: postalCode,
        });
    }
};
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitForm);
//# sourceMappingURL=index.js.map