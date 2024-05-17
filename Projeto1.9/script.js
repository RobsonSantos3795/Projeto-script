/*let d = document.getElementById('rodar');
d.innerHTML = 'ola mundo lindo!'*/
/*
let d = document.getElementById('rodar');
d.innerHTML = 'Ola , tudo está funcionando corretamente!';
*/

function acessar() {
    var descricao = document.getElementById('descricao');
    var res = document.getElementById('res');
    var rel = String(descricao.value);

    
    if (rel == 'abacate' || rel == 'Abacate' || rel == 'ABACATE') {
       location.href = 'index2.html';
    }else if (rel == 'melao' || rel == 'Melao' || rel == 'MELAO') {
        location.href = 'index3.html';

        
    }


};
