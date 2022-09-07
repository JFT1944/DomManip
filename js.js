document.getElementById('container').style.background = 'red'
document.querySelector('#container').style.color = 'white'
let seconds = document.querySelectorAll(".second")
for(let second of seconds){
    second.style.fontSize = '40px'
}


document.querySelectorAll('li')[2].style.color = 'black'

//document.querySelector('#container').innerHTML = "Hello!"
let footer = document.querySelector('.footer')
footer.classList.add('main')
footer.classList.remove('main')

document.querySelector("#container");

//foundDiv.innerText = "Hello";

let nL = document.createElement("li");
nL.innerText = "four"
let list = document.querySelector("ul");
list.appendChild(nL);

let lGreen = document.querySelectorAll('ol li')
for (let lG of lGreen){
    lG.style.background = "green"
}


footer = document.querySelector('.footer')
footer.remove()