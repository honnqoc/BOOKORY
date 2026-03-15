const checkLogin = () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        return true;
    } else {
        return false;
    }
};

const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkLogin()) {
        alert("Đăng nhập thành công, cùng nhau khám phá thế giới sách tại BOOKORY nào!");
        location.href = "../sanpham/sanpham.html";
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
    }
})