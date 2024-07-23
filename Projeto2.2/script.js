let num = [5, 8, 7, 6, 4, 2];
num.push(1); // Adiciona mais um
num.sort();  // Ordena o vetor
console.log(num); // Exibe o vetor
console.log(`O valor tem ${num.length} posições`); // Exibe tamanho do vetor
console.log(`O primeiro valor é o ${num[0]}`); // Exibe primeiro elemento do vetor
let pos = num.indexOf(5);
if (pos == -1) {
    console.log('Não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
