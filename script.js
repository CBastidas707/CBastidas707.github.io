//Primera parte. Al iniciar cada vez que presionas un botón crea uno nuevo (no supe como hacerlo de forma más dinámica, perdon :(( )
//No puedo ni dormir, estoy descendiendo a la locura

let jugador = 1;

function Get_Input_Value(){
    const input = document.getElementById("nombre_jugador");
    const value = input.value;
    return value;
}

        

const button = document.getElementById('btn-registrar')
button.addEventListener('click', async ()=>{
    const nombre = Get_Input_Value();
    console.log(nombre)
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
            document.body.removeChild(document.getElementById('inicio'))
            
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


function Ask_carton() {
    
}