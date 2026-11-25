
function openInvitation() {

    const envelope = document.getElementById("envelopeWrapper");
    const intro = document.getElementById("intro");
    const invitation = document.getElementById("invitation");
    const openText = document.getElementById("openText");

    if (envelope.classList.contains("untie")) return;

    // Hide tap text
    openText.style.opacity = "0";

    // STEP 1: Untie ribbon
    envelope.classList.add("untie");

    // STEP 2: Open envelope
    setTimeout(() => {
        envelope.classList.add("open");
    }, 1100);

    // STEP 3: Show birthday invitation
    setTimeout(() => {
        intro.classList.add("hide");
        invitation.classList.add("show");

        document.body.style.overflow = "auto";
    }, 2800);

}



// COUNTDOWN TIMER

const birthdayDate = new Date(
    "December 29, 2026 17:00:00+08:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);


// 21 BILLS PARTICIPANTS

const participants = [
    "Tito Willy/Tita Gina",
    "Kuya Randy/Ate Jobelle",
    "Ate Hazel/Kuya King",
    "Tita Ohnic",
    "Ate Nikka/Kuya Jake",
    "Tita Malyn/Tito Dante",
    "Kuya Mak/Ate Lala",
    "Ate Diane/Kuya Reyvin",
    "Kuya Gio/Ate Jessa",
    "Kuya Eniel/Ate Chriscel",
    "Kuya Ivan",
    "Mama Riza/Tito Mike",
    "Ate Mariz",
    "Ninang Ghie",
    "Ninang Alelie",
    "Ninang Marie",
    "Ninang Emy",
    "Ninong Jun",
    "Ninang Myra",
    "Ninong Rodel",
    "Ninong Daniel",
];

const billsList = document.getElementById("billsList");

participants.forEach((name, index) => {

    const person = document.createElement("div");

    person.className = "bill-person";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const participantName = document.createElement("h4");
    participantName.textContent = name;

    person.appendChild(number);
    person.appendChild(participantName);

    billsList.appendChild(person);

});

// 21 CAKES PARTICIPANTS

const cakes = [
    "Ate Dory", "Ate Nelma", "Ate Santa",
    "Ate Helen", "Ate Aya", "Ate Merly",
    "Ate Rosie", "Ate Luz", "Kuya Raul",
    "Ate Lily", "Ate Melanie", "Tita Melody",
    "Ate Carlota", "Ate Zeny", "Ate Norieta",
    "Ate Baby", "Ate Rubilyn", "Ate Matet",
    "Ate Ruby", "Ate Monay", "Ate Lerma"
];

const cakesList = document.getElementById("cakesList");

cakes.forEach((name, index) => {
    const person = document.createElement("div");
    person.className = "cake-person";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const participantName = document.createElement("h4");
    participantName.textContent = name;

    person.appendChild(number);
    person.appendChild(participantName);
    cakesList.appendChild(person);
});


// 21 GIFTS PARTICIPANTS

const gifts = [
    "Erohim Josh", "Simon", "Khalid",
    "Tita Eneng", "Tita Etchie", "Ate Nica",
    "Tita Jessie", "Tita Bali", "Ate Ana",
    "Tita Ema", "Tita Tess", "Ma'am Empil",
    "Tita May", "Tita Judy", "Ate Samey",
    "Akisha", "AnaFe", "Maam Ness",
    "Ate Gigi", "Justin", "Grace"
];

const giftsList = document.getElementById("giftsList");

gifts.forEach((name, index) => {
    const person = document.createElement("div");
    person.className = "gift-person";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const participantName = document.createElement("h4");
    participantName.textContent = name;

    person.appendChild(number);
    person.appendChild(participantName);
    giftsList.appendChild(person);
});


// 21 WINES PARTICIPANTS

const wines = [
    "Rondryl", "Eloy", "Paulo",
    "Adrian", "Kier", "Ryan",
    "Kuya Tog", "Theo", "Zaijan",
    "Merjune", "Selwyn", "Liam",
    "Daniel", "Patrick", "Eugene",
    "Jovan", "Rick", "Etong",
    "John Mark", "Uno", "Harvey"
];

const winesList = document.getElementById("winesList");

wines.forEach((name, index) => {
    const person = document.createElement("div");
    person.className = "wine-person";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const participantName = document.createElement("h4");
    participantName.textContent = name;

    person.appendChild(number);
    person.appendChild(participantName);
    winesList.appendChild(person);
});


// 9 SPECIAL GIFTS PARTICIPANTS

const specgifts = [
    "Priscilla",
    "Ayiecha",
    "Carmela",
    "Kaye",
    "Paulene",
    "Valerie",
    "Charice",
    "Ate Kycie",
    "Ate Jasmine"
];

const specgiftsList = document.getElementById("specgiftsList");

specgifts.forEach((name, index) => {
    const person = document.createElement("div");
    person.className = "specgift-person";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const participantName = document.createElement("h4");
    participantName.textContent = name;

    person.appendChild(number);
    person.appendChild(participantName);
    specgiftsList.appendChild(person);
});


