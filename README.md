# Blog Pessoal

Um blog pessoal responsivo desenvolvido com HTML, CSS e JavaScript, integrando um backend simples em Python (Flask) para persistência dos posts.

## 🚀 Funcionalidades

- Layout responsivo
- Menu de navegação
- Posts expandíveis com botão "Ler mais"
- Seção de perfil lateral
- Sistema para adicionar novos posts dinamicamente
- Backend para persistir os posts (API REST simples)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Python (Flask)

## 📦 Estrutura do Projeto

```
.
├── backend.py
├── contato.html
├── index.html
├── posts.html
├── README.md
├── script.js
├── sobre.html
└── styles.css
```

## 💻 Como rodar o projeto

### Requisitos

- Python 3.x

### Inicie o backend

Instale as dependências necessárias:

```bash
pip install flask flask-cors
```

Inicie o servidor Flask

```bash
python3 ./backend.py
```

Agora o servidor estará rodando em `http://localhost:3000`

## Outras informações

- Certifique-se de que o backend está rodando em `http://localhost:3000` para que o frontend se comunique corretamente.

- Os posts são armazenados apenas na memória do servidor backend. Assim, ao reiniciar o servidor, os posts serão perdidos.
