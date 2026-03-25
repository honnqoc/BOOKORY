// Lấy các phần tử chứa dữ liệu từ DOM
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm-password"]');
const agreedCheckbox = document.querySelector('input[type="checkbox"');
// Biểu thức chính quy kiểm tra Email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Hiển thị màu các ô nhập dữ liệu

// Hàm set trạng thái
const setState = (input, isValid) => {
    input.classList.remove('valid', 'invalid');
    input.classList.add(isValid ? 'valid' : 'invalid');
};

// Name
nameInput.addEventListener('blur', () => {
    setState(nameInput, nameInput.value.trim() !== '');
});

// Email
emailInput.addEventListener('blur', () => {
    setState(emailInput, emailRegex.test(emailInput.value.trim()));
});

// Password
passwordInput.addEventListener('blur', () => {
    setState(passwordInput, passwordInput.value.length >= 8);
});

// Confirm Password
confirmPasswordInput.addEventListener('blur', () => {
    setState(confirmPasswordInput, 
        confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== ''
    );
});

// Hàm kiểm tra đăng ký có hợp lệ không
const checkValidation = () => {
    if (!nameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim() || !confirmPasswordInput.value.trim()) { alert("Vui lòng nhập đầy đủ thông tin."); 
        return false; 
    } 

    if (!emailRegex.test(emailInput.value.trim())) { 
        alert('Email không hợp lệ.'); 
    } 
    
    if (passwordInput.value.length < 8) { 
        alert("Mật khẩu phải có ít nhất 8 ký tự."); 
        return false; 
    } 

    if (passwordInput.value !== confirmPasswordInput.value) { 
        alert("Mật khẩu xác nhận không khớp."); 
        return false; 
    } 

    if (!agreedCheckbox.checked) { 
        alert("Vui lòng đồng ý với điều khoản dịch vụ."); 
        return false; 

    } 
    return true;
}

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