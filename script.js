// Seleciona todos os botões "Ler mais"
const botoesLerMais = document.querySelectorAll('.btn-ler-mais');

// Adiciona evento de clique para cada botão
botoesLerMais.forEach(botao => {
    botao.addEventListener('click', () => {
        const post = botao.parentElement;
        const conteudo = post.querySelector('p');
        
        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
            botao.textContent = 'Ler mais';
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
            botao.textContent = 'Ler menos';
        }
    });
});

// Função para adicionar novo post
function adicionarPost(titulo, conteudo) {
    const posts = document.getElementById('posts');
    const novoPost = document.createElement('article');
    novoPost.className = 'post';
    
    const data = new Date().toLocaleDateString();
    
    novoPost.innerHTML = `
        <h2>${titulo}</h2>
        <span class="data">${data}</span>
        <p>${conteudo}</p>
        <button class="btn-ler-mais">Ler mais</button>
    `;
    
    posts.insertBefore(novoPost, posts.firstChild);
}

// Exemplo de como adicionar um novo post
// adicionarPost('Novo Post', 'Conteúdo do novo post...'); 