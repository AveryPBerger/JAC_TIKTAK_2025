const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c','#FF69B4'];
const left = document.getElementById("leftContent");
const right = document.getElementById("rightContent");




const AllImgs = ["../Assets/Images/Timeline/firstDay.jpg","../Assets/Images/Timeline/ThemeDay.jpg","../Assets/Images/Timeline/Shopping.jpg","../Assets/Images/Timeline/WinterBreak.JPEG"]

const RobotImgs = [ "../Assets/Images/Timeline/roboBrainstorm.jpeg",
    "../Assets/Images/Timeline/design.png",
    "../Assets/Images/Timeline/robo.png",
    "../Assets/Images/Timeline/armyRobo.png"
]

const KioskImgs = [
    "../Assets/Images/Timeline/Brainstorm.jpg",
    "../Assets/Images/Timeline/hardAtWork.jpg",
    "../Assets/Images/Timeline/landscape.jpg",
    "../Assets/Images/Timeline/medieval",
    "../Assets/Images/Timeline/tallBeanstalk.jpeg"
 
]

const AllTexts = [
    "La première rencontre du semestre ! Nous avons rencontré plusieurs nouveaux membres passionnés et nous commençons l'année avec beaucoup d'enthousiasme!",
    "Journée de choix du thème ! Nous créons des présentations et nous votons pour le thème de l'année. L'heureux gagnant est JAC et le haricot magique.",
    "Des moments agréables lors du lancement, nous chantons  « hot to go » et nous découvrons le jeu pour la première fois.",
    "Journée de magasinage !!!! Nous sommes allés partout à Montréal pour commander ce dont nous aurons besoin pour construire un kiosque et un robot. ",
    "Quelles belles vacances hivernales, notre équipe dévouée s'est présentée pendant notre congé et a travaillé fort pour monter les murs de notre kiosque et rendre le robot fonctionnel."
]


const RoboTexts = [
    "Après avoir reçu les règles, il est extrêmement important de réfléchir aux solutions possibles pour relever les défis du jeu. Cela fournit le cadre de la conception du robot.",
    "Then, we must make sketches and drawings to be capable of visualizing the components while creating a coherent structureEnsuite, il faut faire des croquis et des dessins pour être capable de visualiser les composants tout en créant une structure cohérente.",
    "Une fois la conception finalisée, nous créons un châssis et y intégrons des composants électroniques de base afin de nous assurer que la base est fonctionnelle.",
    "Pendant que la base est construite et testée, de petits groupes commencent à créer les différents aspects du robot, y compris la pince et l'ascenseur.",
    "Une fois tous les composants fixés, le robot est mis au point avec des tests rigoureux utilisant des pièces de jeu."
]

const KioskTexts = [
   "C'est l'heure de la planification ! Les membres de l’équipe du kiosque réfléchissent à la manière idéale d'intégrer Jack et le haricot magique à un ensemble de murs et à une table. Il y a beaucoup de feuillage!",
   "On travaille fort ! Les membres de l’équipe du kiosque sont très fatigués après une longue rencontre où ils sablent et préparent les murs et les meubles de l'année dernière.",
   "Une ambiance médiévale ! La table ayant un air particulièrement boisée, les membres de l’équipe du kiosque travaillent maintenant sur le banc.",
   "Quel beau paysage ! Les membres de l’équipe du Kiosque peignent une couche de base pour  la murale avant de décider d'assembler complètement les murs pour améliorer la cohésion.",
   "Wow!!! Ça va être un grand haricot magique. La broche à poule n'est pas facile à travailler, mais nous y arriverons."
]


document.addEventListener("DOMContentLoaded", ()=>{
    AddLegendColous();
    All();
})

function RemoveContent(){
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightContent").innerHTML = "";
}

function Robot(){
    RemoveContent();
    AddThing(RobotImgs,RoboTexts);
}

function Kiosk(){
    RemoveContent();
    AddThing(KioskImgs,KioskTexts);
}

function All(){
    RemoveContent();
    AddThing(AllImgs,AllTexts);
}

function AddThing(imgs, texts) {
    imgs.forEach((img, index) => {
        if (index % 2 === 0) {
            // Even index -> Left side
            AddLeftImgTextCombo(texts[index], img);
        } else {
            // Odd index -> Right side
            AddRightImgTextCombo(texts[index], img);
        }
    });
}

function AddLeftImgTextCombo(textContent,imagePath){
    AddImage(left,imagePath);
    AddText(right,textContent);
}


function AddRightImgTextCombo(textContent,imagePath){
    AddImage(right,imagePath);
    AddText(left,textContent);
}

function AddLegendColous(){
    for(let i = 0; i < listItems.length;i++){
        listItems[i].style.backgroundColor = colors[i];
    }

}

function AddImage(side, imagePath){
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Image description';
    img.className = 'rImg'
    side.append(img);
}

function AddText(side, textContent){
    const text = document.createElement('p');
    text.textContent = textContent;
    side.append(text);
}


let isScrolling = false;
let lastScrollY = 0;
const rightPage = document.getElementById("rightPage")
const leftPage = document.getElementById("leftPage");
const leftBookmarks = document.getElementById("leftBookmarks");
const rightBookmarks = document.getElementById("rightBookmarks");
const ipadMediaQuery = window.matchMedia("(max-width: 1050px)")
document.addEventListener("wheel", (event) => {
    console.log(rightPage.scrollTop === 0)
    if (!isScrolling && rightPage.scrollTop === 0 && window.innerWidth < 1050) {
        isScrolling = true;
        if (event.deltaY > 0) {
            showRightPage();
        } else {
            showLeftPage();
        }
        setTimeout(() => {
            isScrolling = false;
        }, 500); // Prevents rapid triggering
    }
});

let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
    let currentWidth = window.innerWidth;
    
    if (currentWidth > 1050 && lastWidth <= 1050) {
        onExpand();
    } else if (currentWidth <= 1050 && lastWidth > 1050) {
        showLeftPage()
    }
    
    lastWidth = currentWidth;
});

function onExpand() {
    leftBookmarks.style.display = "flex";
    rightBookmarks.style.display = "flex";
    leftPage.style.display = "flex";
    rightPage.style.display = "grid";    
}


function showRightPage() {
    leftBookmarks.style.display = "none";
    rightBookmarks.style.display = "flex";
    leftPage.style.display = "none";
    rightPage.style.display = "grid";
}

function showLeftPage() {
    leftBookmarks.style.display = "flex";
    rightBookmarks.style.display = "none";
    leftPage.style.display = "flex";
    rightPage.style.display = "none";
}
