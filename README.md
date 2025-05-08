# 🗺️ Mapa Interativo das Feiras Livres de Goiânia

Este projeto é uma aplicação web estática que utiliza a biblioteca [Leaflet.js](https://leafletjs.com/) para exibir um mapa interativo com as principais feiras livres de Goiânia.

## 🎯 Objetivo

Oferecer uma visualização simples e interativa das feiras, com informações de localização, dias e horários de funcionamento.

---

## 🧰 Tecnologias Utilizadas

- **HTML5** / **CSS3** / **JavaScript**
- **[Leaflet.js](https://leafletjs.com/)** (para renderização do mapa)
- **Visual Studio Code** (editor de código)
- **Git** (controle de versão)
- **GitHub** (hospedagem de código)
- **Netlify** (deploy do site)

---

## 🗂️ Estrutura do Projeto

```
feiras-goiania/
│
├── index.html     # Estrutura da aplicação
├── style.css      # Estilos aplicados
└── script.js      # Lógica de mapa e marcadores
```

---

## 🚀 Passos para Criação e Deploy

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/feiras-goiania.git
cd feiras-goiania
```

### 2. Versionamento com Git

```bash
git init
git add .
git commit -m "Versão inicial"
```

### 3. Subida para o GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/feiras-goiania.git
git push -u origin master
```

### 4. Deploy com Netlify

- Acesse [https://www.netlify.com](https://www.netlify.com)
- Crie uma conta ou faça login
- Clique em **"Add new site" > "Import an existing project"**
- Escolha **GitHub** e selecione o repositório
- Configure o deploy:
  - **Build command:** *(deixe vazio)*
  - **Publish directory:** `./`
- Clique em **"Deploy site"**

Pronto! Seu site será publicado com um link do tipo:

```
https://nome-do-projeto.netlify.app
```

---

## ✅ Resultado Final

- Site com mapa interativo de feiras livres de Goiânia
- Hospedado gratuitamente e acessível de qualquer lugar
- Código aberto e versionado no GitHub

---

## 📌 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo.