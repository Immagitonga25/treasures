let carts = document.querySelectorAll('.add-to-cart');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}


