/*
let a = 0;

while (a <= 10) {
    console.log(a);
    a++;
}


do {
    console.log(a);
    a++;
} while (a<=10);
 

for (let a = 0; a <= 10; a = a + 1) {
    console.log(`O número a seguir será o ${a}`);
}
*/

var mudar = document.getElementById('mudar');

mudar.addEventListener('mouseenter' , entrar);
mudar.addEventListener('mouseout' , sair);
 
function entrar() {
    mudar.style.background = 'yellow';
}

function sair() {
    mudar.style.background = 'green';
}