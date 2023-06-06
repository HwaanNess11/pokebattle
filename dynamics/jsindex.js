//------------------------------------- Declaración de clases -----------------------------------------------------

class entrenador{
    constructor(nombre, region, medallas, equipo){
        this.nombre = nombre;
        this.region = region;
        this.medallas = medallas;
        this.equipo = equipo;
    }
}

class pokemon{
    constructor(nombre, vida, ataque, ataqesp, defensa, defenesp, velocidad, tipo){
        this.nombrepok  = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.ataqesp = ataqesp;
        this.defensa = defensa;
        this.defenesp = defenesp;
        this.velocidad = velocidad;
        this.tipo = tipo;
    }
}


class movimiento{
    constructor(nombre, probabilidad, potencia, tipo, categoria){
        this.nombmov = nombre;
        this.probabilidad = probabilidad;
        this.potencia = potencia;
        this.tipo = tipo;
        this.categ = categoria;
    }
}

//-------------------------------------------Función de batalla--------------------------------------------------

function batallapok (ent1, ent2, poke1, poke2, movpoke1, movpoke2){
    let ataque1, ataque2;
    let defensa1, defensa2;
    let dano1, dano2;
    let vidarest1, vidarest2;

    let prob1, prob2, pruebprob1, pruebprob2;
    prob1 = movpoke1.probabilidad/10;
    prob2 = movpoke2.probabilidad/10;
    pruebprob1 = (Math.random()*(10 - 1)+1);
    pruebprob2 = (Math.random()*(10 - 1)+1);

    ataque1 = poke1.ataque + movpoke1.potencia;
    if(poke1.tipo[0] == movpoke1.tipo || poke1.tipo[1] == movpoke1.tipo)
        ataque1 = ataque1 + poke1.ataqesp;
    if(pruebprob1 >= prob1)
        ataque1 = 0;
    if(pruebprob1 >= prob1)
        console.log("Ataque de " + poke1.nombrepok + " fallido");
    else
        console.log(poke1.nombrepok + " lanzó el ataque " + movpoke1.categ + " " + movpoke1.nombmov + " de tipo " + movpoke1.tipo + " exitosamente");
    
    ataque2 = poke2.ataque + movpoke2.potencia;
    if(poke2.tipo[0] == movpoke2.tipo || poke2.tipo[1] == movpoke2.tipo)
        ataque2 = ataque2 + poke2.ataqesp;
    if(pruebprob2 >= prob2)
        ataque2 = 0;
    if(pruebprob2 >= prob2)
        console.log("Ataque de " + poke2.nombrepok + " fallido");
    else
        console.log(poke2.nombrepok + " lanzó el ataque " + movpoke2.categ + " " + movpoke2.nombmov + " de tipo " + movpoke2.tipo + " exitosamente");
    
    defensa1 = poke1.defensa;
    if(poke1.tipo[0] == movpoke2.tipo || poke1.tipo[1] == movpoke2.tipo)
            defensa1 = defensa1 + poke1.defenesp;

            if(defensa1 <= ataque2)
                dano1 = (ataque2-defensa1)/2;
            else
                dano1 = 0;
        
            vidarest1 = poke1.vida - dano1;
            poke1.vida = vidarest1;

    defensa2 = poke2.defensa;
    if(poke2.tipo[0] == movpoke1.tipo || poke2.tipo[1] == movpoke1.tipo)
            defensa2 = defensa2 + poke2.defenesp;

            if(defensa2 <= ataque1)
                dano2 = (ataque1-defensa2)/2;
            else
                dano2 = 0;
        
            vidarest2 = poke2.vida - dano2;
            poke2.vida = vidarest2;
        
    if(poke1.vida<=0)
        console.log(poke1.nombrepok + " de " + ent1.nombre + " ha sido derrotado");
    else
        console.log("La vida restante de "+ poke1.nombrepok+ " es " + poke1.vida);

    if(poke2.vida<=0)
        console.log(poke2.nombrepok + " de " + ent2.nombre +  " ha sido derrotado");
    else
        console.log("La vida restante de "+ poke2.nombrepok+ " es " + poke2.vida);

    if(poke1.vida<=0)
        ent1.equipo.shift();
    if(poke2.vida<=0)
        ent2.equipo.shift();
    
    console.log(ent1.equipo);
    console.log(ent2.equipo);
}

