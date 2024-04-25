// Definir la sopa de letras
const sopa = [
    ['a', 'v', 'a', 't', 'a', 'r', 'ñ', 'l', 'e', 'a'],
    ['t', 'i', 't', 'i', 'n', 'i', 'c', 'x', 't', 'x'],
    ['p', 'a', 'd', 't', 'i', 't', 'a', 'n', 'i', 'c'],
    ['j', 'u', 'p', 'a', 's', 's', 'e', 'c', 'z', 't'],
    ['f', 'o', 'r', 'r', 'e', 'i', 't', 'x', 'r', 'o'],
    ['m', 'a', 't', 'r', 'c', 'x', 'h', 'i', 'e', 'p'],
    ['g', 'l', 'a', 'i', 'i', 'a', 't', 'r', 'd', 'g'],
    ['p', 'u', 'n', 'p', 'o', 'r', 'd', 't', 'i', 'u'],
    ['g', 'e', 'd', 'f', 'a', 't', 'h', 'a', 'p', 'n'],
    ['c', 'h', 'a', 'w', 'x', 'i', 'r', 'm', 's', 'm']
];

// Crear la sopa de letras en el HTML
for (let i = 0; i < sopa.length; i++) {
    for (let j = 0; j < sopa[i].length; j++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");
        casilla.textContent = sopa[i][j];
        casilla.addEventListener("click", function() {
            this.classList.toggle("seleccionada"); // Alternar clase "seleccionada" al hacer clic
        });
        sopaDeLetras.appendChild(casilla);
    }
}

// Obtener la lista de elementos de la lista de palabras clave
var listaPalabras = document.querySelectorAll('#palabrasClave li');

// Iterar sobre cada elemento de la lista
listaPalabras.forEach(function(item) {
    // Agregar un evento de clic a cada elemento
    item.addEventListener('click', function() {
        // Cambiar el fondo del elemento a negro
        this.style.backgroundColor = "#000";
        this.style.color = "#fff";
    });
});
const stars = document.querySelectorAll('.rating .star');
const ratingText = document.getElementById('ratingText');

stars.forEach(star => {
  star.addEventListener('click', function() {
    const value = parseInt(this.getAttribute('data-value'));
    ratingText.textContent = `Tu puntuación es: ${value} estrella(s).`;
    
    // Resetea el color de todas las estrellas
    stars.forEach(s => {
      s.style.color = '#ddd';
    });

    // Ilumina solo las estrellas seleccionadas
    for (let i = 0; i < value; i++) {
      stars[i].style.color = '#ffcc00';
    }
  });
});
