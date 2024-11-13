"use strict"
console.clear();

const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

const profilo = document.querySelector(".profilo")


const addCardToDOM = (membro) => {
    profilo.innerHTML += `
    <div class="col-12 col-md-6 col-lg-6 mb-4 col-xl-4">
        <div class="card d-flex flex-row bg-black">
            <img src="${membro.img}" class="card-img" alt="Immagine della card">
            <div class="card-body d-flex flex-column justify-content-between bg-black">
                <h5 class="card-title text-white">${membro.name}</h5>
                <p class="card-text text-white">${membro.role}</p>
                <a href="#">${membro.email}</a>
            </div>
        </div>
    </div>
    `;
};

teamMembers.forEach(addCardToDOM);

// bonus

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Ottieni i valori dal form
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const img = "img/Stephen-Hawking.jpg"; 

    // Stampiamo i valori nella console
    console.log("Nome: " + name);
    console.log("Cognome: " + role);
    console.log("email: " + email);
    console.log("foto: " + img);

    // Crea un nuovo oggetto 
    const nuovoMembro = {
        name: name,
        role: role,
        email: email,
        img: img
    };
    // Aggiungi il nuovo membro all'array teamMembers
    teamMembers.push(nuovoMembro);

    console.log("Nuovo membro aggiunto:", nuovoMembro);

    // Aggiungi la nuova card al DOM
    addCardToDOM(nuovoMembro);

    // Reset del form
    form.reset();
});