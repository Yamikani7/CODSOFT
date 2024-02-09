const quizData = [
    {
        question: "What does HTML stand for?" , 
        a:  "Hyper Tag Markup Language",
        b:  "Hyper Text Markup Language",
        c:  "Hyperlinking Text Marking Language",
        d:  "Hyperlinks Text Marks Language",
        correctAnswer: 'b',
    },
    {
        question: "What symbol indicates a tag?",
        a: "Angle brackets e.g.",
        b: "Curved brackets e.g. {,}",
        c: "Commas e.g. ','",
        d: "Exclamation marks e.g. !",
        correctAnswer: 'a'
    },
    {
        question: "Which of these is a genuine tag keyword?",
        a: "Header",
        b: "Bold",
        c: "Body",
        d: "Image",
        correctAnswer: 'c'
    },
    {
        question: "How do you create an external style sheet in HTML?",
        a: "You use the <style> element within the <head> section." + "<link rel='stylesheet' type='text/css' href='styles.css'>",
        b: "You link to an external .css file using the <link> element with the rel attribute set to \"stylesheet\".",
        c: "You use the <style> element within the <head> section and specify your CSS code there.",
        d: "You link to an external .css file using the <link> element with the rel attribute set to \"stylesheet\".",
        correctAnswer: 'c'
    },
    {
        question: "What does  CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style System",
        c: "Computing Style Sheet",
        d: "Colorful Style Sheet",
        correctAnswer: 'a'
    }

];
const quiz=  document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        checkAnswer(answer);
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly</h2>`;
        }
    }
});

function checkAnswer(answer) {
    if (answer === quizData[currentQuiz].correctAnswer) {
        score++;
        showCorrectAnswer();
    } else {
        showIncorrectAnswer();
    }
    updateScore();
}

function showCorrectAnswer() {
    answerEls.forEach(answerEl => {
        if (answerEl.id === quizData[currentQuiz].correctAnswer) {
            answerEl.closest('label').style.backgroundColor = 'green';
        }
    });
}

function showIncorrectAnswer() {
    answerEls.forEach(answerEl => {
        if (answerEl.id === quizData[currentQuiz].correctAnswer) {
            answerEl.closest('label').style.backgroundColor = 'green';
        } else if (answerEl.checked) {
            answerEl.closest('label').style.backgroundColor = 'red';
        }
    });
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}