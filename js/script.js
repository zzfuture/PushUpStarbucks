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