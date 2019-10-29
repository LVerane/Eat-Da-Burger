// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    // var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: true,
      toGo: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(function() {
      console.log("changed devour to", newdevourState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".togo").on("click", function(event) {
    var id = $(this).data("id");
    // var newdevour = $(this).data("newdevour");

    var readyState = {
      toGo: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: readyState
    }).then(function() {
      console.log("changed devour to", readyState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //
  $(".order-another").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "GET"
    }).then(function(data) {
      var newBurger = {
        burger: data[0].burger,
        toGo: $("[name=toGo]:checked")
          .val()
          .trim()
      };

      // newBurger.toGo = $("[name=toGo]:checked")
      //   .val()
      //   .trim();
      // console.log(newBurger);

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  //

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

  // $(".fa-star").on("click", function(event) {
  //   var id = $(this).data("id");
  //   var rating = $(this).data("rating");
  //   console.log(rating);
  //   console.log(id);
  // });
});
