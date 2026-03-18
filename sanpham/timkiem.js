// Lấy phần tử input và nút tìm kiếm
const searchInput = document.querySelector('input[name="search"]');
const searchBtn = document.querySelector('.header__search-button');

// Xử lý sự kiện khi người dùng nhấn nút tìm kiếm
searchBtn.addEventListener('click', () => {
    if (searchInput.value === '') {
        alert("Vui lòng nhập tên sản phẩm cần tìm!");
    }
});