//Business logic
var item;
var price;
var title;
var image;
var total;
//adding items to checkout
//  function addItemToCart()


//User logic
$(document).ready(function () {
  //addToCart button
  var addToCartBtn = document.getElementsByClassName("item-button");
  for (var i = 0; i < addToCartBtn.length; i++) {
    var button = addToCartBtn[i];
    button.addEventListener("click", addToCartClicked);
  }

  function addToCartClicked(event) {
    var button = event.target;
    item = button.parentElement.parentElement;
    title = item.getElementsByClassName("item-title")[0].innerText;
    price = item.getElementsByClassName("item-price")[0].innerText;
    image = item.getElementsByClassName("item-image")[0].src;
    console.log(title, price, image);
    
    
    
    
  }

//   function updateCartTotal() {
//     var cartItems = document.querySelectorAll(".item-price");
//     cartItems.forEach(function (cartItem) {
//     total = parseInt(cartItem.textContent.replace("Ksh. ", ""));
//     });
//     console.log(total);

    
  
//   function totalPrice (total, cartItem) {
//      return total += cartItem;
    
//   }
//   console.log();

  $("button.item-button").click(function () {
    alert("Item added to cart!");

    $("tbody#checkout").append(
      "<tr><td>" +
        title +
        "</td>" +
        "<td>" +
        price +
        "</td>" +
        "<td>" +
        quantity +
        "</td></tr>"
    );
    $
  });
  function addToCartClicked(event) {
    var button = event.target;
    item = button.parentElement.parentElement;
    title = item.getElementsByClassName("item-title")[0].innerText;
    price = item.getElementsByClassName("item-price")[0].innerText;
    image = item.getElementsByClassName("item-image")[0].src;
    console.log(title, price, image);
  }
  // function showTotal() {
  //   var cartItems = document.querySelectorAll("item-price");
  //   console.log(cartItems)
  //   var total = parseInt(cartItems.textContent.replace("Ksh.", ""));
  //   console.log(total);
  // };
  

  var quantity = 1;

  $("#purchase").click(function () {
    //delivery prompt
    var delivery = $("#deliveryoption option:selected").val();
    console.log(delivery);
    if (delivery === "delivery") {
      var location = prompt("Enter delivery location: ");
      alert(
        "Your package will be delivered at " +
          location +
          ". Kindly pay the rider Ksh 200 on arrival."
      );
    } else {
      alert("Pick up your order from the Pick-up Point.");
    }
  });
});
