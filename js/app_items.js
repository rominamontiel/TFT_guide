
var itemsPadre = [0, 1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < itemsPadre.length; i++) {
    let contPadre = document.getElementById('items-padre-container').children;
    contPadre[i].style.background = 'url("../img/tab_objects/itemPadre/' + i + '.png")';

    let listaDinam = document.getElementById('lista-dinamica').children;
    listaDinam[i].style.background = 'url("../img/tab_objects/itemPadre/' + i + '.png")';
}


var itemsResult = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [5, 5], [5, 6], [5, 7], [5, 8], [6, 6], [6, 7], [6, 8], [7, 7], [7, 8], [8, 8]];

var itemsResultDesc = [
    'Participar en un asesinato otorga +15 de daño de ataque durante el resto del combate. Sin límite de acumulaciones(comienza con 1.0).',
    'Los ataques básicos del portador infligen un 9% adicional de la vida actual del objetivo como daño físico.',
    'Los ataques básicos y hechizos curan al portador un 25% del daño infligido.',
    'Tras lanzar su habilidad, los ataques básicos del portador restauran un 18% de su maná máximo.',
    'Revive al portador después de 2 s tras su muerte con hasta 400 de vida ',
    'Los ataques básicos curan al portador un 40% del daño infligido.',
    'Al comienzo del combate, la velocidad de ataque del portador y todos los aliados que estén a 2 hexágonos de distancia en la misma fila aumenta un 15%',
    'Otorga +125% de daño crítico.',
    'El portador también es un asesino.',
    'Otorga + 100 % de alcance de ataque.',
    'Los ataques básicos otorgan +4% de velocidad de ataque acumulativa',
    'Cada tercer ataque básico del portador inflige 100 de daño mágico a 3 enemigos.',
    'El portador esquiva todos los impactos críticos.',
    'Los ataques básicos disparan un proyectil a otro enemigo cercano que inflige un 60% del daño de ataque del portador y aplica efectos de impacto.',
    'Los ataques básicos infligen un 3% de la vida máxima del portador como daño mágico al objetivo y a los enemigos adyacentes que estén detrás de este.',
    'Cuando el portador muere, se transfiere a un aliado. Cada vez que se transfiere, otorga +30% de velocidad de ataque y +30% de probabilidad de impacto crítico',
    'El portador también es un espadachín/blademaster.',
    '75% más de poder de hechizo',
    'Cuando el portador inflige daño con su habilidad, el primer objetivo y hasta 3 enemigos cercanos reciben 150 más de daño mágico.',
    'El portador y todos los aliados que estén en la misma fila obtienen un escudo que bloquea 300 de daño durante 8 s.',
    'Cuando un enemigo lanza un hechizo, el portador le inflige 90 de daño verdadero.',
    'Las habilidades del portador inflige un 20% de su vida máxima como daño verdadero y le reduce un 80% su curación a lo largo de 10 s.',
    'Los hechizos del portador pueden infligir daño crítico.',
    'El portador también es un infernal.',
    'Tras lanzar su habilidad, el portador obtiene 20 de maná.',
    'Reduce un 25% la velocidad de ataque de los enemigos adyacentes.',
    'Al impactar, los ataques básicos tienen una probabilidad del 33% de silenciar al objetivo, lo que impide que consiga maná durante 4 s.',
    '2,5 s después de que la vida del portador baje del 30%, los aliados se curan 1200 de vida.',
    'Otorga una de las siguientes: Los ataques básicos y los hechizos infligen + 50 % de daño o Los ataques básicos curan 50 de vida al impactar.',
    'El portador también es un mago.',
    'Refleja un 100% del daño mitigado de ataques básicos en forma de daño mágico.',
    'Los ataques básicos del portador tienen una probabilidad del 33% de desarmar al objetivo durante 3 s, lo que le impide realizar ataques básicos.',
    'Los ataques básicos del portador queman al objetivo, lo que le inflige un 20% de su vida máxima como daño verdadero y reduce un 80% su curación a lo largo de 10 s.',
    'Crea una zona de hielo que aumenta cuando el portador esquiva y que ralentiza la velocidad de ataque de los enemigos en un 25%.',
    'El portador también es un tanque.',
    'Reduce el daño mágico recibido en un 50%.',
    'Al comienzo del combate, el portador levanta a un enemigo y le impide participar en el combate durante 6 s.',
    'Otorga un escudo que bloquea el siguiente efecto de control de adversario. El escudo se activa de nuevo después de 3 s.',
    'El portador también es de Luz',
    'El portador regenera un 6% de la vida que le falte por segundo.',
    'Bloquea la primera habilidad enemiga que impacte contra el portador y aturde al enemigo que la lanzó durante 4 s.',
    'El portador también es un gélido.',
    'Otorga 2 objetos random por combate',
    'El portador también es un berserker',
    'El tamaño máximo del equipo del portador aumenta en 1'
]

var nro = 0;

function encuentraResultante(itemPadre) {
    
    for(let i = 0; i < 45; i++){
        
        if(itemsResult[i][0] == itemPadre || itemsResult[i][1]== itemPadre){
            
            let visualTxt = document.getElementById('items-result-container').children;
            visualTxt[nro].innerHTML = itemsResultDesc[i];
            
            let visualImg = document.getElementById('items-result-container').children;
            visualImg[nro].style.background = 'url("../img/tab_objects/itemResult/' + i + '.png") no-repeat';
            
            nro++;           
        }
    }
    
    nro = 0;
    
    var activeItem = document.getElementById('items-padre-container').children;

    for(let i = 0; i < 9; i++){

        if(i == itemPadre){
            activeItem[i].classList.add('button-active');
        }
        else{    
            activeItem[i].classList.remove('button-active');
        }

        let listaFija = document.getElementById('lista-fija').children;
        listaFija[i].style.background = 'url("../img/tab_objects/itemPadre/' + itemPadre + '.png")';
    }    
     
}

