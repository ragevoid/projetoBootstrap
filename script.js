// Configurações gerais
const API_HOST = 'https://v3.football.api-sports.io';
const API_KEY = '83303917d80ac4e0dad6d309eabe233e';
let teamData = [
  {
    "team": {
      "id": 127,
      "name": "Flamengo",
      "logo": "https:\/\/media.api-sports.io\/football\/teams\/127.png"
    },
    "players": [
      {
        "id": 11756,
        "name": "A. Rossi",
        "age": 29,
        "number": 1,
        "position": "Goalkeeper",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/11756.png"
      },
      {
        "id": 405161,
        "name": "Lucas Furtado",
        "age": 19,
        "number": 24,
        "position": "Goalkeeper",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/405161.png"
      },
      {
        "id": 306210,
        "name": "Matheus Cunha",
        "age": 23,
        "number": 25,
        "position": "Goalkeeper",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/306210.png"
      },
      {
        "id": 372083,
        "name": "Dyogo",
        "age": 20,
        "number": 49,
        "position": "Goalkeeper",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/372083.png"
      },
      {
        "id": 403892,
        "name": "Caio Barone",
        "age": 18,
        "number": 66,
        "position": "Goalkeeper",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/403892.png"
      },
      {
        "id": 1290,
        "name": "G. Varela",
        "age": 31,
        "number": 2,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/1290.png"
      },
      {
        "id": 9458,
        "name": "Léo Ortiz",
        "age": 28,
        "number": 3,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/9458.png"
      },
      {
        "id": 10124,
        "name": "Léo Pereira",
        "age": 28,
        "number": 4,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10124.png"
      },
      {
        "id": 1771,
        "name": "Ayrton Lucas",
        "age": 27,
        "number": 6,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/1771.png"
      },
      {
        "id": 10089,
        "name": "Fabrício Bruno",
        "age": 28,
        "number": 15,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10089.png"
      },
      {
        "id": 51572,
        "name": "M. Viña",
        "age": 27,
        "number": 17,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/51572.png"
      },
      {
        "id": 2283,
        "name": "David Luiz",
        "age": 37,
        "number": 23,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/2283.png"
      },
      {
        "id": 860,
        "name": "Alex Sandro",
        "age": 33,
        "number": 26,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/860.png"
      },
      {
        "id": 340067,
        "name": "Cleiton",
        "age": 21,
        "number": 33,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/340067.png"
      },
      {
        "id": 362886,
        "name": "Zé Welinton",
        "age": 20,
        "number": 39,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/362886.png"
      },
      {
        "id": 414354,
        "name": "Da Mata",
        "age": 18,
        "number": 41,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/414354.png"
      },
      {
        "id": 349001,
        "name": "Wesley",
        "age": 21,
        "number": 43,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/349001.png"
      },
      {
        "id": 454456,
        "name": "João Victor Schlickmann Carbone",
        "age": 19,
        "number": 44,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/454456.png"
      },
      {
        "id": 403299,
        "name": "Daniel Sales",
        "age": 18,
        "number": 51,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/403299.png"
      },
      {
        "id": 366780,
        "name": "Iago",
        "age": 19,
        "number": 57,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/366780.png"
      },
      {
        "id": 412776,
        "name": "Ainoã",
        "age": 19,
        "number": 70,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/412776.png"
      },
      {
        "id": 454126,
        "name": "Lucyan",
        "age": 18,
        "number": null,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/454126.png"
      },
      {
        "id": 464017,
        "name": "Germano",
        "age": 18,
        "number": null,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/464017.png"
      },
      {
        "id": 449253,
        "name": "João Victor Cunha",
        "age": 17,
        "number": null,
        "position": "Defender",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/449253.png"
      },
      {
        "id": 2560,
        "name": "E. Pulgar",
        "age": 30,
        "number": 5,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/2560.png"
      },
      {
        "id": 30408,
        "name": "Gerson",
        "age": 27,
        "number": 8,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/30408.png"
      },
      {
        "id": 2612,
        "name": "G. de Arrascaeta",
        "age": 30,
        "number": 14,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/2612.png"
      },
      {
        "id": 5995,
        "name": "N. de la Cruz",
        "age": 27,
        "number": 18,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/5995.png"
      },
      {
        "id": 403300,
        "name": "Lorran",
        "age": 18,
        "number": 19,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/403300.png"
      },
      {
        "id": 10319,
        "name": "Allan",
        "age": 27,
        "number": 21,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10319.png"
      },
      {
        "id": 10364,
        "name": "Michael",
        "age": 28,
        "number": 30,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10364.png"
      },
      {
        "id": 407958,
        "name": "Rayan",
        "age": 19,
        "number": 35,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/407958.png"
      },
      {
        "id": 195993,
        "name": "C. Alcaraz",
        "age": 22,
        "number": 37,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/195993.png"
      },
      {
        "id": 482068,
        "name": "Fabiano",
        "age": 19,
        "number": 42,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/482068.png"
      },
      {
        "id": 16369,
        "name": "G. Plata",
        "age": 24,
        "number": 45,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/16369.png"
      },
      {
        "id": 332654,
        "name": "Evertton Araújo",
        "age": 21,
        "number": 52,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/332654.png"
      },
      {
        "id": 365642,
        "name": "Caio Vinicius",
        "age": 20,
        "number": 55,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/365642.png"
      },
      {
        "id": 464018,
        "name": "Luis Aucélio",
        "age": 18,
        "number": 60,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/464018.png"
      },
      {
        "id": 405160,
        "name": "Wallace",
        "age": 19,
        "number": 64,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/405160.png"
      },
      {
        "id": 460436,
        "name": "João Alves",
        "age": 19,
        "number": null,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/460436.png"
      },
      {
        "id": 407957,
        "name": "Daniel Rogério",
        "age": 19,
        "number": null,
        "position": "Midfielder",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/407957.png"
      },
      {
        "id": 22238,
        "name": "Luiz Araújo",
        "age": 28,
        "number": 7,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/22238.png"
      },
      {
        "id": 10321,
        "name": "Pedro",
        "age": 27,
        "number": 9,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10321.png"
      },
      {
        "id": 10174,
        "name": "Gabriel Barbosa",
        "age": 28,
        "number": 10,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10174.png"
      },
      {
        "id": 2414,
        "name": "Everton",
        "age": 28,
        "number": 11,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/2414.png"
      },
      {
        "id": 70297,
        "name": "Carlinhos",
        "age": 27,
        "number": 12,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/70297.png"
      },
      {
        "id": 352372,
        "name": "Matheus Gonçalves",
        "age": 19,
        "number": 20,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/352372.png"
      },
      {
        "id": 10180,
        "name": "Bruno Henrique",
        "age": 34,
        "number": 27,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/10180.png"
      },
      {
        "id": 460451,
        "name": "Felipe Teresa",
        "age": 18,
        "number": 40,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/460451.png"
      },
      {
        "id": 454555,
        "name": "Guilherme",
        "age": 18,
        "number": 47,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/454555.png"
      },
      {
        "id": 460435,
        "name": "S. Ogundana",
        "age": 19,
        "number": 54,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/460435.png"
      },
      {
        "id": 454455,
        "name": "Pedrinho",
        "age": 18,
        "number": 59,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/454455.png"
      },
      {
        "id": 428990,
        "name": "Felipe Lima",
        "age": 18,
        "number": null,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/428990.png"
      },
      {
        "id": 482067,
        "name": "Adriel",
        "age": 19,
        "number": null,
        "position": "Attacker",
        "photo": "https:\/\/media.api-sports.io\/football\/players\/482067.png"
      }
    ]
  }
];
let fixturesData = [
  {
    "fixture": {
      "id": 1180724,
      "referee": null,
      "timezone": "UTC",
      "date": "2024-12-04T23:00:00+00:00",
      "timestamp": 1733353200,
      "periods": {
        "first": null,
        "second": null
      },
      "venue": {
        "id": 233,
        "name": "Estádio Heriberto Hülse",
        "city": "Criciúma, Santa Catarina"
      },
      "status": {
        "long": "Not Started",
        "short": "NS",
        "elapsed": null,
        "extra": null
      }
    },
    "league": {
      "id": 71,
      "name": "Serie A",
      "country": "Brazil",
      "logo": "https://media.api-sports.io/football/leagues/71.png",
      "flag": "https://media.api-sports.io/flags/br.svg",
      "season": 2024,
      "round": "Regular Season - 37"
    },
    "teams": {
      "home": {
        "id": 140,
        "name": "Criciuma",
        "logo": "https://media.api-sports.io/football/teams/140.png",
        "winner": null
      },
      "away": {
        "id": 127,
        "name": "Flamengo",
        "logo": "https://media.api-sports.io/football/teams/127.png",
        "winner": null
      }
    },
    "goals": {
      "home": null,
      "away": null
    },
    "score": {
      "halftime": {
        "home": null,
        "away": null
      },
      "fulltime": {
        "home": null,
        "away": null
      },
      "extratime": {
        "home": null,
        "away": null
      },
      "penalty": {
        "home": null,
        "away": null
      }
    }
  }
]
let players = teamData[0].players;

