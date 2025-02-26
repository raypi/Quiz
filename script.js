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
let correctAnswers = 0;
let AudioSuccess = new Audio('sound/success.mp3'); // kein direkter Pfad "./ordner/datei"
let AudioWrong = new Audio('sound/wrong.mp3'); // erstellt Variable mit derm Audio

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
function showQuestion(){
    
    if (gameIsOver()) {         // wenn das erfüllt ist zeigen wir den Endscreen ansonsten zeigen wir die nächste Frage
        showEndScreen();        // Anzeige des EndSrceen
    } else {                    // Erstellt die nächste Frage
        updateProgressBar();    // aktualisieren des Fortschrittsbalken
        updateNextQuestion();   // aktualisieren der nächsten Frage
    }    
}



// Auswahl der richtigen Antwort aus den Antwortmöglichkeiten
function answer(selection){ // Inhalt der Variable selection wird vom Buttun per onclick übergeben
    let question = questions[currentQuestion]; // Hilfsvariable question erhält Index von questions    console.log('Selected answer is ', selection); // gibt in Console den Betätigten Button aus zum testen
    let selectedQuestionNumber = selection.slice(-1); // nimmt die letzte Stelle der Variable selection die vom Button übergeben wird    console.log('Current question is', question['rightAnswer']); // ausgabe Console der richtigen Antwort!
    
    
    let idOfRightAnswer = `answer${question['rightAnswer']}`; // ID der Richtigen Antwort ind die Hilfvariable geben
    

    if(rightAnswerSelected(selectedQuestionNumber, question)) { // prüft ob gegebene Antwort der Richtigen Antwort entspricht
        document.getElementById(selection).parentNode.classList.add('bg-success'); // classList.add('bg-succes') fügt dem Element die CSS Class bg-sucess hinzu, dabei greift die Variable selection direkt auf die ID des DIV zu 
        correctAnswers++; // zählt bei einer Richtigen Antwort + 1 um später die Anzahl der richtigen Antworten auszugeben. 
        AudioSuccess.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // siehe Farbwechsel bi IF
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // Richtige Antwort grün markieren mit der Hilfsvariable idOfRightAnswer (setzt) Ziffer und answer zusammen für ID
        AudioWrong.play();
    }
    document.getElementById('nextButton').disabled = false; // der "nächste Frage" Butten ist enabled bis eine Antwort gegeben wird und danch ist er disabled
}


// Funktion nächste Frage aufrufen
function nextQuestion (){
    currentQuestion++; // Variable erhöhen zum Beispiel von 0 auf 1
    document.getElementById('nextButton').disabled = true; // der "nächste Frage" Butten wird auf disabled gesetzt
    resetAnswerButtons(); // Aufruf der Funktion
    showQuestion(); // ruft die Funktion showQuestion auf
    
}


// Funktion zum zurücksetzen der farben der Antwort DIV s 
function resetAnswerButtons(){
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


// Funktion neues Spiel Starten
function newGame(){
    document.getElementById('headerImg').src = './img/quiz_bgr.jpg'; // setzt Bild im Header wieder auf Quiz Bild 
    document.getElementById('questionBody').style = ''; // greift auf Style Tag in der ID questionBody zu und zeigt Ihn wieder an 
    document.getElementById('endScreen').style = 'display: none;'; // greift auf Style Tag in der ID endScreen zu und setzt es auf ausblenden

    currentQuestion = 0; // Variable bei Neustart auf 0 Setzen durch überschreiben
    correctAnswers = 0;  // Variable bei Neustart auf 0 Setzen durch überschreiben
    init();  
}


// erstellt die nächste Frage und aktualisiert die Anzeige
function updateNextQuestion() {
    let question = questions[currentQuestion]; // ertellt Container "question" und holt aus dem container "questions" die erste stelle, (0), heraus

    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionTxt').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

// erstellt den End Screen und zeigt Ihn an 
function showEndScreen() {
        document.getElementById('endScreen').style = ''; // greift auf Style Tag in der ID endScreen zu und setzt es auf keinen Wert
        document.getElementById('questionBody').style = 'display: none;'; // greift auf Style Tag in der ID endScreen zu und setzt es auf keinen Wert
        document.getElementById('summeOfQuestion').innerHTML = questions.length;
        document.getElementById('summeCorrectAnswers').innerHTML = correctAnswers;
        document.getElementById('headerImg').src = './img/winnerImg.png';
    }


// Fortschritt Balken aktualisieren
function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length; // percent hilffariable für fortschrittsbalken (Frage+1 / anzahl Fragen)
    percent = Math.round(percent * 100); // x 100 sind Prozent
    document.getElementById('progressBr').innerHTML = `${percent} %`; // gibt Prozent Zahl an Prozess Bar zurück
    document.getElementById('progressBr').style.width = `${percent}%`;     
}    


// Funktion zum Beenden des speiles (ausgelagert)
function gameIsOver(){
    return currentQuestion >= questions.length; // einfach die Bedingung Copieren jdeoch immer return davor setzen das der Wert zurück gegeben wird
}


// Richtige Antwort augewählt
function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['rightAnswer'];
}