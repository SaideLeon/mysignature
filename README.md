# MySignature

MySignature é uma ferramenta simples para calcular o preço ideal de assinatura de serviços ou produtos com base em:

- **Custos Fixos**
- **Margem de Lucro Desejada**
- **Número de Assinantes Esperados**

A aplicação inclui uma interface web que exibe um gráfico de preços simulados para diferentes quantidades de assinantes.

## Tecnologias Utilizadas

- **Backend**: Node.js com Express.js
- **Frontend**: React.js com Recharts
- **Estilização**: TailwindCSS
- **Comunicação entre frontend e backend**: Axios



## Instalação e Execução

### Pré-requisitos
- Node.js instalado (versão 16 ou superior recomendada)
- Gerenciador de pacotes `npm` ou `yarn`

### Backend
1. Clone o repositório:
   ```bash
   git clone https://github.com/SaideLeon/mysignature.git
   cd mysignature/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```
   O servidor estará rodando em `http://localhost:3000`.

### Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação React:
   ```bash
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173` (porta padrão do Vite).

---

## Como Usar

1. Abra a aplicação em seu navegador (`http://localhost:5173`).
2. Preencha os campos de entrada:
   - **Custo Fixo**: Custos operacionais fixos do serviço.
   - **Margem de Lucro (%)**: Margem de lucro desejada.
   - **Número de Assinantes**: Quantidade esperada de assinantes.
3. Clique em **Calcular** para obter o preço ideal.
4. Confira o gráfico gerado com simulações para diferentes quantidades de assinantes.

## Estrutura do Projeto

```
mysignature/
│
├── backend/               # Código do servidor (Node.js)
│   ├── server.js          # Arquivo principal do backend
│   └── package.json       # Dependências do backend
│
├── frontend/              # Código do cliente (React.js)
│   ├── src/app.jsx            # Componente principal da aplicação
│   ├── package.json       # Dependências do frontend
│   └── public/            # Arquivos públicos do frontend
│
└── readme.md              # Documentação do projeto
```

---

## Funcionalidades

1. **Cálculo do Preço Ideal**: Baseado em custos fixos, margem de lucro e assinantes.
2. **Gráfico Interativo**: Visualize simulações de preços para diferentes números de assinantes.
3. **Interface Responsiva**: Design adaptável para desktop e mobile.

---

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commite:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request.

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
```rrcpp.jsx            # Componente principal da aplicação
│   ├── package.json       # Dependências do frontend
│   └── public/            # Arquivos públicos do frontend
│
└── readme.md              # Documentação do projeto
```

---

## Funcionalidades

1. **Cálculo do Preço Ideal**: Baseado em custos fixos, margem de lucro e assinantes.
2. **Gráfico Interativo**: Visualize simulações de preços para diferentes números de assinantes.
3. **Interface Responsiva**: Design adaptável para desktop e mobile.

---

## Contribuição

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commite:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request.

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
```