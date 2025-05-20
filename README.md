# 🌱 Instituto Terra Viva — Front-End

Este repositório contém o **front-end** do projeto **Instituto Terra Viva**, uma ONG fictícia dedicada à preservação da biodiversidade e à conscientização ambiental.

A aplicação foi desenvolvida com **Angular** e está publicada no **Netlify**.

> ⚠️ O back-end foi movido para um repositório separado e está hospedado na plataforma Render.

---

## 🔗 Acesso Rápido

- 🌐 **Site online (Netlify):** [instituto-terra-viva.netlify.app](dapper-klepon-edecc3.netlify.app/)
- 🖥️ **Repositório do back-end:** [github.com/seu-usuario/backend-terra-viva](https://github.com/josiamiranda3/meu-projeto-backend)
- 🚀 **Back-end online (Render):** [https://terra-viva-api.onrender.com](https://dashboard.render.com/web/srv-d0ls6jadbo4c73c80um0) 

---

## 📁 Estrutura do Projeto

```bash
├── src/
│   ├── app/
│   │   ├── components/        # Componentes reutilizáveis (header, footer, etc)
│   │   ├── layouts/           # Layouts de página (default, blank)
│   │   ├── pages/             # Páginas principais do site (home, sobre, impactos, etc)
│   │   ├── app.routes.ts      # Configuração de rotas
│   │   └── app.config.ts      # Configuração global do Angular
│   └── assets/                # Vídeos, imagens e áudio
├── index.html
├── styles.css
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

- **Angular ++17** com Standalone Components
- **Bootstrap Icons**
- **Netlify** para deploy do front-end
- **Render** para deploy do back-end (API)

---

## 📦 Instalação e Execução Local

```bash
# 1. Clone o repositório
git clone https://github.com/josiamiranda3/meu-projeto-frontend

# 2. Acesse o diretório
cd front-terra-viva

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
ng serve
```

> A aplicação será executada em `http://localhost:4200`

---

## 🔈 Recurso de Áudio

O site possui um botão global que ativa/desativa uma música de fundo. O áudio está inicialmente desativado por padrão, e o ícone do microfone muda conforme o estado (mutado ou ativado).

---

## 🔗 Integração com Back-End

A aplicação consome dados via **API REST**, cujo repositório e hospedagem estão separados deste projeto. Para testar funcionalidades que envolvam requisições (como exibição de impactos ou doações), certifique-se de que a [API esteja online].

---

## 📄 Licença

Este projeto é fictício, criado para fins educacionais e sem fins lucrativos. Sinta-se à vontade para estudar, adaptar e utilizar como base em projetos pessoais.

---

## 🙋‍♂️ Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- GitHub: https://github.com/josiamiranda3
- E-mail: josiamiranda3@gmail.com
