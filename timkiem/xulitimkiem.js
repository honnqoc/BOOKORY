// Dữ liệu sản phẩm
const productArr = [
    {
        id: '001',
        name: "Tiểu Thuyết Tắt Đèn - Ngô Tất Tố",
        price: 40000,
        oldPrice: 50000,
        image: "../hinhanh/sanpham/tat_den.jpg",
        discount: 20
    },
    {
        id: '002',
        name: "Tập Truyện Ngắn Vợ Nhặt - Kim Lân",
        price: 48000,
        oldPrice: 60000,
        image: "../hinhanh/sanpham/vo_nhat.png",
        discount: 20
    },
    {
        id: '003',
        name: "Nuance - 50 Sắc Thái Của Từ",
        price: 127000,
        oldPrice: 159000,
        image: "../hinhanh/sanpham/50_sac_thai_cua_tu.jpeg",
        discount: 20
    },
    {
        id: '004',
        name: "1000 Phát Minh Và Khám Phá Vĩ Đại",
        price: 449000,
        oldPrice: 499000,
        image: "../hinhanh/sanpham/1000_phat_minh_va_kham_pha_vi_dai.jpg",
        discount: 10
    },
    {
        id: '005',
        name: "7 Bài Học Hay Nhất Về Vật Lý",
        price: 79000,
        oldPrice: 99000,
        image: "../hinhanh/sanpham/7_bai_hoc_hay_nhat_ve_vat_ly.jpeg",
        discount: 20
    },
    {
        id: '006',
        name: "Tranh Biện Sao Cho Đúng",
        price: 135000,
        oldPrice: 169000,
        image: "../hinhanh/sanpham/tranh_bien_sao_cho_dung.jpeg",
        discount: 20
    },
    {
        id: '007',
        name: "Python Lập Trình Thuật Toán - Bùi Việt Hà",
        price: 67000,
        oldPrice: 95000,
        image: "../hinhanh/sanpham/python_lap_trinh_thuat_toan.jpeg",
        discount: 29
    },
    {
        id: '008',
        name: "1001 Lỗi Tiếng Anh Giao Tiếp và Cách Sửa",
        price: 135000,
        oldPrice: 169000,
        image: "../hinhanh/sanpham/1001_loi_tieng_anh_giao_tiep_va_cach_sua.png",
        discount: 20
    },
    {
        id: '009',
        name: "Mắt Biếc",
        price: 88000,
        oldPrice: 110000,
        image: "../hinhanh/sanpham/mat_biec.jpeg",
        discount: 20
    },
    {
        id: '010',
        name: "Đối Đáp Tiếng Anh Không Cần Nghĩ",
        price: 111000,
        oldPrice: 139000,
        image: "../hinhanh/sanpham/doi_dap_tieng_anh_khong_can_nghi.jpeg",
        discount: 20
    },
    {
        id: '011',
        name: "Bố Con Cá Gai",
        price: 88000,
        oldPrice: 110000,
        image: "../hinhanh/sanpham/bo_con_ca_gai.jpeg",
        discount: 20
    },
    {
        id: '012',
        name: "Sức Mạnh Của Việc Đặt Câu Hỏi Đúng",
        price: 79000,
        oldPrice: 99000,
        image: "../hinhanh/sanpham/suc_manh_cua_viec_dat_cau_hoi_dung.jpeg",
        discount: 20
    },
    {
        id: '013',
        name: "Phương Pháp Simon - Cách Học Nhanh, Nhớ Lâu Mọi Kiến Thức",
        price: 152000,
        oldPrice: 190000,
        image: "../hinhanh/sanpham/phuong_phap_simon_cach_hoc_nhanh_nho_lau_moi_kien_thuc.webp",
        discount: 29
    },
    {
        id: '014',
        name: "Sketchnote Lý Thuyết: Phương Pháp Ghi Chú Sáng Tạo",
        price: 159000,
        oldPrice: 199000,
        image: "../hinhanh/sanpham/sketchnote_ly_thuyet_phuong_phap_ghi_chu_sang_tao.jpg",
        discount: 10
    },
    {
        id: '015',
        name: "1 Ngày Bằng 48 Giờ - Sổ Tay Quản Lý Thời Gian Hiệu Quả",
        price: 57000,
        oldPrice: 72000,
        image: "../hinhanh/sanpham/1_ngay_bang_48_gio_so_tay_quan_ly_thoi_gian_hieu_qua.jpeg",
        discount: 20
    },
    {
        id: '016',
        name: "Sức Mạnh Của Sự Tử Tế",
        price: 62000,
        oldPrice: 78000,
        image: "../hinhanh/sanpham/suc_manh_cua_su_tu_te.jpeg",
        discount: 20
    },
    {
        id: '017',
        name: "Nghề Nào Cho Bạn Nghề Nào Cho Tôi",
        price: 103000,
        oldPrice: 129000,
        image: "../hinhanh/sanpham/nghe_nao_cho_ban_nghe_nao_cho_toi.png",
        discount: 20
    },
    {
        id: '018',
        name: "Hồi Ký Người Thầy Xây Trường Hạnh Phúc",
        price: 111000,
        oldPrice: 139000,
        image: "../hinhanh/sanpham/hoi_ky_nguoi_thay_xay_dung_truong_hanh_phuc.png",
        discount: 20
    },
    {
        id: '019',
        name: "Tư Duy Nhanh Và Chậm",
        price: 215000,
        oldPrice: 269000,
        image: "../hinhanh/sanpham/tu_duy_nhanh_va_cham.jpeg",
        discount: 20
    },
    {
        id: '020',
        name: "All That IELTS",
        price: 223000,
        oldPrice: 279000,
        image: "../hinhanh/sanpham/all_that_ielts.png",
        discount: 20
    }
];

