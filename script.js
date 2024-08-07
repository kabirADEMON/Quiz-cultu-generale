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
        {
            question: "Quel club Lionel Messi a-t-il rejoint après avoir quitté le Paris Saint-Germain en 2023 ?",
            options: ["FC Barcelone", "Inter Miami", "Al-Hilal", "Manchester City"],
            answer: 1
        },
        {
            question: "Quel pays a accueilli la Coupe du Monde Féminine de la FIFA 2023 ?",
            options: ["France", "Japon", "Australie et Nouvelle-Zélande", "États-Unis"],
            answer: 2
        },
        {
            question: "Quel joueur a été transféré pour un montant record en 2024 ?",
            options: ["Jude Bellingham", "Declan Rice", "Kylian Mbappé", "Erling Haaland"],
            answer: 1
        },
        {
            question: "Quel club est surnommé 'Les Gunners' ?",
            options: ["Chelsea", "Manchester United", "Arsenal", "Tottenham"],
            answer: 2
        },
        {
            question: "Quel club joue ses matchs à domicile au stade Camp Nou ?",
            options: ["Real Madrid", "FC Barcelone", "Atletico Madrid", "Valence"],
            answer: 1
        },
        {
            question: "Quel club a le surnom de 'Les Blues' ?",
            options: ["Manchester City", "Chelsea", "Everton", "Leicester City"],
            answer: 1
        },
        {
            question: "Quel club a pour devise 'You'll Never Walk Alone' ?",
            options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
            answer: 1
        },
        {
            question: "Quel est le club de football le plus titré d'Italie ?",
            options: ["AC Milan", "Juventus", "Inter Milan", "Napoli"],
            answer: 1
        },
        {
            question: "Quel club est connu sous le nom de 'Les Rouge et Noir' ?",
            options: ["AC Milan", "Borussia Dortmund", "Atlético Madrid", "Paris Saint-Germain"],
            answer: 0
        },
        {
            question: "Quel club est le plus ancien d'Angleterre ?",
            options: ["Stoke City", "Notts County", "Sheffield FC", "Manchester United"],
            answer: 2
        },
        {
            question: "Quel club a remporté le premier championnat de la Ligue 1 en France ?",
            options: ["Marseille", "AS Saint-Étienne", "Lille", "Paris Saint-Germain"],
            answer: 2
        },
        {
            question: "Quel est le plus grand océan du monde ?",
            options: ["Atlantique", "Arctique", "Pacifique", "Indien"],
            answer: 2
        },
        {
            question: "Qui a écrit 'Les Misérables' ?",
            options: ["Victor Hugo", "Émile Zola", "Albert Camus", "Gustave Flaubert"],
            answer: 0
        },
        {
            question: "Quelle planète est la plus proche du Soleil ?",
            options: ["Vénus", "Mars", "Mercure", "Jupiter"],
            answer: 2
        },
        {
            question: "Quel joueur a remporté le plus de Ballons d'Or ?",
            options: ["Cristiano Ronaldo", "Lionel Messi", "Zinédine Zidane", "Pelé"],
            answer: 1
        },
        {
            question: "Quel pays a remporté la Coupe du Monde de la FIFA en 2018 ?",
            options: ["Brésil", "Allemagne", "France", "Argentine"],
            answer: 2
        },
        {
            question: "Quel club a remporté le plus de Ligues des champions de l'UEFA ?",
            options: ["FC Barcelone", "Liverpool FC", "Real Madrid", "Bayern Munich"],
            answer: 2
        },
        {
            question: "Quel joueur est surnommé 'El Fenómeno' ?",
            options: ["Ronaldinho", "Neymar", "Ronaldo", "Romário"],
            answer: 2
        },
        {
            question: "Quelle équipe a remporté le premier championnat d'Europe en 1960 ?",
            options: ["Espagne", "URSS", "Italie", "Allemagne de l'Ouest"],
            answer: 1
        }
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
