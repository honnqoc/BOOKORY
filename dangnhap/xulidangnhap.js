// Xử lý đăng nhập người dùng
const checkLogin = () => {
    // Lấy giá trị từ các trường input
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Lấy thông tin người dùng đã đăng ký từ localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Kiểm tra thông tin đăng nhập có khớp với thông tin đã lưu hay không
    if (email === storedEmail && password === storedPassword) {
        return true;
    } else {
        return false;
    }
};

// Xử lý sự kiện khi người dùng nhấn nút đăng nhập
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', (event) => {
    // Ngăn chặn hành vi mặc định của nút submit
    event.preventDefault();
    // Kiểm tra thông tin đăng nhập và hiển thị thông báo tương ứng
    if (checkLogin()) {
        alert("Đăng nhập thành công, cùng nhau khám phá thế giới sách tại BOOKORY nào!");
        location.href = "../sanpham/sanpham.html";
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
    }
})