const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

/* 
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe

*/

console.log(team);

// Seleziono l'elemento della DOM dove appendere le info dei membri del team

const rowElement = document.querySelector('.row')

// Creo un ciclo for
for (let i = 0; i < team.length; i++) {
    const info = team[i];
    // Creo l'elemento da appendere alla dom
    let colHtmlElement = `
    <div class="col">
        <img src="./assets/img/${info['image']}" alt="">
        <div class="name">${info['name']}</div>
        <div class="role">${info['role']}</div>
    </div>`
    // appendo l'elemento alla DOM
    rowElement.insertAdjacentHTML('beforeend', colHtmlElement);


    // console.log(info['name']);
    // console.log(info['role']);
    // console.log(info['image']);
    // console.log('_____________');

  
}

