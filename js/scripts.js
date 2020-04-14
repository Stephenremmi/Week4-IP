function pizza(pizzaSize,pizzaCrust,pizzaToppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
}



var small = document.getElementById("small").checked;
var large = document.getElementById("large").checked;
var medium = document.getElementById("medium").checked;
var crispy = document.getElementById("crispy").checked;

var smallValue = parseInt(small);
var mediumValue = medium;
var largeValue = parseInt(large);
var crispyValue = parseInt(crispy);

var smallValue = 450;
var mediumValue = 750;
var largeValue = 1000;
var crispyValue = 100;

function tt(){
    if(small.checked === true && crispy.checked === true){
        alert("hello");
    }
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
    document.getElementById("crust1").innerHTML = "Crispy ------ ksh.100";
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