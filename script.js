const Questions = [{
    q: "Q:1 What is capital of India?",
    a: [{ text: " Gandhinagar", isCorrect: false },
    { text: " Surat", isCorrect: false },
    { text: " Delhi", isCorrect: true },
    { text: " Mumbai", isCorrect: false }
    ]
 
},
{
    q: "Q:2 What is the capital of Uttar Pradesh?",
    a: [{ text: " Kanpur", isCorrect: false },
    { text: " Agra", isCorrect: false },
    { text: " Noida", isCorrect: false },
    { text: " Lucknow", isCorrect: true }
    ]
 
},
{
    q: "Q:3 What is the capital of Gujarat",
    a: [{ text: " Surat", isCorrect: false },
    { text: " Vadodara", isCorrect: false },
    { text: " Gandhinagar", isCorrect: true },
    { text: " Rajkot", isCorrect: false }
    ]
}
]
let currQuestion = 0
let score = 0
function loadQuestion() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
loadQuestion();
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQuestion();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
}
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
