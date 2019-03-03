var answers = [
    {
        question: "one",
        answer: "Gotham"
    },
    {
        question: "two",
        answer: "Deadpool"
    },
    {
        question: "three",
        answer: "Kara Zor-El"
    },
    {
        question: "four",
        answer: "Peter Parker"
    },
    {
        question: "five",
        answer: "Green Lantern"
    }
];
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
    $("#start").hide();
    $("#timerBox").hide();
    $("#done").hide();
    $("#timer").text(counter);
    $("#questions").empty();
    $("#questions").append("<p> Correct: " + correct + "</p>");
    $("#questions").append("<p> Incorrect: " + incorrect + "</p>");
    $("#questions").append("<p> Unanswered: " + unanswered + "</p>");
}

// Checks user's answers with answers array
$(document).on("click", ".options", function () {
    for (var i = 0; i < answers.length; i++) {
        // Checking if the name attribute html matches question property in answers array
        if (this.name === answers[i].question) {
            console.log("Question " + this.name);
            if (this.value === answers[i].answer) {
                console.log("Correct!");
                correct++;
            } else {
                console.log("Wrong!");
                incorrect++;
            }
            unanswered = answers.length - (correct + incorrect);
            console.log("Unsanswered " + unanswered);
        }
    }
});

// Note: above code to check answers only works as expected if user only selects one option per question. The click function must be changed since it increments the scores each time an option is clicked. If a user changes options multple times for one question, the scores will change each time. Also, the unanswered questions can go into  the negatives with how I have the code wriiten. This will be updated in the future.


