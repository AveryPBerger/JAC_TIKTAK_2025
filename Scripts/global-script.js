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
    if(window.location.href !== "../Pages/timeline.html"){
        let currentWidth = window.innerWidth;
    
        if (currentWidth > 1050 && lastWidth <= 1050) {
            onExpand();
        } else if (currentWidth <= 1050 && lastWidth > 1050) {
            showLeftPage()
        }
        
        lastWidth = currentWidth;
    }

});

function onExpand() {
    leftBookmarks.style.display = "flex";
    rightBookmarks.style.display = "flex";
    leftPage.style.display = "flex";
    rightPage.style.display = "flex";    
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
