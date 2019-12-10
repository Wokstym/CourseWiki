const instructionsInput = document.getElementById("recipe");
const titleInput = document.getElementById("title");
const imgInput = document.getElementById("img");
var button = document.getElementById("sub");
const recipes = document.querySelectorAll(".grid-container")[0];
const delbtn = document.querySelectorAll(".b1");

delbtn.forEach(btn =>
  btn.addEventListener("click", e => {
    recipes.removeChild(btn.parentNode.parentNode);
  })
);


function deleteRecipe(id) {

  var src = document.getElementById(`${id}`);
  var recipeToRemove = src.parentNode.parentNode;
  recipes.removeChild(recipeToRemove);
}

let currentId = 6;

button.addEventListener('click', e => {
  e.preventDefault();
  if (titleInput.value != "" && !(imgInput.value.match(/https?:[\/|.|\w|\s|-]*\.(?:jpg|gif|png|jpeg).*/g) === null) && instructionsInput.value != "") {
    currentId++;
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="b2"> <input type="image" id="${currentId}" onClick = "deleteRecipe(this.id)"" src="close.png" class="b1" /></div>
    <h1>${titleInput.value}</h1>
    <p>${instructionsInput.value}</p>
    <img src = "${imgInput.value}" onClick = "showHideRecipe(this)">
    `;
    newDiv.className = "grid-item";
    recipes.appendChild(newDiv);
    instructionsInput.value = "";
    titleInput.value = "";
    imgInput.value = "";
  }
})
