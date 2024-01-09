let cenaRuze = document.getElementById("cenaRuze");
let cenaLjiljana = document.getElementById("cenaLjiljana");
let cenaGerbera = document.getElementById("cenaGerbera");
let bombonjera = document.getElementById("bombonjera");
let cokolada = document.getElementById("cokolada");
let sampanjac = document.getElementById("sampanjac");
let placanjeKes = document.getElementById("kes");
let placanjeKartica = document.getElementById("kartica");
let btnIzracunaj = document.getElementById("izracunaj");
let btnReset = document.getElementById("resetuj");
let ispisRuza = document.getElementById("ruza");
let ispisLjiljana = document.getElementById("ljiljan");
let ispisGerbera = document.getElementById("gerber");
let ispisBombonjera = document.getElementById("plusBombonjera");
let ispisCokolada = document.getElementById("plusCokolada");
let ispisSampanjac = document.getElementById("plusSampanjac");
let cena = document.getElementById("cenaBezPopusta");
let cenaPopust = document.getElementById("cenaSaPopustom");

let ispisi = [
    ispisRuza,
    ispisBombonjera,
    ispisCokolada,
    ispisSampanjac,
    ispisGerbera,
    ispisLjiljana,
    cena,
    cenaPopust
];

function resetujIspise() {
    for (let n = 0; n < ispisi.length; n++) {
        if (ispisi[n].innerHTML) {
            ispisi[n].innerHTML = '';
        }
    }
}

btnIzracunaj.addEventListener("click", (e) => {
    e.preventDefault();
    let broj1 = cenaRuze.value * 150;
    let broj2 = cenaLjiljana.value * 120;
    let broj3 = cenaGerbera.value * 70;
    let cenaBezPopusta = broj1 + broj2 + broj3;

    resetujIspise();
    let brojruza = cenaRuze.value;
    for(let i = 0; i < brojruza; i++) {
        ispisRuza.innerHTML += `<img src= "cvetruza.png">`
    }
    let brojljiljana = cenaLjiljana.value;
    for(let l = 0; l < brojljiljana; l++) {
        ispisLjiljana.innerHTML += `<img src= "cvet2.png">`
    }
    let brojgerbera = cenaGerbera.value;
    for(let g = 0; g < brojgerbera; g++) {
        ispisGerbera.innerHTML += `<img src= "cvetgerber.png">`
    }

    let novaCena = cenaBezPopusta;
    if(bombonjera.checked) {
        ispisBombonjera.innerHTML = `+ ${bombonjera.value}`;
        novaCena +=500;
    } if (cokolada.checked) {
        ispisCokolada.innerHTML = `+ ${cokolada.value}`;
        novaCena += 500;
    } if (sampanjac.checked) {
        ispisSampanjac.innerHTML = `+ ${sampanjac.value}`;
        novaCena += 500;
    }

   
    if(placanjeKes.checked) {
        cena.innerHTML += `Cena bez popusta je ${novaCena} din.`
    } else if(placanjeKartica.checked) {
        cena.innerHTML += `Cena bez popusta je ${novaCena} din.`
    }
    if(placanjeKartica.checked && novaCena > 2000) {
        cenaPopust.innerHTML += `Cena sa popustom je ${novaCena - (novaCena * 0.1)} din.`
   }
   console.log(novaCena);
});

btnReset.addEventListener("click", () => {
    resetujIspise();    
});