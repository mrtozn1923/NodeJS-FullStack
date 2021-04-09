function Questions(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Questions.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

//Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

//Quiz Prototype
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

//Quiz isFinish
Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

//Quiz Guess
Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Questions("Türkiye'nin başkenti?", ["Moskova", "Ankara", "Bakü", "İstanbul"], "Ankara");
var q2 = new Questions("Türkiye Cumhuriyeti'nin kuruluş tarihi?", ["1920", "1915", "1923", "1921"], "1923");
var q3 = new Questions("Türkiye'nin en kalabalık şehri?", ["Ankara", "Kastamonu", "İzmir", "İstanbul"], "İstanbul");

var questions = [q1, q2, q3];


var questionText;


var questionText = document.querySelector(".question-text");

//Start Quiz
var quiz = new Quiz(questions);
loadQuestions();



function loadQuestions() {
    if (quiz.isFinish()) {
        showScore();
    } else {
        var question=quiz.getQuestion();
        var choices=question.choices;
        questionText.textContent = question.text;
        for(var i=0;i<choices.length;i++){
            var element=document.querySelector('#choice-'+i);
            element.innerText=choices[i];
            guess('choice-'+i,choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess) {
    var btn=document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestions();
    }
}

function showScore() {
    var scoreText=`<h2>Puan</h2><h3>${quiz.score}</h3>`;
    document.querySelector('.quiz-body').innerHTML=scoreText;
}

function showProgress(){
    var totalQuestion=quiz.questions.length;
    var questionNumber=quiz.questionIndex+1;
    document.querySelector('.quiz-progress').innerHTML='Soru '+questionNumber+"/"+totalQuestion;
}