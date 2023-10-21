
# MatchPet Frontend

## Descrição
O projeto "MatchPet" é a interface do usuário para o sistema especialista de adoção de animais de estimação, criado com React.js e TypeScript. Este frontend permite que os usuários interajam com o sistema, visualizem as regras e façam a adoção de animais.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas e serviços instalados e configurados em sua máquina:

- **Node.js** (v16.16.0 ou versão posterior) - Você pode verificar a versão do Node.js instalada com o seguinte comando:
  ```bash
  node --version
  ```
________________________________________________________________________________________________________________


## Instalação e Configuração
Siga estas etapas para instalar e configurar o projeto "MatchPet Frontend":

1. Clone o projeto do repositório:

   ```bash
   git clone https://github.com/Cicera1987/matchpet.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd matchpet
   ```

3. Instale as dependências do projeto usando o npm:

   ```bash
   npm install
   ```

4. Configure a URL de conexão com o backend:
   - Abra o arquivo `.env` na raiz do projeto.
   - Defina a variável de ambiente `REACT_APP_API_URL` para a URL de conexão com o backend. Por exemplo:

   ```env
   REACT_APP_API_URL=http://localhost:porta/api
   ```

   Certifique-se de substituir `http://localhost:porta/api` pela URL correta do seu backend.


________________________________________________________________________________________________________________


## Uso

Após a instalação e configuração, você pode iniciar o servidor de desenvolvimento para executar o projeto:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no navegador. Você poderá acessar a interface do usuário e interagir com o sistema especialista de adoção de animais.



________________________________________________________________________________________________________________

## Funcionalidades
- **Listar Regras**: Visualize a lista de regras do sistema.
- **Adoção de Animais**: Faça a adoção de animais de estimação seguindo as regras do sistema.



________________________________________________________________________________________________________________
## Autor
- Cicera Ribeiro 



________________________________________________________________________________________________________________
## Agradecimentos

Obrigada por usar o projeto "MatchPet"!