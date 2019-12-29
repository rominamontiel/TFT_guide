var elemento, clase, costo;
var container = document.getElementById('filtered-champions');

window.onload = function () {
    mostrarTodos();    
};

function filtrar(){

    eliminarHijos(container);

    elementSelected = selectElement.options[selectElement.selectedIndex].text;
    classSelected = selectClass.options[selectClass.selectedIndex].text;
    costSelected =  selectCost.options[selectCost.selectedIndex].text;

    if (elementSelected !== 'Todos' && classSelected === 'Todos' && costSelected === 'Todos') {       

        filtroElemento(elementSelected)

    } else if (elementSelected === 'Todos' && classSelected !== 'Todos' && costSelected === 'Todos') {

        filtroClase(classSelected);


    } else if (elementSelected === 'Todos' && classSelected === 'Todos' && costSelected !== 'Todos') {
        
        filtroCosto(costSelected);


    } else if (elementSelected === 'Todos' && classSelected === 'Todos' && costSelected === 'Todos') {
        
        mostrarTodos();

    } else if (elementSelected !== 'Todos' && classSelected !== 'Todos' && costSelected !== 'Todos') {
        
        filtroTriple(elementSelected,classSelected,costSelected);

    } else if (elementSelected !== 'Todos' && classSelected !== 'Todos' && costSelected === 'Todos') {

        filtroElementoClase(elementSelected,classSelected);


    } else if (elementSelected !== 'Todos' && classSelected === 'Todos' && costSelected !== 'Todos') {

        filtroElementoCosto(elementSelected,costSelected);


    } else if (elementSelected === 'Todos' && classSelected !== 'Todos' && costSelected !== 'Todos') {

        filtroClaseCosto(classSelected,costSelected);

    }   
    
}

function filtroElemento(elem){
    for (let i = 0; i < campeon.length; i++) {
        if (campeon[i].elemento.indexOf(elem) >= 0) {            
            imprimirCampeon(i)
        }
    }
}

function filtroClase(cl){
    for (let i = 0; i < campeon.length; i++) {
        if (campeon[i].clase.indexOf(cl) >= 0) {            
            imprimirCampeon(i)
        }
    }
}

function filtroCosto(co){
    for (let i = 0; i < campeon.length; i++) {
        if (campeon[i].costo == co) {            
            imprimirCampeon(i)
        }
    }
}

function mostrarTodos(){
    for (let i = 0; i < campeon.length; i++){
        imprimirCampeon(i)
    }
}

function filtroElementoClase(el,cl){
    for (let i = 0; i < campeon.length; i++){
        if (campeon[i].elemento.indexOf(el) >= 0 && campeon[i].clase.indexOf(cl) >= 0) {
            imprimirCampeon(i)
        }
    }
}

function filtroElementoCosto(el,co){
    for (let i = 0; i < campeon.length; i++){
        if (campeon[i].elemento.indexOf(el) >= 0 && campeon[i].costo == co) {
            imprimirCampeon(i)
        }
    }
}

function filtroClaseCosto(cl,co){
    for (let i = 0; i < campeon.length; i++){
        if (campeon[i].clase.indexOf(cl) >= 0 && campeon[i].costo == co) {
            imprimirCampeon(i)
        }
    }
}

function filtroTriple(el,cl,co){
    for (let i = 0; i < campeon.length; i++){
        if (campeon[i].elemento.indexOf(el) >= 0 && campeon[i].clase.indexOf(cl) >= 0 && campeon[i].costo == co) {
            imprimirCampeon(i)
        }
    }
}






// ---------------- Funciones fijas ---------------------


function imprimirCampeon(p){
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.background = 'url("../img/tab_champions/champions/' + campeon[p].img + '")';

    let championData = document.createElement('div');
    championData.classList.add('champion-data');

    let name = document.createElement('h2');
    name.innerText = campeon[p].name;

    let classContainer = document.createElement('div');
    classContainer.classList.add('class-container');

    let costDiv = document.createElement('div');
    costDiv.classList.add('cost');

    let costSpan = document.createElement('span');
    costSpan.innerText = campeon[p].costo;

    let costImg = document.createElement('img');
    costImg.src = 'img/tab_champions/coin.png';
    
    
    container.appendChild(card);
    card.appendChild(championData);
    
    championData.appendChild(name);
    championData.appendChild(classContainer);
    championData.appendChild(costDiv);
    
    costDiv.appendChild(costImg);
    costDiv.appendChild(costSpan);

    for(let i = 0; i < 2; i++){
        if (campeon[p].elemento[i] !== '') {

            let classBox = document.createElement('div');
            classBox.classList.add('class-box');

            let spanElement = document.createElement('span');
            spanElement.innerText = campeon[p].elemento[i];

            let imgClass = document.createElement('img');
            let numImg = buscarIndex(filterElementOptions, campeon[p].elemento[i]);
            imgClass.src = '../img/tab_champions/element/' + numImg + '.png';

            classContainer.appendChild(classBox);
            classBox.appendChild(imgClass);
            classBox.appendChild(spanElement);
        }
    }
    
    for(let i = 0; i < 2; i++){
        if (campeon[p].clase[i] !== ''){

            let classBox = document.createElement('div');
            classBox.classList.add('class-box');

            let spanClass = document.createElement('span');
            spanClass.innerText = campeon[p].clase[i];

            let imgClass = document.createElement('img');            
            let numImg = buscarIndex(filterClassOptions, campeon[p].clase[i]);
            imgClass.src = '../img/tab_champions/class/' + numImg + '.png';
        
            classContainer.appendChild(classBox);
            classBox.appendChild(imgClass);
            classBox.appendChild(spanClass);
        }
    }

}


function buscarIndex(array, b){
    return (array.indexOf(b));
}


function eliminarHijos(padre){    
    if (padre.hasChildNodes()) {
        while (padre.childNodes.length >= 1) {
            padre.removeChild(padre.firstChild);
        }
    }
}