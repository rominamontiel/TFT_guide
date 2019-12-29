var objectsTab = document.getElementById('object-tab');
var championsTab = document.getElementById('champion-tab');

var objetContainer = document.getElementById('objects-container');
var championContainer = document.getElementById('champions-container');


objectsTab.onclick = function () {activarTab1()};
championsTab.onclick = function () {activarTab2()};


function activarTab1(){
    objetContainer.classList.remove('hide');
    championContainer.classList.add('hide');
    objectsTab.classList.add('tab-active');
    championsTab.classList.remove('tab-active');
}

function activarTab2() {    
    championContainer.classList.remove('hide');
    objetContainer.classList.add('hide');
    championsTab.classList.add('tab-active');
    objectsTab.classList.remove('tab-active');
    eliminarHijos(container);
    mostrarTodos();
}