//-----------------------------------------Declaracion de objetos pokémon y movimientos----------------------------------------------------

let Chikorita = new pokemon("Chikorita", 45, 49, 5, 65, 7, 45, ["planta"]);
let Beedrill = new pokemon("Beedrill", 65, 90, 5, 40, 8, 75, ["bicho", "veneno"]);
let Psyduck = new pokemon("Psyduck", 50, 52, 6, 48, 5, 55, ["agua"]);
let Pidgeotto = new pokemon("Pidgeotto", 63, 60, 5, 55, 5, 71, ["normal", "volador"]);
let Sandslash = new pokemon("Sandslash", 75, 100, 5, 110, 6, 65, ["tierra"]);
let Celebi = new pokemon("Celebi", 100, 100, 10, 100, 10, 100, ["psíquico", "planta"]);
let Jigglypuff = new pokemon("Jigglypuff", 115, 45, 5, 20, 3, 20, ["normal", "fairy"]);
let Dewgong = new pokemon("Dewgong", 90, 70, 7, 80, 10, 70, ["agua", "hielo"]);
let Magneton = new pokemon("Magneton", 50, 60, 12, 95, 7, 70, ["electrico", "acero"]);



let rollout = new movimiento("Rollout", 90, 30, "electrico", "físico");
let sandstr = new movimiento("Sandsear Storm", 80, 100, "tierra", "especial");
let smog = new movimiento("Smog", 70, 30, "veneno", "especial");
let steelb = new movimiento("Steel Beam", 90, 140, "acero", "físico");
let supers = new movimiento("Supersonic", 50, 100, "normal", "especial");
let zippyz = new movimiento("Zippy Zap", 60, 115, "bicho", "físico");
let spore = new movimiento("Spore",	100, 80, "planta", "físico");
let surf = new movimiento("Surf", 70, 60, "agua", "especial");

//------------------------------------------Variables para los eventos---------------------------------------------------

const hacerequipo = document.getElementById("equipo");
let poseq1 = 0, poseq2 = 0, posgen=0;
let equipo1=[,], equipo2=[,];
let ent1 =new entrenador("Ash Ketchum", "SC", 0, equipo1);
let ent2 =new entrenador("Diantha", "SC", 0, equipo2);

const movimientos = document.getElementById("movimientos");
let jugador=1, turno=1;
let mov1, mov2;

//---------------------------------------------------Eventos--------------------------------------------------------------

