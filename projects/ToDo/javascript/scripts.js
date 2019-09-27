//Function that is executed when the button is clicked

function calculateTip(){
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount)

    var serviceQuality = document.getElementById("serviceQuality").value;
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("people").value;
    console.log(numberOfPeople);

    var amount = Number(billAmount);
    if (isNaN(amount)){
        alert("Invalid input for bill amount");
        return; 
    }
    var service = Number(serviceQuality);

    if (service === 0){
        alert("You must pick an option for service quality.");
        return;
    }
    
    var people = Number(numberOfPeople);

    if (isNaN(people) || people < 1){
        alert("Invalid input for Number of People");
        return;
    }
    var tipPerPerson = (amount * service) / people;
    tipPerPerson = tipPerPerson.toFixed(2);//Rounds decimal to 2 decimal points
    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tip").innerText = tipPerPerson;
}




document.getElementById("calculateTip").onclick = function(){
    calculateTip();
}

//This is an anonymous function which is a function without a name