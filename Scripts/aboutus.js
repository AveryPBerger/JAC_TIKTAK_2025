const aboutLeftPage = document.getElementById("leftPage");
const aboutRightPage = document.getElementById("rightPage");

const leftPagePeople = [
    { name: "Zoé Cajelait-Asch", quote: "I love creativity and pushing boundaries!" },
    { name: "Talia", quote: "Passionate about design and innovation." },
    { name: "Sofia Campbell", quote: "I turn ideas into reality!" },
    { name: "Tanner", quote: "Exploring the world, one idea at a time." },
    { name: "Aden", quote: "Tech, art, and everything in between." },
    { name: "Avery", quote: "Always learning, always growing!" }
];

const rightPagePeople = [
    { name: "Vincent", quote: "Art and technology inspire me." },
    { name: "Theo", quote: "Building the future, one step at a time." },
    { name: "Chloe", quote: "Storytelling through visuals." }
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
            <img class="headshot" src="../Assets/HeadShots/${name}.jpeg" alt="${name}" />
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
            <img class="headshot" src="../Assets/HeadShots/${name}.jpeg" alt="${name}" />
            <p class="quote">${quote}</p>
        </section>
    `;
}
