document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const questions = [
        {
            question: "Quel joueur a remporté le Ballon d'Or 2023 ?",
            options: ["Karim Benzema", "Erling Haaland", "Lionel Messi", "Kylian Mbappé"],
            answer: 2
        },
        {
            question: "Quelle équipe a gagné la Ligue des champions de l'UEFA 2023 ?",
            options: ["Manchester City", "Real Madrid", "Bayern Munich", "Paris Saint-Germain"],
            answer: 0
        },
        // Ajoutez les autres questions ici
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        const options = question.options.map((option, index) => 
            `<button class="btn btn-primary btn-block my-2" onclick="checkAnswer(${index})">${option}</button>`
        ).join("");

        quizContainer.innerHTML = `
            <h2>${question.question}</h2>
            <div>${options}</div>
        `;
    }

    window.checkAnswer = function(selectedIndex) {
        const question = questions[currentQuestionIndex];
        const correctAnswer = question.answer;
        const messageDiv = document.createElement('div');

        if (selectedIndex === correctAnswer) {
            score++;
            messageDiv.textContent = "Bonne réponse !";
            messageDiv.style.color = "green";
        } else {
            messageDiv.textContent = `Mauvaise réponse. La bonne réponse était : ${question.options[correctAnswer]}`;
            messageDiv.style.color = "red";
        }

        quizContainer.appendChild(messageDiv);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                quizContainer.innerHTML = `<h2>Quiz terminé ! Votre score est de ${score} sur ${questions.length}</h2>`;
            }
        }, 2000);
    };

    showQuestion();
});
