// HAMBURGER HEADER
const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');

hamburger.onclick = () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active'); 
};

// Xử lí form điền email để nhận tin

// Lấy các phần tử
const getBtn = document.querySelector('button[name="register-btn"]');
const getEmail = document.querySelector('input[name="email-register"]');

// Lắng nghe sự kiện click
getBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (getEmail.value === '') {
        alert('Vui lòng nhập địa chỉ email của bạn trước!');
    } else {
        alert("Chúng tôi đã nhận được thông tin của bạn. Các chương trình khuyến mãi sẽ được gửi tới bạn ngay khi có!");
    }
})