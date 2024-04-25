document.getElementById('cambiarColor').addEventListener('click', function() {
    var colores = ['#ffcc00', '#66ccff', '#ff6666', '#99ff99', '#cc99ff'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
