import fs from 'fs';
import { delay } from "./delay.js";
import { processIP } from "./routes.js";

async function main() {
  const inputFile = "lista-ips.csv";
  const outputFile = "resultado-ips.csv";
  const stateCount = {}; // Objeto para armazenar o número de IPs por estado

  // Ler o arquivo CSV
  try {
    const data = fs.readFileSync(inputFile, "utf8");
    const lines = data.trim().split("\n");

    // Processar cada linha do CSV
    for (const [index, line] of lines.entries()) {
      const columns = line.trim().split(",");
      const ipAddress = columns[0];

      console.log(`Processando linha ${index + 1} de ${lines.length}`);

      // Processa o IP atual iterado e salva os resultados na planilha
      await processIP(ipAddress, stateCount, outputFile);

      // Insere delay em cada requisição pra manter as 165 requisições por minuto na API
      if (index < lines.length - 1) {
        await delay(365); // 365 milissegundos
      }
    }

    console.log("Processamento concluído!");
  } catch (err) {
    console.error("Erro ao ler arquivo CSV:", err);
  }
}

main();
