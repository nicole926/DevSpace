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


// ================= AULAS CONCLUÍDAS =================
const botoes = document.querySelectorAll(".concluido");

botoes.forEach(botao => {
    const aula = botao.dataset.aula;

    // segurança: se não tiver data-aula, ignora
    if (!aula) return;

    // se já estava concluída, restaura estado
    if (localStorage.getItem(aula) === "true") {
        marcarComoConcluido(botao);
    }

    botao.addEventListener("click", () => {
        marcarComoConcluido(botao);
        localStorage.setItem(aula, "true");
    });
});

function marcarComoConcluido(botao) {
    botao.classList.add("concluido-ok");
    botao.textContent = "✔";
    botao.disabled = true; // impede novo clique
}
