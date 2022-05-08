var enterButton = document.getElementById("enterButton");
var output = document.getElementById("output");
var number = Math.floor(Math.random() * 100);


enterButton.addEventListener('click', function() {
  var input = document.getElementById("input").value;
  if (input == number) {
    output.innerHTML = " 🚩You guessed right, it was " + number;
    output.style.color = "#68A7AD";

  } else if (input > number) {
    output.innerHTML = "You guessed too high";

  } else if (input < number) {
    output.innerHTML = "You guessed too low";

  } else if (isNaN(input)) {
    output.innerHTML = "That's not a number!";

  }
});

//  }  else if (isNaN (input)) {
//    output.innerHTML= "That's not a number!";
