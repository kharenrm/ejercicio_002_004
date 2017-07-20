
//​Un equipo tendrá 22 jugadores creados aleatoriamente
//La posición en la que juegan es completamente aleatoria
//El estar enfermo o no, es aleatorio (10% de probabilidad)
var nombres = ["Juan", "Martin", "Pedro", "Javier", "Gerardo", "Fer"];
var edad = [23,26,24,27,25,24];
var nacionalidad = ["Mexicana", "Chilena", "Española", "Colombiana"];
var posicion = ["portero", "defensa", "mediocentro", "delantero"];

function generarNombreAleatorio(){
    var numeroAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[numeroAleatorio];
}

function generarEdadAleatorio(){
     var edadAleatoria = Math.floor(Math.random() * edad.length);
    return edad[edadAleatoria];
}

function generarNacionAleatorio(){
     var nacAleatoria = Math.floor(Math.random() * nacionalidad.length);
    return nacionalidad[nacAleatoria];
}

function generarPosicionAleatoria(){
    var posicionAleatoria = Math.floor(Math.random() * posicion.length);
    return posicion[posicionAleatoria];
}

function generarPosicionAleatoria(){
    var posicionAleatoria = Math.floor(Math.random() * posicion.length);
    return posicion[posicionAleatoria];
}

function generarNumeroAleatorio(){
    return Math.round(Math.random() * (100 - 1) + 1);
}

function estarEnfermeAleatorio(){
    return Math.round(Math.random()*.10)==1 ? true:false;
}

var Persona = function(){
    this.nombre = "";
    this.edad = 0;
    this.nacionalidad = "";
    this.altura = 0;
    this.peso = 0;
    this.enfermo = null;
}
Persona.prototype.creaPersona = function(){
    this.nombre = generarNombreAleatorio();
    this.edad = generarEdadAleatorio();
    this.nacionalidad = generarNacionAleatorio();
    this.altura = 1.80;
    this.peso = 70;
    this.enfermo = estarEnfermeAleatorio();
}

//posicion: (portero/defensa/mediocentro/delantero)
//calidad: (0-100)
var Jugador = function(posicion, numero, calidad){
    this.creaPersona();
    this.posicion = posicion;
    this.numero = numero;
    this.calidad = calidad;
}
Jugador.prototype = new Persona();

var Entrenador = function(){
    this.creaPersona();
}
Entrenador.prototype = new Persona();
/*1 portero,4 defensas, 4 mediocentros, 2 delanteros*/
Entrenador.prototype.elegirPlantillaParaPartido = function(jugadores){
    var alineacion = [];
    var i = 0;
    var portero = false;

    while(alineacion.length<11 && jugadores[i]){
        if(jugadores[i].enfermo == false){
            /*if(jugadores[i].posicion == "portero" && portero == false){
                alineacion.push(jugadores[i]);
                portero = true;
            }*/
            alineacion.push(jugadores[i]);
        }
        i++;
    }
   
    var jugadoresSobrantes = jugadores;
    return alineacion;
}

var Equipo = function(){
    this.jugadores = [];
    this.entrenador = new Entrenador();
    for(var i=0; i<22; i++){
        this.jugadores.push(new Jugador(generarPosicionAleatoria(), generarNumeroAleatorio(), generarNumeroAleatorio()));
    }
}

var equipo1 = new Equipo();
plantillaEquipo1 = equipo1.entrenador.elegirPlantillaParaPartido(equipo1.jugadores);

var equipo2 = new Equipo();
plantillaEquipo2 = equipo2.entrenador.elegirPlantillaParaPartido(equipo2.jugadores);

var Partido =  function(equipo1, equipo2){
    this.equipo1 = equipo1;
    this.equipo2 = equipo2;
}
Partido.prototype.iniciarPartido = function(){
    console.log("iniciarPartido");
    console.log(this.equipo1);
    console.log(this.equipo2)
    /*A = (Suma de calidad de medio centros equipo 1) - (Suma de calidad de medio centros equipo 1)
    B = (Suma de calidad de delanteros 1) - (Suma de calidad de defensas equipo 2)
    C = A + B - (Suma de calidad de portero equipo B)
    Fortuna = numero aleatorio entre 0 y 100*/
    var cont=0;
    var A = 0;
    while(cont<this.equipo1.length){
        console.log(this.equipo1[cont]);
        if(this.equipo1[cont].posicion == "mediocentro"){
            A = A + this.equipo1[cont].calidad;
        }
        cont++;
    }
}

var partido = new Partido(plantillaEquipo1, plantillaEquipo2);
partido.iniciarPartido();




