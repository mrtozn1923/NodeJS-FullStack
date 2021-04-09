function Questions(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Questions.prototype.checkAnswer=function(answer){
    return this.answer===answer;
}

var q1=new Questions("Türkiye'nin başkenti?",["Moskova","Ankara","Bakü","İstanbul"],"Ankara");
var q2=new Questions("Türkiye Cumhuriyeti'nin kuruluş tarihi?",["1920","1915","1923","1921"],"1923");
var q3=new Questions("Türkiye'nin en kalabalık şehri?",["Ankara","Kastamonu","İzmir","İstanbul"],"İstanbul");

console.log(q1.checkAnswer("İstanbul"));
console.log(q2.checkAnswer("1923"));
console.log(q3.checkAnswer("Ankara"));