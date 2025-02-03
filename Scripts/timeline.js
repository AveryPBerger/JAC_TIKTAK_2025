const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c','#FF69B4'];
const left = document.getElementById("leftContent");
const right = document.getElementById("rightContent");
const testText = "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one, but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them";
const testImg = "../Assets/Images/GroupEvilGrin.png";



const AllImgs = ["../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png",
    "../Assets/Images/GroupEvilGrin.png"]

const RobotImgs = [ "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
    "../Assets/Images/sauteringXT60.jpg",
]

const KioskImgs = [
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
    "../Assets/Images/lostInClouds.jpg",
]

const VideoImgs = [

]

const HarpImgs = [

]

const AllTexts = [
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
    "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them",
]

const RoboTexts = [
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
    "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his.",
]

const KioskTexts = [
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
    "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son.",
]

const videoTexts = [

]

const harpTexts = [
    
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

function AddThing(imgs,texts){
     imgs.forEach((img,index) => {
        AddLeftImgTextCombo(texts[index],img);
        AddRightImgTextCombo(texts[index],img);
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
