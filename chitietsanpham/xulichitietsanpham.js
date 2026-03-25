// Dữ liệu của các sản phẩm
const products = [
    {
        id: "001",
        name: "Tiểu Thuyết Tắt Đèn - Ngô Tất Tố",
        price: 40000,
        oldPrice: 50000,
        img: "../hinhanh/sanpham/tat_den.jpg",
        description1: "Tác phẩm kinh điển của văn học hiện thực Việt Nam.",
        description2: "Phản ánh nỗi khổ cực của người nông dân dưới chế độ thuế thân tàn khốc."
    },
    {
        id: "002",
        name: "Tập Truyện Ngắn Vợ Nhặt - Kim Lân",
        price: 48000,
        oldPrice: 60000,
        img: "../hinhanh/sanpham/vo_nhat.png",
        description1: "Câu chuyện cảm động về tình người trong nạn đói 1945.",
        description2: "Khẳng định sức sống mãnh liệt và khát khao hạnh phúc của con người."
    },
    {
        id: "003",
        name: "Nuance - 50 Sắc Thái Của Từ",
        price: 127000,
        oldPrice: 159000,
        img: "../hinhanh/sanpham/50_sac_thai_cua_tu.jpeg",
        description1: "Cẩm nang sử dụng từ ngữ tinh tế trong giao tiếp.",
        description2: "Giúp bạn phân biệt những khác biệt nhỏ nhất giữa các từ đồng nghĩa."
    },
    {
        id: "004",
        name: "1000 Phát Minh Và Khám Phá Vĩ Đại",
        price: 449000,
        oldPrice: 499000,
        img: "../hinhanh/sanpham/1000_phat_minh_va_kham_pha_vi_dai.jpg",
        description1: "Hành trình khám phá lịch sử văn minh nhân loại.",
        description2: "Tổng hợp những bước ngoặt khoa học thay đổi thế giới từ cổ đại đến nay."
    },
    {
        id: "005",
        name: "7 Bài Học Hay Nhất Về Vật Lý",
        price: 79000,
        oldPrice: 99000,
        img: "../hinhanh/sanpham/7_bai_hoc_hay_nhat_ve_vat_ly.jpeg",
        description1: "Cuốn sách ngắn gọn về những bí ẩn của vũ trụ.",
        description2: "Giải thích đơn giản về thuyết tương đối, cơ học lượng tử và các hạt cơ bản."
    },
    {
        id: "006",
        name: "Tranh Biện Sao Cho Đúng",
        price: 135000,
        oldPrice: 169000,
        img: "../hinhanh/sanpham/tranh_bien_sao_cho_dung.jpeg",
        description1: "Kỹ năng tư duy phản biện và nghệ thuật thuyết phục.",
        description2: "Cung cấp các công cụ để xây dựng lập luận sắc bén và logic."
    },
    {
        id: "007",
        name: "Python lập trình thuật toán - Bùi Việt Hà",
        price: 67000,
        oldPrice: 95000,
        img: "../hinhanh/sanpham/python_lap_trinh_thuat_toan.jpeg",
        description1: "Hướng dẫn giải thuật cơ bản và nâng cao bằng Python.",
        description2: "Phù hợp cho sinh viên CNTT và người học lập trình tư duy giải toán."
    },
    {
        id: "008",
        name: "1001 Lỗi Tiếng Anh Giao Tiếp và Cách Sửa",
        price: 135000,
        oldPrice: 169000,
        img: "../hinhanh/sanpham/1001_loi_tieng_anh_giao_tiep_va_cach_sua.png",
        description1: "Khắc phục những sai lầm phổ biến khi nói tiếng Anh.",
        description2: "Giúp người học nói tiếng Anh tự nhiên và chuẩn xác như người bản xứ."
    },
    {
        id: "009",
        name: "Mắt Biếc",
        price: 88000,
        oldPrice: 110000,
        img: "../hinhanh/sanpham/mat_biec.jpeg",
        description1: "Tiểu thuyết tình yêu buồn của nhà văn Nguyễn Nhật Ánh.",
        description2: "Câu chuyện về Ngạn và Hà Lan với những kỷ niệm tuổi thơ tại làng Đo Đo."
    },
    {
        id: "010",
        name: "Đối Đáp Tiếng Anh Không Cần Nghĩ",
        price: 111000,
        oldPrice: 139000,
        img: "../hinhanh/sanpham/doi_dap_tieng_anh_khong_can_nghi.jpeg",
        description1: "Phương pháp phản xạ tiếng Anh nhanh chóng.",
        description2: "Tập trung vào các mẫu câu giao tiếp thông dụng hàng ngày."
    },
    {
        id: "011",
        name: "Bố Con Cá Gai",
        price: 88000,
        oldPrice: 110000,
        img: "../hinhanh/sanpham/bo_con_ca_gai.jpeg",
        description1: "Câu chuyện cảm động về tình phụ tử thiêng liêng.",
        description2: "Cuốn sách lấy đi nước mắt của hàng triệu độc giả về sự hy sinh của người cha."
    },
    {
        id: "012",
        name: "Sức Mạnh Của Việc Đặt Câu Hỏi Đúng",
        price: 79000,
        oldPrice: 99000,
        img: "../hinhanh/sanpham/suc_manh_cua_viec_dat_cau_hoi_dung.jpeg",
        description1: "Khai phá tư duy sáng tạo qua cách đặt vấn đề.",
        description2: "Thay đổi góc nhìn để tìm ra giải pháp tối ưu trong công việc và cuộc sống."
    },
    {
        id: "013",
        name: "Phương Pháp Simon - Cách Học Nhanh, Nhớ Lâu",
        price: 152000,
        oldPrice: 190000,
        img: "../hinhanh/sanpham/phuong_phap_simon_cach_hoc_nhanh_nho_lau_moi_kien_thuc.webp",
        description1: "Kỹ thuật học tập hiệu quả dựa trên khoa học não bộ.",
        description2: "Giúp bạn làm chủ kiến thức mới trong thời gian ngắn nhất."
    },
    {
        id: "014",
        name: "Sketchnote Lý Thuyết: Ghi Chú Sáng Tạo",
        price: 159000,
        oldPrice: 199000,
        img: "../hinhanh/sanpham/sketchnote_ly_thuyet_phuong_phap_ghi_chu_sang_tao.jpg",
        description1: "Sử dụng hình ảnh để ghi nhớ và truyền đạt thông tin.",
        description2: "Hướng dẫn từng bước để biến những trang giấy chữ khô khan thành hình minh họa sinh động."
    },
    {
        id: "015",
        name: "1 Ngày Bằng 48 Giờ - Quản Lý Thời Gian",
        price: 57000,
        oldPrice: 72000,
        img: "../hinhanh/sanpham/1_ngay_bang_48_gio_so_tay_quan_ly_thoi_gian_hieu_qua.jpeg",
        description1: "Bí quyết tối ưu hóa năng suất làm việc mỗi ngày.",
        description2: "Các kỹ thuật sắp xếp công việc để bạn có thêm thời gian cho bản thân."
    },
    {
        id: "016",
        name: "Sức Mạnh Của Sự Tử Tế",
        price: 62000,
        oldPrice: 78000,
        img: "../hinhanh/sanpham/suc_manh_cua_su_tu_te.jpeg",
        description1: "Giá trị của lòng nhân ái trong thế giới hiện đại.",
        description2: "Những câu chuyện truyền cảm hứng về cách sự tử tế thay đổi cuộc đời."
    },
    {
        id: "017",
        name: "Nghề Nào Cho Bạn Nghề Nào Cho Tôi",
        price: 103000,
        oldPrice: 129000,
        img: "../hinhanh/sanpham/nghe_nao_cho_ban_nghe_nao_cho_toi.png",
        description1: "Hướng nghiệp và thấu hiểu bản thân.",
        description2: "Giúp bạn tìm ra công việc phù hợp với đam mê và năng lực thực tế."
    },
    {
        id: "018",
        name: "Hồi Ký Người Thầy Xây Trường Hạnh Phúc",
        price: 111000,
        oldPrice: 139000,
        img: "../hinhanh/sanpham/hoi_ky_nguoi_thay_xay_dung_truong_han_phuc.png",
        description1: "Tâm huyết về sự nghiệp giáo dục và trồng người.",
        description2: "Những bài học giá trị về cách xây dựng môi trường học tập nhân văn."
    },
    {
        id: "019",
        name: "Tư Duy Nhanh Và Chậm",
        price: 215000,
        oldPrice: 269000,
        img: "../hinhanh/sanpham/tu_duy_nhanh_va_cham.jpeg",
        description1: "Kiệt tác về tâm lý học hành vi của Daniel Kahneman.",
        description2: "Khám phá hai hệ thống tư duy chi phối mọi quyết định của con người."
    },
    {
        id: "020",
        name: "All That IELTS",
        price: 223000,
        oldPrice: 279000,
        img: "../hinhanh/sanpham/all_that_ielts.png",
        description1: "Lộ trình ôn luyện IELTS toàn diện 4 kỹ năng.",
        description2: "Tổng hợp chiến thuật làm bài và bộ từ vựng mục tiêu cho các band điểm cao."
    }
];


