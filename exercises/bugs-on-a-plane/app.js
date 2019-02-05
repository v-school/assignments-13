// var form = document.getElementById(airlineForm);
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = airlineForm.firstName.value;
    var lastName = airlineForm.elements["lastName"].value;
    var age = airlineForm.elements["age"].value;
    var gender = airlineForm.elements["gender"].value;
    var location = airlineForm.elements["travel-location"].value;
    var diet = [];
    if (airlineForm.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (airlineForm.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (airlineForm.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
