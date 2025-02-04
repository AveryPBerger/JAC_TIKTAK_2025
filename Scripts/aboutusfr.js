const aboutLeftPage = document.getElementById("leftPage");
const aboutRightPage = document.getElementById("rightPage");

const leftPagePeople = [
    { name: "Zoé", quote: "", role: "Président" },
    { name: "Talia", quote: "", role: "Co-Capitaine du Kiosque" },
    { name: "Avery", quote: "", role: "Capitaine du site web et Co-Captain du programmation" },
    {name: "Antoniu", quote: "", role: "Capitaine du programmation"},


    {name:"Chloe", quote: "", role: "Membre du site-web"},
    {name: "Vincent", quote: "", role: "Membre du site-web"},

    {name: "Jeff", quote: "", role: "Membre du Kiosque"},
    {name: "Cos", quote:"", role:"Membre du Kiosque"},

    {name:"Patrick", quote:"", role: "Membre du Robo"},
    {name:"Mohammed", quote: "", role: "Membre du Robo"}

];

const rightPagePeople = [
    { name: "Tanner", quote: "", role: "Capitaine du Robo" },
    { name: "Sofia", quote: "", role: "Co-Capitaine du Kiosque" },
    { name: "Aden", quote: "", role: "Capitaine du Vidéo" },
    {name: "Leora", quote: "", role: "Créateur de livre"},

    {name: "Theo", quote: "", role: "Membre du site-web" },
    {name: "Pattie", quote: "", role: "Membre du site-web" },
    
    {name: "Sam", quote: "", role: "Membre du Kiosque"},
    {name: "Melissa", quote: "", role: "Membre du Kiosque"},

    
    {name: "Thomas", quote: "", role: "Membre du Robo"},
    {name: "Lucas", quote: "", role: "Membre du Robo"}
];

let leftIndex = 0;
let rightIndex = 0;
let isScrolling2 = false;

document.addEventListener("DOMContentLoaded", () => {
    loadNewPeople();
});

document.addEventListener("wheel", (event) => {
    if (isScrolling2) return;
    isScrolling2 = true;

    if (event.deltaY > 0) {
        // Scroll down
        leftIndex = (leftIndex + 1) % leftPagePeople.length;
        rightIndex = (rightIndex + 1) % rightPagePeople.length;
    } else {
        // Scroll up
        leftIndex = (leftIndex - 1 + leftPagePeople.length) % leftPagePeople.length;
        rightIndex = (rightIndex - 1 + rightPagePeople.length) % rightPagePeople.length;
    }

    loadNewPeople();

    setTimeout(() => {
        isScrolling2 = false;
    }, 500); // Prevents excessive triggering
});

function loadNewPeople() {
    createLeftPage(leftPagePeople[leftIndex].name, leftPagePeople[leftIndex].quote,leftPagePeople[leftIndex].role);
    createRightPage(rightPagePeople[rightIndex].name, rightPagePeople[rightIndex].quote,rightPagePeople[rightIndex].role);
}

function createLeftPage(name, quote,role) {
    aboutLeftPage.innerHTML = `
        <section class="header">
            <h2 class="name">${name}</h2>
            <h1 class="role">${role}</h1>
        </section>
        <section class="content">
            <img class="headshot" src="../Assets/HeadShots/${name}.jpg" alt="${name}" loading="lazy"/>
            <p class="quote">${quote}</p>
        </section>
    `;
}

function createRightPage(name, quote,role) {
    aboutRightPage.innerHTML = `
        <section class="header">
            <h2 class="name">${name}</h2>
             <h1 class="role">${role}</h1>
        </section>
        <section class="content">
            <img  class="headshot" src="../Assets/HeadShots/${name}.jpg" alt="${name}" loading="lazy"/>
            <p class="quote">${quote}</p>
        </section>
    `;
}