window.addEventListener("load", ()=>{
    if(posgen==0){ //Introducción  e instrucciones generales de la batalla
        console.log("-----> BIENVENIDO A POKEMON BATTLE");
        console.log("-----> La batalla será entre dos entrenadores, eligirán a sus pokemon y luego sus movimientos por turno, el ganador será quien derrote al equipo contrario primero");
        console.log("-----> Es el turno de " + ent1.nombre + " de elegir sus pokemones");
    }
    //------------------------------Evento para que los jugadores eligan su equipo-----------------------------------------
    hacerequipo.addEventListener("click", (evento)=>{
        function equipopok(){
            var obj;
            if(evento.target.id == "Chikorita" || evento.target.className == "Chikorita")
                obj = Chikorita;
            if(evento.target.id == "Beedrill" || evento.target.className == "Beedrill")
                obj = Beedrill;
            if(evento.target.id == "Psyduck" || evento.target.className == "Psyduck")
                obj = Psyduck;
            if(evento.target.id == "Pidgeotto" || evento.target.className == "Pidgeotto")
                obj = Pidgeotto;
            if(evento.target.id == "Sandslash" || evento.target.className == "Sandslash")
                obj = Sandslash;
            if(evento.target.id == "Celebi" || evento.target.className == "Celebi")
                obj = Celebi;
            if(evento.target.id == "Jigglypuff" || evento.target.className == "Jigglypuff")
                obj = Jigglypuff;
            if(evento.target.id == "Dewgong" || evento.target.className == "Dewgong")
                obj = Dewgong;
            if(evento.target.id == "Magneton" || evento.target.className == "Magneton")
                obj = Magneton;
            return obj;
        }
        
        if(posgen<6)
            if(poseq1<6){
                obj=equipopok();
                equipo1[poseq1] = obj;
                console.log(ent1.nombre + " agregó a " + obj.nombrepok + " a su equipo")
                poseq1++;
                posgen++;
            }
        if(posgen==6)
            console.log("-----> Es el turno de " + ent2.nombre + " de elegir sus pokemones");
        if(posgen>=7)
            if(poseq2<6){
                obj=equipopok();
                equipo2[poseq2] = obj;
                console.log(ent2.nombre + " agregó a " + obj.nombrepok + " a su equipo")
                poseq2++;
                posgen++;
            }
        if(posgen==6)
            posgen++;
        if(posgen==13){
            console.log("-----> Equipos conformados con éxito");
            console.log("-----> Ahora elige los movimientos para iniciar las batallas");
            console.log("-----> " + ent1.nombre + " elige un movimiento");
            posgen++;
        }
        //-----------------------------------Evento para elegir los movimientos por turno----------------------------------------------
        if(posgen==14){
            movimientos.addEventListener("click", (event)=>{
                if(equipo1!=""&&equipo2!=""){
                var hecho1=0, hecho2=0;
                function move(){
                    var obj;
                    if(event.target.id == "rollout" || event.target.className == "rollout")
                        obj = rollout;
                    if(event.target.id == "sandstr" || event.target.className == "sandstr")
                        obj = sandstr;
                    if(event.target.id == "smog" || event.target.className == "smog")
                        obj = smog;
                    if(event.target.id == "steelb" || event.target.className == "steelb")
                        obj = steelb;
                    if(event.target.id == "supers" || event.target.className == "supers")
                        obj = supers;
                    if(event.target.id == "zippyz" || event.target.className == "zippyz")
                        obj = zippyz;
                    if(event.target.id == "spore" || event.target.className == "spore")
                        obj = spore;
                    if(event.target.id == "surf" || event.target.className == "surf")
                        obj = surf;
                    return obj;
                }
                if(jugador==1){
                    obj = move();
                    mov1 = obj;
                    console.log("Movimiento elegido: " + obj.nombmov);
                    hecho1=1;
                }
                else if(jugador==2){
                    obj = move();
                    mov2 = obj;
                    console.log("Movimiento elegido: " + obj.nombmov);
                    batallapok (ent1, ent2, ent1.equipo[0], ent2.equipo[0], mov1, mov2);
                    hecho2=1;
                    turno++;
                    if(equipo1!=""&&equipo2!="")
                        console.log("------------------> TURNO " + turno);
                    else
                    {
                        if(equipo1 == "")
                            console.log(ent1.nombre + " ha perdido");
                        else
                            console.log(ent1.nombre + " ha ganado");
                        if(equipo2 == "")
                            console.log(ent2.nombre + " ha perdido");
                        else
                            console.log(ent2.nombre + " ha ganado");
                    }
                }
                if(jugador==1&&hecho1==1){
                    jugador=2;
                    console.log("-----> " + ent2.nombre + " elige un movimiento");
                }
                else{
                    jugador=1;
                    if(equipo1!=""&&equipo2!="")
                        console.log("-----> " + ent1.nombre + " elige un movimiento");
                }
            }
            else{
                posgen++;
                console.log("-------------> FIN DE LA BATALLA");}
            })
        }
    })
});
