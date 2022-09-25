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

  var required=document.getElementById("required") as HTMLDivElement

  var firstName=document.getElementById("fname") as HTMLInputElement
  var lastName=document.getElementById("lname") as HTMLInputElement
  var mail = (document.getElementById("mail") as HTMLInputElement)
  var contactNumber = (document.getElementById("contactNumber") as HTMLInputElement)
  var gender = (document.getElementById("gender") as HTMLInputElement)
  var dob = (document.getElementById("dob") as HTMLInputElement)
  var addressLine1 = (document.getElementById("line1") as HTMLInputElement)
  var addressLine2 = (document.getElementById("line2") as HTMLInputElement)
  var state = (document.getElementById("state") as HTMLInputElement)
  var postalCode = (document.getElementById("postalCode") as HTMLInputElement)

  var addMessage=(id:string,requiredId:string,message:string)=>{
    var required=document.getElementById(requiredId) as HTMLElement
    var inputField=document.getElementById(id) as HTMLInputElement
    required.innerHTML=message
    required.style.display="block"
    inputField.style.borderColor="red"
    inputField.style.borderWidth="2px"
  }

  var removeMessage=(requiredId:string)=>{
    var required=document.getElementById(requiredId) as HTMLElement
    required.innerHTML=""
    required.style.display="none"   
  }

  var firstNameErrorHandler=()=>{
    if(firstName.value=="" || firstName.value==" "){
        addMessage("fname","fname-required","Fisrt name cannot be empty or blank space")
    }
    else{
        firstName.style.borderColor="#fff"
        removeMessage("fname-required")
    }
  }

  var lastNameErrorHandler=()=>{
    if(lastName.value=="" || lastName.value==" "){
        addMessage("lname","lname-required","Last name cannot be empty or blank space")
    }
    else{
        lastName.style.borderColor="#fff"
        removeMessage("lname-required")
    }
}

var contactNumberErrorHandler=()=>{
    if(contactNumber.value.length !== 10){
        addMessage("contactNumber","contactNumber-required","Contact number must be 10 digits")
        
    }
    else if (
        /^[6-9]{1}[0-9]{9}$/.test(
            contactNumber.value
        ) === false
      ) {
        addMessage("contactNumber","contactNumber-required","Contact number is not in the right form")
        
      }
    else{
        contactNumber.style.borderColor="#fff"
        removeMessage("contactNumber-required")
    }
 }

firstName.addEventListener("focusout",firstNameErrorHandler)

lastName.addEventListener("focusout",lastNameErrorHandler)

contactNumber.addEventListener("focusout",contactNumberErrorHandler)

 mail.addEventListener("focusout",()=>{
    emailValidation(mail)
 })


 const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const emailValidation = (emailField: HTMLInputElement) => {
    const email = emailField.value;
    if (email.length === 0) {
      addMessage("mail","mail-required","Email is Required");
    //   return false;
    }
    else if (
      email.includes("@") === false ||
      email.includes(".") === false ||
      !validateEmail(email)
    ) {
        addMessage("mail","mail-required","Email must be in valid form")
    //   errorShower(“email”, “Email must be in a valid form”);
      return false;
    }
    else{
        mail.style.borderColor="#fff"
        removeMessage("mail-required")
    }
    // return true;
  };
  
gender.addEventListener("focusout",()=>{
    if(gender.value.length===0){
        addMessage("gender","gender-required","Gender cannot be empty.")
    }
    else{
        gender.style.borderColor="#fff"
        removeMessage("gender-required")
    }
})

dob.addEventListener("focusout",()=>{    
    if(dob.value.length===0){
        addMessage("dob","dob-required","Date of Birth must be provided")
    }
    else{
        dob.style.borderColor="#fff"
        removeMessage("dob-required")
    }
})

addressLine1.addEventListener("focusout",()=>{
    if(addressLine1.value.length<=3){
        addMessage("line1","line1-required","Address Line 1 is invalid")
    }
    else{
        addressLine1.style.borderColor="#fff"
        removeMessage("line1-required")
    }
})

addressLine2.addEventListener("focusout",()=>{
    if(addressLine2.value.length<3){
        addMessage("line2","line2-required","Address line 2 is invalid")
    }
    else{
        addressLine2.style.borderColor="#fff"
        removeMessage("line2-required")
    }
})

state.addEventListener("focusout",()=>{
    if(state.value==="Select"){
        addMessage("state","state-required","state cannot be empty")
    }
    else{
        state.style.borderColor="#fff"
        removeMessage("state-required")
    }
})

postalCode.addEventListener("focusout",()=>{
    if(postalCode.value.length!=6){
        addMessage("postalCode","postalCode-required","Postal Code must be length of 6 ")
    }
    else if(
        /^[1-9]{1}[0-9]{5}$/.test(
            postalCode.value
        ) === false
        
    ){
        addMessage("postalCode","postalCode-required","postal code is not in the correct form")

    }
    else{
        removeMessage("postalCode-required")
    }

})
var resetForm=()=>{
    removeMessage("fname-required")
    removeMessage("lname-required")
    removeMessage("contactNumber-required")
    removeMessage("mail-required")
    removeMessage("gender-required")
    removeMessage("dob-required")
    removeMessage("line1-required")
    removeMessage("line2-required")
    removeMessage("state-required")
    removeMessage("postalCode-required")
}
var resetButton=document.getElementById("reset") as HTMLButtonElement

resetButton.addEventListener("click", resetForm)