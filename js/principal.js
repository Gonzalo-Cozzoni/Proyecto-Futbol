document.write(`<header>
<nav id="nav-header">
    <ul class="menu">
        <div>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="QuienesSomos.html">¿Quienes somos?</a></li> 
            <li><a href="#carrusel">Conocenos</a></li>                   
        </div>
        <div>
            <li><a href="Registrate.html">Registrate</a></li>
            <li><a href="IniciarSesion.html">Iniciar Secion</a></li>
        </div>
    </ul>
</nav>
</header>`)

document.write(`<main>
<section id="banner">
    <h1 id="titulo">Reserva tu cancha AHORA</h1>
    
</section>
<section id="carrusel">
    <div id="contenedor_carrusel">
        <div class="item_carrusel" id="carrusel_foto1">
            <div class="tarjetas">
                <img src="./img/Imagen1.jpg" alt="foto1">
            </div>
            <div class="flechitas">
                <a href="#carrusel_foto3">
                    <i> < </i>
                </a>
                <a href="#carrusel_foto2">
                    <i> > </i>
                </a>
            </div>                   
        </div>
        <div class="item_carrusel" id="carrusel_foto2">
            <div class="tarjetas">
                <img src="./img/Imagen2.jpg" alt="foto2">
            </div>
            <div class="flechitas">
                <a href="#carrusel_foto1">
                    <i> < </i>
                </a>
                <a href="#carrusel_foto3">
                    <i> > </i>
                </a>
            </div>                   
        </div>
        <div class="item_carrusel" id="carrusel_foto3">
            <div class="tarjetas">
                <img src="./img/imagen3.jpg" alt="foto3">
            </div>
            <div class="flechitas">
                <a href="#carrusel_foto2">
                    <i> < </i>
                </a>
                <a href="#carrusel_foto1">
                    <i> > </i>
                </a>
            </div>                   
        </div>
    </div>
    

    
    
</section>

</main>`)