$(document).ready(function(){

    $("#submit").click(function(event){
        event.preventDefault();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var toppings = [];
        $.each($("input[name='toppings']:checked"), function(){
            toppings.push($(this).val());
        });

        var pizzaSize = {
            smallPizza : 450,
            mediumPizza : 750,
            largePizza : 1000,
        };    

        var pizzaCrust = {
            crispyCrust : 100,
            gluttenCrust: 150,
            stuffedCrust : 200,
        };

        var pizzaPrice = (pizzaSize[size])
        var crustPrice = (pizzaCrust[crust])
        var toppingsPrice = toppings.length * 100
        var onePizza = pizzaPrice + toppingsPrice + crustPrice
        
        if(pizzaNumber>1){
            var totalPrice1 = onePizza * pizzaNumber
            alert('Your total Order is '+ totalPrice1 +'KES. Please choose below if you would like your order delivered i.e Extra charges include')
        }  
        else if(pizzaNumber==1){
            var totalPrice1 = onePizza
            alert('Your total Order is '+ totalPrice1 +'KES. Please choose below if you would like your order delivered i.e Extra charges include')
        }
        else{
            alert('Please select number of pizzas you want to order')
        }




    })

    $("#small").on('click',function(){    
        $("#view").append("<li>Small ------ ksh.450</li>");
    });    

    $("#medium").on('click',function(){    
        $("#view").append("<li>Medium ------ ksh.750</li>");
    });

    $("#large").on('click',function(){    
        $("#view").append("<li>Large ------ khs.1000</li>");
    });

    $("#glutten").on('click',function(){    
        $("#view").append("<li>Glutten free ------ ksh.150</li>");
    });

    $("#crispy").on('click',function(){    
        $("#view").append("<li>Crispy ------ ksh.100</li>");
        });

    $("#stuffed").on('click',function(){    
        $("#view").append("<li>Stuffed ------ ksh.200</li>");
    });

    $("#cheese").on('click',function(){    
        $("#view").append("<li>Cheese ------ ksh.100</li>");
    });

    $("#chili").on('click',function(){    
        $("#view").append("<li>Chili ------ ksh.100</li>");
    });

    $("#pepperoni").on('click',function(){    
        $("#view").append("<li>Pepperoni ------ ksh.100</li>");
    });

    $("#deliver").on('click',function(){    
        $("#view").append("<li>Delivery ------ ksh.100</li>");
    });

    
});


function deliver(){
    swal("Enter your location e.g Nairobi, Karen, House 25:", {
        content: "input",
        })
        .then((value) => { 
        swal(`Your order will be delivered to: ${value}`, { 
        });
    });
};
        
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
    
