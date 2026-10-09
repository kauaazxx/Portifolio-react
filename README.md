# Meu Perfil — Expo

Aplicativo de perfil pessoal desenvolvido com **React Native**, **Expo** e **TypeScript** como atividade de Desenvolvimento de Sistemas do SENAI.

O projeto apresenta uma tela de perfil com foto, nome, curso e um botão para acessar o GitHub.

## 🚀 Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* TypeScript

## ✨ Funcionalidades

* Exibição da foto de perfil.
* Apresentação do nome do usuário.
* Informação do curso SENAI-DS.
* Botão para abrir o perfil do GitHub.
* Interface com tema escuro.
* Layout organizado e adaptado aos componentes do React Native.

## 📁 Estrutura do Projeto

```text
meu-portfolio/
├── assets/
│   └── images/
│       └── minha-foto.jpg
├── src/
│   └── app/
│       ├── _layout.tsx
│       └── index.tsx
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

**Observação:** a estrutura acima apresenta os principais arquivos utilizados no projeto. Outros arquivos e pastas podem existir dependendo da configuração inicial do Expo.

## ⚙️ Como Executar o Projeto

### 1. Pré-requisitos

Antes de começar, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* npm, que é instalado junto com o Node.js.

### 2. Clonar o repositório

No terminal, execute:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd meu-portfolio
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do seu repositório no GitHub.

### 3. Instalar as dependências

Execute o comando:

```bash
npm install
```

### 4. Iniciar o Expo

Execute:

```bash
npx expo start
```

Após iniciar o servidor, você poderá:

* Pressionar `w` para abrir a versão web, caso o suporte web esteja configurado.
* Pressionar `a` para abrir no emulador Android.
* Escanear o QR Code com o aplicativo Expo Go para testar em um celular compatível.

## 🖼️ Personalização

A foto de perfil está localizada em:

```text
assets/images/minha-foto.jpg
```

Para utilizar outra imagem, basta substituir o arquivo, mantendo o mesmo nome e formato, ou atualizar o caminho da imagem no código.

O nome, o curso e o endereço do GitHub podem ser alterados no arquivo:

```text
src/app/index.tsx
```

## 🔗 GitHub

O botão **Meu GitHub** direciona para o perfil:

[github.com/kauaazxx](https://github.com/kauaazxx)

## 🎓 Objetivo da Atividade

O objetivo deste projeto é praticar o desenvolvimento de interfaces com React Native e Expo, utilizando componentes, estilos, imagens e a abertura de links externos.

A atividade também permite conhecer a organização de um projeto mobile e aprender a executar uma aplicação durante o desenvolvimento.

## 👨‍💻 Autor

**Kauã Lucio**

Estudante de Desenvolvimento de Sistemas — SENAI-DS.

GitHub: [@kauaazxx](https://github.com/kauaazxx)

