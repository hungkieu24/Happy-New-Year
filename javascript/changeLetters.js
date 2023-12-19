var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalInput = document.querySelector('.modal-body_input input');
var modalButton = document.querySelector('.modal-body_btn');

var friendList = [
    
    {
        id: 1,
        name: 'tuấn',
        letters: 
        'Chúc mừng năm mới, anh bạn thân của tôi! Năm 2024 đang đến, mang theo những hạnh phúc mới, thành công mới và những kỷ niệm đáng nhớ. Mong rằng Tuấn sẽ tiếp tục chặng đường học tập với đầy đủ năng lượng và sự cố gắng, để những kiến thức mà em đang học tại Cao đẳng Cơ điện Hà Nội sẽ là bước đệm quan trọng cho tương lai sáng tạo. Năm nay, anh chúc Tuấn luôn khoẻ mạnh, hạnh phúc và tràn đầy năng lượng tích cực. Mong rằng những ước mơ và kế hoạch của Tuấn sẽ trở thành hiện thực, và công việc học tập sẽ mở ra những cánh cửa mới trong sự phát triển cá nhân. Đồng thời, chúc em luôn tìm thấy niềm vui và ý nghĩa trong cuộc sống hàng ngày. Dù ở đâu, dù làm gì, hãy giữ cho tâm hồn mình luôn trẻ trung và đầy nhiệt huyết. Cuộc sống là một cuộc phiêu lưu, và anh tin rằng Tuấn sẽ luôn tìm thấy những khoảnh khắc đáng nhớ trên con đường của mình. Cuối cùng, chúc Tuấn sẽ gặt hái được nhiều thành công trong công việc học tập cũng như những ước mơ cá nhân. Và đặc biệt, chúc em sẽ tìm thấy hạnh phúc trong tình yêu. Dù đây có phải là năm mà Tuấn sẽ gặp gỡ nửa kia của mình hay không, hãy để trái tim mình mở cửa đón nhận những điều tốt lành nhất. Chúc Tuấn một năm mới tràn đầy niềm vui, may mắn và thành công!',
        image: './avatar-img/Monkey_D_Luffy.jpg'
    },
    {
        id: 2,
        name: 'kiều đình hưng',
        letters: 
        'Chúc mừng năm mới, anh bạn thân của tôi! Năm 2024 đang đến, mang theo những hạnh phúc mới, thành công mới và những kỷ niệm đáng nhớ. Mong rằng Tuấn sẽ tiếp tục chặng đường học tập với đầy đủ năng lượng và sự cố gắng, để những kiến thức mà em đang học tại Cao đẳng Cơ điện Hà Nội sẽ là bước đệm quan trọng cho tương lai sáng tạo. Năm nay, anh chúc Tuấn luôn khoẻ mạnh, hạnh phúc và tràn đầy năng lượng tích cực. Mong rằng những ước mơ và kế hoạch của Tuấn sẽ trở thành hiện thực, và công việc học tập sẽ mở ra những cánh cửa mới trong sự phát triển cá nhân. Đồng thời, chúc em luôn tìm thấy niềm vui và ý nghĩa trong cuộc sống hàng ngày. Dù ở đâu, dù làm gì, hãy giữ cho tâm hồn mình luôn trẻ trung và đầy nhiệt huyết. Cuộc sống là một cuộc phiêu lưu, và anh tin rằng Tuấn sẽ luôn tìm thấy những khoảnh khắc đáng nhớ trên con đường của mình. Cuối cùng, chúc Tuấn sẽ gặt hái được nhiều thành công trong công việc học tập cũng như những ước mơ cá nhân. Và đặc biệt, chúc em sẽ tìm thấy hạnh phúc trong tình yêu. Dù đây có phải là năm mà Tuấn sẽ gặp gỡ nửa kia của mình hay không, hãy để trái tim mình mở cửa đón nhận những điều tốt lành nhất. Chúc Tuấn một năm mới tràn đầy niềm vui, may mắn và thành công!',
        image: './avatar-img/Roronoa_Zoro.jpg'
        
    },
];  

var letter = document.querySelector('.letter')    

function changeLetter(nameInput) {
    var friendLetter = friendList.find(function(letter) { 
        return letter.name == nameInput
    })
    
    var newWrapper = document.createElement('div')
    newWrapper.classList.add('letter_wrapper')
    newWrapper.innerHTML = 
    `
        <div class="letter_avatar">
            <img src="${friendLetter.image}">
        </div>
        <img class="hoa_avatar" src="./img-decorate/hoa3.png" alt="">
        <div class="letter_content">
                <div class="dear">Chào ${friendLetter.name}</div>
                <p>${friendLetter.letters}</p>
        </div>
    `

    letter.appendChild(newWrapper)
}
function getFriendNameToChange() {
    modalInput.addEventListener('change', function(e) {
        var nameFriend = modalInput.value.trim().toLowerCase(); 
        changeLetter(nameFriend)
    })
    
}
getFriendNameToChange()

modalButton.addEventListener('click', function(e) {
    modal.classList.add('hide');
})  

modalButton.addEventListener('keycode', function(e) {
    if (e.keyCode == 13) {
        modal.classList.add('hide');
    }
})  
