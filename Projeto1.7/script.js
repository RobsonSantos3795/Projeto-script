function calcular() {
    var txtvel = document.getElementById('txtvel');
    var res = document.getElementById('res');
    var vel = Number.parseFloat(txtvel.value);
    res.innerHTML = `<p>Sua velocidade foi registrada em ${vel} Km/h<p>`;
    if (vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>` 
    }else {
        res.innerHTML += 'Continue seguindo os exemplos das leis de transito!';
    }

}
