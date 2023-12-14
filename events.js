var imgFeatures = document.querySelector('.img_feature');
var listImg = document.querySelectorAll('.slideshow-list_img img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;

function updateImageByIndex(index) {

    document.querySelectorAll('.slideshow-list_img div').forEach(function(item) {
        item.classList.remove('active');
    });

    currentIndex = index;
    imgFeatures.src = listImg[index].getAttribute('src');

    listImg[index].parentElement.classList.add('active');
}

listImg.forEach( (img, index) => {
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
        currentIndex = 0 ;
    } else {
        currentIndex++;
    }
    updateImageByIndex(currentIndex);
})