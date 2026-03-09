//BANNER
let bannerSlider = document.querySelector(".home-banner__list");
let bannerItems = document.querySelectorAll(".home-banner");
let dot = document.querySelectorAll(".dots li");
let active = 0;
let soBanner = bannerItems.length;

// hiển thị banner
function showBanner(index){
    active = index;
    // trượt banner
    bannerSlider.style.transform = `translateX(-${active * 100}%)`;
    // đổi dots
    dot.forEach(d => d.classList.remove("banner__dot-action"));
    dot[active].classList.add("banner__dot-action");
}

// click dots
dot.forEach((d, index) => {
    d.addEventListener("click", () => {
        showBanner(index);
    });
});

// auto chạy banner
setInterval(() => {
    active++;
    if(active >= soBanner){
        active = 0;
    }
    showBanner(active);
}, 6000);

// MỤC SẢN PHẨM HOT
let hotLeft = document.querySelector(".home-hot__button-left");
let hotRight = document.querySelector(".home-hot__button-right");
let hotSlider = document.querySelector(".hot-product__container");
let hotSliderItems = document.querySelectorAll(".hot__product-card");

let index = 0;
const gap = 20;
const hotSliderItemLength = hotSliderItems.length; //số lượng sản phẩm của mục hot

// Lắng nghe sự kiện click
hotLeft.addEventListener("click", function() {
    handleChangeClick(-1);
});

hotRight.addEventListener("click", function() {
    handleChangeClick(1);
});

function handleChangeClick(param) {
    const cardWidth = hotSliderItems[0].offsetWidth;
    const moveDistance = cardWidth + gap;

    const visibleCards = Math.floor(
        document.querySelector(".home-hot-product").offsetWidth / cardWidth
    );

    const maxIndex = hotSliderItemLength - visibleCards;

    if (param === 1) {
        index++;
        if (index > maxIndex) index = 0;
    }

    if (param === -1) {
        index--;
        if (index < 0) index = maxIndex;
    }

    let positionX = -index * moveDistance;

    hotSlider.style.transition = "transform 0.5s ease-in-out";
    hotSlider.style.transform = `translateX(${positionX}px)`;
    
}


let partnerLeft = document.querySelector(".home-partner__button-left");
let partnerRight = document.querySelector(".home-partner__button-right");
let partnerSlider = document.querySelector(".partner__img");
let partnerSliderItems = document.querySelectorAll(".partner__img img");

let indexp = 0;
const gapp = 20;
const partnerSliderItemLength = partnerSliderItems.length;

// Lắng nghe sự kiện click
let partnerContainer = document.querySelector(".home-partner");

partnerLeft.addEventListener("click", function() {
    handleParnterSlide(-1);
});

partnerRight.addEventListener("click", function() {
    handleParnterSlide(1);
});

function handleParnterSlide(param) {

    const cardWidth = partnerSliderItems[0].offsetWidth;
    const moveDistance = cardWidth + gapp;

    const visibleCards = Math.floor(
        partnerContainer.offsetWidth / (cardWidth + gapp)
    );

    const maxIndex = partnerSliderItemLength - visibleCards;

    if (param === 1) {
        indexp++;
        if (indexp > maxIndex) indexp = 0;
    }

    if (param === -1) {
        indexp--;
        if (indexp < 0) indexp = maxIndex;
    }

    let positionX = -indexp * moveDistance;

    partnerSlider.style.transition = "transform 0.5s ease-in-out";
    partnerSlider.style.transform = `translateX(${positionX}px)`;
}
//NÚT XEM THÊM SẢN PHẨM==============================================================

let products = document.querySelectorAll(".khampha__product-card");
let moreButton = document.querySelector(".home-more__button");
let hienThi = 10; //chỉ hiển thị 10 sản phẩm đầu tiên
for(let i=hienThi; i < products.length; i++){
    //ẩn các sản phẩm sau sản phẩm thứ 10
    products[i].style.display = "none";
}
moreButton.addEventListener("click", function(){
    let next = hienThi + 10; //cho phép hiển thị thêm 10 sản phẩm
    for(let i=hienThi; i<next && i<products.length; i++){
        products[i].style.display = "block";
    }
    hienThi = next;
    //nếu hết sản phẩm ẩn nút xem thêm
    if(hienThi >= products.length){
        moreButton.style.display = "none";
    }
})


//NÚT BACK TO TOP QUAY LẠI ĐẦU TRANG==============================================

let backToTop = document.querySelector(".back-to-top");
//nếu scroll đến 400px hiện nút back to top
window.addEventListener("scroll", function(){
    if(window.scrollY > 400)
        backToTop.style.display = "block";
    else backToTop.style.display = "none";
})
//khi click vào nút back to top trở về đầu trang
backToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

