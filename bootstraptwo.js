const cardBodyForm = document.getElementById("cardBodyForm");
const deleteForm = document.querySelector("#deleteModalForm");
const addButtonMain = document.getElementById("addButtonMain");
const addBodyForm = document.getElementById("addBodyForm");
const addSaveBtn = document.getElementById("addSaveBtn");
let cardIdCount = 0;

// Event listeners
// addBodyForm.addEventListener("submit", handleAddFormSubmit);
cardBodyForm.addEventListener("submit", handleCardFormSubmit);
// deleteForm.addEventListener("submit", handleConfirmDelete);
addButtonMain.addEventListener("click", handleAddNewCardBtn);

// function getCardToDelete(e) {
//   let deleteId = (e.target.id);
//   console.log(e.target.id);
// }

// Add new card when top add button clicked
function handleAddNewCardBtn() {
  document.getElementById("addSaveBtn").addEventListener("click", appendCard);
  cardBodyForm.addImgTitle.value = "";
  cardBodyForm.addImgDesc.value = "";
  cardBodyForm.addImgUrl.value = "";
  //need to assign when submitted not hit add!
  let dButtons = document.querySelectorAll("#deleteBtn");
  // console.log(dButtons);
  dButtons.forEach(function (dButton) {
    dButton.addEventListener("click", function (e) {
      let deleteId = e.target.parentElement.parentElement.id;
      console.log(e.target.id);
    });
  });
}

function handleCardFormSubmit() {
  imgTitle = cardBodyForm.addImgTitle.value;
  imgDesc = cardBodyForm.addImgDesc.value;
  imgUrl = cardBodyForm.addImgUrl.value;
  return [imgTitle, imgDesc, imgUrl];
}

function appendCard() {
  let contentCard;
  contentCard = createCard();
  //update cardIdCount to assign new number to card id for selection purposes
  cardIdCount++;
  document
    .querySelector("#startCards")
    .insertAdjacentHTML("beforeend", contentCard);
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
              </div>
            </p>
          </div>
        </div>
      </div>`;
  console.log(contentCardNew);
  return contentCardNew;
}
