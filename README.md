# AluraGeek 

**AluraGeek** é um e-commerce desenvolvido para o desafio da Alura, focado na venda de produtos geek. O projeto é implementado com HTML, CSS e JavaScript, e utiliza o **JSON Server** para simular uma API de backend.

## Descrição do Projeto

Este repositório contém o código-fonte do site **AluraGeek**, um e-commerce fictício onde os usuários podem visualizar, adicionar e excluir produtos geek. O projeto é uma demonstração de como criar um frontend interativo e dinâmico com integração de uma API simulada, garantindo uma experiência de usuário completa.

## ✨ Funcionalidades

- **Visualização de Produtos:** Exibe dinamicamente uma lista de produtos cadastrados.
- **Adição de Produtos:** Permite adicionar novos produtos à base de dados do sistema.
- **Exclusão de Produtos:** Oferece a funcionalidade de remover produtos diretamente da interface.
- **Responsividade:** O layout é adaptável para diferentes tamanhos de tela, proporcionando uma boa experiência em dispositivos móveis, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **JSON Server**
- **Git e GitHub**

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
``` git clone https://github.com/sweetcarolaine/challenge_alura-geek.git```

2. **Navegue até a pasta do projeto:**
``` cd challenge_alura-geek```

3. **Instale o JSON Server (caso não tenha instalado):**
``` npm install -g json-server```

4. **Inicie o servidor JSON:**

``` json-server --watch db.json```

5. **Abra o arquivo index.html no seu navegador.**

## 🌟 Demonstração 
(Se possível, adicione um link para uma demonstração ao vivo ou um gif mostrando o funcionamento do projeto.)

## 📂 Estrutura do Projeto
```
├── node_modules/           # Dependências do projeto
├── public/
│   └── assets/
│       ├── thumbnail/      # Thumbnails dos vídeos
│       └── logo.svg        # Logotipo do projeto
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── banner/         # Banner principal
│   │   ├── card/           # Cartões de categorias
│   │   ├── category/       # Listagem e gerenciamento de categorias
│   │   ├── footer/         # Rodapé do site
│   │   ├── header/         # Cabeçalho do site
│   │   ├── loading/        # Componentes de carregamento
│   │   ├── modal/          # Modal de edição de vídeos
│   │   └── videocard/      # Cartões para exibição de vídeos
│   ├── pages/              # Páginas do projeto
│   │   ├── FormPage.jsx    # Página do formulário
│   │   ├── Home.jsx        # Página inicial
│   │   ├── HomePage.jsx    # Página principal da aplicação
│   │   ├── NewVideo.jsx    # Página para adicionar novos vídeos
│   │   └── VideoList.scss  # Estilos da lista de vídeos
│   ├── App.jsx             # Configuração principal do React
│   ├── Global.scss         # Estilos globais
│   └── Main.jsx            # Arquivo principal para inicialização
├── .gitignore              # Arquivo para ignorar arquivos no Git
├── db.json                 # Base de dados simulada
├── index.html              # Página HTML principal
├── package.json            # Configuração do Node e pacotes
├── vite.config.js          # Configuração do Vite
├── restore_db.js           # Script para restaurar o banco de dados
├── README.md               # Documentação do projeto
```
## 📝 Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.

## 👩‍💻 Desenvolvido por
Thaís Bezerra 
[LinkedIn](https://www.linkedin.com/in/thaisbezerra/) | [GitHub](https://github.com/sweetcarolaine)

### Badge: 
<img src="imagens/Badge-AluraGeek.png" alt="Badge Alura" width="200" />
