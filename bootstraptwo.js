const cardBodyForm = document.getElementById("cardBodyForm");
const deleteForm = document.querySelector("#deleteModal form");
const addButtonMain = document.getElementById("addButtonMain");
const addBodyForm = document.getElementById("addBodyForm");

// Event listeners
// addBodyForm.addEventListener("submit", handleAddFormSubmit);
cardBodyForm.addEventListener("submit", handleCardFormSubmit);
// deleteForm.addEventListener("submit", handleConfirmDelete);
addButtonMain.addEventListener("click", handleAddNewCardBtn);

// Add new card when top add button clicked
function handleAddNewCardBtn() {

  function createCard() {
   const contentCardNew = `<div class="col-md-3">
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
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal">
                      Delete</a>
                </div>
              </p>
            </div>
          </div>
        </div>`
    return contentCardNew
    };
  document.getElementById("addSaveBtn").addEventListener("click", function () {
    contentCard = createCard();
    document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
  });
};

function handleCardFormSubmit(){
    imgTitle = cardBodyForm.addImgTitle.value;
    imgDesc = cardBodyForm.addImgDesc.value;
    imgUrl = cardBodyForm.addImgUrl.value;
    return [imgTitle, imgDesc, imgUrl]
};
