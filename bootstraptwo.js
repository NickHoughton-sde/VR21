const cardBodyForm = document.getElementById("cardBodyForm");
const cardUpdateBodyForm = document.getElementById("cardUpdateBodyForm");
const addButtonMain = document.getElementById("addButtonMain");
const addSaveBtn = document.getElementById("addSaveBtn");
const domSubModified = document.getElementById("startCards");
const confirmDelete = document.getElementById("confirmDelete");
const updateForm = document.getElementById("addUpdateBtn");
let cardIdCount = 0;
let idCardToDelete;
let idCardToUpdate;
let imgTitleUp;
let imgDescUp;
let imgUrlUp;
let newNewArr;
let numIdCard;


// Event listeners
cardBodyForm.addEventListener("submit", handleCardFormSubmit);
cardUpdateBodyForm.addEventListener("submit", handleCardUpdateFormSubmit);
addButtonMain.addEventListener("click", handleAddNewCardBtn);
domSubModified.addEventListener("DOMSubtreeModified", setListenerDeleteUpdateBtns);
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
      idCardToDelete = e.target.parentElement.parentElement.parentElement.parentElement.id;
    });
  });
  let uButtons = document.querySelectorAll("#updateBtn");
  uButtons.forEach(function (uButton) {
    uButton.addEventListener("click", function (e) {
      idCardToUpdate = e.target.parentElement.parentElement.parentElement.parentElement.id;
      numIdCard = getNumFromString(idCardToUpdate);
    });
  });
}

// replace card in <div> element with id:stardCards
function updateCard() {
  let newestCard = createUpdateCard(numIdCard);
  let oldCard = document.getElementById(idCardToUpdate);
  
  console.log(newestCard);
  console.log(oldCard);
  oldCard.replaceWith(newestCard);
}

//add delete functionality to each confirm delete button
function deleteCard() {
  document.getElementById(idCardToDelete).remove();
}



function handleCardFormSubmit() {
  let imgTitle = cardBodyForm.addImgTitle.value;
  let imgDesc = cardBodyForm.addImgDesc.value;
  let imgUrl = cardBodyForm.addImgUrl.value;
  return [imgTitle, imgDesc, imgUrl];
}

function handleCardUpdateFormSubmit() {
  imgTitleUp = cardUpdateBodyForm.inputTitleUpdate.value;
  imgDescUp = cardUpdateBodyForm.inputDescriptionUpdate.value;
  imgUrlUp = cardUpdateBodyForm.inputImgFileUpdate.value;
  return [imgTitleUp, imgDescUp, imgUrlUp];
}

function appendCard() {
  let contentCard;
  contentCard = createCard();
  // update cardIdCount to assign new number to card id for selection purposes
  cardIdCount++;
  const newDiv = document.createElement("div", id="newDiv");
  document.querySelector("#startCards").insertAdjacentHTML("beforeend", contentCard);
  
}

function getNumFromString(aString) {
  let theNum = aString.replace( /^\D+/g, '');
  return theNum;
}

function createCard() {
  let contentCardNew = null;
  contentCardNew = `<div class="col-md-3" id="totalCard${cardIdCount}">
        <div class="card" style="width: 18rem;">
          <img src="${handleCardFormSubmit()[2]}" alt="" />
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

function createUpdateCard(newCardId) {
  let contentCardNewNew = null;
  contentCardNewNew = `<div class="col-md-3" id="totalCard${newCardId}">
        <div class="card" style="width: 18rem;">
          <img src="${handleCardUpdateFormSubmit()[2]}" alt="" />
          <div>
            <p>
              <div class="card-body">
                <h5 class="card-title">${handleCardUpdateFormSubmit()[0]}</h5>
                <p class="card-text">${handleCardUpdateFormSubmit()[1]}</p>
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
  return contentCardNewNew;
}



