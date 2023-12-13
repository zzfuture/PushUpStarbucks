# PushUpStarbucks

Projecto FrontEnd enfocado en un prototipo de index para Starbucks.

Se hizo uso de Bootstrap, BoxIcons y Javascript

Responsive para desktop con (maxwidth) y para mobile.



Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <a class="navbar-brand" href="#"><img src="img/logo.png" alt="logo.img"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" id="home">
                    <a class="nav-link active home" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/menu">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/seccion/novedades">Novedades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/stores">Contacto</a>
                </li>
            </ul>
        </div>
        <div class="offcanvas offcanvas-end bmobile" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">

            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/menu">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/seccion/novedades">Novedades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://www.starbucks.com.co/stores">Contacto</a>
                    </li>
            </div>
        </div>
    </nav>
```

Desplazamiento entre bebidas (carrusel)

```html
<div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators fixed-bottom">
            <img src="img/img1.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active cr-btn" id="bebidaA" aria-current="true" aria-label="Slide 1" alt="verdebtn">
            <img src="img/img2.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="cr-btn" id="bebidaB" aria-label="Slide 2" alt="whiterosebtn">
            <img src="img/img3.png" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="cr-btn" id="bebidaC" aria-label="Slide 3" alt="whiterosebtn">
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="content">
                    <div class="content_left">
                        <div class="slogan"><span>It's not just Coffee It's</span><span id="starbucks" style="color: #017143; "> Starbucks</span></div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident recusandae ullam soluta suscipit similique obcaecati eius, dolorem dolore? Culpa amet facere sit ab reiciendis laborum tempore consectetur minus? Ullam?</div>
                    </div>
                    <div class="content_right">
                        <img id="verdeIMG" src="img/img1.png" alt="verde">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="content">
                    <div class="content_left">
                        <div class="slogan"><span>It's not just Coffee It's</span><span id="starbucks" style="color: #ee7396;"> Starbucks</span></div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident recusandae ullam soluta suscipit similique obcaecati eius, dolorem dolore? Culpa amet facere sit ab reiciendis laborum tempore consectetur minus? Ullam?</div>
                    </div>
                    <div class="content_right">
                        <img src="img/img2.png" alt="verde">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="content">
                    <div class="content_left">
                        <div class="slogan"><span>It's not just Coffee It's</span><span id="starbucks" style="color: #ca3a9f"> Starbucks</span></div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident recusandae ullam soluta suscipit similique obcaecati eius, dolorem dolore? Culpa amet facere sit ab reiciendis laborum tempore consectetur minus? Ullam?</div>
                    </div>
                    <div class="content_right">
                        <img src="img/img3.png" alt="verde">
                    </div>
                </div>
            </div>
        </div>
```

Javascript

```javascript
let nv = document.getElementById("home");
let starbucks = document.getElementById("starbucks");
let circle = document.querySelector(".quarter");
let A = "#017143";
let B = "#ee7396" ;
let C = "#ca3a9f";
document.body.addEventListener('click', function (evt) {
    if (evt.target.id == "bebidaA"){
        nv.style.background = A;
        circle.style.background = A;
    }
    else if (evt.target.id == "bebidaB"){
        nv.style.background = B;
        circle.style.background  = B;
    }
    else if (evt.target.id == "bebidaC"){
        nv.style.background = C;
        circle.style.background = C;
    }
}); 
```