//REQUEST DATA FIXTURES
async function getDataFixtures() {
  try {
    const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=127&next=1`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    fixturesData = data.response || [];

  } catch (error) {
    console.error('Error:', error);
  }
  console.log(fixturesData)
}


// REQUEST DATA PLAYERS
async function getData() {
  try {
    const response = await fetch(`https://v3.football.api-sports.io/players/squads?team=127`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    let teamData = data.response || [];
    createPlayerCards(players);
  } catch (error) {
    console.error('Error:', error);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  getDataFixtures();
  loadFixture();
});

//DATA TESTE
function getDataTeste() {
  createPlayerCards(players);
}


//CREATE THE PLAYER'S CARD USING THE PLAYERS LIST
function createPlayerCards(players) {
  const container = document.getElementById("teamList");
  container.innerHTML = "";


  for (let i = 0; i < players.length; i += 4) {
    const row = document.createElement("div");
    row.className = "row  container justify-content-between m-0";


    players.slice(i, i + 4).forEach(player => {
      let col = document.createElement("div");
      col.className = "col-lg-3 col-md-4 col-sm-12 mb-3";


      let card = document.createElement("div");
      card.className = "card h-100 text-center";
      card.id = player.id;


      let img = document.createElement("img");
      img.src = player.photo || "https://via.placeholder.com/150";
      img.className = "card-img-top";
      img.alt = player.name;


      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let playerName = document.createElement("h5");
      playerName.className = "card-title";
      playerName.textContent = player.name;

      let playerInfo = document.createElement("p");
      playerInfo.className = "card-text";
      playerInfo.textContent = `Posição: ${player.position}\nIdade: ${player.age}\nNúmero: ${player.number}`;

      let  buttonContainer = document.createElement("div")
      buttonContainer.className = "d-flex gap-1 align-itens-center justify-content-center"

      let playerButtonDelete = document.createElement("button")
      playerButtonDelete.className = "btn btn-primary btn-danger me-2"
      playerButtonDelete.type = "button"
      playerButtonDelete.textContent = "Deletar"
      playerButtonDelete.onclick = (e) => deletePlayer(player.id);

      let playerButtonAtualizar = document.createElement("button")
      playerButtonAtualizar.className = "btn btn-primary"
      playerButtonAtualizar.type = "button"
      playerButtonAtualizar.textContent = "Atualizar"
      playerButtonAtualizar.onclick = (e) => updatePlayer(player.id);



      cardBody.appendChild(playerName);
      cardBody.appendChild(playerInfo);
      buttonContainer.appendChild(playerButtonDelete);
      buttonContainer.appendChild(playerButtonAtualizar);
      cardBody.appendChild(buttonContainer);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });

    container.appendChild(row);
  }
}

