// const user =document.querySelector('#user')
// const result =document.querySelector('#result')
// const start=document.querySelector('#start')
// let comp=document.querySelector('#comp')
//
// start.addEventListener('click', ()=>
// {
//     comp.innerText=Math.floor(Math.random() * 10) + 1;
//     if(user.value===comp.innerText) {
//         result.innerHTML="Ты победил!"
//     }
//     else {
//         result.innerText="Давай еще раз!"
//     }
// })




//======================================================================//
//=======================КАМЕНЬ НОЖНИЦЫ БУМАГА==========================//


const inputs=document.querySelectorAll('input')
const res=document.querySelector('#res')
const arr=['Scissors', 'Stone', 'Paper']

inputs.forEach((input)=>{
    input.addEventListener('click', (e) => {
        const random=Math.floor(Math.random()*2)
        if (e.target.value==='Scissors' && random===2) {
            res.innerHTML=`
            <img src="./assets/bumaga.jpg" alt="">
            <h3>Вы выиграли</h3>
            `
        }
        else if (e.target.value==='Stone' && random===0) {
            res.innerHTML=`
            <img src="./assets/nojnici.jpg" alt="">
            <h3>Вы выиграли</h3>
            `
        }
        else if (e.target.value==='Paper' && random===1) {
            res.innerHTML=`
            <img src="./assets/kamen.jpg" alt="">
            <h3>Вы выиграли</h3>
            `
        }
        else if (e.target.value==='Scissors' && random===0) {
            res.innerHTML=`
            <img src="./assets/nojnici.jpg" alt="">
            <h3>Ничья</h3>
            `
        }
        else if (e.target.value==='Stone' && random===1) {
            res.innerHTML=`
            <img src="./assets/kamen.jpg" alt="">
            <h3>Ничья</h3>
            `
        }
        else if (e.target.value==='Paper' && random===2) {
            res.innerHTML=`
            <img src="./assets/bumaga.jpg" alt="">
            <h3>Ничья</h3>
            `
        }
        else {
            res.innerHTML=`
            <img src={arr[random]} alt="">
            <h3>Вы проиграли</h3>
            `
        }
    })
})