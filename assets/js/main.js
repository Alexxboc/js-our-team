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

BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede
*/

console.log(team);

// Seleziono l'elemento della DOM dove appendere le info dei membri del team

const rowElement = document.querySelector('.row')

// Creo un ciclo for
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // Creo l'elemento da appendere alla dom
    // let colHtmlElement = 
    // `
    // <div class="col">
    //     <img src="./assets/img/${info['image']}" alt="">
    //     <div class="name">${info['name']}</div>
    //     <div class="role">${info['role']}</div>
    // </div>
    // `
    // appendo l'elemento alla DOM
    const memberMarkup = generateMemberMarkup(member)
    rowElement.insertAdjacentHTML('beforeend', memberMarkup);


    // console.log(info['name']);
    // console.log(info['role']);
    // console.log(info['image']);
    // console.log('_____________');
}

/**
 * Generate dinamic markup for the members card
 * @param {object} member A member object 
 */

function generateMemberMarkup(member_object) {
  
  return  `
  <div class="col">
      <img src="./assets/img/${member_object['image']}" alt="">
      <div class="name">${member_object['name']}</div>
      <div class="role">${member_object['role']}</div>
  </div>
  `
}

/* 
Compilare il form e prendere i valori inseriti e creare un nuovo oggetto da stampare a schermo con gli altri
*/

// Selezionare il form
const formElement = document.querySelector(`form`)
// Aggiungere eventListener
formElement.addEventListener('submit', function(event){
  // Prevenire refresh della pagina
  event.preventDefault()
  // Estrapolare valore dei campi compilati
  const nameValue = event.target.name.value
  const roleValue = event.target.role.value
  const imageValue = event.target.image.value
  console.log(nameValue, roleValue, imageValue);
  // Usare i valori presio sopra e creare un nuovo oggetto
  const newMember = {
    name: nameValue,
    role: roleValue,
    image: imageValue
  }
  // Pushare il nuovo oggetto nell'array
  team.push(newMember)
  console.log(team);
  // rigenerare la dom con le card
  const memberMarkup = generateMemberMarkup(newMember)
  rowElement.insertAdjacentHTML('beforeend', memberMarkup);
  // ripulire gli input prima dell'invio si un nuovo form
  document.getElementById('name').value = ''
  document.getElementById('role').value = ''
  document.getElementById('image').value = ''

  // Impedire di inviare form senza compilare campi
  // Aggiungere required agli input

})




