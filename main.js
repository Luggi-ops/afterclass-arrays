
// const misTareas = ["Estudiar JS", "Realizar pre entrega 1", "Salir a correr", "Limpiar el patio"];
const misTareas = [
    {
        nombre: "Estudiar JS",
        repetido: 1
    },
    {
        nombre: "Realizar pre entrega 1",
        repetido: 1
    },
    {
        nombre: "Salir a correr",
        repetido: 1
    },
    {
        nombre: "Limpiar el patio",
        repetido: 1
    }
]
const tareasTerminadas = [
    {
        nombre: "Salir a correr",
        repetido: 1
    }
];

function initApp(){

    let ingresar = confirm("¿Desea ingresar a la aplicación?");

    while(ingresar){
        
        const tareaAFinalizar = prompt(` ${mostrarTareas()} \n Ingrese la tarea a finalizar`)
        finalizarTarea(tareaAFinalizar);
        alert(mostrarTareasTerminadas())
       //cuando se acaben las tareas
        if(misTareas.length === 0){
            ingresar = false;
        }
    }

    alert("Nos vemos pronto! cerrando aplicación...")
}

initApp();


function mostrarTareas(){
    let listaTareas = "";
    let count = 1;
    for(tarea of misTareas){

        listaTareas += `${count}) ${tarea.nombre} \n`
        count++;
    }

    if(misTareas.length){
        return "Mis tareas 📆: \n" + listaTareas
    }else{
        return "No hay tareas"
    }
    
}

function finalizarTarea(nombreTarea){
    const index = misTareas.findIndex(function(tarea){
        return tarea.nombre == nombreTarea
    })

    if(index != -1){

        const indexTareaTerminada = tareasTerminadas.findIndex(function(tarea){
            return tarea.nombre == nombreTarea
        })

        if(indexTareaTerminada != -1){
            alert("Tarea ya realizada")
            tareasTerminadas[indexTareaTerminada].repetido += 1;
        }else{
            tareasTerminadas.push(misTareas[index]);
        }
        misTareas.splice(index, 1);

    }else{
        alert("Tarea no encontrada")
    }

}

function mostrarTareasTerminadas(){
    let listaTareasTerminadas = "";
    let count = 1;

    for(tarea of tareasTerminadas){
        listaTareasTerminadas += `${count}) ${tarea.nombre} cantidad de veces: ${tarea.repetido}\n`
        count++;
    }

    if(tareasTerminadas.length){
        return "Mis tareas terminadas📆: \n" + listaTareasTerminadas
    }else{
        return "No hay tareas terminadas"
    }
    
}