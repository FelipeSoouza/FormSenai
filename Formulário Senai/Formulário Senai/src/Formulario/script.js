let tempoRestante = 1800;
const timerEl = document.getElementById("timer");
let intervaloTimer;

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const btnEnviar = document.getElementById("btnenviar");
    const acertoDiv = document.getElementById("acerto");

    const corretaRespostas = {
        q1: "Ásia",
        q2: "Leonardo da Vinci",
        q3: "Teoria do Big Bang",
        q4: "Elefante africano",
        q5: "China",
        q6: "Pâncreas",
        q7: "Lua",
        q8: "Paris",
        q9: "Miguel de Cervantes",
        q10: "Oxigênio"
    };

    // Função para formatar o tempo
    function formatarTempo(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segRestantes = segundos % 60;
        const minFormatado = String(minutos).padStart(2, '0');
        const segFormatado = String(segRestantes).padStart(2, '0');
        return `${minFormatado}:${segFormatado}`;
    }

    // Função para iniciar o timer
    function iniciarTimer() {
        intervaloTimer = setInterval(() => {
            tempoRestante--;
            timerEl.textContent = formatarTempo(tempoRestante);

            if (tempoRestante <= 0) {
                clearInterval(intervaloTimer);
                timerEl.textContent = 'Tempo esgotado';
                finalizarQuiz();
            }
        }, 1000);
    }

    iniciarTimer();

    btnEnviar.addEventListener("click", function () {
        let todasRespondidas = true;

        for (const question of Object.keys(corretaRespostas)) {
            const userResposta = quizForm[question]?.value;

            if (!userResposta) {
                todasRespondidas = false;
                acertoDiv.textContent = "Por favor, responda todas as perguntas antes de enviar.";
                return;
            }
        }

        let score = 0;
        for (const [question, corretaResposta] of Object.entries(corretaRespostas)) {
            const userResposta = quizForm[question]?.value;
            const fieldset = quizForm[question]?.[0]?.closest("fieldset");

            fieldset?.classList.remove("correct", "incorrect");

            if (userResposta === corretaResposta) {
                score++;
                fieldset?.classList.add("correct");
            } else {
                fieldset?.classList.add("incorrect");
            }
        }

        acertoDiv.textContent = `ACERTOS: ${score}`;
        clearInterval(intervaloTimer);
        finalizarQuiz();
    });

    function finalizarQuiz() {
        btnEnviar.disabled = true;
        const inputs = quizForm.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => input.disabled = true);
    }
});
