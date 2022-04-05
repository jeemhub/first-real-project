//Variable
const form=document.querySelector('.form');
const incomingList=document.querySelector('.incoming');
//Event listener
form.addEventListener('submit',newitem);

//Function
function newitem(event){
    event.preventDefault();
    console.log('submit form');
    // const item=document.createElement('div');
    // item.classList.add('item');
    // incomingList.appendChild('item');
}
