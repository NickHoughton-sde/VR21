const cardBodyForm = document.getElementById("cardBodyForm");
const cardUpdateBodyForm = document.getElementById("cardUpdateBodyForm");
const addButtonMain = document.getElementById("addButtonMain");
const addSaveBtn = document.getElementById("addSaveBtn");
const domSubModified = document.getElementById("startCards");
const confirmDelete = document.getElementById("confirmDelete");
const updateForm = document.getElementById("addUpdateBtn");
// for future development
// const savePage = document.getElementById("addSavePageBtn");
// const loadPage = document.getElementById("addLoadPageBtn");
let cardIdCount = 0;
let idCardToDelete;
let idCardToUpdate;
let imgTitleUp;
let imgDescUp;
let imgUrlUp;
let newNewArr;
let numIdCard;
let mySite;

// Event listeners
cardBodyForm.addEventListener("submit", handleCardFormSubmit);
cardUpdateBodyForm.addEventListener("submit", handleCardUpdateFormSubmit);
addButtonMain.addEventListener("click", handleAddNewCardBtn);
// for future development
// savePage.addEventListener("click", handleSavePage);
// loadPage.addEventListener("click", handleLoadPage);
domSubModified.addEventListener(
  "DOMSubtreeModified",
  setListenerDeleteUpdateBtns
);
confirmDelete.addEventListener("click", deleteCard);
updateForm.addEventListener("click", updateCard);

function handleAddNewCardBtn() {
  document.getElementById("addSaveBtn").addEventListener("click", appendCard);
  cardBodyForm.addImgTitle.value = "";
  cardBodyForm.addImgDesc.value = "";
  cardBodyForm.addImgUrl.value = "";
}

// this function checks for new additions to DOM and then sets event listeners for new Delete buttons
function setListenerDeleteUpdateBtns() {
  let dButtons = document.querySelectorAll("#deleteBtn");
  dButtons.forEach(function (dButton) {
    dButton.addEventListener("click", function (e) {
      idCardToDelete =
        e.target.parentElement.parentElement.parentElement.parentElement.id;
    });
  });
  let uButtons = document.querySelectorAll("#updateBtn");
  uButtons.forEach(function (uButton) {
    uButton.addEventListener("click", function (e) {
      idCardToUpdate =
        e.target.parentElement.parentElement.parentElement.parentElement.id;
      numIdCard = getNumFromString(idCardToUpdate);
    });
  });
}

// replace card in <div> element with id:stardCards
function updateCard() {
  let imgOld = document.querySelector(`#totalCard${numIdCard} #cardImg`).src;

  let newArrUpdate = handleCardUpdateFormSubmit();
  let newImgSrc = newArrUpdate[2];
  let newImgTitle = newArrUpdate[0];
  let newImgDesc = newArrUpdate[0];

  if (newImgSrc === "") {
    document.querySelector(`#totalCard${numIdCard} #cardImg`).src = imgOld;
  } else {
    newImgSrc = newArrUpdate[2];
    document.querySelector(`#totalCard${numIdCard} #cardImg`).src = newImgSrc;
  }

  // document.querySelector(`#totalCard${numIdCard} #cardImg`).src=newImgSrc;
  document.querySelector(`#totalCard${numIdCard} .card-title`).innerText =
    newImgTitle;
  document.querySelector(`#totalCard${numIdCard} .card-text`).innerText =
    newImgDesc;
  let oldCard = document.getElementById(idCardToUpdate);
}

//add delete functionality to each confirm delete button
function deleteCard() {
  document.getElementById(idCardToDelete).remove();
  cardIdCount += -1;
}

// called to return array of values from new card form
function handleCardFormSubmit() {
  let imgTitle = cardBodyForm.addImgTitle.value;
  let imgDesc = cardBodyForm.addImgDesc.value;
  let imgUrl = cardBodyForm.addImgUrl.value;
  return [imgTitle, imgDesc, imgUrl];
}

// called to return array of updated value from modal form
function handleCardUpdateFormSubmit() {
  imgTitleUp = cardUpdateBodyForm.inputTitleUpdate.value;
  imgDescUp = cardUpdateBodyForm.inputDescriptionUpdate.value;
  imgUrlUp = cardUpdateBodyForm.inputImgFileUpdate.value;


  // How to start adding to local storage
  // // data in local storage
  // const currentItems = JSON.parse(localStorage.getItem("items")) || [];
  // const newItem = { imgTitleUp, imgDescUp, imgUrlUp };
  // const newItems = [...currentItems, newItem];

  // // set new set of items in localStorage
  // localStorage.setItem("items", JSON.stringify(newItems));

  // const row = document.querySelector(".row");

  // const appendItemsToDom = (arrofItems = []) => {
  //   arrofItems.forEach((item) => {
  //     const contentCard = buildContentCard(item)
  //     row.insertAdjacentHTML("beforeend", contentCard);
  //   })
  // }

  return [imgTitleUp, imgDescUp, imgUrlUp];
}

// updates creates a new content card, updates card id counter and inserts new card into html
function appendCard() {
  let contentCard;
  contentCard = createCard();
  // update cardIdCount to assign new number to card id for selection purposes
  cardIdCount++;
  const newDiv = document.createElement("div", (id = "newDiv"));
  document
    .querySelector("#startCards")
    .insertAdjacentHTML("beforeend", contentCard);
}

//used to get card id number from string
function getNumFromString(aString) {
  let theNum = aString.replace(/^\D+/g, "");
  return theNum;
}

function createCard() {
  let contentCardNew = null;
  contentCardNew = `<div class="col-md-3" id="totalCard${cardIdCount}">
        <div class="card" style="width: 18rem;">
          <img id="cardImg" src="${handleCardFormSubmit()[2]}" alt="" />
          <div>
            <p>
              <div class="card-body">
                <h5 class="card-title">${handleCardFormSubmit()[0]}</h5>
                <p class="card-text">${handleCardFormSubmit()[1]}</p>
                <p>
                </p>
                <a href="#" class="btn btn-primary" 
                    type="button"
                    class="btn btn-primary"
                    id="updateBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal">
                    Update</a>
                <a href="#" class="btn btn-primary"
                  type="button"
                    class="btn btn-primary"
                    id="deleteBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal">
                    Delete</a>
                    <div class ="firstDiv"></div>
              </div>
            </p>
          </div>
        </div>
      </div>`;
  return contentCardNew;
}
// For future development
// function handleSavePage() {
//   htmlContents = document.documentElement.innerHTML;
//   localStorage.setItem("mySite", JSON.stringify(htmlContents));
// }

// function handleLoadPage() {
//   localStorage.getItem("mySite");
// }
