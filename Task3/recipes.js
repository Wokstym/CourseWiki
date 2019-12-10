var imgbuttons = document.querySelectorAll(".grid-item img")

function showHideRecipe(img) {
  for (item of imgbuttons) {
    if (item != img) {
      if (item.previousElementSibling.offsetHeight != 0)
        hideImg(item)
    }
  }
  if (img.previousElementSibling.offsetHeight == 0) {
    img.previousElementSibling.style = "visibility: visible; height:200px";
    img.style = "-webkit-filter: blur(5px); filter: blur(5px);"
  } else {
    hideImg(img);
  }
}
for (item of imgbuttons) {
  item.addEventListener('click', function() {
    showHideRecipe(this)
  })
}

function hideImg(img) {
  img.previousElementSibling.style = "visibility: hidden; height:0";
  img.style = "-webkit-filter: none; filter: none;"
}
