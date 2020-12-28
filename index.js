let allCard = [
  {
    text: 'Mit gondolsz arról, hogy bizonyos dolgok tabunak számítanak?',
    color: 'pink'
  },
  {
    text: 'Milyen érzéseket ébreszt benned az anyaság?',
    color: 'purple'
  },
  {
    text: 'Milyen érzéseket ébreszt benned az apaság?',
    color: 'red'
  },
  {
    text: 'Mitől számít nőiesnek valami a társadalom szemében?',
    color: 'red'
  },
  {
    text: 'Mitől számít férfiasnak valami a társadalom szemében?',
    color: 'pink'
  },
  {
    text: 'Mitől számít valami nőiesnek a szemedben?',
    color: 'yellow'
  },
  {
    text: 'Mitől számít valami férfiasnak a szemedben?',
    color: 'yellow'
  },
  {
    text: 'Honnan tudod, hogy boldog vagy?',
    color: 'pink'
  },
  {
    text: 'Mennyire határozza meg a közérzeted az időjárás?',
    color: 'purple'
  },
  {
    text: 'Ha holnaptól másik nemű lennél, hogyan telne az első napod?',
    color: 'purple'
  },
  {
    text: 'Szereted a vágyaid?',
    color: 'yellow'
  },
  {
    text: 'Mit gondolsz a titkokról?',
    color: 'red'
  },
  {
    text: 'Mit gondolsz a szerelemről?',
    color: 'pink'
  },
  {
    text: 'Szerinted van olyan, hogy kegyes hazugság?',
    color: 'purple'
  },
  {
    text: 'Szerinted hogyan lehet a másiknak jól segíteni? ',
    color: 'red'
  },
  {
    text: 'Meséld el egy megbotránkozásodat. Miért, mivel kapcsolatban történt?',
    color: 'red'
  },
  {
    text: 'Van példaképed? Ha igen, ki az és miért?',
    color: 'purple'
  },
  {
    text: 'Sokak szerint "minden fejben dől el". Mit gondolsz erről?',
    color: 'yellow'
  },
  {
    text: 'Mit gondolsz a tökéletességről?',
    color: 'red'
  },
  {
    text: 'Mikor látod szépnek magad?',
    color: 'pink'
  },
  {
    text: 'Milyen dolgokra vagy büszke az életedben?',
    color: 'purple'
  },
  {
    text: 'Hogyan kezeled, ha bókolnak neked?',
    color: 'yellow'
  },
  {
    text: 'Fizikailag átlagosnak számítasz?',
    color: 'pink'
  },
  {
    text: 'Milyen számodra az érzéseidről beszélni?',
    color: 'pink'
  },
  {
    text: 'Mikor lesz számodra kínos egy beszélgetés?',
    color: 'yellow'
  },
  {
    text: 'Miből tudod, hogy jó egy beszélgetés?',
    color: 'red'
  },
  {
    text: 'Milyen szuperhősképességet választanál?',
    color: 'pink'
  },
  {
    text: 'Melyik a kedvenc ételed?',
    color: 'purple'
  },
  {
    text: 'Milyen helyet foglal el az életedben a sport?',
    color: 'yellow'
  },
  {
    text: 'Hogy bírod a fájdalmat?',
    color: 'yellow'
  },
  {
    text: 'Mikor érzed önazonosnak magad?',
    color: 'pink'
  },
  {
    text: 'Mennyire tartod magad fegyelmezettnek?',
    color: 'purple'
  },
  {
    text: 'Mennyire vagy tabudöntögető?',
    color: 'yellow'
  },
  {
    text: 'Mennyiben vagy más, mint a szüleid?',
    color: 'red'
  },
  {
    text: 'Mikor érzed magad szabadnak?',
    color: 'pink'
  },
  {
    text: 'Mikor érzed magad magabiztosnak? Mi kell hozzá?',
    color: 'purple'
  },
  {
    text: 'Mi a legpozitívabb élményed a menstruációval?',
    color: 'yellow'
  },
  {
    text: 'Milyen a kapcsolatod a testeddel?',
    color: 'red'
  },
  {
    text: 'Tervezel tetoválást? Ha igen, milyet?',
    color: 'red'
  },
  {
    text: 'Fontos számodra hogy tetsszél másoknak?',
    color: 'purple'
  },
  {
    text: 'Általában kinek a véleménye a legfontosabb a számodra és miért?',
    color: 'yellow'
  },
  {
    text: 'Mit gondolsz a hagyományokról?',
    color: 'red'
  },
  {
    text: 'Mi mostanában a hobbid?',
    color: 'pink'
  },
  {
    text: 'Van olyan dolog, amit megváltoztatnál magadon külsőleg? ',
    color: 'purple'
  },
  {
    text: 'Szerinted mitől szép valaki?',
    color: 'yellow'
  },
  {
    text: 'Szerinted a menopauzáról tabu beszélni? ',
    color: 'red'
  },
  {
    text: 'Milyen feltételekkel lennél modell?',
    color: 'pink'
  },
  {
    text: 'Ki vagy kik azok az emberek aki/akikre bármikor számíthatsz?',
    color: 'pink'
  },
  {
    text: 'Mit fejezel ki az öltözködéseddel?',
    color: 'yellow'
  },
  {
    text: 'Hogy állsz az elengedéssel?',
    color: 'red'
  },
  {
    text: 'Hogy tudod, az anyukád miként éli/élte meg a saját nőiségét?',
    color: 'red'
  },
  {
    text: 'Mit jelent számodra a szórakozás?',
    color: 'pink'
  },
  {
    text: ' Milyen kapcsolatban vagy a szüleiddel?',
    color: 'purple'
  },
  {
    text: 'Hogy képzeled magad nyolcvanévesen?',
    color: 'yellow'
  },
  {
    text: 'Mik foglalkoztatnak mostanában?',
    color: 'red'
  },
  {
    text: 'Miből tudod, hogy szeretnek téged?',
    color: 'purple'
  },
  {
    text: 'Mit gondolsz a divatról?',
    color: 'purple'
  },
  {
    text: 'Milyen a kapcsolatod a vérrel?',
    color: 'yellow'
  },
  {
    text: 'Mi a legszebb általános iskolai emléked?',
    color: 'red'
  },
  {
    text: 'Szerinted mit tanulhatnak tőled mások?',
    color: 'pink'
  },
  {
    text: 'Mitől hatódsz meg?',
    color: 'purple'
  },
  {
    text: 'Hogy állsz a sírással?',
    color: 'yellow'
  },
  {
    text: 'Mivel kapcsolatban van most az életedben szorongás?',
    color: 'red'
  },
  {
    text: 'Mivel kapcsolatban van benned szégyenérzet?',
    color: 'red'
  },
  {
    text: 'Honnan tudod, hogy harmonikus az életed?',
    color: 'pink'
  },
  {
    text: 'Hogyan jössz ki a kisgyerekekkel?',
    color: 'purple'
  },
  {
    text: 'Mi az, ami zavarba hoz?',
    color: 'yellow'
  },
  {
    text: 'Milyen helyet foglal el az életedben a játék?',
    color: 'red'
  },
  {
    text: 'Mennyire figyelsz arra, hogy milyen képet mutatsz magadról a közösségi médiában és miért?',
    color: 'pink'
  },
  {
    text: 'Milyen testrészeket szeretsz magadon?',
    color: 'purple'
  },
  {
    text: 'Mikor néztél először úgy a tükörbe, hogy nem voltál elégedett magaddal? ',
    color: 'purple'
  },
  {
    text: 'Hol érzed a testedben, ha lelkileg nem vagy jól?',
    color: 'yellow'
  },
  {
    text: 'El szoktad titkolni időnként, ha rossz kedved van? ',
    color: 'red'
  },
  {
    text: 'Mit csinálsz, ha észreveszed, hogy hibáztál?',
    color: 'pink'
  },
  {
    text: 'Van női példaképed? Ki az és miért?',
    color: 'purple'
  },
  {
    text: 'Mit gondolsz a szőrösségről?',
    color: 'yellow'
  },
  {
    text: 'Miben változtál az elmúlt 7 évben?',
    color: 'red'
  },
  {
    text: 'Mennyire figyelsz oda a tested jelzéseire?',
    color: 'red'
  },
  {
    text: 'Mi kapcsol ki téged a legjobban?',
    color: 'pink'
  },
  {
    text: 'Mit gondolsz a luxusról?',
    color: 'yellow'
  },
  {
    text: 'Szereted magad a fényképeken?',
    color: 'yellow'
  }
];
let choosenCards = [];
let players = [
  {
    name: 'Sipi'
  },
  {
    name: 'Niki'
  },
  {
    name: 'Mari'
  }
];
let cards = [];
let actualPlayer = 0;
let firstDraw = true;
const cardsDiv = document.querySelector('.cards');
const cardsTextDiv = document.querySelector('.cards .text');
const actualPlayerDiv = document.querySelector('.actual-player');
const drawTextDiv = document.querySelector('.draw .text');
const cardsColorDiv = document.querySelector('.cards .color');
  

