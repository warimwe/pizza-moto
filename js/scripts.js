// Business Logic

function totalPrice(size, crust, toppingsArray, delivery, number) {
  var total = 0;
  if (size === "regular") {
    total += 500;

    // Check crusts
    if (crust === "thin") {
      total += 100;
    } else if (crust === "thick") {
      total += 150;
    } else if (crust === "deep") {
      total += 200;
    }

    // Check toppings
    if (toppingsArray.includes("cheese")) {
      total += 50;
    }
    if (toppingsArray.includes("artichokes")) {
      total += 60;
    }
    if (toppingsArray.includes("mushrooms")) {
      total += 55;
    }
    if (toppingsArray.includes("mozzarella")) {
      total += 65;
    }
    if (toppingsArray.includes("bacon")) {
      total += 70;
    }
    if (toppingsArray.includes("pepperoni")) {
      total += 80;
    }

    // Check number
    total *= number;

    // Check delivery
    if (delivery) {
      total += 120;
    }

    console.log(total);

    return total;
  } else if (size === "medium") {
    total += 800;

    // Check crusts
    if (crust === "thin") {
      total += 150;
    } else if (crust === "thick") {
      total += 200;
    } else if (crust === "deep") {
      total += 250;
    }

    // Check toppings
    if (toppingsArray.includes("cheese")) {
      total += 60;
    }
    if (toppingsArray.includes("artichokes")) {
      total += 70;
    }
    if (toppingsArray.includes("mushrooms")) {
      total += 65;
    }
    if (toppingsArray.includes("mozzarella")) {
      total += 75;
    }
    if (toppingsArray.includes("bacon")) {
      total += 80;
    }
    if (toppingsArray.includes("pepperoni")) {
      total += 90;
    }

    // Check number
    total *= number;

    // Check delivery
    if (delivery) {
      total += 120;
    }

    console.log(total);

    return total;
  } else if (size === "large") {
    total += 1100;

    // Check crusts
    if (crust === "thin") {
      total += 200;
    } else if (crust === "thick") {
      total += 250;
    } else if (crust === "deep") {
      total += 300;
    }

    // Check toppings
    if (toppingsArray.includes("cheese")) {
      total += 70;
    }
    if (toppingsArray.includes("artichokes")) {
      total += 80;
    }
    if (toppingsArray.includes("mushrooms")) {
      total += 75;
    }
    if (toppingsArray.includes("mozzarella")) {
      total += 85;
    }
    if (toppingsArray.includes("bacon")) {
      total += 90;
    }
    if (toppingsArray.includes("pepperoni")) {
      total += 100;
    }

    // Check number
    total *= number;

    // Check delivery
    if (delivery) {
      total += 120;
    }

    console.log(total);

    return total;
  }
}

// Message Constructor
function Message(name, size, flavour, price, location) {
  this.name = name;
  this.size = size;
  this.flavour = flavour;
  this.price = price;
  this.location = location;
}

Message.prototype.addMessageWithDelivery = function () {
  return (
    "Hello " +
    this.name +
    ", your order of a " +
    this.size +
    ", " +
    this.flavour +
    " pizza has been received. You will pay a total of " +
    this.price +
    ". Your order will be delivered to " +
    this.location +
    ".Thank you."
  );
};

Message.prototype.addMessageWithoutDelivery = function () {
  return (
    "Hello " +
    this.name +
    ", your order of a " +
    this.size +
    ", " +
    this.flavour +
    " pizza has been received and will be ready for pick up in 20 minutes. You will pay a total of " +
    this.price +
    ".Thank you."
  );
};

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
    var name = $("input#name").val();
    var flavour = $("select#flavour").find(":selected").val();
    var size = $("select#size").find(":selected").val();
    var crust = $("select#crust").find(":selected").val();
    var toppings = $('input[name="toppings"]:checked');
    var number = $("input#number").val();
    var delivery = $("input#delivery").is(":checked");
    var location = $("textarea#location").val();

    var toppingsArray = [];

    console.log(name);
    console.log(flavour);
    console.log(size);
    console.log(crust);
    console.log(toppingsArray);
    console.log(number);
    console.log(delivery);
    console.log(location);

    toppings.each(function () {
      toppingsArray.push(this.value);
    });

    if (
      name &&
      flavour != "placeholder" &&
      size != "placeholder" &&
      crust != "placeholder" &&
      number
    ) {
      var total = totalPrice(size, crust, toppingsArray, delivery, number);
      if (delivery) {
        var message = new Message(name, size, flavour, total, location);
        $(".modal-body").text(message.addMessageWithDelivery());
      } else {
        var message = new Message(name, size, flavour, total, "no location");
        $(".modal-body").text(message.addMessageWithoutDelivery());
      }
      $("#staticBackdrop").modal("show");
      event.preventDefault();
    } else {
      alert("Fill the order details correctly");
    }
  });

  $(".close-modal").click(function () {
    location.reload();
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
      // $("form").reset();
    } else {
      alert("Please fill the form correctly");
    }
    event.preventDefault();
  });
});
