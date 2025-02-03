const leftPage = document.getElementById("leftPage");

if (leftPage) {
    leftPage.innerHTML = `
        <section id="leftBookmarks" class="centered-flex">
            <a href="./kiosk.html">Kiosk</a>
            <a href="./robot.html">Robot</a>
            <a href="./video.html">Video</a>
            <a href="./tutorial.html">Tutorial</a>
        </section>
        <section id="rightBookmarks" class="centered-flex">
            <a href="./harp.html">Harp</a>
            <a href="./timeline.html">Timeline</a>
            <a class="currentPage" href="./aboutus.html">About Us</a>
        </section>
    `;
} else {
    console.error("Element with ID 'leftPage' not found.");
}