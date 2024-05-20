
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Aquí puedes agregar cualquier código adicional para manipular el footer
            const links = document.querySelectorAll('#footer-placeholder #redes_sociales a');
            links.forEach(link => {
                link.setAttribute('target', '_blank');
            });
        })
        .catch(error => console.error('Error cargando el footer:', error));
});

