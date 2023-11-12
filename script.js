const user =document.querySelector('#user')
const result =document.querySelector('#result')
const start=document.querySelector('#start')
let comp=document.querySelector('#comp')

start.addEventListener('click', ()=>
{
    comp.innerText=Math.floor(Math.random() * 10) + 1;
    if(user.value===comp.innerText) {
        result.innerHTML="Ты победил!"
    }
    else {
        result.innerText="Давай еще раз!"
    }
})