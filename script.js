function adicionarEventoBotaoLerMais(botao) {
  botao.addEventListener("click", () => {
    const post = botao.parentElement;
    const conteudo = post.querySelector("p");

    if (conteudo.style.maxHeight) {
      conteudo.style.maxHeight = null;
      botao.textContent = "Ler mais";
    } else {
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
      botao.textContent = "Ler menos";
    }
  });
}

const botoesLerMais = document.querySelectorAll(".btn-ler-mais");

botoesLerMais.forEach((botao) => {
  adicionarEventoBotaoLerMais(botao);
});

function adicionarPost(titulo, conteudo) {
  const posts = document.getElementById("posts");
  const novoPost = document.createElement("article");
  novoPost.className = "post";

  const data = new Date().toLocaleDateString();

  novoPost.innerHTML = `
        <h2>${titulo}</h2>
        <span class="data">${data}</span>
        <p>${conteudo}</p>
        <button class="btn-ler-mais">Ler mais</button>
    `;

  posts.insertBefore(novoPost, posts.firstChild);

  // Adiciona evento ao novo botão "Ler mais"
  const novoBotao = novoPost.querySelector(".btn-ler-mais");
  adicionarEventoBotaoLerMais(novoBotao);
}

function criarNovoPost() {
  const titulo = document.getElementById("titulo-post").value;
  const conteudo = document.getElementById("conteudo-post").value;

  if (titulo.trim() === "" || conteudo.trim() === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  adicionarPost(titulo, conteudo);

  document.getElementById("titulo-post").value = "";
  document.getElementById("conteudo-post").value = "";
}
