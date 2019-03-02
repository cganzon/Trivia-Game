var qA = [
    {
        q: "Batman is home to what fictional city?",
        name: "one",
        options: ["Metropolis", "Gotham", "Midvale"],
        a: "Gotham"
    },
    {
        q: "Which of these superheroes is not from the DC universe?",
        name: "two",
        options: ["The Flash", "Wonder Woman", "Deadpool"],
        a: "Deadpool"
    },
    {
        q: "What is Supergirl's birth name?",
        name: "three",
        options: ["Kara Danvers", "Kara Zor-El", "Kara El-Zor"],
        a: "Kara Zor-El"
    },
    {
        q: "Who is the original Spider Man?",
        name: "four",
        options: ["Peter Parker", "Miles Morales", "Ben Reilly"],
        a: "Peter Parker"
    },
];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 30;
// Declaring interval variable and
var interval;

// Hides Done! button initially
$("#done").hide();

// When the user clicks the start button, the timer starts
$("#start").on("click", run);
$("#done").on("click", done);

// Function to decrease counter by 1 every second
function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
    $("#questions").empty();
    $("#questions").html('<p>Time remaining: <span id="timer">30</span> seconds</p>');
    makeQuestions();
    $("#done").show();

}

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

// Function to generate questions on page
function makeQuestions() {
    for (var i = 0; i < qA.length; i++) {
        $("#questions").append("<p>" + qA[i].q + "</p>");
        $("#questions").append('<input type="radio" name=' + qA[i].name + ' value=' + qA[i].options[0] + '> ' + qA[i].options[0]);
        $("#questions").append('<input type="radio" name=' + qA[i].name + ' value=' + qA[i].options[1] + '> ' + qA[i].options[1]);
        $("#questions").append('<input type="radio" name=' + qA[i].name + ' value=' + qA[i].options[2] + '> ' + qA[i].options[2]);
        console.log(qA[i].name);
        // Function to check answers
        function checkAnswers() {
            $("input").on("click", function () {
                if ($("input[name=" + qA[i].name + "]:checked")) {
                    console.log("Checked!");
                }

            });
        checkAnswers();
        }
        // // Function to check answers
        // function checkAnswers() {
        //     // var isChecked = $("input[name=" + qA[i].name + "]:checked");
        //     console.log(qA[i].name);
        // }
        // checkAnswers();
    }
}
// Function to check answers
// function checkAnswers() {
//     var isChecked = $("input[name=" + qA[i].name + "]:checked");
//     for (var i = 0; i < qA.length; i++) {
//         var isChecked = $("input[name=" + qA[i].name + "]:checked");
//         console.log(isChecked);
        // if ($(qA[i].name.value).
//     }
// }


