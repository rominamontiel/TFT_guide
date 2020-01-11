var filterElementOptions = ['Nube','Cristal','Desierto','Eléctrico','Gélido','Infernal','Luz','Montaña','Océano','Veneno','Sombrío','Acero','Bosque','Variable','Lunar'];
var filterClassOptions = ['Alquimista','Asesino','Avatar','Berserker','Espadachín','Druida','Mago','Místico','Depredador','Cazador','Vínculo','Invocador','Tanque'];
var filterCostOptions = [1,2,3,4,5,7];

ordenarArray(filterElementOptions);
ordenarArray(filterClassOptions);
ordenarArray(filterCostOptions);

insertarTodos(filterElementOptions);
insertarTodos(filterClassOptions);
insertarTodos(filterCostOptions);


var selectElement = document.getElementById('filter-element');
var selectClass = document.getElementById('filter-class');
var selectCost = document.getElementById('filter-cost');

cargarSelect(filterElementOptions, selectElement);
cargarSelect(filterClassOptions,selectClass);
cargarSelect(filterCostOptions,selectCost);

function cargarSelect(array,select){    
    
    for (let i = 0; i < array.length; i++){

        let option = document.createElement('option');
        option.innerText = array[i];
        select.appendChild(option);
    }
}

function ordenarArray(array){
    array = array.sort();
}

function insertarTodos(array){
    array.splice(0,0,'Todos');
}
