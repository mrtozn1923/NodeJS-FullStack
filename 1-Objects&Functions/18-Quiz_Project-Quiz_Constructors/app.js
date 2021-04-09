function Questions(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Questions.prototype.checkAnswer=function(answer){
    return this.answer===answer;
}

//Quiz Constructor
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}

//Quiz Prototype
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}

//Quiz isFinish
Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex;
}

//Quiz Guess
Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1=new Questions("Türkiye'nin başkenti?",["Moskova","Ankara","Bakü","İstanbul"],"Ankara");
var q2=new Questions("Türkiye Cumhuriyeti'nin kuruluş tarihi?",["1920","1915","1923","1921"],"1923");
var q3=new Questions("Türkiye'nin en kalabalık şehri?",["Ankara","Kastamonu","İzmir","İstanbul"],"İstanbul");

var questions=[q1,q2,q3];

//Start Quiz

var quiz=new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess("İstanbul");

console.log(quiz.getQuestion());
quiz.guess("1923");

console.log(quiz.getQuestion());
quiz.guess("Ankara");

console.log(quiz.score);
console.log(quiz.isFinish());