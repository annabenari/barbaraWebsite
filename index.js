$(document).ready(function () {
  $(".hover-area").click(function () {
    $(this).find(".reveal").slideToggle(300);
  });
});

function myFunction() {
  console.log("Hamburger menu clicked!"); // Add this line for debugging
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
