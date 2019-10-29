// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var newdevourState = {
      devoured: true,
      toGo: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".togo").on("click", function(event) {
    var id = $(this).data("id");

    var readyState = {
      toGo: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: readyState
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".order-another").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "GET"
    }).then(function(data) {
      var newBurger = {
        burger: data[0].burger,
        toGo: $("[name=toGo]:checked")
          .val()
          .trim()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#ca")
        .val()
        .trim(),
      toGo: $("[name=toGo]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
