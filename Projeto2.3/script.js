let valores = [8, 1, 7, 9, 4, 5, 3];
valores.push(2);
valores.sort();
valores[8]=10;

console.log(valores);

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}