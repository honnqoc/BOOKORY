// Hàm kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
const checkProductExists = (productName, products) => {
    products.forEach(item => {
        if (item.name === productName) {
            return true;
        }
    })
    return false;
}

// Hàm thêm sản phẩm
const addToCart = (event) => {

    if (typeof Storage != "undefined") {
        const button = event.target;
        const product = button.previousElementSibling;
        let newProduct = {
            image: product.children[0],
            name: product.children[1].innerText,
            price: product.children[2].innerText,
            quantity: 1
        };

        let products = JSON.parse(localStorage.getItem('productCart')) || [];
        if (checkProductExists(newProduct.name, products) == true) {
            products.forEach(item => {
                if (item.name === newProduct.name) {
                    item.quantity++;
                }
            })
        } else {
            products.push(newProduct);
        }

        localStorage.setItem('productCart', JSON.stringify(products));
    } else {
        alert('Local storage is not working in your browser.');
    }

}

// Thêm sự kiện click cho các button thêm vào giỏ
const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach((button, index) => {
    button.addEventListener('click', addToCart());
})

// Hàm hiển thị giỏ hàng
const renderCart = () => {
    if (localStorage.productCart == undefined) {
        alert('Bạn chưa thêm sản phẩm nào vào giỏ hàng. Thêm sản phẩm bạn thich vào giỏ và quay lại nhé!');
    } else {
        const products = JSON.parse(localStorage.getItem('productCart'));

        const tbody = document.querySelector('tbody');
        products.forEach((item, index) => {
            let newRow = `
            <tr>
                <td>${item.name}</td>
                <td>${item.img}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td><button type="button" onClick=deleteProduct(${index})>Xóa</button></td>
            </tr>`;
            tbody.innerHTML += newRow;
        })
        const tfoot = document.querySelector('tfoot');
        let totalCost = 0;
        products.forEach(item => {
            totalCost += Number(item.price)*Number(item.quantity);
        })

    }
}


