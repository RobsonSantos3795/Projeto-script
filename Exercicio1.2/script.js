function pesquisar() {
    var txtv = document.getElementById('txtv');
    var res = document.getElementById('res');
    var nac = String(txtv.value);
    res.innerHTML = `<p>Seu pais de nascimento é ${nac}!`;
    if (nac == 'Brasil') {
        res.innerHTML += `<p>Você é brasileiro!<p>`;
    }else {
        res.innerHTML += `<p>Você é estrangeiro!<p>`;
    }
}