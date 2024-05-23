# Verifica UF IPs

## Descrição
Esta é uma aplicação simples que lê uma lista de IPs em uma planilha .CSV, verifica de qual Estado do Brasil o IP se refere e em um novo .CSV, insere a quantidade de IPs de cada Estado.

## Problema
Uma casa de aposta não tinha a informação geográfica de seus clientes no Brasil, não sabia de qual Estado seus clientes eram pois seu sistema fechado atual não informava o nome do Estado do cliente, somente o IP.
A quantia única foram de aproximadamente 139 mil IPs.

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
- Tenha certeza que o arquivo lista-ips.csv foi alimentado com os IPs a serem verificados, aceitando tanto IPv4 como IPv6.
- Em seu terminal, digite:
   ```sh
  npm run start

Será verificado IP por IP com um certo delay adicionado, para respeitar o limite da API externa utilizada.
No terminal será gerado o console de verificação e conclusão de cada IP.

## Preview resultado
![exemplo-resultado](https://github.com/renatowolff/verifica-uf-ips/assets/67716741/af95d3b7-625f-4717-bff8-0783dcaca628)


