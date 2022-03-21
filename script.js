'use strict';
const overlay = document.querySelector('.overlay.hidden');
const model = document.querySelector('.modal.hidden');
const buttonList = document.querySelectorAll('.show-modal');
for (let button = 0; button < buttonList.length; button++) {
    const element = buttonList[button];
    element.addEventListener('click', function(){
         //document.querySelector('.hidden').style.display = 'block';
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const closeModel = () =>{
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}
document.querySelector('.close-modal').addEventListener('click', closeModel);

document.addEventListener('keydown', function(keyPresedEvent){
    if(keyPresedEvent.key === 'Escape') closeModel();
});

//Overlay is property to click anyware in window
overlay.addEventListener('click', closeModel);

