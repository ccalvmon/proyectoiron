document.getElementById('agregarPelicula').addEventListener('click', function() {
    var nuevaPeliculaInput = document.getElementById('nuevaPelicula');
    var nuevaPelicula = nuevaPeliculaInput.value;
    if (nuevaPelicula !== '') {
        var listaPeliculas = document.getElementById('listaPeliculas');
        var nuevaPeliculaItem = document.createElement('li');
        nuevaPeliculaItem.textContent = nuevaPelicula;
        listaPeliculas.appendChild(nuevaPeliculaItem);
        nuevaPeliculaInput.value = '';

        // Crear y mostrar la imagen de la película
        var imagenPelicula = document.createElement('img');
        imagenPelicula.src = 'https://cdn.memegenerator.es/imagenes/memes/full/32/48/32489944.jpg';
        listaPeliculas.appendChild(imagenPelicula);

        // Ocultar la imagen después de 2 segundos
        setTimeout(function() {
            listaPeliculas.removeChild(imagenPelicula);
        }, 2000);
    }
});
