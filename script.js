const API_URL = "http://localhost:3000/posts";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar posts");

    const posts = await response.json();
    const postsContainer = document.getElementById("posts");

    postsContainer.innerHTML = "";

    posts.forEach(({ titulo, conteudo, data }) => {
      adicionarPost(titulo, conteudo, data);
    });
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
  }
}

async function salvarPost(titulo, conteudo) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        conteudo,
        data: new Date().toLocaleDateString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao salvar post");
    }

    await fetchPosts();
  } catch (error) {
    console.error("Erro ao salvar post:", error);
  }
}

function adicionarPost(titulo, conteudo, data) {
  const posts = document.getElementById("posts");
  const novoPost = document.createElement("article");
  novoPost.className = "post";

  // Use a proper template string for innerHTML
  novoPost.innerHTML = `
    <h2>${titulo}</h2>
    <span class="data">${data}</span>
    <p>${conteudo}</p>
    <button class="btn-ler-mais">Ler mais</button>
  `;

  // Insert the new post at the top
  posts.insertBefore(novoPost, posts.firstChild);

  // Add the 'Ler mais' / 'Ler menos' toggle event
  adicionarEventoBotaoLerMais(novoPost.querySelector(".btn-ler-mais"));
}

function criarNovoPost() {
  const titulo = document.getElementById("titulo-post").value;
  const conteudo = document.getElementById("conteudo-post").value;

  if (titulo.trim() === "" || conteudo.trim() === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Save the post (makes a POST request)
  salvarPost(titulo, conteudo);

  // Clear the input fields
  document.getElementById("titulo-post").value = "";
  document.getElementById("conteudo-post").value = "";
}

// Toggle expand/collapse text
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

// Fetch posts when the page loads
document.addEventListener("DOMContentLoaded", fetchPosts);
