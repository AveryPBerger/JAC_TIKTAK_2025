const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c','#FF69B4'];
const left = document.getElementById("leftContent");
const right = document.getElementById("rightContent");
const testText = "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one, but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them";
const testImg = "../Assets/Images/GroupEvilGrin.png";



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
    "The clubs first meeting of the semester! We got a lot of new potential eager members and are starting the year very excited!",
    "Theme Day! Here we’re holding our presentation and votes for what theme we want to go with this year. The lucky winner is JAC and the Beanstalk",
    "Fun times at the kickoff, singing hot to go, getting new socks and seeing the game revealed for the first time",
    "Shopping day!!!! Went all over montreal getting and ordering everything that we’re going to need to build a full kiosk and robot",
    "What a winter break, our dedicated team showing up during our break and working hard to put the walls of our kiosk up and getting the robot functional"
]


const RoboTexts = [
    "After receiving the rules, brainstorming possible solutions to the game’s challenges is extremely important, as it provides the framework of the robot’s design.",
    "Then, we must make sketches and drawings to be capable of visualizing the components while creating a coherent structure",
    "Once a design is finalized, we create a chassis and attach basic electronics, ensuring the drivetrain is functional.",
    "While the drivetrain is being built and tested, small groups start creating the different aspects of the robot, including the gripper and the lift.",
    "Once all components are attached, the robot is fine-tuned through rigorous testing with game pieces."
]

const KioskTexts = [
   "Time for planning! The kiosk members brainstorm how they want to incorporate jack and the beanstalk to a set of walls and a table. Lots of foliage!!",
   "Hard at work! Kiosk members are very sleepy after a long session of sanding and priming last year’s walls and furniture",
   "Feeling medieval! With the table looking particularly woody, kiosk members move onto the bench",
   "What a landscape! Kiosk members paint a base coat of the mural before deciding to fully assemble the walls for better transitions",
   "Whoa nelly!!! That’s gonna be a tall beanstalk. Chicken wire is not a joy to work with but we will prevail"
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
