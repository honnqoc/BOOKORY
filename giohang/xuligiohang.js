// Hàm kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
const checkProductExists = (productName, products) => {
    let exists = false;
    products.forEach(item => {
        if (item.name === productName) {
            exists = true;
        }
    })
    return exists;
}

// Hàm thêm sản phẩm
const addToCart = (event) => {

    // Kiểm tra nếu trình duyệt hỗ trợ localStorage
    if (typeof Storage != "undefined") {
        // 
        const button = event.target;
        const product = button.previousElementSibling;
        // 
        let newProduct = {
            image: product.children[0].src,
            name: product.children[1].innerText,
            price: product.children[2].innerText.replace('đ', ''),
            quantity: 1
        };

        // Lấy dữ liệu giỏ hàng từ localStorage, nếu chưa có thì tạo mới một mảng rỗng
        let products = JSON.parse(localStorage.getItem('productCart')) || [];
        if (checkProductExists(newProduct.name, products) == true) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            products.forEach(item => {
                if (item.name === newProduct.name) {
                    item.quantity++;
                }
            })
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào mảng
            products.push(newProduct);
        }

        localStorage.setItem('productCart', JSON.stringify(products));
    } else {
        // Thông báo khi trình duyệt không hỗ trợ localStorage
        alert('Xin lỗi, trình duyệt của bạn không hỗ trợ local storage.');
    }

}

// Thêm sự kiện click cho các button thêm vào giỏ

// const addToCartBtns = document.querySelectorAll('.add-to-cart');
// addToCartBtns.forEach((button, index) => {
//     button.addEventListener('click', (event) => {
//         addToCart(event);
//         alert('Sản phẩm đã được thêm vào giỏ hàng!');
//     });
// })

/* Cách này sẽ tốt hơn vì sự kiện click của button sẽ được xử lí cả khi hiện ở trang tìm kiếm. Do JS
xử lí sự kiện click chạy qua trước khi button được tạo ra trong DOM nên cách gán ở trên sẽ không bắt 
được sự kiện click của button ở trang tìm kiếm. */
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        addToCart(event);
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    }
});

// Hàm định dạng tiền tệ
const formatCurrency = (amount, locale = "vi-VN") => {
    // Sử dụng Intl.NumberFormat để định dạng số thành chuỗi tiền tệ
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

// Hàm xóa sản phẩm khỏi giỏ hàng
const deleteProduct = (index) => {
    let products = JSON.parse(localStorage.getItem('productCart'));
    products.splice(index, 1);
    localStorage.setItem('productCart', JSON.stringify(products));
    window.location.reload();
}

// Hàm hiển thị giỏ hàng
const renderCart = () => {
    if (JSON.parse(localStorage.getItem('productCart')).length === 0) {
        // Hiển thị thông báo khi giỏ hàng trống
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '<tr><td colspan="5">Bạn chưa thêm sản phẩm nào vào giỏ hàng. Thêm sản phẩm bạn thích vào giỏ và quay lại nhé!</td></tr>';
    } else {
        // Lấy dữ liệu giỏ hàng từ localStorage
        const products = JSON.parse(localStorage.getItem('productCart'));

        // Hiển thị sản phẩm trong giỏ hàng
        const tbody = document.querySelector('tbody');
        products.forEach((item, index) => {
            let newRow = `
            <tr>
                <td>${item.name}</td>
                <td><img class="product-image" src="${item.image}" alt="${item.name}"></td>
                <td>${item.price}đ</td>
                <td>${item.quantity}</td>
                <td><button class="delete-btn" type="button" onClick=deleteProduct(${index})>Xóa</button></td>
            </tr>`;
            tbody.innerHTML += newRow;
        })

        // Cập nhật số lượng sản phẩm trong giỏ hàng ở header
        const quantityInCart = document.querySelector('.quantity-in-cart');
        let totalQuantity = 0;
        products.forEach(item => {
            totalQuantity += Number(item.quantity);
        })
        quantityInCart.innerText = totalQuantity;

        // Tính tổng tiền và hiển thị ở phần tfoot
        const tfoot = document.querySelector('tfoot');
        let totalCost = 0;
        products.forEach(item => {
            totalCost += Number(item.price.replace('.', ''))*Number(item.quantity);
        })
        tfoot.innerHTML = `
            <tr>
                <td colspan="4">Tạm tính:</td>
                <td>${formatCurrency(totalCost)}</td>
            </tr>
            <tr>
                <td colspan="4">VAT:</td>
                <td>${formatCurrency(totalCost*0.1)}</td>
            </tr>
            <tr>
                <td colspan="4">Thành tiền:</td>
                <td>${formatCurrency(totalCost + totalCost*0.1)}</td>
            </tr>
        `;
    }
}
renderCart();

// Lắng nghe sự kiện click cho button đặt hàng
const orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
    localStorage.removeItem('productCart');
    window.location.href = '../trangchu/trangchu.html';
});



