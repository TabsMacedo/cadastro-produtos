const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const container = document.getElementById("produto-exibido");

function exibirProdutos() {
  container.innerHTML = "";

  if (produtos.length === 0) {
    container.textContent = "Nenhum produto cadastrado.";
    return;
  }

  produtos.forEach(({ nome, descricao, preco, imagem }, index) => {
    const card = document.createElement("div");
    card.id = "lista-produtos";
    card.innerHTML = `
      <h2>${nome}</h2>
      <p>${descricao}</p>
      <p><strong>Preço:</strong> R$ ${parseFloat(preco).toFixed(2)}</p>
      <img id="img-produtos" src="${imagem}" alt="Imagem do doce ${nome}" />
      <button class="btn-editar" data-index="${index}">Editar</button>
      <button class="btn-deletar" data-index="${index}">Excluir</button>
    `;
    container.appendChild(card);
  });

  adicionarEventosDeletar();
  adicionarEventosEditar();
}


function adicionarEventosDeletar() {
  const botoes = document.querySelectorAll(".btn-deletar");

  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      produtos.splice(index, 1);
      localStorage.setItem("produtos", JSON.stringify(produtos));
      exibirProdutos();
    });
  });
}

function adicionarEventosEditar() {
  const botoesEditar = document.querySelectorAll(".btn-editar");

  botoesEditar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      localStorage.setItem("editIndex", index);
      window.location.href = "index.html";
    });
  });
}

exibirProdutos();
