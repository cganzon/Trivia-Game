var qA = [
    {
        q: "Can red be blue?",
        a: "No?"
    },
    {
        q: "How many wheels does a bicycle have?",
        a: "I agree"
    },
    {
        q: "Is water wet?",
        a: "Sometimes"
    },
];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 30;
// Declaring interval variable and
var interval;

// When the user clicks the start button, the timer starts
$("#start").on("click", run);
$("#done").on("click", done);

// Function to decrease counter by 1 every second
function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
    $("#hidden").empty();
    $("#hidden").html('<p>Time remaining: <span id="timer">30</span> seconds</p>');
    for (var i = 0; i < qA.length; i++) {
    $("#hidden").append("<p>" + qA[i].q + "</p>");
    }
}

function decrement() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
        done();
        alert("Time's Up!");
    }     
}

function done() {
    clearInterval(interval);
    counter = 30;
    $("#timer").text(counter);
    $("#hidden").empty();
    $("#hidden").append("<p> Correct: " + correct + "</p>");
    $("#hidden").append("<p> Incorrect: " + incorrect + "</p>");
    $("#hidden").append("<p> Unanswered: " + unanswered + "</p>");
}


