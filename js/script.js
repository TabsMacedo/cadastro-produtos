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

const listaDoces = JSON.parse(localStorage.getItem("produtos")) || [];



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
  listaDoces.push(novoDoce);
  salvarDoces(listaDoces);

  alert("Doce adicionado com sucesso!");
}

function salvarDoces(lista) {
  localStorage.setItem("produtos", JSON.stringify(lista));
}
