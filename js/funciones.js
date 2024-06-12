


var interruptor = document.querySelector(".interruptor");
var encendido = false;




/* ESTO ES LO MISMO QUE ABAJO PERO MAS CORTO
interruptor.addEventListener("click", () => {

    interruptor.className = `interruptor ${!encendido ? "encendido" : ""}`;
    encendido = !encendido
});
*/

/*
    encendido = false
    interruptor espera que haga click

*/

    /*
    if(encendido){
        //apagar
        interruptor.className = "interruptor";
        //encendido = false;
    }else{
        //encender
        interruptor.className = "interruptor encendido";
        //encendido = true;
    }
    //encendido = !encendido;
});
*/
/*
interruptor.addEventListener("click", () => {
    
    if(interruptor.classList.contains("encendido")){
        //apagar
        interruptor.classList.remove("encendido");
    }else{
        //encender
        interruptor.classList.add("encendido");
    }
});
*/

interruptor.addEventListener("click", () => {
    interruptor.classList.toggle("encendido");
});