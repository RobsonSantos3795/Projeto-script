let pacote = [8, 5, 6, 4, 9];

console.log(pacote);

pacote.sort();

let pos = 0;
for ( ; pos < pacote.length; ) {
    console.log(`O pacote ${pos} tem o valor ${pacote[pos]}`);
    pos = pos + 1;
}