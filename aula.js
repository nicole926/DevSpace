// ================= HEADER ENCOLHENDO =================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
});


// ================= ANIMAÇÃO AO SCROLL =================
const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// ================= AULAS CONCLUÍDAS (TOGGLE) =================
const botoes = document.querySelectorAll(".concluido");

botoes.forEach(botao => {
    const aula = botao.dataset.aula;
    if (!aula) return;

    // restaura estado salvo
    const concluida = localStorage.getItem(aula) === "true";
    atualizarBotao(botao, concluida);

    botao.addEventListener("click", () => {
        const estadoAtual = botao.classList.contains("concluido-ok");
        const novoEstado = !estadoAtual;

        atualizarBotao(botao, novoEstado);
        localStorage.setItem(aula, novoEstado);
    });
});

function atualizarBotao(botao, concluida) {
    if (concluida) {
        botao.classList.add("concluido-ok");
        botao.textContent = "✔";
    } else {
        botao.classList.remove("concluido-ok");
        botao.textContent = "Marcar como concluído";
    }
}

