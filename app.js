const countries = [
  { name: "Afganistan", lat: 33.94, lon: 67.71 },
  { name: "Albania", lat: 41.15, lon: 20.17 },
  { name: "Algieria", lat: 28.03, lon: 1.66 },
  { name: "Argentyna", lat: -38.42, lon: -63.62 },
  { name: "Armenia", lat: 40.07, lon: 45.04 },
  { name: "Australia", lat: -25.27, lon: 133.78 },
  { name: "Austria", lat: 47.52, lon: 14.55 },
  { name: "Azerbejdżan", lat: 40.14, lon: 47.58 },
  { name: "Bangladesz", lat: 23.68, lon: 90.36 },
  { name: "Belgia", lat: 50.5, lon: 4.47 },
  { name: "Białoruś", lat: 53.71, lon: 27.95 },
  { name: "Boliwia", lat: -16.29, lon: -63.59 },
  { name: "Bośnia i Hercegowina", lat: 43.92, lon: 17.68 },
  { name: "Brazylia", lat: -14.24, lon: -51.93 },
  { name: "Bułgaria", lat: 42.73, lon: 25.49 },
  { name: "Chile", lat: -35.68, lon: -71.54 },
  { name: "Chiny", lat: 35.86, lon: 104.2 },
  { name: "Chorwacja", lat: 45.1, lon: 15.2 },
  { name: "Czechy", lat: 49.82, lon: 15.47 },
  { name: "Dania", lat: 56.26, lon: 9.5 },
  { name: "Egipt", lat: 26.82, lon: 30.8 },
  { name: "Ekwador", lat: -1.83, lon: -78.18 },
  { name: "Estonia", lat: 58.6, lon: 25.01 },
  { name: "Etiopia", lat: 9.15, lon: 40.49 },
  { name: "Finlandia", lat: 61.92, lon: 25.75 },
  { name: "Francja", lat: 46.23, lon: 2.21 },
  { name: "Ghana", lat: 7.95, lon: -1.02 },
  { name: "Grecja", lat: 39.07, lon: 21.82 },
  { name: "Gruzja", lat: 42.32, lon: 43.36 },
  { name: "Hiszpania", lat: 40.46, lon: -3.75 },
  { name: "Holandia", lat: 52.13, lon: 5.29 },
  { name: "Indie", lat: 20.59, lon: 78.96 },
  { name: "Indonezja", lat: -0.79, lon: 113.92 },
  { name: "Irak", lat: 33.22, lon: 43.68 },
  { name: "Iran", lat: 32.43, lon: 53.69 },
  { name: "Irlandia", lat: 53.41, lon: -8.24 },
  { name: "Islandia", lat: 64.96, lon: -19.02 },
  { name: "Izrael", lat: 31.05, lon: 34.85 },
  { name: "Japonia", lat: 36.2, lon: 138.25 },
  { name: "Jordania", lat: 30.59, lon: 36.24 },
  { name: "Kanada", lat: 56.13, lon: -106.35 },
  { name: "Kazachstan", lat: 48.02, lon: 66.92 },
  { name: "Kenia", lat: -0.02, lon: 37.91 },
  { name: "Kolumbia", lat: 4.57, lon: -74.3 },
  { name: "Korea Południowa", lat: 35.91, lon: 127.77 },
  { name: "Kostaryka", lat: 9.75, lon: -83.75 },
  { name: "Litwa", lat: 55.17, lon: 23.88 },
  { name: "Łotwa", lat: 56.88, lon: 24.6 },
  { name: "Macedonia Północna", lat: 41.61, lon: 21.75 },
  { name: "Malezja", lat: 4.21, lon: 101.98 },
  { name: "Maroko", lat: 31.79, lon: -7.09 },
  { name: "Meksyk", lat: 23.63, lon: -102.55 },
  { name: "Mołdawia", lat: 47.41, lon: 28.37 },
  { name: "Mongolia", lat: 46.86, lon: 103.85 },
  { name: "Niemcy", lat: 51.17, lon: 10.45 },
  { name: "Nigeria", lat: 9.08, lon: 8.68 },
  { name: "Norwegia", lat: 60.47, lon: 8.47 },
  { name: "Nowa Zelandia", lat: -40.9, lon: 174.89 },
  { name: "Pakistan", lat: 30.38, lon: 69.35 },
  { name: "Peru", lat: -9.19, lon: -75.02 },
  { name: "Polska", lat: 51.92, lon: 19.15 },
  { name: "Portugalia", lat: 39.4, lon: -8.22 },
  { name: "Republika Południowej Afryki", lat: -30.56, lon: 22.94 },
  { name: "Rumunia", lat: 45.94, lon: 24.97 },
  { name: "Serbia", lat: 44.02, lon: 21.01 },
  { name: "Słowacja", lat: 48.67, lon: 19.7 },
  { name: "Słowenia", lat: 46.15, lon: 14.99 },
  { name: "Stany Zjednoczone", lat: 37.09, lon: -95.71 },
  { name: "Szwajcaria", lat: 46.82, lon: 8.23 },
  { name: "Szwecja", lat: 60.13, lon: 18.64 },
  { name: "Tajlandia", lat: 15.87, lon: 100.99 },
  { name: "Tanzania", lat: -6.37, lon: 34.89 },
  { name: "Tunezja", lat: 33.89, lon: 9.54 },
  { name: "Turcja", lat: 38.96, lon: 35.24 },
  { name: "Ukraina", lat: 48.38, lon: 31.17 },
  { name: "Urugwaj", lat: -32.52, lon: -55.77 },
  { name: "Uzbekistan", lat: 41.38, lon: 64.59 },
  { name: "Węgry", lat: 47.16, lon: 19.5 },
  { name: "Wielka Brytania", lat: 55.38, lon: -3.44 },
  { name: "Wietnam", lat: 14.06, lon: 108.28 },
  { name: "Włochy", lat: 41.87, lon: 12.57 },
  { name: "Zjednoczone Emiraty Arabskie", lat: 23.42, lon: 53.85 },
];

