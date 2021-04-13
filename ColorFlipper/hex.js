const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
let hexCode = document.getElementById('color')
let backGround = document.body.style.backgroundColor
let textColor = document.querySelector('.color')



btn.addEventListener('click', () =>{
    hexCode = ''
    for(i=0;i<=5;i++){
        const randomNum = getRandomNumber()
        hexCode = hexCode + hex[randomNum]
    }
    console.log(hexCode)

    document.body.style.backgroundColor = '#' + hexCode
    textColor.textContent = '#' + hexCode
    
    console.log(textColor)

})

getRandomNumber = () =>{
    const number = Math.floor(Math.random() * hex.length)
    return number
}