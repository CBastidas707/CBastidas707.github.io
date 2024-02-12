//Primera parte. Al iniciar cada vez que presionas un botón crea uno nuevo (no supe como hacerlo de forma más dinámica, perdon :(( )
//No puedo ni dormir, estoy descendiendo a la locura

let jugador = 1;
let turno = 0;
let ruleta = 0;

function Get_Input_Value(){
    const input = document.getElementById("nombre_jugador");
    const value = input.value;
    return value;
}


/**
 * @typedef {Object} jugador
 * @property {string} nombre
 * @property {string}puntaje
 * @property {Array} matrizz
 * @property {floor} puntaje
 */

/**
 *@type {jugador{}}
 */

const jugadores = [{
    nombre :'jugador_1',
    puntaje: '0',
    matrizz : [],
    puntaje : 0
},{
    nombre :'jugador_2',
    puntaje: '0',
    matrizz : [],
    puntaje : 0
},{
    nombre :'jugador_3',
    puntaje: '0',
    matrizz : [],
    puntaje : 0
},{
    nombre :'jugador_4',
    puntaje: '0',
    matrizz : [],
    puntaje : 0
}]
        

const button = document.getElementById('btn-registrar')

button.addEventListener('click', async ()=>{
    const nombre = Get_Input_Value();
    console.log(nombre)
    jugadores[0].nombre = nombre
    console.log(jugadores)
    document.body.removeChild(document.getElementById('inicio'))
    const newCard = document.createElement('section');
        newCard.className = 'inicio';
        newCard.id = 'inicio';
        newCard.innerHTML = crearCarta();
        document.body.appendChild(newCard);

        const new_button = document.getElementById('btn-registrar')
        new_button.addEventListener('click', async ()=>{
        const nombre = Get_Input_Value();
        console.log(nombre)
        jugadores[1].nombre = nombre
        console.log(jugadores)
        document.body.removeChild(document.getElementById('inicio'))
        const newCard = document.createElement('section');
        newCard.className = 'inicio';
        newCard.id = 'inicio';
        newCard.innerHTML = crearCarta();
        document.body.appendChild(newCard);
        
        const new_button2 = document.getElementById('btn-registrar')
        new_button2.addEventListener('click', async ()=>{
        const nombre = Get_Input_Value();
        console.log(nombre)
        jugadores[2].nombre = nombre
        console.log(jugadores)
        document.body.removeChild(document.getElementById('inicio'))
        const newCard = document.createElement('section');
            newCard.className = 'inicio';
            newCard.id = 'inicio';
            newCard.innerHTML = crearCarta();
            document.body.appendChild(newCard);

            const new_button3 = document.getElementById('btn-registrar')
            new_button3.addEventListener('click', async ()=>{
            const nombre = Get_Input_Value();
            console.log(nombre)
            jugadores[3].nombre = nombre
            console.log(jugadores)
            document.body.removeChild(document.getElementById('inicio'));
            Ask_carton();
            
        })   
})
})
})

function crearCarta() {
    jugador ++;
    return ` <section class="inicio" id="inicio">
    <article class="card">
        <h2>Bienvenido/a!</h2>
        <h1>Por favor introduzca el nombre del jugador ${jugador}</h1>
    </article>
    <footer class="footer">
        <input type='text' id="nombre_jugador">
        <button id='btn-registrar'>Registrar</button>
    </footer>
</section>
<script src= 'script.js'> </script>`;
    }


const cartones = ["3x3","4x4","5x5"]

function crearCartaCarton() {
    jugador ++;
    let opcionesCarton = '';
    for (let i = 0; i < cartones.length; i++) {
        opcionesCarton += `<option value="${cartones[i]}">${cartones[i]}</option>`;
    }

    return ` <section class="inicio" id="inicio">
    <article class="card">
        <h1>Elija el tipo de cartón con el que desee jugar!</h1>
    </article>
    <footer class="footer">
        <select id="tipo_carton">${opcionesCarton}</select>
        <button id='btn-tipo_carton'>Empezar!</button>
    </footer>
</section>
<script src= 'script.js'> </script>`;
    }

