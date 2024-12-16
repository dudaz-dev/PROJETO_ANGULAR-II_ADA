## 🏥 Gerenciador de Consultas Médicas

Este projeto é o trabalho final do módulo **Angular II**, consistindo no desenvolvimento de uma aplicação para o gerenciamento de consultas médicas. O objetivo é aplicar os conceitos aprendidos ao longo do curso, criando uma solução funcional e organizada.

## 🎨 Design do Projeto  
O design completo da aplicação foi elaborado no : 
[🔗 **Figma**](https://www.figma.com/design/sW2Gg05E1qvDBmpEmzw4hD/TRABALHO-ADA?node-id=0-1&t=asS1d6c7R9agFrql-1)  

## 🌟 Funcionalidades Principais

### 1. **Cadastro e Login de Usuários**
**Tela de Cadastro**: Permite a criação de usuários com dois perfis disponíveis:
  - **USER**: Usuário comum, com permissões restritas.
  - **ADMIN**: Usuário administrador, com acesso completo.

**Tela de Login**: Autentica o usuário, redirecionando-o ao **Dashboard** com base no seu perfil.

### 2. **Dashboard Personalizado**
O conteúdo do **Dashboard** é ajustado de acordo com o perfil do usuário autenticado:

#### **Perfil ADMIN**
- Visualiza **todas as consultas** agendadas no sistema.
- Pode:
   **Cancelar consultas,**
   **Marcar consultas como concluídas.**

#### **Perfil USER**
- Visualiza apenas suas próprias consultas.
- Pode:
 **Editar consultas**, **Cancelar consultas.**

### 3. **Gerenciamento de Consultas**
 Os usuários podem acompanhar e gerenciar suas consultas conforme os seguintes **status**:
- **SCHEDULED** (Agendada): Status padrão ao criar uma consulta.
- **DONE** (Concluída): Indica que a consulta foi realizada.
- **CANCELED** (Cancelada): Consulta cancelada.

 **Regras de negócio**:
- Consultas **concluídas** ou **canceladas** não podem ser editadas.
- Consultas **canceladas** não podem ser marcadas como concluídas.

## 🛠️ Tecnologias Utilizadas
- **Angular**: Framework principal para desenvolvimento da aplicação.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **HTML e SCSS**: Para estilização e estruturação da interface.
- **API Rest**: Para persistência de dados, baseada no repositório disponibilizado pelo professor.
## ⚙️ Instalação e Execução

### 1. Clone o repositório:
```bash
git clone https://github.com/dudaz-dev/PROJETO_ANGULAR-II_ADA.git
```

### 2. Navegue até a pasta do projeto:
```bash
cd gerenciadorConsultas
```

### 3. Instale as dependências:
Certifique-se de ter o **Node.js** e o **Angular CLI** instalados:
```bash
npm install
```

### 4. Execute a aplicação:
Inicie o servidor de desenvolvimento:
```bash
ng start
```
Acesse a aplicação em: `http://localhost:4200`

## 👩‍💻 Desenvolvedores
Desenvolvido com 💙 pela equipe **Equipe 02**.

## 📝 Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
