//Business logic
function addToCartClicked(event) {
    var button = event.target
    var item = button.parentElement.parentElement
    var title = item.getElementsByClassName("item-title")[0].innerText
    console.log(title)
}






//User logic
$(document).ready(function() {
   //addToCart button
   var addToCartBtn = document.getElementsByClassName("item-button")
   for(var i = 0; i < addToCartBtn.length; i++) {
       var button = addToCartBtn[i]
       button.addEventListener("click", addToCartClicked)
   }
   
});