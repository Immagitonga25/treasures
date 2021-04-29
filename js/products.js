//Business logic
var item;
var price;
var title;
var image;
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
        "</td>" +
        "<td>" +
        "<button>REMOVE</button>" +
        "</td></tr>"
    );
  });
  function addToCartClicked(event) {
    var button = event.target;
    item = button.parentElement.parentElement;
    title = item.getElementsByClassName("item-title")[0].innerText;
    price = item.getElementsByClassName("item-price")[0].innerText;
    image = item.getElementsByClassName("item-image")[0].src;
    console.log(title, price, image);
  }

  var quantity = 1;
  var total = 
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
