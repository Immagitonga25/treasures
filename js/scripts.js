let carts = document.querySelectorAll('.add-to-cart');

let products = [
    {
        name: 'women striped crop top',
        size: 'UK 12',
        price: '400',
        inCart: '0'
    },
    {
        name: 'Mens navy blue polo shirt',
        size: 'Uk 12',
        price: '600',
        inCart: '0'
    },
    {
        name: 'Floral cold-shoulder top',
        size: 'UK 12/14',
        price: '500',
        inCart: '0'
    },
    {
        name: 'Mens striped casual shirt',
        size: 'UK 10',
        price: '600',
        inCart: '0'
    }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }   else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    
}
onLoadCartNumbers();

