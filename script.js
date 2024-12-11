// Objekte
let questions = [
    {
    "question": "Wer hat HTML erfunden?",
    "answer1": "Robbie Williams",
    "answer2": "Lady Gaga",
    "answer3": "Tim Bernes-Lee",
    "answer4": "Justin Bieber",
    "rightAnswer": 3
},
{
    "question": "Was ist der Höchste Berg der Hohen Tatra?",
    "answer1": "Lomnický štít",
    "answer2": "Gerlachovský štít",
    "answer3": "Pyšný štít",
    "answer4": "Ľadový štít",
    "rightAnswer": 2
},
{
    "question": "Was ist die Antwort auf alle Fragen?",
    "answer1": "42",
    "answer2": "Die Bibel",
    "answer3": "Das Brockhaus Lexikon",
    "answer4": "37",
    "rightAnswer": 1
},
{
    "question": "Wer hat die Automarke Porsche gegründet",
    "answer1": "Ferdinand Piech",
    "answer2": "Karl Rapp",
    "answer3": "Gustav Otto",
    "answer4": "Ferdinand Porsche",
    "rightAnswer": 4
},
{
    "question": "Welche Form hat die Erde?",
    "answer1": "Kubus",
    "answer2": "Eierförmig",
    "answer3": "Rund",
    "answer4": "flache Scheibe",
    "rightAnswer": 4
},
{
    "question": "Was ist die Wertvollste Marke der Welt?",
    "answer1": "Amazon",
    "answer2": "Apple",
    "answer3": "Toyota",
    "answer4": "Space EX",
    "rightAnswer": 1
},

];

// Variablen
let currentQuestion = 0;


// Vorlage für weitere Fragen
// {
//     "question": " ",
//     "answer1": " ",
//     "answer2": " ",
//     "answer3": " ",
//     "answer4": " ",
//     "rightAnswer": 1
// },


// onload aus dem Body - Was soll passieren wenn die Seite geladen wird
function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion()
}


// aktuelle Frage und die dazugehörigen Antworten anzeigen
function showQuestion(questionTxt){
    let question = questions[currentQuestion]; // ertellt Container "question" und holt aus dem container "questions" die erste stelle, (0), heraus

    document.getElementById('questionTxt').innerHTML = question['question'];

    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];

}