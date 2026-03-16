// Xử lý đăng ký người dùng
const checkValidation = () => {

    // Lấy giá trị từ các trường input
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm-password"]');
    const agreeCheckbox = document.querySelector('input[name="agree"]');

    // Kiểm tra các trường input có hợp lệ hay không

    if (!nameInput.value.trim()) {
        alert("Vui lòng nhập họ và tên.");
        return false;
    }

    if (!emailInput.value.trim()) {
        alert("Vui lòng nhập email.");
        return false;
    }

    if (!passwordInput.value.trim()) {
        alert("Vui lòng nhập mật khẩu.");
        return false;
    }

    if (passwordInput.value.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự.");
        return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Mật khẩu xác nhận không khớp.");
        return false;
    }

    if (!agreeCheckbox.checked) {
        alert("Vui lòng đồng ý với điều khoản dịch vụ.");
        return false;
    }

    return true;
};

// Xử lý sự kiện khi người dùng nhấn nút đăng ký
const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', (event) => {
    // Ngăn chặn hành vi mặc định của nút submit
    event.preventDefault();
    // Kiểm tra tính hợp lệ của dữ liệu nhập vào
    if (checkValidation()) {
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem('email', document.querySelector('input[name="email"]').value);
        localStorage.setItem('password', document.querySelector('input[name="password"]').value);
        alert("Đăng ký thành công, bạn có thể đăng nhập ngay bây giờ!");
        location.href = "../dangnhap/dangnhap.html";
    }
})