function getSelectionValue(){
    const selection = document.getElementById("tipo_carton");
    const value = selection.value;
    return value;
}

function crearNextTurn(){
    return `<section class="inicio" id="inicio">
    <article class="cardnext">
        <h1 id= 'turnoo'></h1>
        <h1>Girar ruleta!</h1>
    </article>
    <footer class="footer">
        <button id='btn-next'>Girar!</button>
    </footer>
</section>
<script src= 'script.js'> </script>`;
}

function Ask_carton() {
    const newCard = document.createElement('section');
            newCard.className = 'inicio';
            newCard.id = 'inicio';
            newCard.innerHTML = crearCartaCarton();
            document.body.appendChild(newCard);
            const new_button = document.getElementById('btn-tipo_carton')
            new_button.addEventListener('click', async ()=>{
            const carton = getSelectionValue();
            console.log(carton);
            document.body.removeChild(document.getElementById('inicio'));

            const next_turno = document.createElement('section');
            next_turno.className = 'inicio';
            next_turno.id = 'ruleta';
            next_turno.innerHTML = crearNextTurn();
            document.body.appendChild(next_turno);
            const newNextTurn = document.getElementById('btn-next');
            var turnooo = document.getElementById('turnoo')
                turnooo.textContent = `Turno ${turno}`;
            
            if (carton === '3x3') {
                for (let index = 0; index < jugadores.length; index++) {
                    const matriz = crear3x3(jugadores[index]);
                    jugadores[index].matrizz = matriz
                    
                }
                console.log('Se seleccionó cartón 3x3');
            } else if (carton === '4x4') {
                for (let index = 0; index < jugadores.length; index++) {
                    const matriz = crear4x4(jugadores[index]);
                    jugadores[index].matrizz = matriz

                }
                console.log('Se seleccionó cartón 4x4');
              } else {
                  for (let index = 0; index < jugadores.length; index++) {
                      const matriz = crear5x5(jugadores[index]);
                    jugadores[index].matrizz = matriz
                    
                }
                console.log('Se seleccionó cartón 5x5');
            };
            console.log(jugadores);
            
            newNextTurn.addEventListener('click', async ()=>{
                const rul = Math.floor(Math.random() * 50)+1;
                alert(`El número es ${rul}!`)
                ruleta = rul;
                console.log(ruleta);
                turno++;
                console.log(turno);
                var turnooo = document.getElementById('turnoo')
                turnooo.textContent = `Turno ${turno}`;
                for (let index = 0; index < 4; index++) {
                const delet = document.getElementById(`carton_${jugadores[index].nombre}`);
                document.body.removeChild(delet);
                }
                for (let index = 0; index < jugadores.length; index++) {
                    Coincide(jugadores[index].matrizz);
                }
                if (carton === '3x3') {
                    for (let index = 0; index < jugadores.length; index++) {
                        const matriz = recrear3x3(jugadores[index]);
                        jugadores[index].matrizz = matriz
                        
                    }
                    console.log('Se seleccionó cartón 3x3');
                } else if (carton === '4x4') {
                    for (let index = 0; index < jugadores.length; index++) {
                        const matriz = recrear4x4(jugadores[index]);
                        jugadores[index].matrizz = matriz
    
                    }
                    console.log('Se seleccionó cartón 4x4');
                  } else {
                      for (let index = 0; index < jugadores.length; index++) {
                          const matriz = recrear5x5(jugadores[index]);
                          jugadores[index].matrizz = matriz
                        
                    }
                    console.log('Se seleccionó cartón 5x5');
                };
                console.log(jugadores);
                if (turno > 25) {
                    for (let index = 0; index < jugadores.length; index++) {
                    const bingo = Bingo(jugadores[index].matrizz);
                    if (bingo == 'Hay una fila de punta a punta de X') {
                        jugadores[index].puntaje += 1;
                        alert(`${jugadores[index].nombre} ha cantado BINGO!`);
                    }
                    else if (bingo == 'Hay una columna de punta a punta de X') {
                        jugadores[index].puntaje += 1;
                        alert(`${jugadores[index].nombre} ha cantado BINGO!`);
                    }
                    else if (bingo == 'Hay una diagonal de punta a punta de X') {
                        jugadores[index].puntaje += 3;
                        alert(`${jugadores[index].nombre} ha cantado BINGO!!!`);
                    }
                    }

                    for (let index = 0; index < 4; index++) {
                        const delet = document.getElementById(`carton_${jugadores[index].nombre}`);
                        document.body.removeChild(delet);
                        }
                    const delet = document.getElementById('puntuaciones');
                    document.body.removeChild(delet);
                    var container = document.createElement("section");
                    container.className = 'inicio';
                    container.id = 'puntuaciones';
                    container.innerHTML += crearPuntuaciones();
                    document.body.appendChild(container)
                    const deletee = document.getElementById('ruleta');
                    document.body.removeChild(deletee);
                    turno = 0;
                    Ask_carton();
                }

            });
        });
        
    }
    