// Lấy id sản phẩm từ URL
const detailParams = new URLSearchParams(window.location.search);
const id = detailParams.get('id');

// Đưa dữ liệu vào
const product = products.find(item => item.id == id);

if (product) {
    // Cập nhật thông tin sản phẩm trên trang chi tiết
    document.querySelector('.product-card__id').textContent = product.id;
    document.querySelector('.product-card__pic').src = product.img;
    document.querySelector('.product-card__name').textContent = product.name;
    document.querySelector('.product-card__current').textContent = product.price.toLocaleString() + "đ";
    document.querySelector('.product-card__old').textContent = product.oldPrice.toLocaleString() + "đ";

    // Cập nhật phần mô tả chi tiết
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-old-price').textContent = product.oldPrice.toLocaleString() + "đ";
    document.getElementById('product-price').textContent = product.price.toLocaleString() + "đ";
    document.getElementById('product-desc1').textContent = product.description1;
    document.getElementById('product-desc2').textContent = product.description2;
}

// Xử lí form điền email để nhận tin
const registerBtn = document.querySelector('button[name="register-btn"]');
const emailInput = document.querySelector('input[name="email-register"]');

// Kiểm tra nếu email trống thì yêu cầu nhập, nếu có thì thông báo đã nhận được thông tin
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailInput.value === '') {
        alert('Vui lòng nhập địa chỉ email của bạn trước!');
    } else {
        alert("Chúng tôi đã nhận được thông tin của bạn. Các chương trình khuyến mãi sẽ được gửi tới bạn ngay khi có!");
    }
})

// Xử lí input số lượng sản phẩm
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('qty-btn') && event.target.classList.contains('minus')) {
        const input = event.target.parentElement.querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
        }
    }
    if (event.target.classList.contains('qty-btn') && event.target.classList.contains('plus')) {
        const input = event.target.parentElement.querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value < 100) {
            input.value = value + 1;
        }
    }
});

