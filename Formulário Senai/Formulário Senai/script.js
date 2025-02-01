const btnEnviar = document.getElementById("botaoEntrar");
const nome = document.getElementById("input");

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    if (nome.value.trim() === "") {
        const alertName = document.createElement("div");
        alertName.classList.add("custom-alert");

        const message = document.createElement("p");
        message.textContent = "Por favor, insira seu nome completo.";
        alertName.appendChild(message);

        const button = document.createElement("button");
        button.textContent = "Ok";
        alertName.appendChild(button);

        document.body.appendChild(alertName);

        button.addEventListener("click", () => {
            alertName.remove(); 
        });
    } else {
        
        nome.disabled = true;

        const customAlert = document.createElement("div");
        customAlert.classList.add("custom-alert");

        const message = document.createElement("p");
        message.textContent = "BOA SORTE!"; 
        customAlert.appendChild(message);

        const button = document.createElement("button");
        button.textContent = "Ok";
        customAlert.appendChild(button);

        document.body.appendChild(customAlert);

        button.addEventListener("click", () => {
            customAlert.remove();
            window.location.href = "./src/Formulario/formulario.html";
        });
    }
});
