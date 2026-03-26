// Hàm kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
const checkProductExists = (productID, products) => {
    // Kiểm tra nếu có sản phẩm nào trong mảng products có id trùng với productID
    return products.some(item => item.id === productID);
}

// Hàm thêm sản phẩm
const addToCart = (event) => {

    // Kiểm tra nếu trình duyệt hỗ trợ localStorage
    if (typeof Storage != "undefined") {
        // Lấy thông tin sản phẩm từ DOM
        const button = event.target;
        const quantity = button.previousElementSibling
        const product = quantity.previousElementSibling;
        
        // Tạo một đối tượng sản phẩm mới với thông tin lấy được
        let newProduct = {
            image: product.children[0].src,
            id: product.children[1].innerText,
            name: product.children[2].innerText,
            price: product.children[3].innerText.replace(/[^\d]/g, ''),
            quantity: Number(quantity.children[2].value)
        };

        // Lấy dữ liệu giỏ hàng từ localStorage, nếu chưa có thì tạo mới một mảng rỗng
        let products = JSON.parse(localStorage.getItem('productCart')) || [];
        if (checkProductExists(newProduct.id, products)) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            products.forEach(item => {
                if (item.id === newProduct.id) {
                    item.quantity += newProduct.quantity;
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

// Hàm xóa sản phẩm khỏi giỏ hàng
const deleteProduct = (index) => {
    let products = JSON.parse(localStorage.getItem('productCart'));
    // Xóa sản phẩm tại vị trí index trong mảng products
    products.splice(index, 1);
    localStorage.setItem('productCart', JSON.stringify(products));
    // Gọi hàm renderCart để cập nhật lại giao diện giỏ hàng sau khi xóa sản phẩm 
    renderCart();
}

// Hàm hiển thị giỏ hàng
const renderCart = () => {
    // Lấy dữ liệu giỏ hàng từ localStorage
    let products = JSON.parse(localStorage.getItem('productCart'));
    // Nếu giỏ hàng trống (không có sản phẩm nào hoặc mảng products là null) 
    if (JSON.parse(localStorage.getItem('productCart')) == null || products.length == 0) {
        // Xóa nội dung của phần tfoot để không hiển thị tổng tiền khi giỏ hàng trống
        const tfoot = document.querySelector('tfoot');
        tfoot.innerHTML = '';
        // Cập nhật số lượng sản phẩm trong giỏ hàng ở cart-header về 0
        const quantityInCart = document.querySelector('.quantity-in-cart');
        quantityInCart.innerText = 0;
        // // Hiển thị thông báo khi giỏ hàng trống
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '<tr><td colspan="5">Bạn chưa thêm sản phẩm nào vào giỏ hàng. Thêm sản phẩm bạn thích vào giỏ và quay lại nhé!</td></tr>';

    } else {
        // Hiển thị sản phẩm trong giỏ hàng
        const tbody = document.querySelector('tbody');
        // Tạo một chuỗi HTML để chứa các hàng sản phẩm trong giỏ hàng
        let html = '';
        // Duyệt qua mảng products và tạo một hàng HTML cho mỗi sản phẩm, sau đó thêm vào chuỗi html
        products.forEach((item, index) => {
            let newRow = `
            <tr>
                <td>${item.name}</td>
                <td><img class="product-image" src="${item.image}" alt="${item.name}"></td>
                <td>${Number(item.price.replace(/[^\d]/g, '')).toLocaleString()}đ</td>
                <td><button class="qty-btn btn-minus" data-index="${index}">-</button>${item.quantity}<button class="qty-btn btn-plus" data-index="${index}">+</button></td>
                <!-- Dùng data-index để lưu vị trí index của sản phẩm trong mảng products -->
                <td><button class="delete-btn" type="button" data-index="${index}">Xóa <i class="fa-solid fa-trash"></i></i></button></td>
            </tr>`;
            html += newRow;
        })

        // Cập nhật nội dung của tbody với các sản phẩm trong giỏ hàng
        tbody.innerHTML = html;

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
            totalCost += Number(item.price.replace(/[^\d]/g, ''))*Number(item.quantity);
        })
        tfoot.innerHTML = `
            <tr>
                <td colspan="4">Tạm tính:</td>
                <td>${totalCost.toLocaleString()}đ</td>
            </tr>
            <tr>
                <td colspan="4">VAT:</td>
                <td>${(totalCost*0.1).toLocaleString()}đ</td>
            </tr>
            <tr>
                <td colspan="4">Thành tiền:</td>
                <td>${(totalCost + totalCost*0.1).toLocaleString()}đ</td>
            </tr>
        `;
    }
}
renderCart();

// Lắng nghe sự kiện click cho button xóa sản phẩm
document.addEventListener('click', (event) => {
    // Lấy phần tử button xóa
    if (event.target.classList.contains('delete-btn') || event.target.classList.contains('fa-trash')) {
        // Hiển thị hộp thoại xác nhận trước khi xóa sản phẩm khỏi giỏ hàng
        let accept = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        // Nếu người dùng xác nhận xóa sản phẩm thì gọi hàm xóa sản phẩm khỏi giỏ hàng
        if (accept) {
            // Tìm vị trí index của button xóa được click trong danh sách các button xóa
            const index = event.target.getAttribute('data-index');
            deleteProduct(index);
        } else {
            // Nếu người dùng không xác nhận xóa sản phẩm thì không thực hiện hành động nào và ngăn chặn sự kiện click mặc định của button xóa
            event.preventDefault();
        }
    }
});

// Hàm kiểm tra form đặt hàng đã được điền đầy đủ thông tin hay chưa
const checkOrderForm = () => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || addressInput.value.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin để đặt hàng!');
        return false;
    }
    return true;
}
// Lắng nghe sự kiện click cho button đặt hàng
const orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // Kiểm tra nếu form đặt hàng chưa được điền đầy đủ thông tin thì không thực hiện đặt hàng
    if (!checkOrderForm()) {
        return;
    }
    // Kiểm tra nếu giỏ hàng trống thì không thực hiện đặt hàng
    let products = JSON.parse(localStorage.getItem('productCart')) || [];
    if (localStorage.getItem('productCart') === null || products.length == 0) {
        alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng!');
        return;
    }
    // Nếu form đặt hàng đã được điền đầy đủ thông tin và giỏ hàng không trống thì thực hiện đặt hàng
    alert('Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
    localStorage.removeItem('productCart');
    window.location.href = '../trangchu/trangchu.html';
});

// Xử lí tăng giảm số lượng
document.addEventListener('click', (event) => {
    // Lấy dữ liệu sản phẩm
    let products = JSON.parse(localStorage.getItem('productCart'));
    // Thêm sự kiện click cho nút giảm
    if (event.target.classList.contains('btn-minus')) {
        // Lấy chỉ số của sản phẩm trong mảng
        let index = event.target.getAttribute('data-index');
        // Xử lí số lượng
        if (products[index].quantity > 1) {
            products[index].quantity--;
        } else {
            // Nếu số lượng là 1 mà bấm - thì hiển thị thông báo xóa khỏi giỏ hàng
            let op = confirm('Xóa sản phẩm này khỏi giỏ hàng?');
            if (op) {
                products.splice(index, 1);
            } else {
                event.preventDefault();
            }
        }
    }
    // Thêm sự kiện click cho nút tăng
    if (event.target.classList.contains('btn-plus')) {
        // Lấy chỉ số của sản phẩm trong mảng
        let index = event.target.getAttribute('data-index');
        // Xử lí số lượng
        if (products[index].quantity < 100) {
            products[index].quantity++;
        }
    }
    // Lưu dữ liệu lại
    localStorage.setItem('productCart', JSON.stringify(products));
    renderCart();
}) 


