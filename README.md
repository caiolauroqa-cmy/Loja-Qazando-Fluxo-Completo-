# 🧪 Automação de Testes E2E – Loja QAZANDO

Projeto de automação de testes Web utilizando **Cypress**, aplicando boas práticas de QA, organização de código e testes end-to-end.

---

## 🔧 Tecnologias Utilizadas
- Cypress (E2E)
- JavaScript
- Page Object Pattern
- Faker.js (Factories – massa de dados dinâmica)
- Fixtures (massa de dados estática)
- BDD (cenários descritos em Gherkin)

---

## 📌 O que foi testado
- Cadastro de usuário
- Login
- Navegação para o catálogo de produtos
- Escolha das características do produto (tamanho, cor e quantidade)
- Adição de itens ao carrinho
- Cadastro e edição de endereço de entrega
- Validação da mensagem de ordem de compra realizada com sucesso
- Fluxo completo E2E

---

## 🧪 Cenários de Teste
- 15 cenários escritos em BDD  
- 4 cenários automatizados  

Fluxos automatizados:
- Login
- Adicionar item ao carrinho
- Preencher endereço de entrega
- Criar ordem de compra

Técnicas utilizadas:
- **Partição de Equivalência** (dados válidos e inválidos)
- **Teste baseado em Casos de Uso** (fluxos completos do usuário)

---

## ▶ Como executar o projeto

bash 
npm install 
npx cypress open