const countryCodes = {
  Afganistan: "AF",
  Albania: "AL",
  Algieria: "DZ",
  Argentyna: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbejdżan: "AZ",
  Bangladesz: "BD",
  Belgia: "BE",
  Białoruś: "BY",
  Boliwia: "BO",
  "Bośnia i Hercegowina": "BA",
  Brazylia: "BR",
  Bułgaria: "BG",
  Chile: "CL",
  Chiny: "CN",
  Chorwacja: "HR",
  Czechy: "CZ",
  Dania: "DK",
  Egipt: "EG",
  Ekwador: "EC",
  Estonia: "EE",
  Etiopia: "ET",
  Finlandia: "FI",
  Francja: "FR",
  Ghana: "GH",
  Grecja: "GR",
  Gruzja: "GE",
  Hiszpania: "ES",
  Holandia: "NL",
  Indie: "IN",
  Indonezja: "ID",
  Irak: "IQ",
  Iran: "IR",
  Irlandia: "IE",
  Islandia: "IS",
  Izrael: "IL",
  Japonia: "JP",
  Jordania: "JO",
  Kanada: "CA",
  Kazachstan: "KZ",
  Kenia: "KE",
  Kolumbia: "CO",
  "Korea Południowa": "KR",
  Kostaryka: "CR",
  Litwa: "LT",
  Łotwa: "LV",
  "Macedonia Północna": "MK",
  Malezja: "MY",
  Maroko: "MA",
  Meksyk: "MX",
  Mołdawia: "MD",
  Mongolia: "MN",
  Niemcy: "DE",
  Nigeria: "NG",
  Norwegia: "NO",
  "Nowa Zelandia": "NZ",
  Pakistan: "PK",
  Peru: "PE",
  Polska: "PL",
  Portugalia: "PT",
  "Republika Południowej Afryki": "ZA",
  Rumunia: "RO",
  Serbia: "RS",
  Słowacja: "SK",
  Słowenia: "SI",
  "Stany Zjednoczone": "US",
  Szwajcaria: "CH",
  Szwecja: "SE",
  Tajlandia: "TH",
  Tanzania: "TZ",
  Tunezja: "TN",
  Turcja: "TR",
  Ukraina: "UA",
  Urugwaj: "UY",
  Uzbekistan: "UZ",
  Węgry: "HU",
  "Wielka Brytania": "GB",
  Wietnam: "VN",
  Włochy: "IT",
  "Zjednoczone Emiraty Arabskie": "AE",
};

