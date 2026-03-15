const checkValidation = () => {

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm-password"]');
    const agreeCheckbox = document.querySelector('input[name="agree"]');

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

const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkValidation()) {
        localStorage.setItem('email', document.querySelector('input[name="email"]').value);
        localStorage.setItem('password', document.querySelector('input[name="password"]').value);
        alert("Đăng ký thành công, bạn có thể đăng nhập ngay bây giờ!");
        location.href = "../dangnhap/dangnhap.html";
    }
})