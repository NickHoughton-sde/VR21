let flipCards = document.querySelectorAll(".flip-card");
let currentCard;
let timeOutId;
flipCards.forEach(function (card) {
  card.addEventListener("click", makeCardFlip);
  card.flipped = false;
});

function makeCardFlip(e) {
  let card = e.target.closest(".flip-card");
  let inner = card.querySelector(".flip-card-inner");
//   The card is already flipped, ignore the click
  if (card.flipped || timeOutId) {
    return;
  }
  else {
    inner.style.transform = "rotateY(180deg)";
    card.flipped = true;
  }
  // Check if there is a current card
  if (!currentCard) {
    currentCard = card;
  } else if (checkMatch(currentCard, card)){
    // Give player points
    currentCard = null;
  }
  else {
    timeOutId = setTimeout(() => unflipCards(card, currentCard), 2000) 
    card.flipped = false;
    currentCard.flipped = false;
    
  }
}

function checkMatch(cardOne, cardTwo) {
  let imgLinkOne = cardOne
    .querySelector(".flip-card-back img")
    .getAttribute("src");
  let imgLinkTwo = cardTwo
    .querySelector(".flip-card-back img")
    .getAttribute("src");
  return imgLinkOne === imgLinkTwo;
}

function unflipCards(cardOne, cardTwo) {
    let innerOne = cardOne.querySelector(".flip-card-inner");
    let innerTwo = cardTwo.querySelector(".flip-card-inner");
    innerOne.style = "";
    innerTwo.style = "";
    timeOutId = null;
    currentCard = null;
}

// const cardSetOne = [{id:1, imageUrl: "url"},{id:2, imageurl:"url"}]
// const cardSetTwo = [{id:1, imageUrl: "url"},{id:2, imageurl:"url"}]

// function shuffle(arr) {
//     let shuffledArr = [];

//     return shuffledArr;
// }

// suffleArrOne.forEach(
//     // append to item in a row
//     // append the id to data attribute
// )

// shuffleArrTwo.forEach(
//     // append to item in a row
// )

// // set up event listeners

// const clicks = [value1, value2];

// if (clicks[0] === clicks[1]) {
//     add a class called `flipped`
// } else {
//     // back to original state
// }


const myPromise = new Promise((resolve, reject) => {
  reject("My data is rejected");
});

myPromise.then(result => {
  debugger;
  console.log("Success", result);
}).catch(error => {
  debugger;
  console.error("Failure", error)
})

