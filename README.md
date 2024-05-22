# Verifica IPs

## Descrição
Esta é uma aplicação simples que lê uma lista de IPs em uma planilha .CSV, verifica de qual Estado do Brasil o IP se refere e em um novo .CSV, insere a quantidade de IPs de cada Estado.

## Tecnologias
- Node.js
- Vanilla Javascript
- Axios (requisições HTTP)

## Pré-requisitos
Certifique-se de ter o seguinte instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação
1. Clone este repositório para sua máquina local:
   ```sh
   git clone https://github.com/renatowolff/verifica-ips.git
   cd verifica-ips
## Instale as dependências:
npm install

## Inicie a aplicação:
- Tenha certeza que o arquivo lista-ips.csv foi alimentado com os IPs a serem verificados.
- Em seu terminal, digite:
   ```sh
  npm run start

Será verificado IP por IP com um certo delay adicionado, para respeitar o limite da API externa utilizada.
No terminal será gerado o console de verificação e conclusão de cada IP.
