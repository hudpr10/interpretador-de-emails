# 📧 IAterpretadora de E-mail

## 📖 Descrição

A **IAterpretadora de E-mail** é uma aplicação que utiliza inteligência artificial para analisar o conteúdo de emails.  
Ela permite que o usuário insira o texto manualmente ou envie arquivos `.txt` e `.pdf` para análise.

A aplicação classifica o email como **produtivo** ou **improdutivo**, gera uma **justificativa** da decisão e ainda sugere uma **resposta automática**.

## 🚀 Funcionalidades

- Inserir texto manualmente ou enviar arquivos `.txt` e `.pdf`.
- Classificação do email em **produtivo** ou **improdutivo**.
- Justificativa explicando o motivo da classificação.
- Sugestão automática de resposta ao email.
- Opção de **copiar** o conteúdo exibido com um clique.

## 🛠️ Tecnologias utilizadas

### Frontend

- HTML
- CSS
- JavaScript (fetch API, modularização)

### Backend

- Python 3.13.7
- Flask (API)
- Flask-Cors
- PyPDF2 (leitura de PDFs)
- google-genai (integração com Gemini AI)
- python-dotenv (configuração do `.env`)
- pydantic

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Python 3.13.7](https://www.python.org/downloads/)
- `pip` para gerenciamento de pacotes

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/hudpr10/interpretador-de-emails.git
cd interpretador-de-emails
```

2. Instale as dependências:

```bash
pip install -r requirements.txt
```

3. Configure as variáveis de ambiente criando um arquivo `.env` na pasta **backend** do projeto:

```env
GEMINI_API_KEY=sua_chave_aqui
```

4. Configure as rotas no arquivo `frontend/js/api.js`, caso utilize rotas locais é necessário colocar o endereço fornecido pelo Flask.

```javascript
const URL = "http://127.0.0.1:5000";
```

## ▶️ Como rodar

1. Para executar o backend é necessário rodar o comando:

```bash
python main.py
```

2. Para executar o frontend é possível utilizar uma extensão como **live-server** ou simplesmente abrir o arquivo `index.html`

## 🤝 Contribuições

Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues e pull requests.
