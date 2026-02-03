function pegarFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function salvarFavoritos(lista) {
  localStorage.setItem("favoritos", JSON.stringify(lista));
}

const container = document.getElementById("lista-favoritos");
let favoritos = pegarFavoritos();

// Se não tiver favoritos
if (favoritos.length === 0) {
  container.innerHTML = "<p>Nenhum curso favoritado ainda 💔</p>";
}

// Criar os cards
favoritos.forEach(curso => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("curso");

  wrapper.innerHTML = `
    <div class="card">
      <img src="${curso.img}">
      <h3 class="titulo">${curso.titulo}</h3>
      <p>Curso favoritado</p>
      <button class="btn-lixeira" title="Remover dos favoritos">🗑️</button>
    </div>
  `;

  // Evento da lixeira com confirmação
  wrapper.querySelector(".btn-lixeira").addEventListener("click", () => {
    const confirmar = confirm(
      "Tem certeza que deseja remover este curso da sua lista de favoritos?"
    );

    if (!confirmar) return;

    favoritos = favoritos.filter(c => c.id !== curso.id);
    salvarFavoritos(favoritos);
    wrapper.remove();

    // Se apagar o último curso
    if (favoritos.length === 0) {
      container.innerHTML = "<p>Nenhum curso favoritado ainda 💔</p>";
    }
  });

  container.appendChild(wrapper);
});
