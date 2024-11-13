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

teamMembers.forEach(element => {
    profilo.innerHTML += `
    <div class="col-12 col-md-6 col-lg-6 mb-4 col-xl-4">
    <div class="card d-flex flex-row bg-black">
        <img src="${element.img}" class="card-img" alt="Immagine della card">
            <div class="card-body d-flex flex-column justify-content-between bg-black">
                <h5 class="card-title text-white">${element.name}</h5>
                <p class="card-text text-white">${element.role}</p>
                <a href="#">${element.email}</a>
            </div>
    </div>
</div>
`
});