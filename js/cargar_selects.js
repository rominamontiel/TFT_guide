var filterElementOptions = ['Todos','Nube','Cristal','Desierto','Eléctrico','Gélido','Infernal','Luz','Montaña','Océano','Veneno','Sombrío','Acero','Bosque','Variable'];
var filterClassOptions = ['Todos','Alquimista','Asesino','Avatar','Berserker','Espadachín','Druida','Mago','Místico','Depredador','Cazador','Vínculo','Invocador','Tanque'];
var filterCostOptions = ['Todos',1,2,3,4,5,7];

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

