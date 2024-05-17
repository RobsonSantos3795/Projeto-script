//Aparecerá na página HTML
/*  document.write('Olá mundo'); */ 

//Adicionando texto já descrito no documento
/* var p1 = window.document.getElementsByTagName('p')[0];
window.document.write('O resultado será: ' + p1.innerText); */

//Modelo (TAG)
var p1 = window.document.getElementsByTagName('p')[1];
document.write(p1.innerHTML);
p1.style.color = 'blue';
var corpo = document.body;
corpo.style.background = 'yellow'; 


//Modelo (ID)
var d = document.getElementById('msg');
//document.getElementById('msg').innerHTML = 'Olá mudão!' = a linha seguinte abaixo!
d.innerHTML =  'Olá mundos lindos...'  //O que será apresentado na web!

//Modelo (SELETOR)
var c = document.querySelector('p.msg2');
c.style.color = 'green';