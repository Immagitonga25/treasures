//Business logic

 //adding items to checkout
//  function addItemToCart()

var delivery = document.getElementById("deliveryoption");

//  if (delivery === "delivery") {
//   var location = prompt("Enter delivery location: ");
//   alert(
//     "Your order will be delivered at " +
//       location +
//       ". Kindly pay the rider Ksh 200 on arrival."
//   );
// } else {
//   alert("Pick up your order from the Pick-up Point.");
// }

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
   function addToCartClicked(event) {
    var button = event.target
    var item = button.parentElement.parentElement
    var title = item.getElementsByClassName("item-title")[0].innerText
    var price = item.getElementsByClassName("item-price")[0].innerText
    var image = item.getElementsByClassName("item-image")[0].src
    console.log(title, price, image)

    var delivery = $("#deliveryoption option:selected").val();
    console.log(delivery) 
    
    var quantity = 1
    $("#purchase").click(function(){

        //delivery prompt
        

        if (delivery === "delivery") {
            var location = prompt("Enter delivery location: ");
            alert(
              "Your order will be delivered at " +
                location +
                ". Kindly pay the rider Ksh 200 on arrival."
            );
          } else {
            alert("Pick up your order from the Pick-up Point.");
          }
    })
}

   
  
});