// Lấy phần tử input và nút tìm kiếm
const searchInput = document.querySelector('input[name="search"]');
const searchBtn = document.querySelector('.header__search-button');

// Xử lý sự kiện khi người dùng nhấn nút tìm kiếm
searchBtn.addEventListener('click', () => {
    if (searchInput.value === '') {
        alert("Vui lòng nhập tên sản phẩm cần tìm!");
    }
});

// Lấy từ khóa tìm kiếm từ URL
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("search");

// Lọc sản phẩm dựa trên từ khóa tìm kiếm
const results = productArr.filter(product => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
});

// Hiển thị kết quả tìm kiếm
const productContainer = document.querySelector(".product");

// Nếu không tìm thấy sản phẩm nào, hiển thị thông báo và chuyển hướng về trang sản phẩm
if (results.length === 0) {
    alert("Không tìm thấy sản phẩm nào phù hợp với từ khóa của bạn. Vui lòng thử lại với từ khóa khác!");
    window.location.href = '../sanpham/sanpham.html'
} else {
    // Tạo và hiển thị các thẻ sản phẩm dựa trên kết quả tìm kiếm
    results.forEach(product => {
        // Tạo thẻ sản phẩm
        const productCard = document.createElement("div");
        // Thêm lớp CSS cho thẻ sản phẩm
        productCard.classList.add("product-card");
        productCard.classList.add("khampha__product-card");
        // Điền thông tin sản phẩm vào thẻ
        productCard.innerHTML = `
            <a href="../chitietsanpham/chitietsanpham.html?id=${product.id}">
                <img class="product-card__pic" src="${product.image}" alt="${product.name}">
                <p class="product-card__id" hidden>${product.id}</p>
                <p class="product-card__name">${product.name}</p>
                <p class="product-card__current">${product.price.toLocaleString()}đ</p>
                <p class="product-card__old">${product.oldPrice.toLocaleString()}đ</p>
                <div class="product-card__tag">${product.discount}%</div>
            </a>
            <div class="product-card_quantity">
                <label>Số lượng:</label>
                <button class="qty-btn minus">-</button>
                <input type="number" value="1" min="1" class="qty-input">
                <button class="qty-btn plus">+</button>
            </div>
            <button class="add-to-cart">Thêm vào giỏ</button>
        `;
        // Thêm thẻ sản phẩm vào container
        productContainer.appendChild(productCard);
    });
}

// Xử lí input số lượng sản phẩm
document.addEventListener('click', (event) => {
    // Nếu click vào button giảm
    if (event.target.classList.contains('qty-btn') && event.target.classList.contains('minus')) {
        const input = event.target.parentElement.querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
        }
    }
    // Nếu click vào button tăng
    if (event.target.classList.contains('qty-btn') && event.target.classList.contains('plus')) {
        const input = event.target.parentElement.querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value < 100) {
            input.value = value + 1;
        }
    }
});


