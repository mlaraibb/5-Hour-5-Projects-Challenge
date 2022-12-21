// quiz questions
const quizData = [
    {
        question: "What is the most used programming language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Imran Khan",
        b: "Nawaz Sharif",
        c: "Shehbaaz Shareef",
        d: "Zardari",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
//for all queries selectors
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

 loadQuiz();
function loadQuiz(){
    deSelectAnswers();
const currentQuizData = quizData[currentQuiz];
questionEl.innerHTML = currentQuizData.question;
a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;
}
 //to select right answer
function getSelected(){
    let answer = undefined;

answerEls.forEach((answerEl)=>{
   if(answerEl.checked){
    answer = answerEl.id;
   }
});
return answer;
}
// for the wrong answer
function deSelectAnswers(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked = false;
    });
}
// button 
submitBtn.addEventListener('click',()=>{
     //check to see the answer
     const answer = getSelected();
     if(answer === quizData[currentQuiz].correct){
        score++;
     }
     currentQuiz++;
     if(currentQuiz < quizData.length){
        loadQuiz();
     }else{
        quiz.innerHTML = `
                <h1>You answered correctly at ${score}/${quizData.length} questions.</h1>
                
                <button onclick="location.reload()">Reload</button>
            `;
    
     }
});