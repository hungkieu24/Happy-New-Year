var imgFeatures = document.querySelector('.img_feature');
var listImg = document.querySelectorAll('.slideshow-list_img img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var headerNavBtn = document.querySelector('.header_nav_responsive i');
var headerNavList = document.querySelector('.list-nav');
var modalInput = document.querySelector('.modal-body_input input');


var currentIndex = 0;

function updateImageByIndex(index) {

    document.querySelectorAll('.slideshow-list_img div').forEach(function (item) {
        item.classList.remove('active');
    });

    currentIndex = index;
    imgFeatures.src = listImg[index].getAttribute('src');

    listImg[index].parentElement.classList.add('active');
}

listImg.forEach((img, index) => {
    img.addEventListener('click', e => {
        updateImageByIndex(index);
    })
})

prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }
    updateImageByIndex(currentIndex);
})

nextBtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateImageByIndex(currentIndex);
})

headerNavBtn.addEventListener('click', e => {
    console.log('keyboard navigation');
    headerNavList.classList.toggle('fadeIn');
})

const inputData = JSON.parse(localStorage.getItem('name')) || [];

modalInput.addEventListener('change', e => {
    const inputValue = e.target.value.trim().toLowerCase();

    // Kiểm tra xem người dùng đã tồn tại trong danh sách chưa
    const userIndex = inputData.findIndex(user => user.name === inputValue);

    if (userIndex !== -1) {
        // Người dùng đã tồn tại, cập nhật giá trị
        inputData[userIndex] = { name: inputValue };
    } else {
        // Người dùng mới, thêm vào danh sách
        inputData.push({ name: inputValue });
    }

    localStorage.setItem('name', JSON.stringify(inputData));
})

document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ audio
    var audio = document.getElementById("backgroundMusic");

    // Tự động phát nhạc khi trang web được tải
    audio.play();
});

