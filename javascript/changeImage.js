var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalInput = document.querySelector('.modal-body_input input');
// var modalButton = document.querySelector('.modal-body_btn');

var friendListImg = [
    {
        name: 'nguyễn thị phương anh',
        image1: './img-slideshow/1/image1.jpg',
        image2: './img-slideshow/1/image2.jpg',
        image3: './img-slideshow/1/image3.jpg',
        image4: './img-slideshow/1/image4.jpg',
        image5: './img-slideshow/1/image5.jpg',
    },
    {
        name: 'phan kiều ngọc anh',
        image1: './img-slideshow/2/image1.jpg',
        image2: './img-slideshow/2/image2.jpg',
        image3: './img-slideshow/2/image3.jpg',
        image4: './img-slideshow/2/image4.jpg',
        image5: './img-slideshow/2/image5.jpg',
    },
    {
        name: 'cấn thị ngọc ánh',
        image1: './img-slideshow/3/image1.jpg',
        image2: './img-slideshow/3/image2.jpg',
        image3: './img-slideshow/3/image3.jpg',
        image4: './img-slideshow/3/image4.jpg',
        image5: './img-slideshow/3/image5.jpg',
    },
    {
        name: 'nguyễn thị ngọc ánh',
        image1: './img-slideshow/4/image1.jpg',
        image2: './img-slideshow/4/image2.jpg',
        image3: './img-slideshow/4/image3.jpg',
        image4: './img-slideshow/4/image4.jpg',
        image5: './img-slideshow/4/image5.jpg',
    },
    {
        name: 'nguyễn thanh bình',
        image1: './img-slideshow/5/image1.jpg',
        image2: './img-slideshow/5/image2.jpg',
        image3: './img-slideshow/5/image3.jpg',
        image4: './img-slideshow/5/image4.jpg',
        image5: './img-slideshow/5/image5.jpg',
    },
    {
        name: 'kiều khánh duy',
        image1: './img-slideshow/6/image1.jpg',
        image2: './img-slideshow/6/image2.jpg',
        image3: './img-slideshow/6/image3.jpg',
        image4: './img-slideshow/6/image4.jpg',
        image5: './img-slideshow/6/image5.jpg',
    },
    {
        name: 'nguyễn khắc duy',
        image1: './img-slideshow/7/image1.jpg',
        image2: './img-slideshow/7/image2.jpg',
        image3: './img-slideshow/7/image3.jpg',
        image4: './img-slideshow/7/image4.jpg',
        image5: './img-slideshow/7/image5.jpg',
    },
    {
        name: 'đinh quang đông',
        image1: './img-slideshow/8/image1.jpg',
        image2: './img-slideshow/8/image2.jpg',
        image3: './img-slideshow/8/image3.jpg',
        image4: './img-slideshow/8/image4.jpg',
        image5: './img-slideshow/8/image5.jpg',
    },
    {
        name: 'kiều hương giang',
        image1: './img-slideshow/9/image1.jpg',
        image2: './img-slideshow/9/image2.jpg',
        image3: './img-slideshow/9/image3.jpg',
        image4: './img-slideshow/9/image4.jpg',
        image5: './img-slideshow/9/image5.jpg',
    },
    {
        name: 'nguyễn thị thanh hiền',
        image1: './img-slideshow/10/image1.jpg',
        image2: './img-slideshow/10/image2.jpg',
        image3: './img-slideshow/10/image3.jpg',
        image4: './img-slideshow/10/image4.jpg',
        image5: './img-slideshow/10/image5.jpg',
    },
    {
        name: 'nguyễn đồng trí hiếu',
        image1: './img-slideshow/11/image1.jpg',
        image2: './img-slideshow/11/image2.jpg',
        image3: './img-slideshow/11/image3.jpg',
        image4: './img-slideshow/11/image4.jpg',
        image5: './img-slideshow/11/image5.jpg',
    },
    {
        name: 'đỗ huy hoàng',
        image1: './img-slideshow/12/image1.jpg',
        image2: './img-slideshow/12/image2.jpg',
        image3: './img-slideshow/12/image3.jpg',
        image4: './img-slideshow/12/image4.jpg',
        image5: './img-slideshow/12/image5.jpg',
    },
    {
        name: 'đỗ quang huy',
        image1: './img-slideshow/13/image1.jpg',
        image2: './img-slideshow/13/image2.jpg',
        image3: './img-slideshow/13/image3.jpg',
        image4: './img-slideshow/13/image4.jpg',
        image5: './img-slideshow/13/image5.jpg',
    },
    {
        name: 'phí thu huyền',
        image1: './img-slideshow/14/image1.jpg',
        image2: './img-slideshow/14/image2.jpg',
        image3: './img-slideshow/14/image3.jpg',
        image4: './img-slideshow/14/image4.jpg',
        image5: './img-slideshow/14/image5.jpg',
    },
    {
        name: 'bùi như hưng',
        image1: './img-slideshow/15/image1.jpg',
        image2: './img-slideshow/15/image2.jpg',
        image3: './img-slideshow/15/image3.jpg',
        image4: './img-slideshow/15/image4.jpg',
        image5: './img-slideshow/15/image5.jpg',
    },
    {
        name: 'kiều thị mai hương',
        image1: './img-slideshow/17/image1.jpg',
        image2: './img-slideshow/17/image2.jpg',
        image3: './img-slideshow/17/image3.jpg',
        image4: './img-slideshow/17/image4.jpg',
        image5: './img-slideshow/17/image5.jpg',
    },
    {
        name: 'trần thị quỳnh hương',
        image1: './img-slideshow/18/image1.jpg',
        image2: './img-slideshow/18/image2.jpg',
        image3: './img-slideshow/18/image3.jpg',
        image4: './img-slideshow/18/image4.jpg',
        image5: './img-slideshow/18/image5.jpg',
    },
    {
        name: 'nguyễn trung kiên',
        image1: './img-slideshow/19/image1.jpg',
        image2: './img-slideshow/19/image2.jpg',
        image3: './img-slideshow/19/image3.jpg',
        image4: './img-slideshow/19/image4.jpg',
        image5: './img-slideshow/19/image5.jpg',
    },
    {
        name: 'cấn thùy linh',
        image1: './img-slideshow/20/image1.jpg',
        image2: './img-slideshow/20/image2.jpg',
        image3: './img-slideshow/20/image3.jpg',
        image4: './img-slideshow/20/image4.jpg',
        image5: './img-slideshow/20/image5.jpg',
    },
    {
        name: 'hà bùi phương linh',
        image1: './img-slideshow/21/image1.jpg',
        image2: './img-slideshow/21/image2.jpg',
        image3: './img-slideshow/21/image3.jpg',
        image4: './img-slideshow/21/image4.jpg',
        image5: './img-slideshow/21/image5.jpg',
    },
    {
        name: 'nguyễn thị khánh linh',
        image1: './img-slideshow/22/image1.jpg',
        image2: './img-slideshow/22/image2.jpg',
        image3: './img-slideshow/22/image3.jpg',
        image4: './img-slideshow/22/image4.jpg',
        image5: './img-slideshow/22/image5.jpg',
    },
    {
        name: 'nguyễn thị thùy linh',
        image1: './img-slideshow/23/image1.jpg',
        image2: './img-slideshow/23/image2.jpg',
        image3: './img-slideshow/23/image3.jpg',
        image4: './img-slideshow/23/image4.jpg',
        image5: './img-slideshow/23/image5.jpg',
    },
    {
        name: 'kiều trọng mưu',
        image1: './img-slideshow/24/image1.jpg',
        image2: './img-slideshow/24/image2.jpg',
        image3: './img-slideshow/24/image3.jpg',
        image4: './img-slideshow/24/image4.jpg',
        image5: './img-slideshow/24/image5.jpg',
    },
    {
        name: 'cấn thị trà my',
        image1: './img-slideshow/25/image1.jpg',
        image2: './img-slideshow/25/image2.jpg',
        image3: './img-slideshow/25/image3.jpg',
        image4: './img-slideshow/25/image4.jpg',
        image5: './img-slideshow/25/image5.jpg',
    },
    {
        name: 'kiều nguyệt nga',
        image1: './img-slideshow/26/image1.jpg',
        image2: './img-slideshow/26/image2.jpg',
        image3: './img-slideshow/26/image3.jpg',
        image4: './img-slideshow/26/image4.jpg',
        image5: './img-slideshow/26/image5.jpg',
    },
    {
        name: 'nguyễn hoàng ngân',
        image1: './img-slideshow/27/image1.jpg',
        image2: './img-slideshow/27/image2.jpg',
        image3: './img-slideshow/27/image3.jpg',
        image4: './img-slideshow/27/image4.jpg',
        image5: './img-slideshow/27/image5.jpg',
    },
    {
        name: 'kiều thị phương oanh',
        image1: './img-slideshow/28/image1.jpg',
        image2: './img-slideshow/28/image2.jpg',
        image3: './img-slideshow/28/image3.jpg',
        image4: './img-slideshow/28/image4.jpg',
        image5: './img-slideshow/28/image5.jpg',
    },
    {
        name: 'trần thanh phương',
        image1: './img-slideshow/29/image1.jpg',
        image2: './img-slideshow/29/image2.jpg',
        image3: './img-slideshow/29/image3.jpg',
        image4: './img-slideshow/29/image4.jpg',
        image5: './img-slideshow/29/image5.jpg',
    },
    {
        name: 'đồng thị thanh tâm',
        image1: './img-slideshow/30/image1.jpg',
        image2: './img-slideshow/30/image2.jpg',
        image3: './img-slideshow/30/image3.jpg',
        image4: './img-slideshow/30/image4.jpg',
        image5: './img-slideshow/30/image5.jpg',
    },
    {
        name: 'nguyễn khắc thái',
        image1: './img-slideshow/31/image1.jpg',
        image2: './img-slideshow/31/image2.jpg',
        image3: './img-slideshow/31/image3.jpg',
        image4: './img-slideshow/31/image4.jpg',
        image5: './img-slideshow/31/image5.jpg',
    },
    {
        name: 'phạm quang thành',
        image1: './img-slideshow/32/image1.jpg',
        image2: './img-slideshow/32/image2.jpg',
        image3: './img-slideshow/32/image3.jpg',
        image4: './img-slideshow/32/image4.jpg',
        image5: './img-slideshow/32/image5.jpg',
    },
    {
        name: 'khuất thị thanh thảo',
        image1: './img-slideshow/33/image1.jpg',
        image2: './img-slideshow/33/image2.jpg',
        image3: './img-slideshow/33/image3.jpg',
        image4: './img-slideshow/33/image4.jpg',
        image5: './img-slideshow/33/image5.jpg',
    },
    {
        name: 'nguyễn quang thoại',
        image1: './img-slideshow/34/image1.jpg',
        image2: './img-slideshow/34/image2.jpg',
        image3: './img-slideshow/34/image3.jpg',
        image4: './img-slideshow/34/image4.jpg',
        image5: './img-slideshow/34/image5.jpg',
    },
    {
        name: 'hoàng thị thu',
        image1: './img-slideshow/35/image1.jpg',
        image2: './img-slideshow/35/image2.jpg',
        image3: './img-slideshow/35/image3.jpg',
        image4: './img-slideshow/35/image4.jpg',
        image5: './img-slideshow/35/image5.jpg',
    },
    {
        name: 'khuất thu thủy',
        image1: './img-slideshow/36/image1.jpg',
        image2: './img-slideshow/36/image2.jpg',
        image3: './img-slideshow/36/image3.jpg',
        image4: './img-slideshow/36/image4.jpg',
        image5: './img-slideshow/36/image5.jpg',
    },
    {
        name: 'nguyễn thu thủy',
        image1: './img-slideshow/37/image1.jpg',
        image2: './img-slideshow/37/image2.jpg',
        image3: './img-slideshow/37/image3.jpg',
        image4: './img-slideshow/37/image4.jpg',
        image5: './img-slideshow/37/image5.jpg',
    },
    {
        name: 'trương thị thanh thủy',
        image1: './img-slideshow/38/image1.jpg',
        image2: './img-slideshow/38/image2.jpg',
        image3: './img-slideshow/38/image3.jpg',
        image4: './img-slideshow/38/image4.jpg',
        image5: './img-slideshow/38/image5.jpg',
    },
    {
        name: 'đào thị thương',
        image1: './img-slideshow/39/image1.jpg',
        image2: './img-slideshow/39/image2.jpg',
        image3: './img-slideshow/39/image3.jpg',
        image4: './img-slideshow/39/image4.jpg',
        image5: './img-slideshow/39/image5.jpg',
    },
    {
        name: 'hoàng thu trang',
        image1: './img-slideshow/40/image1.jpg',
        image2: './img-slideshow/40/image2.jpg',
        image3: './img-slideshow/40/image3.jpg',
        image4: './img-slideshow/40/image4.jpg',
        image5: './img-slideshow/40/image5.jpg',
    },
    {
        name: 'kiều thị thùy trang',
        image1: './img-slideshow/41/image1.jpg',
        image2: './img-slideshow/41/image2.jpg',
        image3: './img-slideshow/41/image3.jpg',
        image4: './img-slideshow/41/image4.jpg',
        image5: './img-slideshow/41/image5.jpg',
    },
    {
        name: 'nguyễn thị thu trang',
        image1: './img-slideshow/42/image1.jpg',
        image2: './img-slideshow/42/image2.jpg',
        image3: './img-slideshow/42/image3.jpg',
        image4: './img-slideshow/42/image4.jpg',
        image5: './img-slideshow/42/image5.jpeg',
    },
    {
        name: 'kiều chí trung',
        image1: './img-slideshow/43/image1.jpg',
        image2: './img-slideshow/43/image2.jpg',
        image3: './img-slideshow/43/image3.jpg',
        image4: './img-slideshow/43/image4.jpg',
        image5: './img-slideshow/43/image5.jpg',
    },
    {
        name: 'khuất quang tuấn',
        image1: './img-slideshow/44/image1.jpg',
        image2: './img-slideshow/44/image2.jpg',
        image3: './img-slideshow/44/image3.jpg',
        image4: './img-slideshow/44/image4.jpg',
        image5: './img-slideshow/44/image5.jpg',
    },
    {
        name: 'trần đình tùng',
        image1: './img-slideshow/45/image1.jpg',
        image2: './img-slideshow/45/image2.jpg',
        image3: './img-slideshow/45/image3.jpg',
        image4: './img-slideshow/45/image4.jpg',
        image5: './img-slideshow/45/image5.jpg',
    },
    {
        name: 'nguyễn thị hồng vân',
        image1: './img-slideshow/46/image1.jpg',
        image2: './img-slideshow/46/image2.jpg',
        image3: './img-slideshow/46/image3.jpg',
        image4: './img-slideshow/46/image4.jpg',
        image5: './img-slideshow/46/image5.jpg',
    },
    {
        name: 'kiều thị vui',
        image1: './img-slideshow/47/image1.jpg',
        image2: './img-slideshow/47/image2.jpg',
        image3: './img-slideshow/47/image3.jpg',
        image4: './img-slideshow/47/image4.jpg',
        image5: './img-slideshow/47/image5.jpg',
    },
    {
        name: 'vũ hải yến',
        image1: './img-slideshow/48/image1.jpg',
        image2: './img-slideshow/48/image2.jpg',
        image3: './img-slideshow/48/image3.jpg',
        image4: './img-slideshow/48/image4.jpg',
        image5: './img-slideshow/48/image5.jpg',
    },
    {
        name: 'chu thanh minh',
        image1: './img-slideshow/0/image1.jpg',
        image2: './img-slideshow/0/image2.jpg',
        image3: './img-slideshow/0/image3.jpg',
        image4: './img-slideshow/0/image4.jpg',
        image5: './img-slideshow/0/image5.jpg',
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

