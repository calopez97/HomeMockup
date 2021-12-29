//Función encargada de crear elementos en el DOM.
function createNode(element) {
    return document.createElement(element);
}

//Función encargada de añadir elementos a un determinado tag(parent) en el DOM.
function append(parent, el) {
  return parent.append(el);
}

//Obtenemos el contenedor de las fotos.
const ulContainerCards = document.getElementById('content-cards');


/*Función asincrona encargada de consultar y manejar los datos que vienen del archivo portafolio.json, 
mediante el Fetch api de Javascript.*/

const getPhotos = async () => {
    fetch('./js/portafolio.json')
    .then((resp) => resp.json())
    .then(function(data) {
        let cards = data;
        return cards.map(function(card) {
            let singleCard = `
                                <picture>
                                    <source
                                    media="(max-width: 650px)"
                                    srcset="${card.urls.small}"
                                    />
                                    <img class="banner" title="${card.description}" alt="${card.alt_description}" src="${card.urls.regular}" />
                                </picture> 
                                <div class="card-footer">
                                    <p class="description">${card.description}</p>
                                </div>    
                            `;

            let divCard = createNode('div');
            divCard.className = 'card';
            append(ulContainerCards, divCard);
            divCard.innerHTML = singleCard;
        })
    })
    .catch(function(error) {
    console.log(error);
    });
}

//Inicialización de la función asincrona.
getPhotos();


//Detectamos sí el DOM ha sido cargado exitosamente.
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log('Iniciando DOM');

    //Función encargada de desplegar menu-burguer en Mobile.
    let btnBurguer = document.getElementById('btn-burguer');
    btnBurguer.addEventListener('click', function(e){
        e.preventDefault();
        this.classList.toggle('close');
        let mainMenu = document.querySelector('.main-navbar .main-navigation');
        mainMenu.classList.toggle('show-menu');
    });

  });




