var listaPeliculasItems2 = document.querySelectorAll('#listaPeliculas2 li');
listaPeliculasItems2.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.classList.add('resaltado');
    });

    item.addEventListener('mouseout', function() {
        item.classList.remove('resaltado');
    });
});
