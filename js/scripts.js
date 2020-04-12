function name(firstName,secondName){
  this.firstName = firstName;
  this.secondName = secondName;
}
var name = new name()

function small() {
  $(".size3").show(500);

  size = parseInt($("#small").val());

  $(".sizesView").text("Small (Ksh " + size + ")");
}