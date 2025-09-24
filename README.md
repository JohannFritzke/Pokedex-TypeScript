# Pokedex TypeScript

O **Pokedex-TypeScript** é uma aplicação desenvolvida em **TypeScript** com o objetivo de explorar e praticar conceitos da linguagem, ao mesmo tempo em que fornece uma Pokédex interativa para consulta de Pokémon.

## Conteúdo

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Instalação](#instalação)  
- [Uso](#uso)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Contribuição](#contribuição)  
- [Contato](#contato)

---

## Visão Geral

A aplicação conecta-se a uma API de Pokémon (ex.: [PokéAPI](https://pokeapi.co/)) para exibir informações sobre diferentes espécies.  
Serve como exercício prático de **TypeScript** e **consumo de APIs**.

---

## Funcionalidades

- Buscar Pokémon por nome ou número  
- Exibir imagem, tipo e outras informações básicas  
- Interface simples e responsiva  
- Código limpo e organizado em TypeScript

---

## Tecnologias

- **TypeScript**  
- **JavaScript**  
- **HTML**  
- **CSS**  
- API: [PokéAPI](https://pokeapi.co/)

---

## Instalação

Siga os passos abaixo para rodar localmente:

```bash
# 1. Clone este repositório
git clone https://github.com/JohannFritzke/Pokedex-TypeScript.git

# 2. Entre na pasta do projeto
cd Pokedex-TypeScript

# 3. Instale as dependências (se houver)
npm install
# ou
yarn install

# 4. Compile/execute o projeto
npm start
# ou
yarn start
```

---

## Uso

1. Acesse a aplicação em `http://localhost:3000` (ou porta configurada).  
2. Digite o nome ou número do Pokémon desejado.  
3. Veja as informações retornadas da API.  

---

## Estrutura de Pastas

```
Pokedex-TypeScript/
│
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas principais
│   ├── services/       # Lógica de integração com a API
│   ├── styles/         # Arquivos CSS
│   └── index.ts        # Arquivo principal
├── public/             # Arquivos estáticos
├── package.json
└── README.md
```

---

## Contato

- Autor: **Johann Fritzke**  
- GitHub: [@JohannFritzke](https://github.com/JohannFritzke)  
