import get from "axios";
import { writeFileSync, appendFileSync } from "fs";

export async function processIP(ipAddress, stateCount, outputFile) {
    try {
      const response = await get(
        `https://json.geoiplookup.io/${ipAddress}`
      );
      const ipInfo = response.data;
  
      if (ipInfo.country_code === 'BR') {
        const state = ipInfo.region;
  
        // Incrementa o contador de IPs para o estado correspondente
        stateCount[state] = (stateCount[state] || 0) + 1;
  
        // Escrever os resultados no arquivo CSV
        writeFileSync(outputFile, `Estado,Quantidade\n`, 'utf8');
        for (const [state, count] of Object.entries(stateCount)) {
          appendFileSync(outputFile, `${state},${count}\n`, 'utf8');
        }
  
        console.log(`IP ${ipAddress} processado e resultados salvos.`);
      } else {
        console.log(`IP ${ipAddress} não está localizado no Brasil.`);
      }
    } catch (error) {
      console.error(`Erro ao processar IP ${ipAddress}:`, error.message);
    }
  }