$(document).ready(function () {
  $("form#order").submit(function (event) {
    event.preventDefault();
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
