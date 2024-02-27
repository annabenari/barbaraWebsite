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

function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (fname === "" || lname === "" || email === "" || message === "") {
    alert("You can only submit if all fields are filled out");
  } else {
    document.getElementById("myForm").submit();
  }
}
