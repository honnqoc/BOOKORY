const searchInput = document.querySelector('[name="input-search"]');
const searchButton = document.querySelector('[name="search-btn"]');

const displaySearchResult = () => {
    const bookName = searchInput.value.trim().toLowerCase();    

    if (!bookName) {
        alert("Vui lòng nhập tên sản phẩm bạn muốn tìm kiếm!");
        return;
    }

    const url = `timkiem.html?search=${encodeURIComponent(bookName)}`;
    window.location.href = url;
}

searchButton.addEventListener("click", displaySearchResult);