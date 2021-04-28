//Business logic
function addToCartClicked(event) {
    var button = event.target
    var item = button.parentElement.parentElement
    var title = item.getElementsByClassName("item-title")[0].innerText
    var price = item.getElementsByClassName("item-price")[0].innerText
    var image = item.getElementsByClassName("item-image")[0].src
    console.log(title, price, image)
}

function alertUser(event) {
    alert("Item added to cart!")
}




//User logic
$(document).ready(function() {
   //addToCart button
   var addToCartBtn = document.getElementsByClassName("item-button")
   for(var i = 0; i < addToCartBtn.length; i++) {
       var button = addToCartBtn[i]
       button.addEventListener("click", addToCartClicked)
   }
   $("button.item-button").click(function(){
       alert("Item added to cart!")
   });
   

});