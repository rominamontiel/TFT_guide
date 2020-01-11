const ordenarCosto = document.getElementById('ordenar-costo');
const ordenarNombre = document.getElementById('ordenar-nombre');


ordenarCosto.onclick = function(){

    eliminarHijos(container); 

    campeon.sort((a,b) => (a.costo > b.costo) ? 1 : (a.costo === b.costo) ? ((a.name > b.name) ? 1 : -1) : -1);

    resetSelect();    

    mostrarTodos();
}


ordenarNombre.onclick = function () {
    
    eliminarHijos(container);

    campeon.sort((a, b) => (a.name > b.name) ? 1 : -1);

    resetSelect();

    mostrarTodos();
}


function resetSelect(){
    selectElement.value = 'Todos';
    selectCost.value = 'Todos';
    selectClass.value = 'Todos';
}