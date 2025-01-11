const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c','#FF69B4'];
const left = document.getElementById("leftContent");
const right = document.getElementById("rightContent");
const testText = "Ok, so yk i think that paper snowflakes are an obvious they all know how to make one, but then i went to summer camp and we had a paper snowflake competition and adults didn't know how to make them";
const testImg = "../Assets/Images/GroupEvilGrin.png";
document.addEventListener("DOMContentLoaded", ()=>{
    AddLegendColous();
   
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    AddLeftImgTextCombo(testText,testImg);
    AddRightImgTextCombo(testText,testImg);
    
})

function AddLeftImgTextCombo(textContent,imagePath){
    AddImage(left,testImg);
    AddText(right,testText);
}


function AddRightImgTextCombo(textContent,imagePath){
    AddImage(right,testImg);
    AddText(left,testText);
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
