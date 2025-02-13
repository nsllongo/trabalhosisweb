function adicionarEventoBotaoLerMais(botao) {
  botao.addEventListener("click", () => {
    const post = botao.parentElement;
    const conteudo = post.querySelector("p");

    if (conteudo.classList.contains("expandido")) {
      conteudo.classList.remove("expandido");
      botao.textContent = "Ler mais";
    } else {
      conteudo.classList.add("expandido");
      botao.textContent = "Ler menos";
    }
  });
}

function salvarPosts() {
  const posts = Array.from(document.querySelectorAll(".post")).map((post) => {
    const titulo = post.querySelector("h2").textContent;
    const data = post.querySelector(".data").textContent;
    const conteudo = post.querySelector("p").textContent;
    return { titulo, data, conteudo };
  });
  localStorage.setItem("posts", JSON.stringify(posts));
}

function carregarPosts() {
  const postsSalvos = JSON.parse(localStorage.getItem("posts") || "[]");
  postsSalvos.forEach(({ titulo, data, conteudo }) => {
    adicionarPost(titulo, conteudo, data);
  });
}

function adicionarPost(
  titulo,
  conteudo,
  data = new Date().toLocaleDateString(),
) {
  const posts = document.getElementById("posts");
  const novoPost = document.createElement("article");
  novoPost.className = "post";

  novoPost.innerHTML = `
        <h2>${titulo}</h2>
        <span class="data">${data}</span>
        <p>${conteudo}</p>
        <button class="btn-ler-mais">Ler mais</button>
    `;

  posts.insertBefore(novoPost, posts.firstChild);

  const novoBotao = novoPost.querySelector(".btn-ler-mais");
  adicionarEventoBotaoLerMais(novoBotao);

  salvarPosts();
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

// Carregar posts ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarPosts);
