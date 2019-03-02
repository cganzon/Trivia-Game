var answers = ["Gotham", "Deadpool", "Kara Zor-El", "Peter Parker", "Green Lantern"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 30;
// Declaring interval variable 
var interval;

// Hides Done! button and questions div initially
$("#questions").hide();
$("#done").hide();

// When the user clicks the start button, the timer starts
$("#start").on("click", run);
$("#done").on("click", done);

// Function to decrease counter by 1 every second
function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
    $("#timerBox").html('<p>Time remaining: <span id="timer">30</span> seconds</p>');
    $("#questions").show();
    $("#done").show();

}

// Decreases counter by 1
function decrement() {
    counter--;
    $("#timer").text(counter);
    if (counter === 0) {
        done();
        alert("Time's Up!");
    }
}
//  Function to show the user's scores
function done() {
    clearInterval(interval);
    counter = 30;
    $("#done").hide();
    $("#timer").text(counter);
    $("#questions").empty();
    $("#questions").append("<p> Correct: " + correct + "</p>");
    $("#questions").append("<p> Incorrect: " + incorrect + "</p>");
    $("#questions").append("<p> Unanswered: " + unanswered + "</p>");
}

// Function to check user's answers with answers array



