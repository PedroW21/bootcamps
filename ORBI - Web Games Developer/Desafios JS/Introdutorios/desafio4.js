let line = "10 90"; // coxinhas consumidas | participantes

separaValores = line.split(" ");

console.log(separaValores);

coxinhasConsumidas = separaValores[0];
participantesTotal = separaValores[1];

coxinhasPorParticipante = (coxinhasConsumidas / participantesTotal).toFixed(2);

console.log(coxinhasPorParticipante);
