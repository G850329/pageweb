document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Manejador de clic en la lista de productos
    productList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            const productId = target.getAttribute('data-id');
            const productName = target.getAttribute('data-name');
            const productPrice = parseFloat(target.getAttribute('data-price'));

            // Agregar el producto al carrito
            addToCart(productId, productName, productPrice);
        }
    });

    // Función para agregar productos al carrito
    function addToCart(id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${name} - $${price}`;
        cartList.appendChild(cartItem);

        total += price;
        totalElement.innerText = total.toFixed(2);
    }

    // Función para realizar la compra simulada
    function checkout() {
        alert(`Compra realizada. Total: $${total.toFixed(2)}`);
        // Limpia el carrito y reinicia el total
        clearCart();
    }

    // Función para limpiar el carrito
    function clearCart() {
        cartList.innerHTML = '';
        total = 0;
        totalElement.innerText = total.toFixed(2);
    }
});
