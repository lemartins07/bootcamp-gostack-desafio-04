<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Primeiro projeto com ReactJS
</h3>
<p align="center">
  Código do quarto desafio do Bootcamp GoStack 🎓
</p>  

<p align="center">“Sucesso não é o resultado de um jogo, mas o destino de uma jornada”!</blockquote>

## :rocket: Sobre o desafio

Foi criada uma aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Nessa aplicação foi desenvolvida uma **interface** semelhante com a do **Facebook** utilizando React.

As informações contidas na interface são **estáticas** e não refletem nenhuma API REST ou back-end.

## :rocket: Sobre a aplicação

Foi criada uma aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.
Nessa aplicação foi desenvolvida uma **interface** semelhante com a do **Facebook** utilizando React.
As informações contidas na interface são **estáticas** e não refletem nenhuma API REST ou back-end.


### Tela da aplicação

<img src="https://github.com/lemartins07/bootcamp-gostack-desafio-04/blob/master/src/assets/desafio_04.png" alt="bootcamp-gostack-desafio-04" />


### Componentes

Na imagem abaixo destaquei cada componente que foi criado e abaixo está a descrição e responsabilidades de cada um:

**Header (Amarelo):** Responsável por exibir a logo e o link para acessar o perfil;

**PostList (Verde):** Responsável por armazenar os dados da listagem de post, esses dados estão dentro do `state` do componente e não em uma variável comum.

**Post (Vermelho):** Responsável por exibir os dados do post, esses dados estão vindo através de uma propriedade recebida do componente PostList.

**Comment (Azul):** Responsável por exibir um comentário. Os dados do comentário estão vindo por uma propriedade do componente Post. Dentro do componente Post você tem um novo `.map` para listar os comentários do post.

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd bootcamp-gostack-desafio-04`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn start` para iniciar o servidor de desenvolvimento;
5. Abra `http://localhost:3000` para ver o projeto no navegador.

