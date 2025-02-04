const aboutLeftPage = document.getElementById("leftPage");
const aboutRightPage = document.getElementById("rightPage");

const leftPagePeople = [
    { name: "Zoé", quote: "", role: "President" },
    { name: "Talia", quote: "", role: "Kiosk Co-Captain" },
    { name: "Avery", quote: "", role: "Website Captain and Programming Co-Captain" },
    {name: "Antoniu", quote: "", role: "Programming Captain"},


    {name:"Chloe", quote: "", role: "Website Member"},
    {name: "Vincent", quote: "", role: "Website Member"},

    {name: "Jeff", quote: "", role: "Kiosk Member"},
    {name: "Cos", quote:"", role:"Kiosk Member"},
    {name:"Patrick", quote:"", role: "Robot Member"},
    {name:"Mohammed", quote: "", role: "Robot Member"}

];

const rightPagePeople = [
    { name: "Tanner", quote: "", role: "Robot Captain" },
    { name: "Sofia", quote: "", role: "Kiosk Co-Captain" },
    { name: "Aden", quote: "", role: "Video Captain" },
    {name: "Leora", quote: "", role: "Book Maker"},

    {name: "Theo", quote: "", role: "Website Member" },
    {name: "Pattie", quote: "", role: "Website Member" },
    
    {name: "Sam", quote: "", role: "Kiosk Member"},
    {name: "Melissa", quote: "", role: "Kiosk Member"},

    
    {name: "Thomas", quote: "", role: "Robot Member"},
    {name: "Lucas", quote: "", role: "Robot Member"}
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
