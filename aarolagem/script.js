window.onload = function() {
    var container = document.getElementById('container');
    var scrollAmount = 1; // Quantidade de pixels para rolar
    var delay = 50; // Delay em milissegundos entre cada movimento
    //Define o intervalo de tempo em milissegundos entre cada movimento de rolagem. Neste caso, é 50 milissegundos (0,05 segundos).

    function scrollHorizontally() {  //será responsável por mover a rolagem horizontalmente.
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;  //Se o contêiner estiver no final do conteúdo, a rolagem é reiniciada para o início (posição 0)
        } else {
            container.scrollLeft += scrollAmount;
        }
    }

    var scrollInterval = setInterval(scrollHorizontally, delay);

    // Opcional: Pausar a rolagem ao passar o mouse sobre o container
    /*container.addEventListener('mouseover', function() {
        clearInterval(scrollInterval);
    });

    // Opcional: Retomar a rolagem ao retirar o mouse do container
    container.addEventListener('mouseout', function() {
        scrollInterval = setInterval(scrollHorizontally, delay);
    }); */
};
