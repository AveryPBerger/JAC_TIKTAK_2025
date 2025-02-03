const aboutLeftPage = document.getElementById("leftPage");
const aboutRightPage = document.getElementById("rightPage");

const leftPagePeople = [
    { name: "Zoé", quote: "", role: "Club President" },
    { name: "Talia", quote: "This is my 'head'", role: "Kiosk Co-Captain" },
    { name: "Sofia", quote: "", role: "Kiosk Co-Captain" },
    { name: "Tanner", quote: "", role: "Robot Captain" },
    { name: "Aden", quote: "", role: "Video Captain" },
    { name: "Avery", quote: "", role: "Website Captain and Programming Co-Captain" }
    {name: "Antoniu", quote: "", role: "Programming Co-Captain"}
];

const rightPagePeople = [
    {name: "Vincent", quote: "", role: "Wesbite Member" },
    {name:"Chloe", quote: "", role: "Website Member"},
    {name: "Theo", quote: "", role: "Website Member" },
    {name: "Chloe", quote: "", role: "Website Member" },
    {name: "Sam", quote: "", role: "Kiosk Member"},
    {name:"Mohammed", quote: "", role: "Robot Member"},
    {name: "Thomas", quote: "", role: "Robot Member"},
    {name: "Jeff", quote: "", role: "Kiosk Member"}
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
    createLeftPage(leftPagePeople[leftIndex].name, leftPagePeople[leftIndex].quote);
    createRightPage(rightPagePeople[rightIndex].name, rightPagePeople[rightIndex].quote);
}

function createLeftPage(name, quote) {
    aboutLeftPage.innerHTML = `
        <section class="header">
            <h2 class="name">${name}</h2>
            <h1 class="role">Creative Team</h1>
        </section>
        <section class="content">
            <img class="headshot" src="../Assets/HeadShots/${name}.jpeg" alt="${name}" loading="lazy"/>
            <p class="quote">${quote}</p>
        </section>
    `;
}

function createRightPage(name, quote) {
    aboutRightPage.innerHTML = `
        <section class="header">
            <h2 class="name">${name}</h2>
            <h1 class="role">Creative Team</h1>
        </section>
        <section class="content">
            <img  class="headshot" src="../Assets/HeadShots/${name}.jpeg" alt="${name}" loading="lazy"/>
            <p class="quote">${quote}</p>
        </section>
    `;
}
