// ================= ANIMAÇÃO AO SCROLL =================
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


// ================= HEADER ENCOLHENDO =================
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

// ================= favoritos =================
        const botoes = document.querySelectorAll(".btn-favorito");

        function pegarFavoritos() {
        return JSON.parse(localStorage.getItem("favoritos")) || [];
        }

        function salvarFavoritos(lista) {
        localStorage.setItem("favoritos", JSON.stringify(lista));
        }

        botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const curso = botao.closest(".curso");
            const id = curso.dataset.id;
            const titulo = curso.dataset.titulo;

            let favoritos = pegarFavoritos();
            const existe = favoritos.find(c => c.id === id);

            if (existe) {
            favoritos = favoritos.filter(c => c.id !== id);
            botao.textContent = "🤍";
            botao.classList.remove("ativo");
            } else {
            favoritos.push({ id, titulo });
            botao.textContent = "❤️";
            botao.classList.add("ativo");
            }

            salvarFavoritos(favoritos);
        });
        });
