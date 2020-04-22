function save() {
    var firstName = document.getElementById("name").value;
    var secondName = document.getElementById("name2").value;
    var  phoneNumber= document.getElementById("number").value;
    var emailAddress = document.getElementById("email").value;
    

    if (firstName == "") {
      alert("First name must be filled out");
      return false;
    }

    if (secondName == "") {
    alert("Second name must be filled out");
    return false;
    }

    if (phoneNumber == "") {
    alert("Phone number must be filled out");
    return false;
    }

    if (emailAddress == "") {
    alert("Email address must be filled out");
    return false;
    }
}




function pizza(pizzaSize,pizzaCrust,pizzaToppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
}


function small(){
   document.getElementById("size1").innerHTML = "Small ------ ksh.450";
}
function medium(){
    document.getElementById("size2").innerHTML = "Medium ------ ksh.750";
}
function large(){
    document.getElementById("size3").innerHTML = "Large ------ khs.1000";
}
function crispy(){
    document.getElementById("crust2").innerHTML = "Crispy ------ ksh.100";
}
function stuffed(){
    document.getElementById("crust2").innerHTML = "Stuffed ------ ksh.200";
}
function glutten(){
    document.getElementById("crust3").innerHTML = "Glutten free ------ ksh.150";
}
function chili(){
    document.getElementById("toppings1").innerHTML = "Chili ------ ksh.100";
}
function cheese(){
    document.getElementById("toppings2").innerHTML = "Cheese ------ ksh.100";
}
function pepperoni(){
    document.getElementById("toppings3").innerHTML = "Pepperoni ------ ksh.100";
}
function deliver(){
    swal("Enter your location e.g Nairobi, Karen, House 25:", {
        content: "input",
      })
      .then((value) => {

    
        swal(`Your order will be delivered to: ${value}`, {
       
        });
 
    document.getElementById("deliverfee").innerHTML = "Delivery ------ ksh.100";

});
}

