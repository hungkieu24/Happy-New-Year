var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalInput = document.querySelector('.modal-body_input input');
var modalButton = document.querySelector('.modal-body_btn');

var friendList = [

    {
        id: 1,
        name: 'nguyễn thị phương anh',
        firstName: 'Phương Anh',
        letters: '',
        image: './avatar-img/1.jpg'
    },
    {
        id: 2,
        name: 'phan kiều ngọc anh',
        firstName: 'Ngọc Anh',
        letters: '',
        image: './avatar-img/2.jpg'
    },
    {
        id: 3,
        name: 'cấn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: '',
        image: './avatar-img/3.jpg'
    },

    {
        id: 4,
        name: 'nguyễn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: '',
        image: './avatar-img/4.jpg'
    },

    {
        id: 5,
        name: 'nguyễn thanh bình',
        firstName: 'Bình',
        letters: '',
        image: './avatar-img/5.jpg'
    },
    {
        id: 6,
        name: 'kiều khánh duy',
        firstName: 'Duy',
        letters: '',
        image: './avatar-img/6.jpg'
    },
    {
        id: 7,
        name: 'nguyễn khắc duy',
        firstName: 'Duy',
        letters: '',
        image: './avatar-img/7.jpg'
    },
    {
        id: 8,
        name: 'đinh quang đông',
        firstName: 'Đông',
        letters: '',
        image: './avatar-img/8.jpg'
    },
    {
        id: 9,
        name: 'kiều hương giang',
        firstName: 'Giang',
        letters: '',
        image: './avatar-img/9.jpg'
    },
    {
        id: 10,
        name: 'nguyễn thị thanh hiền',
        firstName: 'Hiền',
        letters: '',
        image: './avatar-img/10.jpg'
    },
    {
        id: 11,
        name: 'nguyễn đồng trí hiếu',
        firstName: 'Hiếu',
        letters: '',
        image: './avatar-img/11.jpg'
    },
    {
        id: 12,
        name: 'đỗ huy hoàng',
        firstName: 'Hoàng',
        letters: '',
        image: './avatar-img/12.jpg'
    },
    {
        id: 13,
        name: 'đỗ quang huy',
        firstName: 'Huy',
        letters: '',
        image: './avatar-img/13.jpg'
    },
    {
        id: 14,
        name: 'phí thu huyền',
        firstName: 'Huyền',
        letters: '',
        image: './avatar-img/14.jpg'
    },
    {
        id: 15,
        name: 'bùi như hưng',
        firstName: 'Hưng',
        letters: '',
        image: './avatar-img/15.jpg'
    },
    {
        id: 16,
        name: 'kiều đình hưng',
        firstName: 'Hưng',
        letters: '',
        image: './avatar-img/16.jpg'
    },
    {
        id: 17,
        name: 'kiều thị mai hương',
        firstName: 'Hương',
        letters: '',
        image: './avatar-img/17.jpg'
    },
    {
        id: 18,
        name: 'trần thị quỳnh hương',
        firstName: 'Hương',
        letters: 'Chúc mừng năm mới Ất Tỵ 2025, Trần Thị Quỳnh Hương! Nhân dịp năm mới, t muốn gửi đến m những lời chúc chân thành nhất. Chúc m và gia đình một năm tràn đầy sức khỏe, hạnh phúc, và thật nhiều niềm vui! T nghe nói m hiện tại đang làm thêm công việc chụp ảnh kỷ yếu, và m làm rất tốt khi chăm sóc, take care các em học sinh. T thật sự khâm phục sự tận tâm và trách nhiệm của m với công việc này. Dù đôi lúc m gặp phải những đứa học sinh oái oăm mà không thể đánh chúng nó (haha), nhưng t biết m luôn kiên nhẫn và nhẹ nhàng. Sự dịu dàng và tôn trọng của m chính là điều đáng quý, và m đừng quá lo lắng nhé, vì m đang làm một công việc rất ý nghĩa. T biết môn học của m đang rất áp lực, nhưng m hãy cứ tin rằng mọi sự nỗ lực của m sẽ được đền đáp xứng đáng. Mạnh mẽ lên, dù có khó khăn đến đâu, m sẽ vượt qua được! Ngoài ra, t cũng biết tình hình sức khỏe của mẹ m không được tốt lắm, t thật sự hy vọng bác sẽ nhanh chóng khỏe lại và có một năm mới tràn đầy sức sống. T chúc gia đình m luôn được bình an và vui vẻ bên nhau trong năm mới. Chúc m năm mới thật hạnh phúc, may mắn, và thành công. Hy vọng mọi áp lực và lo toan sẽ trôi qua, để m có thể tận hưởng những khoảnh khắc thật đẹp và bình yên. Hãy chăm sóc bản thân thật tốt, vì m xứng đáng nhận những điều tốt đẹp nhất trong cuộc sống! Chúc mừng năm mới, Quỳnh Hương! 🎉✨ T chúc m một năm mới thật thành công, khỏe mạnh và luôn vui vẻ!',
        image: './avatar-img/18.jpg'
    },
    {
        id: 19,
        name: 'nguyễn trung kiên',
        firstName: 'Kiên',
        letters: '',
        mage: './avatar-img/19.jpg'
    },
    {
        id: 20,
        name: 'cấn thùy linh',
        firstName: 'Linh',
        letters: '',
        image: './avatar-img/20.jpg'
    },
    {
        id: 21,
        name: 'hà bùi phương linh',
        firstName: 'Linh',
        letters: '',
        image: './avatar-img/21.jpg'
    },
    {
        id: 22,
        name: 'nguyễn thị khánh linh',
        firstName: 'Linh',
        letters: '',
        image: './avatar-img/22.jpg'
    },
    {
        id: 23,
        name: 'nguyễn thị thùy linh',
        firstName: 'Linh',
        letters: '',
        image: './avatar-img/23.jpg'
    },
    {
        id: 24,
        name: 'kiều trọng mưu',
        firstName: 'Mưu',
        letters: '',
        image: './avatar-img/24.jpg'
    },
    {
        id: 25,
        name: 'cấn thị trà my',
        firstName: 'My',
        letters: '',
        image: './avatar-img/25.jpg'
    },
    {
        id: 26,
        name: 'kiều nguyệt nga',
        firstName: 'Nga',
        letters: '',
        image: './avatar-img/26.jpg'
    },
    {
        id: 27,
        name: 'nguyễn hoàng ngân',
        firstName: 'Ngân',
        letters: '',
        image: './avatar-img/27.jpg'
    },
    {
        id: 28,
        name: 'kiều thị phương oanh',
        firstName: 'oanh',
        letters: '',
        image: './avatar-img/28.jpg'
    },
    {
        id: 29,
        name: 'trần thanh phương',
        firstName: 'Phương',
        letters: '',
        image: './avatar-img/29.jpg'
    },
    {
        id: 30,
        name: 'đồng thị thanh tâm',
        firstName: 'Tâm',
        letters: '',
        image: './avatar-img/30.jpg'
    },
    {
        id: 31,
        name: 'nguyễn khắc thái',
        firstName: 'Thái',
        letters: '',
        image: './avatar-img/31.jpg'
    },
    {
        id: 32,
        name: 'phạm quang thành',
        firstName: 'Thành',
        letters: '',
        image: './avatar-img/32.jpg'
    },
    {
        id: 33,
        name: 'khuất thị thanh thảo',
        firstName: 'Thảo',
        letters:'',
        image: './avatar-img/33.jpg'
    },
    {
        id: 34,
        name: 'nguyễn quang thoại',
        firstName: 'Thoại',
        letters: 'Chúc mừng năm mới Ất Tỵ 2025, Nguyễn Quang Thoại! Nhân dịp năm mới, t muốn gửi đến m những lời chúc thật ý nghĩa. Chúc m và gia đình một năm tràn đầy sức khỏe, hạnh phúc, và thật nhiều niềm vui! Hiện tại m đang học kỳ 5, t biết đây là một giai đoạn không hề dễ dàng với nhiều môn học yêu cầu rất cao. Nhưng t tin rằng với sự chăm chỉ và quyết tâm của m, m sẽ vượt qua tất cả. Chúc m đạt được điểm thành phần thật cao và tự tin pass những môn "khoai sọ" này một cách xuất sắc! Sang kỳ 6, m sẽ bắt đầu hành trình thực tập – một cột mốc rất quan trọng trên con đường học tập và sự nghiệp. T hy vọng m sẽ chuẩn bị thật tốt, vừa hoàn thành tốt học kỳ này, vừa sẵn sàng cho những thử thách và cơ hội đang chờ đợi phía trước. Hãy luôn giữ tinh thần lạc quan và vững vàng, vì t tin rằng m hoàn toàn đủ khả năng để vượt qua mọi khó khăn. Đừng quên dành thời gian nghỉ ngơi và chăm sóc bản thân để luôn có sức khỏe tốt nhất nhé! Chúc mừng năm mới, Thoại! 🎉✨ T chúc m một năm thật thành công, học hành tấn tới và đạt được những mục tiêu m đã đặt ra. Hãy cố gắng hết mình nhé, t luôn ủng hộ m! 💪📚',
        image: './avatar-img/34.jpg'
    },
    {
        id: 35,
        name: 'hoàng thị thu',
        firstName: 'Thu',
        letters: '',
        image: './avatar-img/35.jpg'
    },
    {
        id: 36,
        name: 'khuất thu thủy',
        firstName: 'Thủy',
        letters: '',
        image: './avatar-img/36.jpg'
    },
    {
        id: 37,
        name: 'nguyễn thu thủy',
        firstName: 'Thủy',
        letters: '',
        image: './avatar-img/37.jpg'
    },
    {
        id: 38,
        name: 'trương thị thanh thủy',
        firstName: 'Thủy',
        letters: '',
        image: './avatar-img/38.jpg'
    },
    {
        id: 39,
        name: 'đào thị thương',
        firstName: 'Thương',
        letters: '',
        image: './avatar-img/39.jpg'
    },
    {
        id: 40,
        name: 'hoàng thu trang',
        firstName: 'Trang',
        letters: '',
        image: './avatar-img/40.jpg'
    },
    {
        id: 41,
        name: 'kiều thị thùy trang',
        firstName: 'Trang',
        letters: '',
        image: './avatar-img/41.jpg'
    },
    {
        id: 42,
        name: 'nguyễn thị thu trang',
        firstName: 'Trang',
        letters: '',
         image: './avatar-img/42.jpg'
    },
    {
        id: 43,
        name: 'kiều chí trung',
        firstName: 'Trung',
        letters: '',
        image: './avatar-img/43.jpg'
    },
    {
        id: 44,
        name: 'khuất quang tuấn',
        firstName: 'Tuấn',
        letters: 'Chúc mừng năm mới Ất Tỵ 2025, Khuất Quang Tuấn! Nhân dịp năm mới, t muốn gửi đến m những lời chúc tốt đẹp nhất. Chúc m và gia đình một năm thật nhiều sức khỏe, may mắn, hạnh phúc, và mọi điều thuận lợi! Dù việc m quyết định thôi học chắc hẳn không phải là điều dễ dàng, t biết m đã suy nghĩ rất nhiều để đưa ra lựa chọn này. Điều quan trọng là giờ đây m đã tìm được một công việc ổn định tại công ty VNPT. T hy vọng rằng m sẽ tiếp tục cố gắng và phát triển bản thân, để không ngừng tiến xa hơn nữa trong sự nghiệp. Ngoài ra, nghe tin m đã có một tình yêu mới làm t thực sự mừng cho m. Tình yêu luôn là điều tuyệt vời, và t chúc hai người sẽ cùng nhau xây dựng một mối quan hệ thật bền vững, tràn ngập niềm vui và hạnh phúc. Hy vọng rằng tình yêu này sẽ là động lực để m thêm yêu cuộc sống và cố gắng hơn trong công việc. Năm mới, t chúc m không chỉ giữ vững sự ổn định trong công việc mà còn có thêm nhiều bước tiến mới. Đồng thời, t mong rằng cuộc sống của m sẽ luôn tràn ngập niềm vui, sự bình an, và những khoảnh khắc đáng nhớ bên cạnh người thân yêu. Chúc mừng năm mới, Tuấn! 🎉✨ Chúc một năm 2025 thật thành công, trọn vẹn và viên mãn nhé!',
        image: './avatar-img/44.jpg'
    },
    {
        id: 45,
        name: 'trần đình tùng',
        firstName: 'Tùng',
        letters: '',
        image: './avatar-img/45.jpg'
    },
    {
        id: 46,
        name: 'nguyễn thị hồng vân',
        firstName: 'Vân',
        letters: 'Chúc mừng năm mới Ất Tỵ 2025, Vân nhé! Dịp năm mới đến rồi, t không thể bỏ qua cơ hội gửi đến m những lời chúc tốt đẹp nhất. Chúc m một năm mới thật nhiều sức khỏe, niềm vui, bình an và may mắn luôn đồng hành trên mọi bước đường! T biết rằng thời gian vừa qua m đã trải qua nhiều khó khăn, đặc biệt là khi công việc không còn như mong muốn. Nhưng Vân à, đừng quá lo lắng nhé! Năm mới là cơ hội để khởi đầu lại mọi thứ. T tin rằng m sẽ sớm đưa ra được quyết định phù hợp cho mình, dù đó là tiếp tục đi làm để kiếm tiền hay quay lại học để nâng cao kiến thức và kỹ năng. Dù lựa chọn nào, t luôn tin m sẽ vượt qua và đạt được thành công, bởi m là một người mạnh mẽ và quyết tâm. Năm vừa qua có thể đã để lại nhiều thử thách, nhưng t hy vọng năm 2025 sẽ là khoảng thời gian mà mọi khó khăn tan biến, nhường chỗ cho những cơ hội mới và niềm vui. Hãy luôn tự tin vào bản thân, vì t tin m có thể làm được mọi điều bạn đặt tâm vào. Cuối cùng, t chúc m năm mới thật suôn sẻ, sớm tìm được con đường tốt nhất cho mình. Hy vọng mọi điều may mắn sẽ đến gõ cửa nhà m, mang lại hạnh phúc, sức khỏe và thành công. T luôn ở đây, sẵn sàng lắng nghe và ủng hộ m trên mọi chặng đường. Chúc mừng năm mới, Vân! ✨🎉 Chúc m luôn giữ nụ cười rạng rỡ và có một năm thật rực rỡ nhé! ❤️',
        image: './avatar-img/46.jpg'
    },
    {
        id: 47,
        name: 'kiều thị vui',
        firstName: 'Vui',
        letters: '',
        image: './avatar-img/47.jpg'
    },
    {
        id: 48,
        name: 'vũ hải yến',
        firstName: 'Yến ',
        letters: '',
        image: './avatar-img/48.jpg'
    },
    {
        id: 0,
        name: 'chu thanh minh',
        firstName: 'Cô Minh',
        letters: '',
        image: './avatar-img/0.jpg'
    },



];

var letter = document.querySelector('.letter')

function changeLetter(nameInput) {
    var friendLetter = friendList.find(function (letter) {
        return letter.name == nameInput
    })

    var newWrapper = document.createElement('div')
    newWrapper.classList.add('letter_wrapper')
    newWrapper.innerHTML =
        `
        <div class="letter_avatar">
            <img src="${friendLetter.image}">
        </div>
        <div class="letter_content">
                <div class="dear">Chào ${friendLetter.firstName}</div>
                <p>${friendLetter.letters}</p>
        </div>
    `

    letter.appendChild(newWrapper)
}
function getFriendNameToChange() {
    modalInput.addEventListener('change', function (e) {
        var nameFriend = modalInput.value.trim().toLowerCase();
        changeLetter(nameFriend)
    })

}
getFriendNameToChange()

modalButton.addEventListener('click', function (e) {
    modal.classList.add('hide');
})

modalButton.addEventListener('keycode', function (e) {
    if (e.keyCode == 13) {
        modal.classList.add('hide');
    }
})  
