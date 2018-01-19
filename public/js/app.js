// $(function () {
//   $(".devour").on("click", function(){
//     event.preventDefault();
//     console.log("Devour clicked");
//     var id = $(this).data("id");
//     console.log(id);
//     $.ajax("/api/burgers/" + id, {
//         type: "PUT"
//       }).then(
//         function() {
//           console.log("Burger eaten.");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//   });

//   $("#add").on("click", function(){
//     event.preventDefault();
//     console.log("Submit Burger Clicked");
//     var newBurger = $("#burgerName").val().trim();
//     $.ajax("/api/burgers", {
//         type: "POST",
//         data: {burgerName:newBurger}
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//   });
// })