const translations = {
  pl: {
    locale: "pl-PL",
    label: "PL",
    ariaLanguage: "Język",
    tagline: "Codzienna zagadka geograficzna",
    newGame: "Nowa gra",
    theme: "Zmień motyw",
    mapRegion: "Mapa gry",
    canvas: "Interaktywny globus z próbami",
    panel: "Panel gry",
    panelKicker: "Znajdź ukryty kraj",
    firstTitle: "Wpisz pierwszy strzał",
    firstText: "Po każdej próbie zobaczysz odległość, kierunek i kolor temperatury.",
    countryLabel: "Kraj",
    placeholder: "np. Polska",
    submit: "Strzał",
    help: "Enter zatwierdza. Im cieplejszy kolor, tym bliżej celu.",
    guesses: "Próby",
    closest: "Najbliżej",
    direction: "Kierunek",
    heat: "Temperatura",
    noGuesses: "Brak prób",
    history: "Historia",
    heatClose: (score) => `${score}% blisko`,
    countriesLeft: (count) => `${count} krajów`,
    emptyHistory: "Pierwszy strzał ustawi mapę i pokaże, czy jesteś zimno czy gorąco.",
    notFound: "Nie mam takiego kraju na liście. Wybierz podpowiedź z pola.",
    duplicate: "Ten kraj już był sprawdzony.",
    winToast: (name) => `Brawo! To ${name}.`,
    randomReady: "Nowa losowa runda gotowa.",
    wonTitle: (name) => `${name} znalezione`,
    wonText: (count) => `Udało się po ${count} próbach. Możesz uruchomić nową losową rundę.`,
    distanceTitle: (distance) => `${distance} od celu`,
    distanceText: (name, direction, close) => `${name} jest ${direction} względem ukrytego kraju. Szukaj ${close ? "bardzo blisko" : "dalej w tym kierunku"}.`,
    metaDirection: (direction) => `${direction} do celu`,
    directions: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  },
  en: {
    locale: "en-US",
    label: "EN",
    ariaLanguage: "Language",
    tagline: "Daily geography puzzle",
    newGame: "New game",
    theme: "Toggle theme",
    mapRegion: "Game map",
    canvas: "Interactive globe with guesses",
    panel: "Game panel",
    panelKicker: "Find the hidden country",
    firstTitle: "Enter your first guess",
    firstText: "After each guess you will see distance, direction, and heat color.",
    countryLabel: "Country",
    placeholder: "e.g. Poland",
    submit: "Guess",
    help: "Press Enter to submit. Warmer colors mean you are closer.",
    guesses: "Guesses",
    closest: "Closest",
    direction: "Direction",
    heat: "Heat",
    noGuesses: "No guesses",
    history: "History",
    heatClose: (score) => `${score}% close`,
    countriesLeft: (count) => `${count} countries`,
    emptyHistory: "Your first guess will set the map and show whether you are cold or hot.",
    notFound: "That country is not on the list. Choose one of the suggestions.",
    duplicate: "You already checked that country.",
    winToast: (name) => `Nice! It was ${name}.`,
    randomReady: "New random round is ready.",
    wonTitle: (name) => `${name} found`,
    wonText: (count) => `Solved in ${count} guesses. You can start a new random round.`,
    distanceTitle: (distance) => `${distance} from target`,
    distanceText: (name, direction, close) => `${name} is ${direction} from the hidden country. Search ${close ? "very close" : "farther in that direction"}.`,
    metaDirection: (direction) => `${direction} to target`,
    directions: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  },
  de: {
    locale: "de-DE",
    label: "DE",
    ariaLanguage: "Sprache",
    tagline: "Taegliches Geografie-Raetsel",
    newGame: "Neues Spiel",
    theme: "Design wechseln",
    mapRegion: "Spielkarte",
    canvas: "Interaktiver Globus mit Versuchen",
    panel: "Spielbereich",
    panelKicker: "Finde das versteckte Land",
    firstTitle: "Gib den ersten Tipp ein",
    firstText: "Nach jedem Tipp siehst du Entfernung, Richtung und Waermefarbe.",
    countryLabel: "Land",
    placeholder: "z. B. Polen",
    submit: "Tipp",
    help: "Enter bestaetigt. Waermere Farben bedeuten naeher am Ziel.",
    guesses: "Tipps",
    closest: "Naechste",
    direction: "Richtung",
    heat: "Waerme",
    noGuesses: "Keine Tipps",
    history: "Verlauf",
    heatClose: (score) => `${score}% nah`,
    countriesLeft: (count) => `${count} Laender`,
    emptyHistory: "Der erste Tipp richtet die Karte aus und zeigt, ob du kalt oder warm bist.",
    notFound: "Dieses Land steht nicht auf der Liste. Waehle einen Vorschlag.",
    duplicate: "Dieses Land wurde schon geprueft.",
    winToast: (name) => `Stark! Es war ${name}.`,
    randomReady: "Neue Zufallsrunde ist bereit.",
    wonTitle: (name) => `${name} gefunden`,
    wonText: (count) => `Geloest nach ${count} Tipps. Du kannst eine neue Zufallsrunde starten.`,
    distanceTitle: (distance) => `${distance} vom Ziel`,
    distanceText: (name, direction, close) => `${name} liegt ${direction} vom versteckten Land. Suche ${close ? "ganz in der Naehe" : "weiter in diese Richtung"}.`,
    metaDirection: (direction) => `${direction} zum Ziel`,
    directions: ["N", "NO", "O", "SO", "S", "SW", "W", "NW"],
  },
  es: {
    locale: "es-ES",
    label: "ES",
    ariaLanguage: "Idioma",
    tagline: "Reto diario de geografia",
    newGame: "Nueva partida",
    theme: "Cambiar tema",
    mapRegion: "Mapa del juego",
    canvas: "Globo interactivo con intentos",
    panel: "Panel del juego",
    panelKicker: "Encuentra el pais oculto",
    firstTitle: "Escribe tu primer intento",
    firstText: "Tras cada intento veras distancia, direccion y color de temperatura.",
    countryLabel: "Pais",
    placeholder: "p. ej. Polonia",
    submit: "Probar",
    help: "Enter confirma. Cuanto mas calido el color, mas cerca estas.",
    guesses: "Intentos",
    closest: "Mas cerca",
    direction: "Direccion",
    heat: "Temperatura",
    noGuesses: "Sin intentos",
    history: "Historial",
    heatClose: (score) => `${score}% cerca`,
    countriesLeft: (count) => `${count} paises`,
    emptyHistory: "El primer intento ajustara el mapa y mostrara si estas frio o caliente.",
    notFound: "Ese pais no esta en la lista. Elige una sugerencia.",
    duplicate: "Ya probaste ese pais.",
    winToast: (name) => `Bien! Era ${name}.`,
    randomReady: "Nueva ronda aleatoria lista.",
    wonTitle: (name) => `${name} encontrado`,
    wonText: (count) => `Resuelto en ${count} intentos. Puedes iniciar otra ronda aleatoria.`,
    distanceTitle: (distance) => `${distance} del objetivo`,
    distanceText: (name, direction, close) => `${name} esta al ${direction} del pais oculto. Busca ${close ? "muy cerca" : "mas lejos en esa direccion"}.`,
    metaDirection: (direction) => `${direction} al objetivo`,
    directions: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"],
  },
  fr: {
    locale: "fr-FR",
    label: "FR",
    ariaLanguage: "Langue",
    tagline: "Defi geo quotidien",
    newGame: "Nouvelle partie",
    theme: "Changer de theme",
    mapRegion: "Carte du jeu",
    canvas: "Globe interactif avec essais",
    panel: "Panneau de jeu",
    panelKicker: "Trouve le pays cache",
    firstTitle: "Entre un premier essai",
    firstText: "Apres chaque essai, tu verras la distance, la direction et la couleur.",
    countryLabel: "Pays",
    placeholder: "ex. Pologne",
    submit: "Essai",
    help: "Entree valide. Plus la couleur est chaude, plus tu es proche.",
    guesses: "Essais",
    closest: "Plus proche",
    direction: "Direction",
    heat: "Chaleur",
    noGuesses: "Aucun essai",
    history: "Historique",
    heatClose: (score) => `${score}% proche`,
    countriesLeft: (count) => `${count} pays`,
    emptyHistory: "Le premier essai orientera la carte et dira si tu es froid ou chaud.",
    notFound: "Ce pays n'est pas dans la liste. Choisis une suggestion.",
    duplicate: "Ce pays a deja ete essaye.",
    winToast: (name) => `Bravo ! C'etait ${name}.`,
    randomReady: "Nouvelle manche aleatoire prete.",
    wonTitle: (name) => `${name} trouve`,
    wonText: (count) => `Resolue en ${count} essais. Tu peux lancer une nouvelle manche aleatoire.`,
    distanceTitle: (distance) => `${distance} de la cible`,
    distanceText: (name, direction, close) => `${name} est ${direction} du pays cache. Cherche ${close ? "tout pres" : "plus loin dans cette direction"}.`,
    metaDirection: (direction) => `${direction} vers la cible`,
    directions: ["N", "NE", "E", "SE", "S", "SO", "O", "NO"],
  },
  uk: {
    locale: "uk-UA",
    label: "UA",
    ariaLanguage: "Мова",
    tagline: "Щоденна географічна головоломка",
    newGame: "Нова гра",
    theme: "Змінити тему",
    mapRegion: "Мапа гри",
    canvas: "Інтерактивний глобус зі спробами",
    panel: "Панель гри",
    panelKicker: "Знайди приховану країну",
    firstTitle: "Введи першу спробу",
    firstText: "Після кожної спроби ти побачиш відстань, напрямок і колір температури.",
    countryLabel: "Країна",
    placeholder: "напр. Польща",
    submit: "Спроба",
    help: "Enter підтверджує. Тепліший колір означає ближче до цілі.",
    guesses: "Спроби",
    closest: "Найближче",
    direction: "Напрямок",
    heat: "Температура",
    noGuesses: "Немає спроб",
    history: "Історія",
    heatClose: (score) => `${score}% близько`,
    countriesLeft: (count) => `${count} країн`,
    emptyHistory: "Перша спроба налаштує мапу і покаже, холодно чи гаряче.",
    notFound: "Такої країни немає у списку. Обери підказку.",
    duplicate: "Цю країну вже перевірено.",
    winToast: (name) => `Чудово! Це ${name}.`,
    randomReady: "Нова випадкова гра готова.",
    wonTitle: (name) => `${name} знайдено`,
    wonText: (count) => `Розв'язано за ${count} спроб. Можна почати нову випадкову гру.`,
    distanceTitle: (distance) => `${distance} до цілі`,
    distanceText: (name, direction, close) => `${name} розташована ${direction} від прихованої країни. Шукай ${close ? "зовсім поруч" : "далі в цьому напрямку"}.`,
    metaDirection: (direction) => `${direction} до цілі`,
    directions: ["Пн", "ПнСх", "Сх", "ПдСх", "Пд", "ПдЗх", "Зх", "ПнЗх"],
  },
};

