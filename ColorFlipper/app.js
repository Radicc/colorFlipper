const colors = ["green", "red", "yellow", "blue", "orange", "purple"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
let sameNumber = document.body.style.backgroundColor

btn.addEventListener('click',() =>{
    let randomNumber = getRandomNumber()

    while(sameNumber === randomNumber){
        randomNumber = getRandomNumber()
    }

    sameNumber = randomNumber

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

getRandomNumber = () =>{
    const number = Math.floor(Math.random() * colors.length)
    return number
}