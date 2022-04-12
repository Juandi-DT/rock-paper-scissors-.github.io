"use strict";
// Opciones(piedra,papel,tijera)
const piedra = new Piedra('rock');
const papel = new Papel('paper');
const tijera = new Tijera('scissors');
const options = [papel, tijera, piedra];
// Selectores
const numberPoints = document.querySelector(".score-number");
const contentResult = document.querySelector(".Resultado");
const tittleResult = document.querySelector(".mos-resultado-title");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const jugarDeNuevo = document.querySelector(".Resultado-button");
const scene1 = document.querySelector(".options-content");
const scene2 = document.querySelector(".options-content-lucha");
const op1 = document.querySelector(".trns-1");
const op2 = document.querySelector(".trns-2");
const rulesDiv = document.querySelector(".RulesDiv");
// puntos reset
function verificacionPuntos() {
    if (localStorage.getItem('points') !== undefined && localStorage.getItem('points') !== null) {
        numberPoints.textContent = `${localStorage.getItem('points')}`;
    }
    else {
        localStorage.setItem('points', '0');
    }
    return 0;
}
verificacionPuntos();
function jugar(tuOpcion) {
    let randomNumberForEnemy = Math.floor(Math.random() * options.length);
    let opcionContrincante = options[randomNumberForEnemy];
    // Imgaen de tu opcion
    img1.innerHTML = `<h2>YOU PICKED</h2><img class="bItem" src="images/${tuOpcion.nombre}IMG.svg" alt="">`;
    // Configuracion de escena.
    scene1.setAttribute("style", "opacity:0");
    setTimeout(() => { scene1.setAttribute("style", "opacity:0;transform:translateY(-200%);"); }, 500);
    scene2.setAttribute("style", "transform:translateY(0)");
    // Animacion
    const opcionImagen = ['rockIMG', `paperIMG`, 'scissorsIMG', 'rockIMG', `paperIMG`, 'scissorsIMG'];
    let time = 300;
    let iterant = 0;
    const repeticiones = opcionImagen.length;
    (function myLoop(i) {
        setTimeout(function () {
            img2.innerHTML = `<h2>THE HOUSE PICKED</h2><img class="bItem" src="images/${opcionImagen[iterant]}.svg" alt="">`;
            iterant++;
            if (--i)
                myLoop(i);
        }, time);
    })(repeticiones);
    contentResult.setAttribute('style', 'visibility: hidden;pointer-events: none;');
    // Mostrar resultado
    setTimeout(() => {
        opcionContrincante.jugar(tuOpcion);
        scene2.setAttribute("style", "transform:translateY(0);");
        contentResult.removeAttribute("style");
    }, time * (repeticiones + 1));
    // Habilitando reseteo juego
    jugarDeNuevo === null || jugarDeNuevo === void 0 ? void 0 : jugarDeNuevo.addEventListener("click", resetGame);
}
document.querySelectorAll('.bItem').forEach(element => {
    element.addEventListener('click', () => { jugar(options[parseInt(element.parentElement.classList[1][1]) - 1]); });
});
function resetGame() {
    // Resetando Animacion
    op1.removeAttribute("style");
    op2.removeAttribute("style");
    // Configuracion de escena.
    tittleResult.innerHTML = '';
    setTimeout(() => { scene1.setAttribute("style", "opacity:1;transform:translateY(0);"); }, 200);
    scene2.setAttribute("style", "transform:translateY(-400%)");
    // numberPoints!.innerHTML = `${contador.points}`;
}
function cerrarRules() {
    rulesDiv.setAttribute("style", "pointer-events: none;visibility: hidden;");
}
function abrirRules() {
    rulesDiv.setAttribute("style", "pointer-events: all;visibility: visible;");
}