const fallbackLandMasses = [
  [
    [-168, 72], [-132, 70], [-104, 58], [-92, 43], [-111, 30], [-98, 16], [-84, 9],
    [-76, -10], [-68, -25], [-67, -50], [-75, -56], [-86, -42], [-77, -15],
    [-92, 2], [-110, 23], [-126, 36], [-150, 53],
  ],
  [
    [-20, 36], [-5, 60], [30, 70], [75, 64], [110, 58], [145, 48], [150, 26],
    [122, 15], [108, 2], [82, 18], [70, 6], [48, 28], [30, 31], [23, 5],
    [34, -18], [26, -34], [10, -35], [-8, -17], [-16, 7], [-8, 25],
  ],
  [
    [110, -11], [154, -11], [151, -39], [124, -44], [112, -30],
  ],
  [
    [166, -35], [179, -42], [174, -48], [162, -44],
  ],
  [
    [-52, 83], [-20, 78], [-36, 62], [-58, 60],
  ],
];

const canvas = document.querySelector("#globeCanvas");
const ctx = canvas.getContext("2d");
const form = document.querySelector("#guessForm");
const input = document.querySelector("#guessInput");
const languageSelect = document.querySelector("#languageSelect");
const list = document.querySelector("#countryList");
const historyList = document.querySelector("#guessHistory");
const emptyHistory = document.querySelector("#emptyHistory");
const statusTitle = document.querySelector("#statusTitle");
const statusText = document.querySelector("#statusText");
const guessCount = document.querySelector("#guessCount");
const bestDistance = document.querySelector("#bestDistance");
const bearingText = document.querySelector("#bearingText");
const remainingCount = document.querySelector("#remainingCount");
const heatLabel = document.querySelector("#heatLabel");
const heatbar = document.querySelector(".heatbar");
const toast = document.querySelector("#toast");