function Generar3x3(){
        let bingo_3x3 = [
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1]
  ];
  return bingo_3x3
}
function Generar4x4(){
let bingo_4x4 = [
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
    [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1]
  ];
  return bingo_4x4
}
function Generar5x5(){
    let bingo_5x5 = [
        [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
        [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
        [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
        [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1],
        [Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1, Math.floor(Math.random() * 50)+1]
    ];
    return bingo_5x5 
}

function crear3x3(jugador){
var container = document.createElement("section");
container.className = 'carton';
container.id = `carton_${jugador.nombre}`;
var jugador_nombre = document.createElement("h1");
jugador_nombre.className = 'jugador';
jugador_nombre.textContent = `${jugador.nombre}`;

var fila_1 = document.createElement("div");
fila_1.className = 'fila';

var fila_2 = document.createElement("div");
fila_2.className = 'fila';

var fila_3 = document.createElement("div");
fila_3.className = 'fila';

const matriz = Generar3x3();

for (let index = 0; index < 3; index++) {
    var numero = matriz[0][index];
    var contenedor = document.createElement("h1");
    contenedor.className = 'numero';
    contenedor.textContent = `${numero}`;
    fila_1.appendChild(contenedor)
}
for (let index = 0; index < 3; index++) {
    var numero = matriz[1][index];
    var contenedor = document.createElement("h1");
    contenedor.className = 'numero';
    contenedor.textContent = `${numero}`;
    fila_2.appendChild(contenedor)
}
for (let index = 0; index < 3; index++) {
    var numero = matriz[2][index];
    var contenedor = document.createElement("h1");
    contenedor.className = 'numero';
    contenedor.textContent = `${numero}`;
    fila_3.appendChild(contenedor)
}
container.appendChild(jugador_nombre);
container.appendChild(fila_1);
container.appendChild(fila_2);
container.appendChild(fila_3);

document.body.appendChild(container);
return matriz
}

function crear4x4(jugador){
    var container = document.createElement("section");
    container.className = 'carton';
    container.id = `carton_${jugador.nombre}`;
    var jugador_nombre = document.createElement("h1");
    jugador_nombre.className = 'jugador';
    jugador_nombre.textContent = `${jugador.nombre}`;
    
    var fila_1 = document.createElement("div");
    fila_1.className = 'fila';
    
    var fila_2 = document.createElement("div");
    fila_2.className = 'fila';
    
    var fila_3 = document.createElement("div");
    fila_3.className = 'fila';

    var fila_4 = document.createElement("div");
    fila_4.className = 'fila';

    const matriz = Generar4x4();
    
    for (let index = 0; index < 4; index++) {
        var numero = matriz[0][index];
        var contenedor = document.createElement("h1");
        contenedor.className = 'numero';
        contenedor.textContent = `${numero}`;
        fila_1.appendChild(contenedor)
    }
    for (let index = 0; index < 4; index++) {
        var numero = matriz[1][index];
        var contenedor = document.createElement("h1");
        contenedor.className = 'numero';
        contenedor.textContent = `${numero}`;
        fila_2.appendChild(contenedor)
    }
    for (let index = 0; index < 4; index++) {
        var numero = matriz[2][index];
        var contenedor = document.createElement("h1");
        contenedor.className = 'numero';
        contenedor.textContent = `${numero}`;
        fila_3.appendChild(contenedor)
    }
    for (let index = 0; index < 4; index++) {
        var numero = matriz[3][index];
        var contenedor = document.createElement("h1");
        contenedor.className = 'numero';
        contenedor.textContent = `${numero}`;
        fila_4.appendChild(contenedor)
    }
    container.appendChild(jugador_nombre);
    container.appendChild(fila_1);
    container.appendChild(fila_2);
    container.appendChild(fila_3);
    container.appendChild(fila_4);
    
    document.body.appendChild(container);
    return matriz
    }


function crear5x5(jugador){
        var container = document.createElement("section");
        container.className = 'carton';
        container.id = `carton_${jugador.nombre}`;
        var jugador_nombre = document.createElement("h1");
        jugador_nombre.className = 'jugador';
        jugador_nombre.textContent = `${jugador.nombre}`;
        
        var fila_1 = document.createElement("div");
        fila_1.className = 'fila';
        
        var fila_2 = document.createElement("div");
        fila_2.className = 'fila';
        
        var fila_3 = document.createElement("div");
        fila_3.className = 'fila';
    
        var fila_4 = document.createElement("div");
        fila_4.className = 'fila';

        var fila_5 = document.createElement("div");
        fila_5.className = 'fila';

        const matriz = Generar5x5();
        
        for (let index = 0; index < 5; index++) {
            var numero = matriz[0][index];
            var contenedor = document.createElement("h1");
            contenedor.className = 'numero';
            contenedor.textContent = `${numero}`;
            fila_1.appendChild(contenedor)
        }
        for (let index = 0; index < 5; index++) {
            var numero = matriz[1][index];
            var contenedor = document.createElement("h1");
            contenedor.className = 'numero';
            contenedor.textContent = `${numero}`;
            fila_2.appendChild(contenedor)
        }
        for (let index = 0; index < 5; index++) {
            var numero = matriz[2][index];
            var contenedor = document.createElement("h1");
            contenedor.className = 'numero';
            contenedor.textContent = `${numero}`;
            fila_3.appendChild(contenedor)
        }
        for (let index = 0; index < 5; index++) {
            var numero = matriz[3][index];
            var contenedor = document.createElement("h1");
            contenedor.className = 'numero';
            contenedor.textContent = `${numero}`;
            fila_4.appendChild(contenedor)
        }
        for (let index = 0; index < 5; index++) {
            var numero = matriz[4][index];
            var contenedor = document.createElement("h1");
            contenedor.className = 'numero';
            contenedor.textContent = `${numero}`;
            fila_5.appendChild(contenedor)
        }
        container.appendChild(jugador_nombre);
        container.appendChild(fila_1);
        container.appendChild(fila_2);
        container.appendChild(fila_3);
        container.appendChild(fila_4);
        container.appendChild(fila_5);
        
        document.body.appendChild(container);
        return matriz
        }

function recrear3x3(jugador){
            var container = document.createElement("section");
            container.className = 'carton';
            container.id = `carton_${jugador.nombre}`;
            var jugador_nombre = document.createElement("h1");
            jugador_nombre.className = 'jugador';
            jugador_nombre.textContent = `${jugador.nombre}`;
            
            var fila_1 = document.createElement("div");
            fila_1.className = 'fila';
            
            var fila_2 = document.createElement("div");
            fila_2.className = 'fila';
            
            var fila_3 = document.createElement("div");
            fila_3.className = 'fila';
            
            const matriz = jugador.matrizz;
            
            for (let index = 0; index < 3; index++) {
                var numero = matriz[0][index];
                var contenedor = document.createElement("h1");
                contenedor.className = 'numero';
                contenedor.textContent = `${numero}`;
                fila_1.appendChild(contenedor)
            }
            for (let index = 0; index < 3; index++) {
                var numero = matriz[1][index];
                var contenedor = document.createElement("h1");
                contenedor.className = 'numero';
                contenedor.textContent = `${numero}`;
                fila_2.appendChild(contenedor)
            }
            for (let index = 0; index < 3; index++) {
                var numero = matriz[2][index];
                var contenedor = document.createElement("h1");
                contenedor.className = 'numero';
                contenedor.textContent = `${numero}`;
                fila_3.appendChild(contenedor)
            }
            container.appendChild(jugador_nombre);
            container.appendChild(fila_1);
            container.appendChild(fila_2);
            container.appendChild(fila_3);
            
            document.body.appendChild(container);
            return matriz
            }

function recrear4x4(jugador){
                var container = document.createElement("section");
                container.className = 'carton';
                container.id = `carton_${jugador.nombre}`;
                var jugador_nombre = document.createElement("h1");
                jugador_nombre.className = 'jugador';
                jugador_nombre.textContent = `${jugador.nombre}`;
                
                var fila_1 = document.createElement("div");
                fila_1.className = 'fila';
                
                var fila_2 = document.createElement("div");
                fila_2.className = 'fila';
                
                var fila_3 = document.createElement("div");
                fila_3.className = 'fila';
            
                var fila_4 = document.createElement("div");
                fila_4.className = 'fila';
            
                const matriz = jugador.matrizz;
                
                for (let index = 0; index < 4; index++) {
                    var numero = matriz[0][index];
                    var contenedor = document.createElement("h1");
                    contenedor.className = 'numero';
                    contenedor.textContent = `${numero}`;
                    fila_1.appendChild(contenedor)
                }
                for (let index = 0; index < 4; index++) {
                    var numero = matriz[1][index];
                    var contenedor = document.createElement("h1");
                    contenedor.className = 'numero';
                    contenedor.textContent = `${numero}`;
                    fila_2.appendChild(contenedor)
                }
                for (let index = 0; index < 4; index++) {
                    var numero = matriz[2][index];
                    var contenedor = document.createElement("h1");
                    contenedor.className = 'numero';
                    contenedor.textContent = `${numero}`;
                    fila_3.appendChild(contenedor)
                }
                for (let index = 0; index < 4; index++) {
                    var numero = matriz[3][index];
                    var contenedor = document.createElement("h1");
                    contenedor.className = 'numero';
                    contenedor.textContent = `${numero}`;
                    fila_4.appendChild(contenedor)
                }
                container.appendChild(jugador_nombre);
                container.appendChild(fila_1);
                container.appendChild(fila_2);
                container.appendChild(fila_3);
                container.appendChild(fila_4);
                
                document.body.appendChild(container);
                return matriz
                }
            
function recrear5x5(jugador){
                    var container = document.createElement("section");
                    container.className = 'carton';
                    container.id = `carton_${jugador.nombre}`;
                    var jugador_nombre = document.createElement("h1");
                    jugador_nombre.className = 'jugador';
                    jugador_nombre.textContent = `${jugador.nombre}`;
                    
                    var fila_1 = document.createElement("div");
                    fila_1.className = 'fila';
                    
                    var fila_2 = document.createElement("div");
                    fila_2.className = 'fila';
                    
                    var fila_3 = document.createElement("div");
                    fila_3.className = 'fila';
                
                    var fila_4 = document.createElement("div");
                    fila_4.className = 'fila';
            
                    var fila_5 = document.createElement("div");
                    fila_5.className = 'fila';
            
                    const matriz = jugador.matrizz;
                    
                    for (let index = 0; index < 5; index++) {
                        var numero = matriz[0][index];
                        var contenedor = document.createElement("h1");
                        contenedor.className = 'numero';
                        contenedor.textContent = `${numero}`;
                        fila_1.appendChild(contenedor)
                    }
                    for (let index = 0; index < 5; index++) {
                        var numero = matriz[1][index];
                        var contenedor = document.createElement("h1");
                        contenedor.className = 'numero';
                        contenedor.textContent = `${numero}`;
                        fila_2.appendChild(contenedor)
                    }
                    for (let index = 0; index < 5; index++) {
                        var numero = matriz[2][index];
                        var contenedor = document.createElement("h1");
                        contenedor.className = 'numero';
                        contenedor.textContent = `${numero}`;
                        fila_3.appendChild(contenedor)
                    }
                    for (let index = 0; index < 5; index++) {
                        var numero = matriz[3][index];
                        var contenedor = document.createElement("h1");
                        contenedor.className = 'numero';
                        contenedor.textContent = `${numero}`;
                        fila_4.appendChild(contenedor)
                    }
                    for (let index = 0; index < 5; index++) {
                        var numero = matriz[4][index];
                        var contenedor = document.createElement("h1");
                        contenedor.className = 'numero';
                        contenedor.textContent = `${numero}`;
                        fila_5.appendChild(contenedor)
                    }
                    container.appendChild(jugador_nombre);
                    container.appendChild(fila_1);
                    container.appendChild(fila_2);
                    container.appendChild(fila_3);
                    container.appendChild(fila_4);
                    container.appendChild(fila_5);
                    
                    document.body.appendChild(container);
                    return matriz
                    }

        
function Coincide(matriz) {
   for (let i = 0; i < matriz.length; i++) {
     for (let j = 0; j < matriz[i].length; j++) {
       if (matriz[i][j] == ruleta) {
        matriz[i][j] = 'X'
     }
   }
 }
}

function Bingo(matriz) {
    const n = matriz.length;
    for (let i = 0; i < n; i++) {
      let contadorX = 0;
      for (let j = 0; j < n; j++) {
        if (matriz[i][j] === 'X') {
          contadorX++;
        }
      }
      if (contadorX === n) {
        return 'Hay una fila de punta a punta de X';
      }
    }
    for (let j = 0; j < n; j++) {
      let contadorX = 0;
      for (let i = 0; i < n; i++) {
        if (matriz[i][j] === 'X') {
          contadorX++;
        }
      }
      if (contadorX === n) {
        return 'Hay una columna de punta a punta de X';
      }
    }
    let contadorX = 0;
    for (let i = 0; i < n; i++) {
      if (matriz[i][i] === 'X') {
        contadorX++;
      }
    }
    if (contadorX === n) {
      return 'Hay una diagonal de punta a punta de X';
    }
    contadorX = 0;
    for (let i = 0; i < n; i++) {
      if (matriz[i][n - 1 - i] === 'X') {
        contadorX++;
      }
    }
    if (contadorX === n) {
      return 'Hay una diagonal de punta a punta de X';
    }
  }

function crearPuntuaciones(){
    return`<article class="card">
            <h2>Tabla de posiciones</h2>
            <h1>Hasta ahora el puntaje acumulado es:</h1>
            <h1>${jugadores[0].nombre}: ${jugadores[0].puntaje}</h1>
            <h1>${jugadores[1].nombre}: ${jugadores[1].puntaje}</h1>
            <h1>${jugadores[2].nombre}: ${jugadores[2].puntaje}</h1>
            <h1>${jugadores[3].nombre}: ${jugadores[3].puntaje}</h1>
        </article>
    `
}
