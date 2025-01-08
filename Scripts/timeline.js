const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c'];
document.addEventListener("DOMContentLoaded", ()=>{
    AddLegendColous();
    createImageTextCombo("rightPage","../Assets/Images/GroupEvilGrin.png","Important text here that spans multiple lines so that it looks really good mhm yah you totally believe me and I really hope that this ramble");
    createImageTextCombo("timelineInfo","../Assets/Images/GroupEvilGrin.png","Important text here that spans multiple lines so that it looks really good mhm yah you totally believe me and I really hope that this ramble");
    createImageTextCombo("timelineInfo","../Assets/Images/GroupEvilGrin.png","Important text here that spans multiple lines so that it looks really good mhm yah you totally believe me and I really hope that this ramble");

})


function AddLegendColous(){
    for(let i = 0; i < listItems.length;i++){
        listItems[i].style.backgroundColor = colors[i];
    }

}

function createImageTextCombo(containerId, imagePath, textContent) {
    // Get the parent container
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Create the <article> element
    const article = document.createElement('article');
    article.className = 'ImageTextCombo';

    // Create the <img> element
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Image description'; // Update with a relevant alt text

    // Create the <p> element
    const paragraph = document.createElement('p');
    paragraph.textContent = textContent;

    // Append the <img> and <p> elements to the <article>
    article.appendChild(img);
    article.appendChild(paragraph);

    // Append the <article> to the container
    container.appendChild(article);
}