const chooseCards = (cards) => {
  cards = cards.sort(() => .5 - Math.random());
  for (let i = 0; i < (players.length * 4); i++) {
    choosenCards.push(cards.shift());
  }
  return choosenCards;
}

const writeActualPlayer = () => {
  actualPlayerDiv.innerHTML = `Soronkövetkező játékos: ${players[actualPlayer].name}`;
}

const drawCardsNumber = () => {
  cardsTextDiv.innerHTML = `Kártyák száma: ${cards.length}`;
}

const init = () => {
  cards = chooseCards(allCard);
  actualPlayer = 0;
  firstDraw = true;
  writeActualPlayer();
  drawCardsNumber();
  chooseCards();
  console.log(cards);
};

const nextPlayer = () => {
  if (players[actualPlayer + 1] === undefined) {
    actualPlayer = 0;
  } else {
    actualPlayer += 1;
  }
  writeActualPlayer();
}

const draw = () => {
  let card = cards.shift();
  drawCardsNumber();
  cardsColorDiv.classList.remove('pink');
  cardsColorDiv.classList.remove('red');
  cardsColorDiv.classList.remove('yellow');
  cardsColorDiv.classList.remove('purple');
  cardsColorDiv.classList.add(cards[0].color);
  drawTextDiv.innerHTML = card.text;
  if (!firstDraw) {
    nextPlayer();
  } else {
    firstDraw = false;
  }
}

cardsDiv.addEventListener('click', () => {
  draw();
});

init();