//CREATE BUTTON TO CREATE A NEW PLAYER TO ADD TO THE PLAYER LIST 
function setButton() {
  const buttonsContainer = document.getElementById("buttons");


  const existingButton = document.querySelector(".btn-create-player");

  if (!existingButton) {

    const createPlayerButton = document.createElement("button");
    createPlayerButton.className = "btn btn-primary btn-lg col-6 ms-3 btn-create-player";
    createPlayerButton.textContent = "Cria um jogador!";
    createPlayerButton.onclick = (e) => enableForm();
    buttonsContainer.appendChild(createPlayerButton);
  }
}

//DELETE A PLAYER FROM THE PLAYER'S LIST
function deletePlayer(playerId) {
  console.log(playerId);

  const playerIndex = players.findIndex(player => player.id === playerId);

  if (playerIndex !== -1) {
    players.splice(playerIndex, 1);
    console.log(`Jogador removido da lista.`);
    createPlayerCards(players);
  } else {
    console.error(`Jogador com ID ${playerId} não encontrado.`);
  }
}



// ENABLES THE MODAL FORM
function enableForm() {
  const formularioModal = new bootstrap.Modal(document.getElementById('formularioModal'));
  formularioModal.show();
  document.getElementById("nameInput").value = "";
  document.getElementById("positionInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("numberInput").value = "";
  document.getElementById("playerIdInput").value = "";
}

// SENDS THE FORM INFO, VERFIFIES IF THE PLAYER EXIST BEFORE ADDING OR UPDATING IT
function sendForm() {
  document.getElementById("popupForm").onsubmit = (e) => {
    e.preventDefault();

    let nameInput = document.getElementById("nameInput");
    let positionInput = document.getElementById("positionInput");
    let ageInput = document.getElementById("ageInput");
    let numberInput = document.getElementById("numberInput");
    let playerIdInput = document.getElementById("playerIdInput");

    let playerId = playerIdInput.value;
    let playerName = nameInput.value.trim();
    let playerPosition = positionInput.value.trim();

    if (playerId) {

      let existingPlayer = players.find((player) => player.id === parseInt(playerId));

      if (existingPlayer) {
        existingPlayer.name = playerName;
        existingPlayer.position = playerPosition;
        existingPlayer.age = parseInt(ageInput.value);
        existingPlayer.number = numberInput.value ? parseInt(numberInput.value) : null;

        console.log("Jogador atualizado com sucesso:", existingPlayer);
        alert(`Jogador atualizado com sucesso!\n\nNome: ${existingPlayer.name}`);
      } else {
        console.error("Jogador com ID não encontrado.");
      }
    } else {

      let newPlayer = {
        id: Date.now(),
        name: playerName,
        position: playerPosition,
        age: parseInt(ageInput.value),
        number: numberInput.value ? parseInt(numberInput.value) : null,
        photo: "https://media.api-sports.io/football/players/306210.png"
      };

      players.push(newPlayer);
      console.log("Jogador adicionado com sucesso:", newPlayer);
      alert(`Jogador adicionado com sucesso!\n\nNome: ${newPlayer.name}`);

      const playerIndex = players.findIndex(player => player.id === playerId);

      document.getElementById('ancoraFooter').focus();
    }

    createPlayerCards(players);
    const formularioModal = bootstrap.Modal.getInstance(document.getElementById('formularioModal'));
    formularioModal.hide();
    e.target.reset();
    playerIdInput.value = ""; // Limpa o campo oculto

  };
}

// UPDATES PLAYER INFO SENDING THE PLAYER VALUES TO THE FORM MODAL
function updatePlayer(playerId) {
  let player = players.find((player) => player.id === playerId);

  if (!player) {
    console.error('Jogador não encontrado.');
    alert('Jogador não encontrado.');
    return;
  }

  enableForm();
  document.getElementById("nameInput").value = player.name;
  document.getElementById("positionInput").value = player.position;
  document.getElementById("ageInput").value = player.age;
  document.getElementById("numberInput").value = player.number || "";
  document.getElementById("playerIdInput").value = playerId
}

function loadFixture() {
  const home = document.getElementById("home");
  const visit = document.getElementById("visit");
  const times = document.getElementById("times");
  const stadium = document.getElementById("stadium");
  const datas = document.getElementById("datas");

  const fixture = fixturesData[0];
  const fixtureDate = new Date(fixture.fixture.date);

  // Formatar a data no formato dd/mm/yyyy hh:mm
  const formattedDate = `${String(fixtureDate.getDate()).padStart(2, "0")}/${String(
    fixtureDate.getMonth() + 1
  ).padStart(2, "0")}/${fixtureDate.getFullYear()} ${String(
    fixtureDate.getHours()
  ).padStart(2, "0")}:${String(fixtureDate.getMinutes()).padStart(2, "0")}`;

  home.src = fixture.teams.home.logo;
  visit.src = fixture.teams.away.logo;
  times.textContent = `${fixture.teams.home.name} VS ${fixture.teams.away.name}`;
  stadium.textContent = fixture.fixture.venue.name;
  datas.textContent = formattedDate;
}

function footerBack(){


}

