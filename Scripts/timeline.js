const listItems = document.getElementsByClassName('dot');
const colors = ['#f39c12', '#3498db', '#e74c3c', '#9b59b6', '#1abc9c'];

document.addEventListener("DOMContentLoaded", ()=>{
    AddLegendColous();
})

function AddLegendColous(){
    for(let i = 0; i < listItems.length;i++){
        listItems[i].style.backgroundColor = colors[i];
    }

}