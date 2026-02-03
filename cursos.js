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

// ================= FAVORITOS =================
const botoes = document.querySelectorAll(".btn-favorito");

if (botoes.length > 0) {

  function pegarFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  }

  function salvarFavoritos(lista) {
    localStorage.setItem("favoritos", JSON.stringify(lista));
  }

  const favoritosSalvos = pegarFavoritos();

  botoes.forEach(botao => {
    const curso = botao.closest(".curso");
    const id = curso.dataset.id;
    const titulo = curso.querySelector("h3").innerText;
    const img = curso.querySelector("img").src;

    // marca favoritos ao carregar
    if (favoritosSalvos.find(c => c.id === id)) {
      botao.textContent = "❤️";
      botao.classList.add("ativo");
    }

    botao.addEventListener("click", () => {
      let favoritos = pegarFavoritos();
      const existe = favoritos.find(c => c.id === id);

      if (existe) {
        favoritos = favoritos.filter(c => c.id !== id);
        botao.textContent = "🤍";
        botao.classList.remove("ativo");
      } else {
        if (!favoritos.find(c => c.id === id)) {
          favoritos.push({ id, titulo, img });
        }
        botao.textContent = "❤️";
        botao.classList.add("ativo");
      }

      salvarFavoritos(favoritos);
    });
  });
}
