class Doce {
  constructor(nome, descricao, preco, imagem) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.imagem = imagem;
  }
}

const inputNome = document.getElementById("input-nome");
const inputDescricao = document.getElementById("input-descricao");
const inputPreco = document.getElementById("input-preco");
const imageSelect = document.getElementById("imageSelect");
const btnAdd = document.getElementById("btn-add");

const listaDocinhos = [];

btnAdd.addEventListener('click', adicionarDoce);

function adicionarDoce(event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const descricao = inputDescricao.value.trim();
  const preco = parseFloat(inputPreco.value);
  const imagem = imageSelect.value;

  if (!nome || !descricao || preco <= 0 || !imagem) {
    alert("Preencha todos os campos corretamente e selecione uma imagem válida.");
    return;
  }

  const novoDoce = new Doce(nome, descricao, preco, imagem);
  listaDocinhos.push(novoDoce);

  renderizarDocinhos();
  limparFormulario();
}

function renderizarDocinhos() {
  const container = document.getElementById("lista-doces");
  container.innerHTML = "";

  listaDocinhos.forEach((doce, index) => {
    const item = document.createElement("div");
    item.classList.add("card-doce");
    item.innerHTML = `
      <p><strong>${doce.nome}</strong></p>
      <p>${doce.descricao}</p>
      <p>R$ ${doce.preco.toFixed(2)}</p>
      <img src="${doce.imagem}" alt="${doce.nome}" width="100">
      <span>
        <button class="button-editar" onclick="editarDoce(${index})">Editar</button>
        <button class="button-excluir" onclick="excluirDoce(${index})">Excluir</button>
      </span>
      <hr>
    `;
    container.appendChild(item);
  });
}

function limparFormulario() {
  inputNome.value = "";
  inputDescricao.value = "";
  inputPreco.value = "";
  imageSelect.value = "";
}


function excluirDoce(index) {
  if (confirm(`Tem certeza que deseja excluir o doce "${listaDocinhos[index].nome}"?`)) {
    listaDocinhos.splice(index, 1);
    renderizarDocinhos();
  }
}

// Função para editar o doce pelo índice
function editarDoce(index) {
  const doce = listaDocinhos[index];

  // Preenche o formulário com os dados atuais do doce
  inputNome.value = doce.nome;
  inputDescricao.value = doce.descricao;
  inputPreco.value = doce.preco;
  imageSelect.value = doce.imagem;

  // Remove o doce da lista para que seja atualizado após editar e salvar
  listaDocinhos.splice(index, 1);
  renderizarDocinhos();
}
