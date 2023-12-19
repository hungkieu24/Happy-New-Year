var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalInput = document.querySelector('.modal-body_input input');
var modalButton = document.querySelector('.modal-body_btn');

var friendListImg = [
    {
        name: 'tuấn',
        image1: './avatar-img/Monkey_D_Luffy.jpg',
        image2: './avatar-img/Roronoa_Zoro.jpg',
        image3: './avatar-img/Monkey_D_Luffy.jpg',
        image4: './avatar-img/Monkey_D_Luffy.jpg',
        image5: './avatar-img/Monkey_D_Luffy.jpg',
    },
    {
        name: 'kiều đình hưng',
        image1: './avatar-img/Roronoa_Zoro.jpg',
        image2: './avatar-img/Roronoa_Zoro.jpg',
        image3: './avatar-img/Roronoa_Zoro.jpg',
        image4: './avatar-img/Roronoa_Zoro.jpg',
        image5: './avatar-img/Roronoa_Zoro.jpg',
    },
];

var imageIndex1 = document.querySelector('.image_index1 img');
var imageIndex2 = document.querySelector('.image_index2 img');
var imageIndex3 = document.querySelector('.image_index3 img');
var imageIndex4 = document.querySelector('.image_index4 img');
var imageIndex5 = document.querySelector('.image_index5 img');

function changeImg(nameInput) {
    var friendImg = friendListImg.find(function(e) {
        return e.name == nameInput;
    })

    imageIndex1.src = friendImg.image1;
    imageIndex2.src = friendImg.image2;
    imageIndex3.src = friendImg.image3;
    imageIndex4.src = friendImg.image4;
    imageIndex5.src = friendImg.image5;
   
}

function getFriendNameToChange() {
    modalInput.addEventListener('change', function(e) {
        var nameFriend = modalInput.value.trim().toLowerCase();
        changeImg(nameFriend)
    })
    
}
getFriendNameToChange()

