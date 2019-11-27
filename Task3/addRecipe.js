const instructionsInput = document.getElementById("recipe");
const titleInput = document.getElementById("title");
const imgInput = document.getElementById("img");
let currentId = 6;
var button = document.getElementById("sub");

const delbtn = document.querySelectorAll(".grid-item.b1")

for(btn of delbtn){
    btn.addEventListener('click',function(){
        deleteRecipe(this.id);
    })
}
const recipes = document.getElementsByClassName("grid-container")[0];
function deleteRecipe(id){
    if(confirm("Czy na pewno chcesz usunąć element?")){
    var src = document.getElementById(`${id}`);
    var recipeToRemove = src.parentNode;
    recipes.removeChild(recipeToRemove);}
}