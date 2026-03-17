const searchInput = document.querySelector('input[name="search"]');
const searchBtn = document.querySelector('.header__search-button');

searchBtn.addEventListener('click', () => {
    if (searchInput.value === '') {
        alert("Vui lòng nhập tên sản phẩm cần tìm!");
    }
});