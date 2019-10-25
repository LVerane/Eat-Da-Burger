// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(function() {
      console.log("changed devour to", newdevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#ca")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //added delete stuff
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    console.log("button id = " + id);
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger " + id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
