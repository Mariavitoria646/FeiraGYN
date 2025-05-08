
// Inicializa o mapa em Goiânia
var map = L.map('map').setView([-16.6864, -49.2643], 13);

// Adiciona o mapa base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Lista das feiras com coordenadas aproximadas
const feiras = [
  {
    nome: "Feira Hippie",
    endereco: "Praça do Trabalhador – Setor Norte Ferroviário",
    horario: "Sábado (7h às 16h) e Domingo (7h às 13h)",
    coords: [-16.6752, -49.2639]
  },
  {
    nome: "Feira da Lua",
    endereco: "Praça Tamandaré – Setor Oeste",
    horario: "Sábado (16h30 às 22h)",
    coords: [-16.6782, -49.2729]
  },
  {
    nome: "Feira do Sol",
    endereco: "Rua 9, Praça do Sol, Setor Oeste",
    horario: "Domingo (16h às 20h)",
    coords: [-16.6736, -49.2714]
  },
  {
    nome: "Feira do Cerrado",
    endereco: "Rua 72 – Parque da Criança (Atrás do Estádio Serra Dourada), Jardim Goiás",
    horario: "Domingo (a partir das 09h)",
    coords: [-16.6866, -49.2288]
  },
  {
    nome: "Feira do Entardecer",
    endereco: "Rua 115, Cepal do Setor Sul",
    horario: "Sexta-feira (16h às 21h)",
    coords: [-16.6991, -49.2671]
  },
  {
    nome: "Feira da OGV",
    endereco: "Rua T-36, entre as Ruas T-14 e Rua Carlos Chagas – Setor Bueno",
    horario: "Quarta-feira (16h às 22h)",
    coords: [-16.7104, -49.2755]
  },
  {
    nome: "Feira das Antiguidades",
    endereco: "Praça Almirante Tamandaré – Av. Assis Chateaubriand, 640 – St. Oeste",
    horario: "Domingo (8h às 14h)",
    coords: [-16.6786, -49.2727]
  },
  {
    nome: "Feira dos Importados",
    endereco: "Avenida São Paulo Q 75, 935 lt 1, Setor Campinas",
    horario: "Segunda a sábado (8h às 18h)",
    coords: [-16.6847, -49.2738]
  }
];

// Adiciona os marcadores com pop-ups
feiras.forEach(feira => {
  L.marker(feira.coords).addTo(map)
    .bindPopup(`<strong>${feira.nome}</strong><br>${feira.endereco}<br><em>${feira.horario}</em>`);
});
