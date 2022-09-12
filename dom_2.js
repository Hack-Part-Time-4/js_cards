let card_persons = [
  {
    name: 'bad bunny',
    edad: 28,
    profesion: 'cantante',
    pais: 'puerto rico',
    parejas: ['gabriela','sofia','nicole','maria','talia'],
    img: '/imagenes/bb.jpg'
  },
  {
    name: 'kakaroto',
    edad: 25,
    profesion: 'peleador',
    pais: 'vegeta',
    parejas: ['milk'],
    img: '/imagenes/goku.jpg'
  },
  {
    name: 'lisa simpson',
    edad: 8,
    profesion: 'estudiante',
    pais: 'estados unidos',
    parejas: ['milhouse','nelson'],
    img: '/imagenes/lissa.jpg'
  },
  {
    name: 'maria quevedo',
    edad: 24,
    profesion: ['modelo','influencer'],
    pais: 'brazil',
    parejas: ['gabriela','sofia','nicole','maria','talia'],
    img: '/imagenes/señorita.jpg'
  }
];

/* for (let i = 0; i < card_persons.length; i++) {
  //ingresamos a cada uno de nuestros personajes
  let personaje = card_persons[i];
  //ingresamos a daca caraqcteristica de nuestros personajes
  personaje.name;
  personaje.edad;
  personaje.profesion;
  personaje.parejas;

  console.log
  (
    personaje.name,
    personaje.edad,
    personaje.profesion,
    personaje.parejas
    )
} 

card_persons.forEach (dato => {
  let personaje = dato;

}) 

let name_card = document.querySelector('#name_card1');
let card_info1 = document.querySelector('#card_info1');
let card_info2 = document.querySelector('#card_info2');
let card_info3 = document.querySelector('#card_info3');
let card_info4 = document.querySelector('#card_info4');



name_card.innerHTML = card_persons[0].name;
card_info1.innerHTML = `Edad: ${card_persons[0].edad}`;
card_info2.innerHTML = `profesion: ${card_persons[0].profesion}`;
card_info3.innerHTML = `pais: ${card_persons[0].pais}`;
card_info4.innerHTML = `parejas: ${card_persons[0].parejas} */

card_persons.forEach (dato => {
  let card_container = document.querySelector('#cards_container');
  console.log(card_container);
  let personaje = dato;
  console.log(personaje);
  
  let div_cols = document.createElement('div');

  card_container.appendChild(div_cols);
  card_container.classList.add ('col-12', 'd-flex', 'justify-content-center', 'align-items-center');

  div_cols.innerHTML = `
    <div class="card text-bg-warning mb-3 me-3" style="width: 18rem;">
    <img src="${personaje.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${personaje.name}</h5>
      <p class="card-text">Edad: ${personaje.edad}</p>
      <p class="card-text">Profesion: ${personaje.profesion}</p>
      <p class="card-text">pais: ${personaje.pais}</p>
      <p class="card-text">parejas: ${personaje.parejas}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  `

}) 