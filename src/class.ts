type Contador = {points: number}
const contador:Contador = {
    points:parseInt(localStorage.getItem('points') ?? '0')
}
class IManoCons {
    start(){
        img2!.innerHTML = `<h2>THE HOUSE PICKED</h2><img class="bItem" src="images/${this.nombre}IMG.svg" alt="">`;
        op1!.setAttribute("style","transform:translateX(0)")
        op2!.setAttribute("style","transform:translateX(0)");
        localStorage.setItem('points',`${contador.points}`);
    }
    nombre: string;
    constructor(nombre:string){this.nombre = nombre}
    empate(){return 'EMPATE'}
    ganar(){
        contador.points >= 0 ? contador.points++ : null;
        numberPoints!.innerHTML = `${contador.points}`
        return 'TÚ GANAS';
    }
    perder(){
        contador.points > 0 ? contador.points-- : null;
        numberPoints!.innerHTML = `${contador.points}`
        return 'TÚ PIERDES';
    }
}
class Piedra extends IManoCons{
    constructor(nombre:string){super(nombre)}
    jugar(tuOpcion:any){
        tittleResult!.innerHTML = tuOpcion.jugarContraPiedra();

        this.start();
    }
    jugarContraPiedra(){return this.empate()}
    jugarContraPapel(){return this.perder()}
    jugarContraTijera(){return this.ganar()}
}
class Papel extends IManoCons{
    constructor(nombre:string){super(nombre)}
    jugar(tuOpcion:any){
        tittleResult!.innerHTML = tuOpcion.jugarContraPapel();
        this.start();
    }
    jugarContraPiedra(){return this.ganar()}
    jugarContraPapel(){return this.empate()}
    jugarContraTijera(){return this.perder()}
}
class Tijera extends IManoCons{
    constructor(nombre:string){super(nombre)}
    jugar(tuOpcion:any){
        tittleResult!.innerHTML = tuOpcion.jugarContraTijera();
        this.start();
    }
    jugarContraPiedra(){return this.perder()}
    jugarContraPapel(){return this.ganar()}
    jugarContraTijera(){return this.empate()}
}