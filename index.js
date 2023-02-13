
import  catsData from "./data.js";
import  Cat from "./Cat.js";

let likedCats = []

let catIndex = 0
let currentCat = new Cat(catsData[catIndex])

const catCard = document.getElementById('cat-card')

const logo = document.getElementById('logo')
logo.addEventListener('click', function(){
    location.reload();
})

const likeButton = document.querySelector('#accept-button'); 
likeButton.addEventListener('click', likeCat); 

const dislikeButton = document.querySelector('#reject-button'); 
dislikeButton.addEventListener('click', dislikeCat); 

function getNextCat() {
    catIndex+=1
    if (catIndex < catsData.length){
        currentCat = new Cat(catsData[catIndex])
        render()
    } else {
        getlikedCats()
    }
}

function likeCat() {
    currentCat.setMatchStatus(true)
    document.getElementById('like-badge').classList.remove("hidden")
    setTimeout(function(){
        likedCats.push(currentCat)
        console.log(likedCats)
        getNextCat()
    }, 1500)
}

function dislikeCat() {
    currentCat.setMatchStatus(false)
    document.getElementById('dislike-badge').classList.remove("hidden")
    setTimeout(function(){
        getNextCat()
    }, 1500)
}

function getlikedCats() {
    let likedHtml = `
    <div class="cat-card-end cat-card-responsive">
        <h1>You liked ${likedCats.length} / ${catsData.length} cats </h1>
    </div>`
    likedCats.forEach(cat =>{
        likedHtml += `
        <div class="cat-card-end cat-card-responsive">
            <img class="liked-pic" src="${cat.avatar}" alt="cat picture">
            <p>${cat.name}, ${cat.age}</p>
        </div>`

        catCard.innerHTML = likedHtml
    })
    document.querySelector(".actions").innerHTML = ``
}


function render() {
    catCard.innerHTML = currentCat.getCatHtml()
}

render()