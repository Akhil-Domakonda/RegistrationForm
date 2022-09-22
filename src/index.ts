var submitForm = (e:any) => {
    e.preventDefault();
    console.log("Hello");
    var firstName = (document.getElementById("fname") as HTMLInputElement).value;
    var lastName = (document.getElementById("lname") as HTMLInputElement).value;
    var mail = (document.getElementById("mail") as HTMLInputElement).value;
    var contactNumber = (document.getElementById("contactNumber") as HTMLInputElement).value;
    var gender = (document.getElementById("gender") as HTMLInputElement).value;
    var dob = (document.getElementById("dob") as HTMLInputElement).value;
    var addressLine1 = (document.getElementById("line1") as HTMLInputElement).value;
    var addressLine2 = (document.getElementById("line2") as HTMLInputElement).value;
    var state = (document.getElementById("state") as HTMLInputElement).value;
    var postalCode = (document.getElementById("postalCode") as HTMLInputElement).value;
    var isValid = true;
  
    if(isValid){
        console.log({
            FirstName:firstName,
            LastName:lastName,
            MailID:mail,
            Contact: contactNumber,
            Gender:gender,
            DateOfBirth:dob,
            AddressLine1:addressLine1,
            AddressLine2:addressLine2,
            State:state,
            PostalCode:postalCode,
        });
    }
  };
  
  var submitButton = document.getElementById("submit") as HTMLButtonElement;
  submitButton.addEventListener("click", submitForm);