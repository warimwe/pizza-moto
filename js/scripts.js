// Business Logic

function order(size, price, crust, toppings, delivery) {
  this.size = size;
  this.price = price;
  this.crust = crust;
  this.toppings = toppings;
  this.delivery = delivery;
}

function crust(name, price) {}

// if (order.size==='large') {
//   order.price=
// }

// UI Logic
$(document).ready(function () {
  $("#loc").hide();
  $("#delivery").click(function () {
    if ($(this).is(":checked")) {
      $("#loc").show(300);
    } else {
      $("#loc").hide(200);
    }
  });
  $("form#order").submit(function (event) {
    event.preventDefault();
    var name = $("input#name").val();
    var flavour = $("select#flavour").find(":selected").text();
    var size = $("select#size").find(":selected").text();
    var crust = $("select#crust").find(":selected").text();
    var toppings = $('input[name="toppings"]:checked');
    var number = $("input#number").val();
    var delivery = $("input#delivery").val();
    var location = $("textarea#location").val();

    console.log("Name:" + name);
    console.log("Flavour:" + flavour);
    console.log("Size:" + size);
    console.log("Crust:" + crust);
    console.log("Toppings:" + toppings.serialize());
    console.log("Number:" + number);
    console.log("Delivery:" + delivery);
    console.log("Location:" + location);
  });

  $("form#contact").submit(function (event) {
    var name = $("input#contact-name").val();
    var comments = $("textarea#comments").val();

    console.log(name + comments);

    if (name && comments) {
      alert(
        "Hey " +
          name +
          ", we have received your message. Thank you for reaching out to us."
      );
      $("form").reset();
    } else {
      alert("Please fill the form correctly");
    }
    event.preventDefault();
  });
});
