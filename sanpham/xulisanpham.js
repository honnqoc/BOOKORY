//BANNER
let bannerSlider = document.querySelector(".banner__list");
let bannerItems = document.querySelectorAll(".banner");
let dot = document.querySelectorAll(".banner__dots li");
let active = 0; //banner đang hiển thị
let soBanner = bannerItems.length;

// click vào dot nào sẽ cho ra một index để chạy banner tương ứng
dot.forEach((d, index) => {
    d.addEventListener("click", () => {
        showBanner(index);
    });
});

// hiển thị banner
function showBanner(index) {
    active = index;
    // trượt banner container sang trái một khoảng bằng index*100%
    bannerSlider.style.transform = `translateX(-${active * 100}%)`;
    // đổi dots
    //xóa active của tất cả các dots
    dot.forEach(d => d.classList.remove("banner__dot-action"));
    //thêm active cho dot đang hoạt động
    dot[active].classList.add("banner__dot-action");
}
// auto chạy banner sau 6s
setInterval(() => {
    active++;
    if (active >= soBanner) {
        active = 0;
    }
    showBanner(active);
}, 6000);

// MỤC SẢN PHẨM HOT
let hotLeft = document.querySelector(".hot__button-left");
let hotRight = document.querySelector(".hot__button-right");
let hotSlider = document.querySelector(".hot-product__container");
let hotSliderItems = document.querySelectorAll(".hot__product-card");
let index = 0;
const gap = 20;
const hotSliderItemLength = hotSliderItems.length; //số lượng sản phẩm của mục hot

function hotSliderFunction(x) {
    //chiều rộng của một thẻ
    const cardWidth = hotSliderItems[0].offsetWidth;
    //khoảng cách di chuyển = chiều rộng của một thẻ + khoảng cách của các thẻ
    const moveDistance = cardWidth + gap;
    //tính số card có thể hiển thị bằng chiều rộng của container chia cho thẻ card
    const visibleCards = Math.floor(
        document.querySelector(".hot-product").offsetWidth / cardWidth
    );
    //số index (lần di chuyển tối đa)= số card - số card hiển thị
    const maxIndex = hotSliderItemLength - visibleCards;
    //nếu x=1 trượt sang phải
    if (x == 1) {
        index++;
        //nếu hết sản phẩm quay về ban đầu
        if (index > maxIndex) index = 0;
    }
    //nếu x=-1 trượt sang trái
    if (x == -1) {
        index--;
        //nếu là sản phẩm đầu quay về sản phẩm cuối
        if (index < 0) index = maxIndex;
    }
    //tính khoảng cách slider cần dịch chuyển = index * khoảng cách di chuyển mỗi lần    
    let positionX = -index * moveDistance;
    //di chuyển bằng cách thay đổi thuộc tính css
    hotSlider.style.transition = "transform 0.5s";
    hotSlider.style.transform = `translateX(${positionX}px)`;

}


// Click trái slider lùi 1
hotLeft.addEventListener("click", function () {
    hotSliderFunction(-1);
});
// Click phải slider tiến 1
hotRight.addEventListener("click", function () {
    hotSliderFunction(1);
});

let partnerLeft = document.querySelector(".partner__button-left");
let partnerRight = document.querySelector(".partner__button-right");
let partnerSlider = document.querySelector(".partner__img");
let partnerSliderItems = document.querySelectorAll(".partner__img img");

let indexPartner = 0;
const gapPartner = 20;
const partnerSliderItemLength = partnerSliderItems.length;
let partnerContainer = document.querySelector(".partner");
// Click trái slider lùi 1
partnerLeft.addEventListener("click", function () {
    partnerSliderFunction(-1);
});
//Click phải slider tiến 1
partnerRight.addEventListener("click", function () {
    partnerSliderFunction(1);
});

function partnerSliderFunction(x) {
    //chiều rộng của một thẻ
    const partnerImgWidth = partnerSliderItems[0].offsetWidth;
    //khoảng cách di chuyển = chiều rộng thẻ + khoảng cách giữa các thẻ
    const moveDistance = partnerImgWidth + gapPartner;
    //tính số card có thể hiển thị bằng chiều rộng của container chia cho thẻ card
    const visibleCards = Math.floor(
        partnerContainer.offsetWidth / (partnerImgWidth + gapPartner)
    );
    //số index (lần di chuyển tối đa)= số card - số card hiển thị
    const maxIndex = partnerSliderItemLength - visibleCards;
    //nếu x=1 trượt sang phải
    if (x == 1) {
        indexPartner++;
        if (indexPartner > maxIndex) indexPartner = 0;
    }
    //nếu x=-1 trượt sang trái
    if (x == -1) {
        indexPartner--;
        if (indexPartner < 0) indexPartner = maxIndex;
    }
    //tính khoảng cách slider cần dịch chuyển = index * khoảng cách di chuyển mỗi lần    
    let positionX = -indexPartner * moveDistance;
    //di chuyển bằng các thay đổi thuộc tính css
    partnerSlider.style.transition = "transform 0.5s";
    partnerSlider.style.transform = `translateX(${positionX}px)`;
}
//NÚT XEM THÊM SẢN PHẨM==============================================================

let products = document.querySelectorAll(".khampha__product-card");
let moreButton = document.querySelector(".more__button");
let hienThi = 10; //chỉ hiển thị 10 sản phẩm đầu tiên
for (let i = hienThi; i < products.length; i++) {
    //ẩn các sản phẩm sau sản phẩm thứ 10
    products[i].style.display = "none";
}
moreButton.addEventListener("click", function () {
    let next = hienThi + 10; //cho phép hiển thị thêm 10 sản phẩm
    for (let i = hienThi; i < next && i < products.length; i++) {
        products[i].style.display = "flex";
    }
    hienThi = next;
    //nếu hết sản phẩm ẩn nút xem thêm
    if (hienThi >= products.length) {
        moreButton.style.display = "none";
    }
})


//NÚT BACK TO TOP QUAY LẠI ĐẦU TRANG==============================================

let backToTop = document.querySelector(".back-to-top");
//nếu scroll đến 400px hiện nút back to top
window.addEventListener("scroll", function () {
    if (window.scrollY > 400)
        backToTop.style.display = "block";
    else backToTop.style.display = "none";
})
//khi click vào nút back to top trở về đầu trang
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// Xử lí form điền email để nhận tin
const registerBtn = document.querySelector('button[name="register-btn"]');
const emailInput = document.querySelector('input[name="email-register"]');

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailInput.value === '') {
        alert('Vui lòng nhập địa chỉ email của bạn trước!');
    } else {
        alert("Chúng tôi đã nhận được thông tin của bạn. Các chương trình khuyến mãi sẽ được gửi tới bạn ngay khi có!");
    }
})
