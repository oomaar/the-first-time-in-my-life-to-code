// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

// $("h1").css("color", "blue");
// $ is refering to document.querySelector

// jQuery("h1").css("color", "yellow");

// $("h1").text("bye");

// $("button").html("<em>don't click me</em>");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

// $(document).keypress(function(event) {
//     $("h1").html(event.key);
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ margin: "20%" });
});