const state = {
  target: pickDailyCountry(),
  guesses: [],
  language: getInitialLanguage(),
  rotation: 10,
  tilt: -8,
  land: null,
  borders: null,
  dragging: false,
  lastX: 0,
  won: false,
};

let toastTimer;
let animationFrame;
const displayNames = {};

function getInitialLanguage() {
  const saved = localStorage.getItem("atlasping-language");
  if (translations[saved]) return saved;
  const browserLanguage = navigator.language?.slice(0, 2);
  return translations[browserLanguage] ? browserLanguage : "pl";
}

function t() {
  return translations[state.language] || translations.pl;
}

function getDisplayNames() {
  const locale = t().locale;
  if (!displayNames[locale]) {
    displayNames[locale] = new Intl.DisplayNames([locale], { type: "region" });
  }
  return displayNames[locale];
}

function countryDisplayName(country, language = state.language) {
  const translation = translations[language] || translations.pl;
  const code = countryCodes[country.name];

  if (!code) return country.name;
  try {
    displayNames[translation.locale] ||= new Intl.DisplayNames([translation.locale], { type: "region" });
    return displayNames[translation.locale].of(code) || country.name;
  } catch {
    return country.name;
  }
}

function normalize(value) {
  return value
    .toLocaleLowerCase("pl-PL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .trim();
}

function pickDailyCountry(offset = 0) {
  const today = new Date();
  const seedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
  const seed = Math.floor(seedDate.getTime() / 86400000);
  return countries[(seed * 17 + 11) % countries.length];
}

function newRandomCountry() {
  const pool = countries.filter((country) => country.name !== state.target.name);
  return pool[Math.floor(Math.random() * pool.length)];
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function toDegrees(value) {
  return (value * 180) / Math.PI;
}

function haversine(a, b) {
  const radius = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return Math.round(radius * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

function bearing(a, b) {
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const dLon = toRadians(b.lon - a.lon);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return (toDegrees(Math.atan2(y, x)) + 360) % 360;
}

function directionLabel(angle) {
  const labels = t().directions;
  return labels[Math.round(angle / 45) % 8];
}

function closeness(distance) {
  return Math.max(0, Math.min(1, 1 - distance / 20000));
}

function heatColor(score) {
  if (score > 0.92) return "#d73535";
  if (score > 0.78) return "#ef6f3d";
  if (score > 0.58) return "#efb84a";
  if (score > 0.36) return "#82b96b";
  return "#4a91c9";
}

function formatKm(distance) {
  return `${new Intl.NumberFormat(t().locale).format(distance)} km`;
}

function findCountry(value) {
  const normalized = normalize(value);
  return countries.find((country) => {
    const code = countryCodes[country.name];
    const names = [
      country.name,
      code,
      ...Object.keys(translations).map((language) => countryDisplayName(country, language)),
    ];
    return names.some((name) => normalize(name) === normalized);
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function resetGame(target = pickDailyCountry()) {
  state.target = target;
  state.guesses = [];
  state.won = false;
  state.rotation = 10;
  input.value = "";
  input.disabled = false;
  form.querySelector("button").disabled = false;
  updateUI();
  drawGlobe();
  input.focus();
}

function submitGuess(event) {
  event.preventDefault();
  if (state.won) return;

  const country = findCountry(input.value);
  if (!country) {
    showToast(t().notFound);
    return;
  }

  if (state.guesses.some((guess) => guess.name === country.name)) {
    showToast(t().duplicate);
    input.select();
    return;
  }

  const distance = haversine(country, state.target);
  const angle = bearing(country, state.target);
  const score = closeness(distance);
  const guess = {
    ...country,
    distance,
    angle,
    score,
    color: heatColor(score),
  };

  state.guesses.unshift(guess);
  state.rotation = -country.lon;
  state.tilt = -Math.max(-42, Math.min(42, country.lat));
  input.value = "";

  if (country.name === state.target.name) {
    state.won = true;
    input.disabled = true;
    form.querySelector("button").disabled = true;
    showToast(t().winToast(countryDisplayName(state.target)));
  }

  updateUI();
  drawGlobe();
}

function updateUI() {
  const best = state.guesses.reduce((winner, guess) => (!winner || guess.distance < winner.distance ? guess : winner), null);
  const last = state.guesses[0];
  const text = t();
  const lastDirection = last ? directionLabel(last.angle) : "-";

  guessCount.textContent = state.guesses.length;
  bestDistance.textContent = best ? formatKm(best.distance) : "-";
  bearingText.textContent = lastDirection;
  remainingCount.textContent = text.countriesLeft(countries.length - state.guesses.length);
  emptyHistory.hidden = state.guesses.length > 0;
  historyList.hidden = state.guesses.length === 0;

  if (state.won) {
    statusTitle.textContent = text.wonTitle(countryDisplayName(state.target));
    statusText.textContent = text.wonText(state.guesses.length);
  } else if (last) {
    statusTitle.textContent = text.distanceTitle(formatKm(last.distance));
    statusText.textContent = text.distanceText(countryDisplayName(last), lastDirection, last.distance < 1200);
  } else {
    statusTitle.textContent = text.firstTitle;
    statusText.textContent = text.firstText;
  }

  const heat = best ? Math.round(best.score * 100) : 0;
  heatbar.style.setProperty("--heat", `${heat}%`);
  heatLabel.textContent = best ? text.heatClose(heat) : text.noGuesses;

  historyList.innerHTML = state.guesses
    .map(
      (guess) => {
        const guessDirection = directionLabel(guess.angle);
        return `
        <li class="guess-item" style="--swatch: ${guess.color}">
          <span class="guess-swatch" aria-hidden="true"></span>
          <span>
            <span class="guess-name">${escapeHTML(countryDisplayName(guess))}</span>
            <span class="guess-meta">${escapeHTML(text.metaDirection(guessDirection))}</span>
          </span>
          <span class="guess-distance">${formatKm(guess.distance)}</span>
        </li>
      `;
      },
    )
    .join("");
}

function createProjection(radius, centerX, centerY) {
  if (!window.d3?.geoOrthographic) return null;
  return d3
    .geoOrthographic()
    .translate([centerX, centerY])
    .scale(radius)
    .rotate([state.rotation, state.tilt])
    .clipAngle(90)
    .precision(0.7);
}

function isVisible(lat, lon) {
  if (!window.d3?.geoDistance) return true;
  const center = [-state.rotation, -state.tilt];
  return d3.geoDistance([lon, lat], center) < Math.PI / 2;
}

function project(lat, lon, radius, centerX, centerY, projection = null) {
  if (projection) {
    const point = projection([lon, lat]);
    if (!point) return { x: 0, y: 0, z: -1 };
    const visible = isVisible(lat, lon);
    return { x: point[0], y: point[1], z: visible ? 1 : -1 };
  }

  const lambda = toRadians(lon + state.rotation);
  const phi = toRadians(lat + state.tilt);
  const x = radius * Math.cos(phi) * Math.sin(lambda);
  const y = -radius * Math.sin(phi);
  const z = Math.cos(phi) * Math.cos(lambda);
  return { x: centerX + x, y: centerY + y, z };
}

function drawLandPath(points, radius, centerX, centerY) {
  ctx.beginPath();
  let started = false;
  for (const [lon, lat] of points) {
    const point = project(lat, lon, radius, centerX, centerY);
    if (point.z < -0.08) {
      started = false;
      continue;
    }
    if (!started) {
      ctx.moveTo(point.x, point.y);
      started = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawFallbackLand(radius, centerX, centerY) {
  const land = getComputedStyle(document.documentElement).getPropertyValue("--land").trim();
  const landDark = getComputedStyle(document.documentElement).getPropertyValue("--land-dark").trim();

  ctx.fillStyle = land;
  ctx.strokeStyle = landDark;
  ctx.lineWidth = 3;
  fallbackLandMasses.forEach((shape) => drawLandPath(shape, radius, centerX, centerY));
}

function drawRealLand(projection) {
  const land = getComputedStyle(document.documentElement).getPropertyValue("--land").trim();
  const landDark = getComputedStyle(document.documentElement).getPropertyValue("--land-dark").trim();
  const countryBorder = getComputedStyle(document.documentElement).getPropertyValue("--country-border").trim();
  const path = d3.geoPath(projection, ctx);

  ctx.save();
  ctx.beginPath();
  path(state.land);
  ctx.fillStyle = land;
  ctx.fill();
  ctx.strokeStyle = landDark;
  ctx.lineWidth = 1.7;
  ctx.stroke();

  if (state.borders) {
    ctx.beginPath();
    path(state.borders);
    ctx.strokeStyle = countryBorder;
    ctx.lineWidth = 0.85;
    ctx.stroke();
  }
  ctx.restore();
}

function drawGraticule(radius, centerX, centerY, projection = null) {
  ctx.save();
  ctx.strokeStyle = "rgba(255, 250, 240, 0.22)";
  ctx.lineWidth = 1;

  if (projection && window.d3?.geoPath && window.d3?.geoGraticule10) {
    const path = d3.geoPath(projection, ctx);
    const graticule = d3.geoGraticule10();
    ctx.beginPath();
    path(graticule);
    ctx.stroke();
    ctx.restore();
    return;
  }

  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath();
    for (let lon = -180; lon <= 180; lon += 4) {
      const point = project(lat, lon, radius, centerX, centerY);
      if (point.z < 0) continue;
      if (lon === -180) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    }
    ctx.stroke();
  }

  for (let lon = -150; lon <= 180; lon += 30) {
    ctx.beginPath();
    let started = false;
    for (let lat = -80; lat <= 80; lat += 3) {
      const point = project(lat, lon, radius, centerX, centerY);
      if (point.z < 0) {
        started = false;
        continue;
      }
      if (!started) {
        ctx.moveTo(point.x, point.y);
        started = true;
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }
    ctx.stroke();
  }

  ctx.restore();
}

function drawMarkers(radius, centerX, centerY, projection = null) {
  state.guesses
    .slice()
    .reverse()
    .forEach((guess, index) => {
      const point = project(guess.lat, guess.lon, radius, centerX, centerY, projection);
      if (point.z < 0) return;
      const markerRadius = index === state.guesses.length - 1 ? 12 : 8;

      ctx.save();
      ctx.globalAlpha = 0.45 + point.z * 0.55;
      ctx.fillStyle = guess.color;
      ctx.strokeStyle = "rgba(255, 250, 240, 0.95)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(point.x, point.y, markerRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    });
}

function drawGlobe() {
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(() => {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width * 0.43;
    const ocean = getComputedStyle(document.documentElement).getPropertyValue("--ocean").trim();
    const oceanDeep = getComputedStyle(document.documentElement).getPropertyValue("--ocean-deep").trim();
    const projection = createProjection(radius, centerX, centerY);

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(centerX - radius * 0.28, centerY - radius * 0.34, radius * 0.08, centerX, centerY, radius);
    gradient.addColorStop(0, "#8fd8d7");
    gradient.addColorStop(0.48, ocean);
    gradient.addColorStop(1, oceanDeep);

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = gradient;
    ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

    drawGraticule(radius, centerX, centerY, projection);
    if (projection && state.land) {
      drawRealLand(projection);
    } else {
      drawFallbackLand(radius, centerX, centerY);
    }

    drawMarkers(radius, centerX, centerY, projection);

    const shade = ctx.createRadialGradient(centerX - radius * 0.22, centerY - radius * 0.28, radius * 0.1, centerX, centerY, radius);
    shade.addColorStop(0, "rgba(255, 255, 255, 0.22)");
    shade.addColorStop(0.58, "rgba(255, 255, 255, 0)");
    shade.addColorStop(1, "rgba(0, 0, 0, 0.28)");
    ctx.fillStyle = shade;
    ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctx.restore();

    ctx.strokeStyle = "rgba(255, 250, 240, 0.72)";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
  });
}

function populateCountries() {
  const fragment = document.createDocumentFragment();
  countries
    .map((country) => countryDisplayName(country))
    .sort((a, b) => a.localeCompare(b, t().locale))
    .forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      fragment.append(option);
    });

  list.replaceChildren(fragment);
}

function applyLanguage() {
  const text = t();
  document.documentElement.lang = state.language;
  document.title = "AtlasPing";
  languageSelect.value = state.language;
  languageSelect.setAttribute("aria-label", text.ariaLanguage);
  languageSelect.title = text.ariaLanguage;

  document.querySelector(".play-area").setAttribute("aria-label", text.mapRegion);
  canvas.setAttribute("aria-label", text.canvas);
  document.querySelector(".control-panel").setAttribute("aria-label", text.panel);
  document.querySelector(".eyebrow").textContent = text.tagline;
  document.querySelector(".panel-kicker").textContent = text.panelKicker;
  document.querySelector("#newGameButton").setAttribute("aria-label", text.newGame);
  document.querySelector("#newGameButton").title = text.newGame;
  document.querySelector("#themeButton").setAttribute("aria-label", text.theme);
  document.querySelector("#themeButton").title = text.theme;
  document.querySelector('label[for="guessInput"]').textContent = text.countryLabel;
  input.placeholder = text.placeholder;
  form.querySelector("button").textContent = text.submit;
  document.querySelector("#inputHelp").textContent = text.help;

  const metricLabels = document.querySelectorAll(".metric span");
  metricLabels[0].textContent = text.guesses;
  metricLabels[1].textContent = text.closest;
  metricLabels[2].textContent = text.direction;

  document.querySelector(".heat-section").setAttribute("aria-label", text.heat);
  document.querySelector(".heat-section h3").textContent = text.heat;
  document.querySelector(".history-section").setAttribute("aria-label", text.history);
  document.querySelector(".history-section h3").textContent = text.history;
  emptyHistory.textContent = text.emptyHistory;

  populateCountries();
  updateUI();
}

async function loadWorldMap() {
  if (!window.d3?.geoOrthographic || !window.d3?.geoPath || !window.topojson?.feature) {
    canvas.dataset.map = "fallback";
    canvas.dataset.borders = "fallback";
    return;
  }

  try {
    const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json");
    if (!response.ok) throw new Error("Map data unavailable");
    const topology = await response.json();
    const countryObject = topology.objects.countries;
    state.land = topojson.feature(topology, topology.objects.land || countryObject);
    state.borders = countryObject ? topojson.mesh(topology, countryObject, (a, b) => a !== b) : null;
    canvas.dataset.map = "real";
    canvas.dataset.borders = state.borders ? "real" : "none";
    drawGlobe();
  } catch (error) {
    canvas.dataset.map = "fallback";
    canvas.dataset.borders = "fallback";
    console.warn("Nie udało się pobrać dokładnej mapy, używam awaryjnego szkicu.", error);
  }
}

function onPointerDown(event) {
  state.dragging = true;
  state.lastX = event.clientX;
  canvas.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  if (!state.dragging) return;
  const delta = event.clientX - state.lastX;
  state.lastX = event.clientX;
  state.rotation += delta * 0.25;
  drawGlobe();
}

function onPointerUp(event) {
  state.dragging = false;
  canvas.releasePointerCapture(event.pointerId);
}

form.addEventListener("submit", submitGuess);
canvas.addEventListener("pointerdown", onPointerDown);
canvas.addEventListener("pointermove", onPointerMove);
canvas.addEventListener("pointerup", onPointerUp);
canvas.addEventListener("pointercancel", onPointerUp);

document.querySelector("#newGameButton").addEventListener("click", () => {
  resetGame(newRandomCountry());
  showToast(t().randomReady);
});

document.querySelector("#themeButton").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  drawGlobe();
});

languageSelect.addEventListener("change", () => {
  state.language = languageSelect.value;
  localStorage.setItem("atlasping-language", state.language);
  applyLanguage();
});

window.addEventListener("resize", drawGlobe);

applyLanguage();
drawGlobe();
loadWorldMap();
