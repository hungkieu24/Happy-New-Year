var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalInput = document.querySelector('.modal-body_input input');
var modalButton = document.querySelector('.modal-body_btn');

var friendList = [
    
    {
        id: 1,
        name: 'nguyễn thị phương anh',
        firstName: 'Phương Anh',
        letters:'Chúc mừng năm mới, Phương Anh! Năm Giáp Thìn đã đến, mang theo những cơ hội mới, may mắn và thành công. Hy vọng rằng năm nay sẽ là một năm đặc biệt, đánh dấu thêm nhiều bước tiến vững chắc trong cuộc sống của cậu. Năm mới là dịp để cậu đặt ra những mục tiêu mới, nâng cao kiến thức và kỹ năng, và tận hưởng những trải nghiệm mới mẻ. Chúc cậu sẽ tiếp tục phấn đấu, không ngừng học hỏi và trở nên mạnh mẽ hơn mỗi ngày. Đồng thời, hy vọng rằng những hoạt động kinh doanh của cậu sẽ phát triển mạnh mẽ trong năm Giáp Thìn. Hãy tận dụng những cơ hội, đổi mới và không ngừng sáng tạo để đưa sản phẩm của mình đến gần hơn với khách hàng. Năm mới, hãy giữ vững niềm tin, lòng kiên trì và tâm huyết. Chính những phẩm chất này sẽ giúp cậu vượt qua mọi khó khăn và đạt được những thành công lớn lao. Chúc Cậu Phương Anh có một năm mới Giáp Thìn tràn đầy năng lượng tích cực, đầy may mắn và thành công trong mọi lĩnh vực của cuộc sống!', 
        image: './avatar-img/1.jpg'
    },
    {
        id: 2,
        name: 'phan kiều ngọc anh',
        firstName: 'Ngọc Anh',
        letters: 'Chúc mừng năm mới, Ngọc Anh! Năm Giáp Thìn sắp đến, mang theo những cơ hội mới và may mắn không ngờ. Hy vọng rằng năm nay sẽ là một chương mới đầy ý nghĩa và thành công trong cuộc sống của cậu. Cùng nhau, chúng ta đã trải qua nhiều kỷ niệm đáng nhớ từ cấp 2 đến cấp 3. Mong rằng mối quan hệ của chúng ta sẽ tiếp tục phát triển và là nguồn động viên, hỗ trợ lẫn nhau trong những thách thức mới. Năm mới là dịp để cậu đặt ra những mục tiêu mới, định hình cho tương lai và phát triển những kỹ năng mới. Chúc cậu sẽ có một năm Giáp Thìn tràn đầy năng lượng tích cực, thành công rực rỡ và những bước tiến vững chắc trên con đường học tập và phát triển bản thân. Năm Giáp Thìn, hãy mở rộng tầm nhìn, tận hưởng những trải nghiệm mới, và đặt ra những thách thức để bản thân ngày một hoàn thiện hơn. Chúc cậu sẽ gặt hái được nhiều thành công mới, và niềm vui sẽ luôn bên cậu trong mọi bước đi. Chúc mừng năm mới, Ngọc Anh!', 
        image: './avatar-img/2.jpg'
    },
    {
        id: 3,
        name: 'cấn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: 'Chúc mừng năm mới, Ánh! Năm Giáp Thìn đang đến gần, hứa hẹn mang đến những cơ hội mới, may mắn và niềm vui bất ngờ. Trong những kỷ niệm cấp 3, tôi nhớ Ánh luôn là người đam mê hội họa, và năm 2024 này chắc chắn sẽ là một chặng đường đầy màu sắc và sáng tạo đối với cậu. Năm mới là dịp để cậu thể hiện tài năng nghệ thuật của mình một cách tự do và sáng tạo. Hy vọng rằng những bức tranh, những ý tưởng sẽ mở ra những khám phá mới, làm phong phú thêm cuộc sống của cậu. Hãy để đam mê hội họa là nguồn động viên, làm cho mỗi bức tranh của cậu trở nên sống động và ý nghĩa. Chúc Ánh có một năm mới tràn đầy niềm vui, sức khỏe và thành công trong mọi lĩnh vực của cuộc sống. Hãy bắt đầu năm mới bằng những ý tưởng sáng tạo, và đừng ngần ngại chia sẻ tài năng nghệ thuật đặc biệt của mình với mọi người. Năm Giáp Thìn này, hãy để mỗi nét vẽ của Ánh là những chuyến phiêu lưu mới, mỗi màu sắc là một câu chuyện riêng biệt. Chúc cậu gặt hái được nhiều thành công, nhiều cảm xúc và niềm hạnh phúc từ thế giới màu sắc mà cậu tạo ra. Chúc Ánh một năm mới an lành, hạnh phúc và tràn đầy sự sáng tạo!',
        image: './avatar-img/3.jpg'
    },

    {
        id: 4,
        name: 'nguyễn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: 'Chúc mừng năm mới, Ánh! Dù chúng ta không quá thân thiết, nhưng trong dịp Tết này, tôi muốn gửi đến Ánh những lời chúc ấm áp nhất. Chắc chắn năm 2024 sẽ đem đến những trải nghiệm mới và thú vị cho cuộc sống của Ánh. Mong rằng những dự định và kế hoạch của cậu sẽ được thực hiện suôn sẻ, và mỗi bước chân trên con đường đại học sẽ là những bước tiến vững chắc. Năm mới, hãy để trái tim mình mở rộng và chấp nhận những cơ hội mới, thách thức mới. Chúc Ánh có những khoảnh khắc ý nghĩa và gặt hái được nhiều thành công trong học tập và cuộc sống cá nhân. Chúc mừng năm mới, Ánh! Mong rằng những ngày Tết sẽ đưa lại cho cậu những niềm vui, sự ấm áp và kỷ niệm đáng nhớ bên gia đình và người thân.',
        image: './avatar-img/4.jpg'
    },

    {
        id: 5,
        name: 'nguyễn thanh bình',
        firstName: 'Bình',
        letters: 'Năm Giáp Thìn đã về, mang theo hương khói tết ngập tràn. Trong bước chân nhanh chóng của thời gian, hy vọng rằng những ngày Tết sẽ mang đến cho Bình nhiều niềm vui và bình yên bên gia đình và những người thân yêu. Những lời chúc này đưa tới, không quá nhiều nhưng đủ để nói lên lòng chân thành của tôi. Năm Giáp Thìn, chúc Bình có một năm mới bình an, hạnh phúc và đặc biệt là đong đầy những trải nghiệm mới. Nhìn lại quãng đường cấp 3, chúng ta có thể chưa thực sự thân thiết, nhưng mỗi bước đi đều là một chặng đường của cuộc hành trình cá nhân. Mong rằng những chân trời mới mở ra trước mặt Bình sẽ là những hành trình tuyệt vời, đánh thức những giấc mơ và kỳ vọng. Chúc Bình có một Tết tràn ngập tiếng cười, niềm vui và ấm áp tình người. Mong rằng năm mới sẽ là một năm Bình an và đầy ắp những điều tốt lành.',
        image: './avatar-img/5.jpg'
    },
    {
        id: 6,
        name: 'kiều khánh duy',
        firstName: 'Duy',
        letters: 'Chúc mừng năm mới, người anh em! Nhân dịp năm mới Giáp Thìn 2024, thằng này muốn gửi đến Duy những lời chúc ấm áp nhất. Tết đến, hy vọng người anh em sẽ được bao quanh bởi niềm vui và tình thân thương. Năm 2023 đã qua, và thằng này biết người anh em đã có những bài học quý báu từ những trải nghiệm trong cuộc sống. Việc học được từ quyết định mua trả góp là một bước tiến quan trọng. Đôi khi, bài học đắt giá nhất đến từ những sai lầm chúng ta trải qua. Mong rằng, những bài học đó sẽ giúp người anh em trưởng thành và thông minh hơn trong quyết định tài chính trong tương lai. Với vẻ ngoại hình điển trai và tâm hồn sáng tạo, chắc chắn người anh em sẽ thu hút được nhiều sự chú ý. Thằng này hy vọng rằng năm mới sẽ mang lại cho người anh em nhiều cơ hội mới, cả trong sự nghiệp lập trình và trong tình cảm. Việc người anh em đang theo đuổi ngành lập trình ứng dụng mobile tại trường cao đẳng FPT Polytechnic là một sự lựa chọn tuyệt vời. Hy vọng rằng kiến thức người anh em đang học sẽ là cầu nối cho những dự án sáng tạo và thành công trong tương lai. Dù đang độc thân, nhưng thằng này tin rằng đây cũng là thời gian để người anh em tập trung vào sự nghiệp và phát triển bản thân. Hãy giữ cho trái tim mở và sẵn sàng chào đón những trải nghiệm mới. Cuối cùng, chúc Duy có một Tết truyền thống ấm áp và ý nghĩa bên gia đình và bạn bè. Mong rằng năm mới sẽ là một chặng đường đầy may mắn và thành công. Chúc Duy có một năm mới tràn đầy năng lượng tích cực và hạnh phúc!',
        image: './avatar-img/6.jpg'
    },
    {
        id: 7,
        name: 'nguyễn khắc duy',
        firstName: 'Duy',
        letters: 'Năm mới đã về, tiếng cười ấm áp và niềm vui rực rỡ lan tỏa khắp nơi. Chúc mừng năm Giáp Thìn, người bạn thân thiết của tôi, người có giọng nói đặc trưng, là bản nhạc riêng biệt trong bức tranh đa dạng của cuộc sống. Những năm cấp 3, Duy đã tựa như một nghệ sĩ nhân dân, mang đến cho lớp không khí ấm áp, vui tươi và đặc sắc. Nghe giọng nói của Duy, mỗi câu chuyện trở nên sống động hơn, mỗi ý định trở nên quyết đoán hơn. Đúng như tên gọi "Duy", bạn là nguồn động viên không ngừng, không giống ai, đặc biệt và đầy tình người. Năm 2024 sẽ là một chương mới, và tôi tin rằng Duy sẽ tiếp tục làm nên những điều tuyệt vời. Hãy để giọng nói đặc trưng của Duy làm rạng ngời thêm những trang mới trong hành trình của mình. Mong rằng Duy sẽ tiếp tục là người làm nên những câu chuyện, là nguồn cảm hứng không ngừng cho mọi người xung quanh. Chúc Duy một năm mới đầy hạnh phúc, nhiều thành công và tiếp tục trở thành "nghệ sĩ nhân dân" của cuộc sống. Hãy làm cho mỗi khoảnh khắc trở nên đặc biệt như giọng nói của Duy vậy!',
        image: './avatar-img/7.jpg'
    },
    {
        id: 8,
        name: 'đinh quang đông',
        firstName: 'Đông',
        letters: 'Năm mới Giáp Thìn đã về, mang theo hơi ấm của xuân tươi mới. Chúc mừng năm mới, Đông - người bạn của tôi. Thân hình "đông" của Đông như một tảng đá vững chãi giữa sân bóng, nơi mà bản thân bạn là điểm tựa đáng tin cậy. Với sức mạnh vô song, mỗi cú sút của Đông là một bản giao hưởng đầy năng lượng, mạnh mẽ như làn sóng cuồn cuộn. Ngoài sân bóng, Đông lại là một nghệ sĩ trong thế giới đồ họa, nơi mà sự sáng tạo của bạn trở nên không giới hạn. Mong rằng, những ý tưởng đầy độc đáo và hấp dẫn của Đông sẽ được chuyển hóa thành những tác phẩm nghệ thuật tuyệt vời, làm phong phú thêm thế giới xung quanh. Năm 2024 sẽ là một năm đặc biệt, và tôi tin rằng Đông sẽ tiếp tục làm nên những điều tuyệt vời trong cả sân bóng và thế giới đồ họa. Chúc Đông có một năm mới đầy hạnh phúc, sức khỏe dồi dào và thành công không ngừng trong mọi lĩnh vực.',
        image: './avatar-img/8.jpg'
    },
    {
        id: 9,
        name: 'kiều hương giang',
        firstName: 'Giang',
        letters: 'Năm mới Giáp Thìn đã về, làm rạng rỡ bản dạng của cuộc sống. Chúc mừng năm mới, Giang - người bạn cùng làng, hòa mình trong không khí tết ngọt ngào và ấm áp. Hương Giang, với thân hình nhỏ nhắn nhưng lại chứa đựng một trái tim to lớn. Mỗi bước đi nhẹ nhàng của bạn, như là những nhịp nhàng trong bản nhạc của quê hương. Cùng làng, cùng đồng bào, chúng ta hòa mình vào những giây phút đoàn tụ, làm cho tết thêm ý nghĩa và tràn đầy niềm vui. Năm 2024, mong rằng Giang sẽ tiếp tục làm nên những điều tốt đẹp cho cộng đồng và bản thân mình. Hãy để những ý tưởng và dự định mới của Giang mọc lên như những bông hoa tươi mới trong vườn quê, tô điểm cho hành trình mới. Chúc Giang có một năm mới tràn đầy niềm vui, hạnh phúc và thành công. Cùng gia đình và bà con cùng làng hòa mình vào không khí tết, tận hưởng những khoảnh khắc ấm áp và đáng nhớ.',
        image: './avatar-img/9.jpg'
    },
    {
        id: 10,
        name: 'nguyễn thị thanh hiền',
        firstName: 'Hiền',
        letters: 'Năm mới Giáp Thìn đã đến, mang theo bao hi vọng và niềm tin mới. Chúc mừng năm mới, Hiền - người bạn cấp 3 của tôi, với thân hình nhỏ nhắn nhưng trái tim của bạn lại to lớn và ấm áp như những tia nắng mặt trời bên cửa sổ. Hiền ơi, từ "hiền" như một điều dịu dàng, như làn gió nhẹ thoảng qua làm dịu đi những góc tối cuộc sống. Bạn là một hòa nhạc dễ thương, làm cho mỗi ngày của tôi trở nên ấm áp hơn, chứa đựng đầy tình bạn và lòng nhân ái. Năm 2024, mong rằng Hiền sẽ tiếp tục giữ vững bản lĩnh và tính hiền lành của mình. Hãy để những hạt mưa tình thương của Hiền rơi xuống, làm tươi mới những tâm hồn khô cằn và đem lại nhiều niềm vui cho những người xung quanh. Chúc Hiền có một năm mới tràn đầy hiền hòa, tình thương và những thành công mới. Hãy tiếp tục làm cho cuộc sống này thêm phần tươi đẹp và ý nghĩa.',
        image: './avatar-img/10.jpg'
    },
    {
        id: 11,
        name: 'nguyễn đồng trí hiếu',
        firstName: 'Hiếu',
        letters: 'Chúc mừng năm mới, Hiếu! Dù Hiếu đang ở xa xôi, nơi những bông tuyết trắng bồng bềnh. Năm mới Giáp Thìn đang bắt đầu, hãy để nó đưa Hiếu đến những trải nghiệm mới, phong cách sống mới và những cuộc gặp gỡ ấn tượng. Thời tiết ở Hàn Quốc chắc chắn rất lạnh, nhưng mong rằng trái tim Hiếu vẫn được ấm áp bởi tình bạn và những niềm vui nhỏ nhất của cuộc sống. Mong rằng những nỗ lực của Hiếu trong hành trình du học sẽ đem lại những trái ngọt, những kỷ niệm đáng nhớ. Năm 2024 sẽ là một năm mới đầy triển vọng. Hi vọng Hiếu sẽ tiếp tục học tốt, khám phá thêm về văn hóa mới và tận hưởng những khoảnh khắc đáng nhớ bên những người mới. Dù cách xa, nhưng tình bạn vẫn như ngày nào, không biên giới, không xa cách. Chúc Hiếu có một năm mới an lành, tràn đầy hạnh phúc và những thành công mới. Hãy giữ gìn sức khỏe và hãy luôn mang theo tình bạn ấm áp từ quê nhà.',
        image: './avatar-img/11.jpg'
    },
    {
        id: 12,
        name: 'đỗ huy hoàng',
        firstName: 'Hoàng',
        letters: 'Chúc mừng năm mới, Hoàng! Dù chúng ta đang ở những nơi khác nhau, nhưng tâm hồn bạn vẫn hòa mình vào không khí Tết đang đến. Năm Giáp Thìn đã đến, mang theo nhiều niềm vui và cơ hội mới. Hi vọng Hoàng sẽ bắt đầu năm mới này với đầy năng lượng và kỳ vọng. Năm 2024 sắp tới, hãy để những ý định và dự định của Hoàng trở thành hiện thực. Chúc mừng những bước tiến trong hành trình thành công của Hoàng, những nỗ lực và công sức đã đặt ra. Năm mới, hãy tiếp tục phấn đấu, không ngừng khám phá và học hỏi để trở thành phiên bản tốt nhất của chính mình. Chúc Hoàng có một năm mới an lành, hạnh phúc và đầy ắp những trải nghiệm đáng nhớ',
        image: './avatar-img/12.jpg'
    },
    {
        id: 13,
        name: 'đỗ quang huy',
        firstName: 'Huy',
        letters: 'Chúc mừng năm mới, Huy! Dịp Tết đang đến, tôi truyền đến Huy những lời chúc ấm áp nhất từ tâm hồn. Năm Giáp Thìn đã đến, mang theo niềm vui, sức khỏe và nhiều cơ hội mới. Năm mới 2024, hãy tiếp tục là chính bản thân mình, giữ lại niềm đam mê và tình yêu dành cho bóng đá. Hy vọng rằng Huy sẽ gặt hái được nhiều thành công mới, trên sân cỏ và trong cuộc sống hàng ngày. Chúc Huy có một Tết tràn ngập niềm vui và hạnh phúc bên gia đình và người thân yêu. Mong rằng năm mới sẽ đem lại cho Huy nhiều điều tốt lành và những kỷ niệm đáng nhớ.',
        image: './avatar-img/13.jpg'
    },
    {
        id: 14,
        name: 'phí thu huyền',
        firstName: 'Huyền',
        letters: 'Nhân dịp năm mới, tôi muốn gửi đến Huyền những lời chúc ấm áp và đầy ý nghĩa. Chúc mừng năm mới Giáp Thìn, năm của những khởi đầu mới và những cơ hội tuyệt vời. Hy vọng những ngày Tết sắp tới sẽ mang đến cho Huyền nhiều niềm vui và an lành bên gia đình và những người thân yêu. Cấp 3, những năm tháng của sự học hỏi và khám phá, chắc chắn đã để lại trong tâm hồn Huyền nhiều dấu ấn đáng nhớ. Mong rằng những kiến thức và trải nghiệm này sẽ là nền tảng vững chắc cho những bước tiến mới trong cuộc đời. Năm 2024 là năm Giáp Thìn, năm của sự đổi mới và tiến bộ. Hãy để những ý tưởng sáng tạo của Huyền mọc lên như những bông hoa tươi mới, tô điểm thêm cho hành trình phía trước. Chúc Huyền có một năm mới tràn đầy năng lượng tích cực, đầy ắp niềm vui và thành công. Tết này, mong rằng Huyền sẽ được bao quanh bởi sự ấm áp và yêu thương từ gia đình và bạn bè. Chúc Huyền có một năm mới an khang, thịnh vượng và tràn đầy những kỷ niệm đẹp.',
        image: './avatar-img/14.jpg'
    },
    {
        id: 15,
        name: 'bùi như hưng',
        firstName: 'Hưng',
        letters: 'Nhân dịp năm mới, tôi gửi đến Hưng những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, năm đánh dấu những bước chân mới, những hành động mới và những ước mơ mới. Hy vọng những ngày Tết sắp tới sẽ mang lại cho Hưng nhiều niềm vui và hạnh phúc bên gia đình và những người thân yêu. Bóng đá - niềm đam mê không ngừng của Hưng, là nguồn động viên lớn giúp Hưng vượt qua mọi khó khăn và thách thức. Năm 2024, hãy để đam mê bóng đá của Hưng trở thành nguồn động lực, mang lại nhiều niềm vui và thành công mới trong cả cuộc sống và sân cỏ. Chúc Hưng có một năm mới tràn đầy những trận cầu hấp dẫn, những bàn thắng đẹp và những khoảnh khắc đáng nhớ. Ngoài ra, hãy dành thời gian cho gia đình và bạn bè, tận hưởng những khoảnh khắc ấm áp và ý nghĩa nhất trong những ngày tết này. Tết này, mong rằng Hưng sẽ được bao quanh bởi sự ấm áp và yêu thương từ gia đình và bạn bè. Chúc Hưng có một năm mới an khang, thịnh vượng và tràn đầy niềm vui.',
        image: './avatar-img/15.jpg'
    },
    {
        id: 16,
        name: 'kiều đình hưng',
        firstName: 'Hưng',
        letters: 'Năm mới vui vẻ.....(mời ai đó điền vào chỗ trống - có thể điền bằng cách trao lì xì qua qr)',
        image: './avatar-img/16.jpg'
    },
    {
        id: 17,
        name: 'kiều thị mai hương',
        firstName: 'Hương',
        letters: 'Nhân dịp năm mới, em muốn gửi đến chị những lời chúc tốt đẹp và tràn đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm đánh dấu những bước tiến mới, những trải nghiệm mới và cơ hội mới trong cuộc sống của chị. Năm mới là dịp để chúng ta nhìn lại quãng đường đã qua và hướng tới những điều mới mẻ. Đối với chị, năm 2024 có lẽ sẽ trở thành năm đặc biệt, năm mà chị sẽ sớm gặp được nhóm nhạc TFBoys, nguồn động viên và nguồn cảm hứng không ngừng của chị. Em biết rằng việc gặp gỡ ídol của mình là một ước mơ lớn, và em mong rằng năm nay sẽ là thời điểm mà chị sẽ thực hiện được ước mơ đó. Chúc cho những cánh cửa may mắn và cơ hội mở ra trước chị, mang đến những trải nghiệm tuyệt vời và những khoảnh khắc đáng nhớ. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Chúc chị có một năm mới tràn đầy niềm vui, hạnh phúc, và đặc biệt là sớm gặp được nhóm nhạc TFBoys - nguồn động viên lớn nhất của chị.',
        image: './avatar-img/17.jpg'
    },
    {
        id: 18,
        name: 'trần thị quỳnh hương',
        firstName: 'Hương',
        letters: 'Nhân dịp năm mới, tôi muốn gửi đến Hương những lời chúc tốt đẹp và đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm đánh dấu những bước tiến mới, những trải nghiệm mới và cơ hội mới trong cuộc sống của Hương. Năm 2023 đã là một năm đầy những cảm xúc và thử thách, đặc biệt là với niềm đam mê với nhóm nhạc Blackpink. Tôi hiểu rằng Hương đã bỏ lỡ cơ hội gặp gỡ ídol của mình, và điều này chắc chắn khiến cho Hương cảm thấy tiếc nuối. Tuy nhiên, đời luôn mở ra những trang mới, và tôi tin rằng Hương sẽ sớm có cơ hội khác để gặp nhóm nhạc Blackpink, niềm đam mê của mình. Hương là người học rất chăm chỉ và nhiệt huyết. Sự nỗ lực và đam mê của Hương là nguồn động viên lớn cho những người xung quanh. Chúc Hương tiếp tục phấn đấu, học tốt, và đặc biệt là sớm gặp được nhóm nhạc mà Hương mong đợi. Năm mới, hãy tiếp tục giữ vững tinh thần lạc quan và yêu thương gia đình. Chúc Hương có một năm mới tràn đầy niềm vui, hạnh phúc, và đặc biệt là sớm gặp được nhóm nhạc Blackpink - niềm tự hào và niềm vui lớn nhất của Hương.',
        image: './avatar-img/18.jpg'
    },
    {
        id: 19,
        name: 'nguyễn trung kiên',
        firstName: 'Kiên',
        letters: 'Nhân dịp năm mới, tôi xin gửi đến Kiên những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp niềm vui, sức khỏe và thành công. Hy vọng những ngày Tết sắp tới sẽ đem đến cho Kiên những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Kiên à, mọi người đều biết rằng sở thích lớn nhất của Kiên chính là chơi game. Đó không chỉ là niềm vui giải trí mà còn là cả một thế giới mà Kiên có thể tự do sáng tạo và thách thức bản thân. Hy vọng rằng năm mới sẽ mang đến cho Kiên nhiều trải nghiệm mới, những chiến thắng đầy phấn khích trong thế giới game mà Kiên đang đắm chìm. Năm mới cũng là dịp để Kiên đặt ra những mục tiêu mới, không chỉ trong thế giới game mà còn trong cuộc sống hàng ngày. Chúc Kiên có một năm mới đầy năng lượng tích cực, để có thể vững bước chinh phục mọi thử thách và đạt được những điều mình mong đợi. Tết này, hãy dành thời gian bên gia đình và bạn bè, tận hưởng những khoảnh khắc ý nghĩa. Chúc Kiên có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực. Chúc mừng năm mới, Kiên!',
        image: './avatar-img/19.jpg'
    },
    {
        id: 20,
        name: 'cấn thùy linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đánh dấu những bước tiến mới và những khám phá mới trong cuộc sống của Linh. Những năm tháng cấp 3 chắc chắn đã để lại trong tâm hồn Linh nhiều kỷ niệm đáng nhớ. Những bước đi này sẽ là nền tảng vững chắc cho tương lai phía trước. Chúc Linh tiếp tục hành trình học tập với đam mê và sự nỗ lực, để đạt được những ước mơ và mục tiêu của mình. Năm mới là dịp để Linh đặt ra những kế hoạch và mục tiêu mới. Hy vọng rằng mỗi bước tiến của Linh sẽ mang lại niềm hạnh phúc và sự thành công. Chúc Linh luôn giữ vững tinh thần lạc quan và tự tin trước những thách thức. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Chúc Linh có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực của cuộc sống. Chúc mừng năm mới, Thùy Linh!',
        image: './avatar-img/20.jpg'
    },
    {
        id: 21,
        name: 'hà bùi phương linh',
        firstName: 'Linh',
        letters: 'Chúc mừng năm mới, tôi mong rằng những dòng chữ này sẽ đến tay Linh trong bầu không khí tết tràn ngập ấm áp và niềm vui. Trước hết, tôi xin chúc Linh một mùa xuân mới an lành, hạnh phúc và tràn đầy năng lượng tích cực. Nhân dịp năm mới Giáp Thìn 2024, tôi mong rằng những ước mơ và dự định của Linh sẽ được thực hiện, và những cống hiến và công sức mà Linh đang dành cho cuộc sống cũng sẽ được đền đáp xứng đáng. Nhớ hồi trước, tôi thường xuyên giúp Linh tưới cây trong ứng dụng Shopee. Những khoảnh khắc đó không chỉ là những công việc bình thường mà còn là những kí ức đáng nhớ, tạo nên một sự kết nối đặc biệt giữa chúng ta. Đặc biệt, sinh nhật Linh trùng vào mùng 6 tết (15/02/2004 - 15/02/2024), điều này thực sự đặc biệt và ý nghĩa. Chúc Linh có một sinh nhật tràn đầy ý nghĩa, được bên gia đình và bạn bè yêu thương. Mong rằng mọi điều tốt lành sẽ đến với Linh, từ những thành công nhỏ đến những niềm vui lớn. Cuối cùng, hãy tận hưởng mỗi khoảnh khắc của cuộc sống, và chúc Linh cùng gia đình có một năm mới đầy hạnh phúc, may mắn và thành công!',
        image: './avatar-img/21.jpg'
    },
    {
        id: 22,
        name: 'nguyễn thị khánh linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc ấm áp và tràn đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp niềm vui và những thành công mới. Linh à, những năm tháng cấp 3 là khoảnh khắc quan trọng, là hành trình của sự trưởng thành và khám phá bản thân. Tôi hi vọng rằng Linh đã trải qua những thời kỳ đẹp nhất và tích lũy được nhiều kinh nghiệm quý báu. Năm mới đang đến, hãy mở ra những trang mới, đặt ra những mục tiêu mới và bước chân mạnh mẽ vào những thách thức mới. Chúc Linh có một năm mới đầy năng lượng tích cực, đầy đủ sức khỏe để vượt qua mọi khó khăn. Tết này, hãy tận hưởng những giây phút ấm áp bên gia đình và những người thân yêu. Chúc Linh có một năm mới tràn đầy niềm vui, hạnh phúc và thành công. Mong rằng những kế hoạch và ước mơ của Linh sẽ trở thành hiện thực trong năm mới. Chúc mừng năm mới, Khánh Linh!',
        image: './avatar-img/22.jpg'
    },
    {
        id: 23,
        name: 'nguyễn thị thùy linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp hy vọng, niềm vui và thành công. Những năm tháng cấp 3, chắc chắn đã để lại trong tâm hồn Linh nhiều ký ức đáng nhớ và những bài học quý giá. Đó là những bước đi quan trọng trên hành trình trưởng thành và xây dựng tương lai. Hy vọng rằng những kinh nghiệm đó sẽ là nền tảng vững chắc cho những thách thức tiếp theo. Năm mới đã đến, mở ra trang mới, Linh nhé! Hãy đặt ra những mục tiêu và kế hoạch cho bản thân, để mỗi bước tiến mang lại hạnh phúc và thành công. Chúc Linh có một năm mới tràn đầy năng lượng tích cực, để vượt qua mọi khó khăn và đạt được những điều mình mong đợi. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và bạn bè. Chúc Linh có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực. Chúc mừng năm mới, Thùy Linh!',
        image: './avatar-img/23.jpg'
    },
    {
        id: 24,
        name: 'kiều trọng mưu',
        firstName: 'Mưu',
        letters: 'Nhân dịp năm mới, tôi xin gửi đến Mưu những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp hạnh phúc, may mắn và thành công. Hy vọng rằng những ngày tết sắp tới sẽ mang lại cho Mưu những trải nghiệm đáng nhớ và những giây phút hạnh phúc bên gia đình và bạn bè. Học ngôn ngữ Trung là một hành trình thú vị và đầy thách thức, nhưng tôi tin rằng sự nỗ lực của Mưu sẽ mang lại kết quả tốt đẹp. Chúc Mưu tiếp tục học tốt, hiểu rõ hơn về văn hóa và ngôn ngữ Trung Quốc, và có những cơ hội mới trong năm mới. Tết này, hãy dành thời gian bên gia đình và những người thân yêu. Chúc Mưu có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và đạt được những mục tiêu mà Mưu đề ra.',
        image: './avatar-img/24.jpg'
    },
    {
        id: 25,
        name: 'cấn thị trà my',
        firstName: 'My',
        letters: 'Chúc mừng năm mới, đầu tiên là muốn gửi đến My những lời chúc tốt đẹp nhất nhân dịp năm mới Giáp Thìn 2024. Mong rằng những ngày Tết sắp tới sẽ đem đến cho My và gia đình một bầu không khí ấm áp và tràn ngập niềm vui. Nhân dịp năm mới, tôi muốn gửi tới My những lời chúc tốt lành, may mắn và thành công. Mong rằng những kỳ nghỉ này sẽ là thời điểm trở lại những kỷ niệm ấn tượng và đong đầy niềm hạnh phúc. Chúc My luôn giữ vững tinh thần lạc quan, tự tin và đầy năng lượng để vượt qua mọi thách thức trong cuộc sống. Năm mới là dịp để ta nhìn lại những gì đã qua và chuẩn bị cho những thách thức mới. Hy vọng rằng My sẽ có những trải nghiệm đáng nhớ, đạt được những mục tiêu mới và phát triển không ngừng trong hành trình của mình. Chúc My có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và may mắn luôn đồng hành. Mong rằng những dự định và ước mơ của My sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc My và gia đình một năm mới Giáp Thìn tràn đầy hạnh phúc và thành công!',
        image: './avatar-img/25.jpg'
    },
    {
        id: 26,
        name: 'kiều nguyệt nga',
        firstName: 'Nga',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi gửi tới Nga những lời chúc tốt đẹp nhất. Mong rằng những ngày Tết sắp tới sẽ đem đến cho Nga và gia đình một không khí ấm áp, tràn ngập niềm vui và hạnh phúc. Năm mới đánh dấu một bước ngoặt mới, và tôi hy vọng rằng Nga sẽ bước vào năm mới với đầy đủ năng lượng tích cực và đam mê. Chúc Nga đạt được những mục tiêu mới, vượt qua mọi thách thức và trải nghiệm những điều mới mẻ, thú vị trong cuộc sống. Qua những tháng ngày cấp 3, chúng ta đã trải qua nhiều kỷ niệm đáng nhớ. Mong rằng những kỷ niệm ấy sẽ là nguồn động viên, là bảo bối quý giá cho Nga trong hành trình phía trước. Cũng nhớ giữ lại những niềm vui đơn giản nhưng ý nghĩa nhất, và chúc Nga có thêm nhiều kỷ niệm mới, đặc biệt trong năm mới này. Chúc Nga có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những dự định và ước mơ của Nga sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Nga và gia đình một cái Tết truyền thống đầy ý nghĩa và tràn đầy niềm hạnh phúc!',
        image: './avatar-img/26.jpg'
    },
    {
        id: 27,
        name: 'nguyễn hoàng ngân',
        firstName: 'Ngân',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Ngân những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc đặc biệt, nơi mọi người sum vầy bên gia đình và những người yêu thương. Cũng nhân dịp năm mới, tôi không quên chúc mừng cho sự phồn thịnh của công việc kinh doanh online của Ngân, đặc biệt là đam mê kinh doanh giày của bạn. Qua thời gian qua, tôi đã thấy Ngân đặt công sức và tâm huyết vào việc xây dựng cửa hàng online của mình. Mong rằng năm mới sẽ mang lại nhiều cơ hội mới, sự phát triển và thành công cho công việc kinh doanh của Ngân. Với đam mê trong lĩnh vực giày dép, tôi tin rằng Ngân sẽ tiếp tục đem đến cho khách hàng những sản phẩm chất lượng và dịch vụ tận tâm như thường lệ. Chúc Ngân có nhiều ý tưởng sáng tạo, những bước tiến mới trong kinh doanh, và tiếp tục trở thành một nguồn cảm hứng cho những người xung quanh. Chúc Ngân và gia đình có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống, và mong rằng năm mới sẽ là một chặng đường đầy ắp thành công và hạnh phúc. Chúc Ngân có một cái Tết truyền thống đầy ý nghĩa và ấm cúng bên gia đình và những người thân yêu.',
        image: './avatar-img/27.jpg'
    },
    {
        id: 28,
        name: 'kiều thị phương oanh',
        firstName: 'oanh',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi tới Oanh những lời chúc tốt đẹp nhất. Tết đến, mọi góc phố rực rỡ và tôi tin rằng không khí Tết sẽ mang lại cho Oanh và gia đình một bầu không khí ấm áp và tràn đầy niềm vui. Năm mới là một cơ hội để ta nhìn lại quãng đường đã qua và hướng về phía trước với những hoài bão mới. Oanh, qua những năm cấp 3, chúng ta đã trải qua nhiều thử thách và kỷ niệm đáng nhớ. Hy vọng rằng những bước đi tiếp theo của Oanh sẽ đầy ý nghĩa và đạt được những thành công mới. Chúc Oanh có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những ước mơ và dự định của Oanh sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Oanh và gia đình có một cái Tết truyền thống đầy ý nghĩa và ấm cúng, bên nhau là niềm hạnh phúc lớn nhất.',
        image: './avatar-img/28.jpg'
    },
    {
        id: 29,
        name: 'trần thanh phương',
        firstName: 'Phương',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Phương những lời chúc tốt đẹp nhất. Tết đến, những ngày đầu năm luôn là dịp để ta sum vầy bên gia đình và những người yêu thương. Mong rằng Phương sẽ có những khoảnh khắc ấm áp và đầy ý nghĩa cùng gia đình. Qua những năm cấp 3, chắc chắn đã có những kỷ niệm đáng nhớ và những thử thách đã giúp Phương trưởng thành hơn. Hy vọng rằng năm mới sẽ đem lại nhiều cơ hội mới, sự phát triển và thành công trong cả học tập và đam mê cá nhân. Phương là một người đam mê bóng đá, tôi hy vọng rằng sân cỏ sẽ là nơi nơi mà Phương thăng hoa và gặt hái được nhiều thành công. Bóng đá không chỉ là môn thể thao, mà còn là niềm đam mê, là nguồn động viên mỗi khi gặp khó khăn. Chúc Phương có những trận đấu hấp dẫn, đầy cảm xúc, và được trải nghiệm những chiến thắng lớn trong sự nghiệp thể thao của mình. Chúc Phương có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Phương và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa!',
        image: './avatar-img/29.jpg'
    },
    {
        id: 30,
        name: 'đồng thị thanh tâm',
        firstName: 'Tâm',
        letters: 'Chúc mừng năm mới và một năm mới an khang thịnh vượng! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến  Tâm những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ đem đến cho Tâm và gia đình một không khí ấm áp, tràn đầy niềm vui và hạnh phúc. Thật khó tin và đặc biệt khi biết sinh nhật của Tâm trùng vào mùng 2 tết năm 2024 (11/02/2004 - 11/02/2024). Đó chắc chắn sẽ là một ngày sinh nhật độc đáo và đặc biệt trong cuộc đời. Chúc mừng Tâm và hy vọng bạn sẽ có một ngày sinh nhật đặc biệt, đầy ý nghĩa và tràn ngập niềm vui bên gia đình và bạn bè thân thiết. Chúc Tâm có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những ước mơ và dự định của Tâm sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Tâm và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa!',
        image: './avatar-img/30.jpg'
    },
    {
        id: 31,
        name: 'nguyễn khắc thái',
        firstName: 'Thái',
        letters: 'Chúc mừng năm mới và đón chào năm Giáp Thìn 2024! Đầu tiên,người anh em nhận được lời chúc tết ấm áp và tràn ngập niềm vui từ tôi. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc ý nghĩa, nơi mà mọi người sum vầy bên gia đình và những người thân yêu. Nhân dịp năm mới, tôi muốn gửi lời chúc tốt đẹp nhất đến Khắc Thái - người anh em cấp 3 đầy tài năng và đam mê. Nhớ đến những buổi học chung, những trò đùa và những khoảnh khắc vui vẻ đã tạo nên những kỷ niệm đáng nhớ. Thái đã chọn con đường học y, một ngành cao quý và đầy thách thức. Chúc mừng Thái và hy vọng anh sẽ có những bước tiến vững chắc trên hành trình chinh phục kiến thức và đóng góp cho xã hội. Thái thích bóng đá và những tình huống ăn mừng "điên loạn" của người anh em là điều không thể không nhắc đến. Hy vọng rằng anh sẽ tiếp tục đam mê này và mang lại nhiều niềm vui và hạnh phúc trong năm mới. Chúc Thái có một năm mới tràn đầy sức khỏe, may mắn và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp.',
        image: './avatar-img/31.jpg'
    },
    {
        id: 32,
        name: 'phạm quang thành',
        firstName: 'Thành',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Thành những lời chúc tốt đẹp nhất. Tết đến, những ngày đầu năm luôn là khoảnh khắc đặc biệt, nơi mọi người cùng nhau chia sẻ niềm vui và tình thân. Mong rằng năm mới sẽ mang đến cho Thành và gia đình mình nhiều hạnh phúc và tình cảm ấm áp. Năm mới là cơ hội để chúng ta nhìn lại quãng đường đã đi và đặt kế hoạch cho những bước tiến mới. Hy vọng rằng Thành sẽ tiếp tục phát triển bản thân, đạt được những mục tiêu và ước mơ mình đã đề ra. Chúc Thành có một năm mới tràn đầy sức khỏe, may mắn và thành công trong mọi lĩnh vực. Hãy tận hưởng mỗi khoảnh khắc và đón nhận năm mới với trái tim ấm áp.',
        image: './avatar-img/32.jpg'
    },
    {
        id: 33,
        name: 'khuất thị thanh thảo',
        firstName: 'Thảo',
        letters: 'Chúc mừng sinh nhật muộn (04/02/2004 - 04/02/2024) và chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024 và lời chúc sinh nhật trễ, tôi xin gửi đến Thảo những điều tốt đẹp nhất. Hy vọng những dòng chữ này sẽ đến tay Thảo trong bầu không khí tết tràn ngập ấm áp và niềm vui. Mặc dù sinh nhật đã trôi qua một chút , nhưng tôi không quên gửi đến Thảo những lời chúc tốt đẹp nhất. Chúc mừng Thảo đã thêm một tuổi mới, một năm mới đầy niềm vui, sức khỏe và thành công. Năm mới là dịp để bước vào những thách thức mới, và tôi tin rằng Thảo sẽ vượt qua mọi khó khăn và đạt được những thành công mới. Chúc Thảo có một năm mới tràn đầy năng lượng tích cực, đầy đủ sức khỏe để đối mặt với mọi thử thách. Hãy tiếp tục giữ vững niềm tin và đam mê trong những gì bạn đang theo đuổi. Chúc Thảo và gia đình có một cái Tết đầy ý nghĩa và hạnh phúc. Mong rằng mỗi ngày mới là một cơ hội mới để thực hiện những ước mơ và dự định của mình.',
        image: './avatar-img/33.jpg'
    },
    {
        id: 34,
        name: 'nguyễn quang thoại',
        firstName: 'Thoại',
        letters: 'Chúc mừng năm mới, người anh em! Nhân dịp năm mới Giáp Thìn 2024, thằng này muốn gửi đến Thoại những lời chúc tốt đẹp nhất. Tết đến, hy vọng người anh em sẽ được bao quanh bởi niềm vui và tình thân thương. Năm 2023 đã trôi qua nhanh chóng, và thằng này biết người anh em đã trải qua những thách thức và bài học trong cuộc sống. Việc học được từ những trải nghiệm cá nhân, như trận tài xỉu kia, thực sự là những bước tiến quan trọng. Hy vọng rằng những bài học đó sẽ giúp người anh em trưởng thành và thêm sự khôn ngoan trong những quyết định tương lai. Với vẻ ngoại hình điển trai và sự quyến rũ tự nhiên, người anh em hẳn là một tâm điểm thu hút đối với nhiều người. Thoại không chỉ nổi bật về mặt ngoại hình mà còn về tâm hồn đẹp, điều này làm cho người anh em trở thành một người bạn thân thiết và đáng quý. Chúc mừng người anh em đang theo đuổi ngành kỹ thuật phần mềm tại trường Đại học FPT, chính là nơi chúng ta cùng học tập và trải qua những thách thức khó khăn nhưng cũng đầy ý nghĩa. Hy vọng rằng kiến thức người anh em đang học sẽ là nguồn động viên lớn cho sự phát triển của người anh em trong tương lai. Dù có nhiều người yêu quanh người anh em , nhưng thằng này tin rằng với trái tim ấm áp và tâm hồn đẹp, Thoại sẽ tìm thấy hạnh phúc thực sự. Mong rằng, năm mới sẽ mang lại cho người anh em nhiều cơ hội mới, niềm vui và thành công trong cả sự nghiệp và tình cảm. Cuối cùng, chúc Thoại có một Tết truyền thống ấm áp và ý nghĩa bên gia đình và bạn bè. Mong rằng năm mới sẽ là một chặng đường đầy may mắn và thành công. Chúc Thoại có một năm mới tràn đầy năng lượng tích cực và hạnh phúc!',
        image: './avatar-img/34.jpg'
    },
    {
        id: 35,
        name: 'hoàng thị thu',
        firstName: 'Thu',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Thu những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc đặc biệt, nơi mà mọi người cùng nhau chia sẻ niềm vui và tình thân. Hy vọng rằng năm mới sẽ mang đến cho Thu và gia đình mình nhiều hạnh phúc và tình cảm ấm áp. Năm mới là một cơ hội để ta nhìn lại những gì đã qua và hướng về phía trước với những ước mơ mới. Hy vọng rằng Thu sẽ bước vào năm mới với đầy năng lượng và sẵn sàng đối mặt với mọi thách thức. Chúc Thu có một năm mới tràn đầy sức khỏe, may mắn và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Thu và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa! Mong rằng mỗi ngày mới là một cơ hội mới để thực hiện những ước mơ và dự định của mình.',
        image: './avatar-img/35.jpg'
    },
    {
        id: 36,
        name: 'khuất thu thủy',
        firstName: 'Thủy',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Thủy những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui, hạnh phúc và ấm áp bên gia đình và những người thân yêu. Thủy là một người bạn cấp 3 đặc biệt, luôn mang lại nụ cười và năng lượng tích cực cho mọi người xung quanh. Mỗi lần gặp Thu Thủy, tôi luôn cảm nhận được sự lạc quan và sức mạnh trong tinh thần của bạn. Nhân dịp năm mới, tôi muốn gửi lời chúc đặc biệt đến Thủy, người bạn lùn nhất mà tôi từng gặp, nhưng cũng là người có tấm lòng lớn và đầy nhiệt huyết. Hy vọng rằng năm mới sẽ là một chặng đường mới với nhiều cơ hội, niềm vui và thành công. Chúc Thủy có một năm mới tràn đầy sức khỏe, may mắn và hạnh phúc. Mong rằng những dự định và ước mơ của Thủy sẽ trở thành hiện thực. Hãy tiếp tục phát huy sức mạnh tích cực và tạo ra những ấn tượng tích cực trên mọi lĩnh vực cuộc sống. Chúc Thủy và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/36.jpg'
    },
    {
        id: 37,
        name: 'nguyễn thu thủy',
        firstName: 'Thủy',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Thủy những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là dịp đặc biệt, nơi mà mọi người cùng nhau chia sẻ niềm vui và tình thân. Hy vọng rằng năm mới sẽ mang đến cho Thủy và gia đình mình nhiều hạnh phúc và tình cảm ấm áp. Nhìn lại những năm cấp 3, chúng ta đã trải qua nhiều kỷ niệm đáng nhớ và những bước tiến quan trọng trong sự nghiệp học tập. Giờ đây, chúng ta tiếp tục chặng đường mới tại Trường Đại học FPT, nơi chúng ta tiếp tục xây dựng ước mơ và dự định cho tương lai. Chúc Thủy có một năm mới tràn đầy năng lượng, may mắn và thành công trong mọi lĩnh vực cuộc sống. Hy vọng rằng những kiến thức và kỹ năng mới tại trường đại học sẽ giúp Thủy trở nên mạnh mẽ và tự tin hơn trong sự nghiệp. Chúc Thủy và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa. Hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và bạn bè, và đón nhận năm mới với trái tim đầy kỳ vọng.',
        image: './avatar-img/37.jpg'
    },
    {
        id: 38,
        name: 'trương thị thanh thủy',
        firstName: 'Thủy',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Thủy những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và hạnh phúc bên gia đình và những người thân yêu. Mỗi khi nhắc đến Thủy, hình ảnh về nụ cười lố lăng của bạn luôn hiện về trong tâm trí tôi. Đó không chỉ là nụ cười, mà còn là nguồn động viên lớn, tạo nên một không khí vui tươi và ấm áp xung quanh. Hy vọng rằng niềm vui và lạc quan của Thủy sẽ luôn kèm theo mỗi bước đi trong năm mới. Năm mới là cơ hội để ta nhìn lại những thành công đã đạt được và đặt ra những mục tiêu mới. Chúc Thủy có một năm mới tràn đầy năng lượng tích cực, với những bước tiến mới và những thành công lớn lao. Chúc Thủy và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn, và tôi tin rằng nụ cười của Thủy sẽ tiếp tục là nguồn động viên vô tận cho tất cả mọi người xung quanh.',
        image: './avatar-img/38.jpg'
    },
    {
        id: 39,
        name: 'đào thị thương',
        firstName: 'Thương',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Thương những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc đặc biệt, nơi mà mọi người cùng nhau chia sẻ niềm vui và tình thân. Những năm cấp 3, chúng ta đã cùng nhau trải qua nhiều kỷ niệm, những bài học và thử thách. Hy vọng rằng những kỷ niệm đó sẽ là động lực mạnh mẽ, giúp Thương vượt qua mọi khó khăn và đạt được những mục tiêu mới trong năm mới. Năm mới là thời điểm để ta nhìn lại và đặt ra những mục tiêu mới. Chúc Thương có một năm mới tràn đầy sức khỏe, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Cầu mong những dự định và ước mơ của Thương sẽ trở thành hiện thực. Chúc Thương và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/39.jpg'
    },
    {
        id: 40,
        name: 'hoàng thu trang',
        firstName: 'Trang',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Trang những lời chúc tốt đẹp nhất. Những ngày Tết sắp tới, chắc chắn sẽ là thời điểm ý nghĩa, nơi mọi người cùng nhau chia sẻ niềm vui và tình thân. Năm cấp 3 chắc chắn đã đánh dấu những bước ngoặt quan trọng trong cuộc đời của chúng ta. Những bài học, niềm vui và thách thức đã tạo nên những kỷ niệm không thể nào quên. Hy vọng rằng những trải nghiệm này sẽ là nguồn động viên và kiến thức quý báu trong hành trình tiến lên phía trước. Chúc Trang có một năm mới tràn đầy niềm vui, hạnh phúc và thành công trong mọi lĩnh vực cuộc sống. Cầu mong những bước tiến mới sẽ mang đến cho bạn những trải nghiệm đáng nhớ và những cơ hội mới. Chúc Trang và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mong rằng mỗi ngày mới sẽ là một cơ hội mới để thực hiện những ước mơ và dự định của bạn.',
        image: './avatar-img/40.jpg'
    },
    {
        id: 41,
        name: 'kiều thị thùy trang',
        firstName: 'Trang',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Trang những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc đặc biệt, nơi mà mọi người cùng nhau chia sẻ niềm vui và tình thân. Nhớ lại những thời kỳ cấp 3, chúng ta đã trải qua nhiều kỷ niệm vui và những thử thách. Một kỷ niệm đặc biệt là khi Trang lên bảng làm bài tập toán và đột ngột bị ngất. Dù có những giây phút khó khăn nhưng chắc chắn đó cũng là một phần trong những kỷ niệm đáng nhớ của chúng ta. Nhân dịp năm mới, tôi chúc Trang có một sức khỏe dồi dào, mạnh mẽ và bền bỉ trước mọi thách thức. Hy vọng rằng sức khỏe của bạn sẽ ngày càng tốt đẹp, và bạn có thể vượt qua mọi khó khăn với tinh thần lạc quan và tích cực. Chúc Trang có một năm mới tràn đầy năng lượng tích cực, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Mong rằng những ước mơ và kế hoạch của bạn sẽ trở thành hiện thực. Chúc Trang và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/41.jpg'
    },
    {
        id: 42,
        name: 'nguyễn thị thu trang',
        firstName: 'Trang',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Trang những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và tình thân. Trang, bạn có lẽ là một trong những người bạn cấp 3 mà tôi ấn tượng nhất với tính cách cá tính và sự độc lập của mình. Chúc mừng bạn vì sự tự tin và đẳng cấp mà bạn luôn tỏ ra. Nhân dịp năm mới, tôi chúc Trang có một sức khỏe dồi dào, vững vàng để đối mặt với mọi thách thức của cuộc sống. Hy vọng rằng bạn sẽ tiếp tục giữ vững cá tính và tinh thần độc lập, làm nổi bật bản thân trong mọi hoàn cảnh. Chúc Trang có một năm mới tràn đầy năng lượng tích cực, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Mong rằng những ước mơ và dự định của bạn sẽ trở thành hiện thực. Chúc Trang và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/42.jpg'
    },
    {
        id: 43,
        name: 'kiều chí trung',
        firstName: 'Trung',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Trung những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và tình thân. Hy vọng rằng sự nỗ lực và năng động của bạn sẽ được đền đáp bằng những thành công lớn trong năm mới. Nhân dịp năm mới, tôi chúc Trung có một sức khỏe dồi dào, vững vàng để đối mặt với mọi khó khăn. Mong rằng bạn sẽ tiếp tục giữ vững tinh thần lạc quan và tích cực, điều này chắc chắn sẽ là nguồn động viên lớn đưa bạn đến những chặng đường mới. Chúc Trung có một năm mới tràn đầy năng lượng tích cực, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Mong rằng những dự định và ước mơ của bạn sẽ trở thành hiện thực. Chúc Trung và gia đình có một cái Tết truyền thống đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/43.jpg'
    },
    {
        id: 44,
        name: 'khuất quang tuấn',
        firstName: 'Tuấn',
        letters: 'Chúc mừng năm mới, người anh em! Nhân dịp năm mới Giáp Thìn 2024, thằng này muốn gửi đến Tuấn những lời chúc ấm áp nhất từ tận đáy trái tim. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và ý nghĩa. Nhìn lại năm 2023, Tuấn đã vượt qua những thử thách và khó khăn, đặc biệt là chuyện vướng vào tài xỉu. Đúng là cuộc sống thường xuyên đặt ra những bài kiểm tra không ngờ, nhưng mỗi lần đều là cơ hội để chúng ta học hỏi và trưởng thành. Rất vui mừng khi biết người anh em đã vượt qua những khó khăn đó. Tuấn à, năm mới này thằng này mong muốn thấy người anh em tỏ ra quyết đoán hơn trong mọi quyết định của mình. Đôi khi, sự quyết đoán là chìa khóa để mở ra những cánh cửa mới trong cuộc sống. Hy vọng rằng người anh em sẽ bắt đầu thấy mình ngày càng mạnh mẽ và tự tin hơn. Với tình yêu thích thay đổi điện thoại, Tuấn là người hiểu rõ về công nghệ và xu hướng mới. Mong rằng năm mới sẽ mang đến những trải nghiệm thú vị và nhiều cơ hội để thỏa mãn đam mê công nghệ của người anh em. Với hình ảnh đẹp trai,  thằng này tin chắc sẽ không mất lâu để Tuấn tìm thấy một nửa yêu thương. Hãy để tình yêu tự nhiên đến bên Tuấn, và đừng quên rằng bạn luôn xứng đáng những điều tốt đẹp nhất. Cuối cùng, chúc người anh em học tốt ngành điện lạnh tại trường cao đẳng cơ điện Hà Nội. Hy vọng rằng kiến thức và kỹ năng mới sẽ giúp Tuấn có những bước tiến vững chắc trên con đường sự nghiệp. Chúc Tuấn và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với Tuấn!',
        image: './avatar-img/44.jpg'
    },
    {
        id: 45,
        name: 'trần đình tùng',
        firstName: 'Tùng',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Tùng những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và tình thân. Nhớ những năm cấp 3, chúng ta đã cùng nhau trải qua những bài học, thử thách và những khoảnh khắc vui vẻ. Tôi hy vọng rằng những ký ức đó sẽ là nguồn động viên lớn, giúp Tùng bước vào năm mới với nhiều niềm tin và hứng khởi mới. Năm mới là dịp để đặt ra những mục tiêu mới và tìm kiếm những cơ hội mới. Chúc Tùng có một năm mới tràn đầy năng lượng tích cực, sức khỏe dồi dào và đặc biệt là thành công trong mọi lĩnh vực cuộc sống. Hy vọng rằng Tết sẽ mang lại cho Tùng nhiều niềm vui, hạnh phúc bên gia đình và những người thân yêu. Chúc Tùng và gia đình có một cái Tết truyền thống đầy ý nghĩa và tình thân. Mọi điều tốt đẹp nhất sẽ đến với Tùng trong năm mới. Chúc Tùng có một năm mới thật tràn đầy thành công và hạnh phúc!',
        image: './avatar-img/45.jpg'
    },
    {
        id: 46,
        name: 'nguyễn thị hồng vân',
        firstName: 'Vân',
        letters: 'Chúc mừng sinh nhật, cô gái xinh đẹp! Dù là muộn nhưng chắc chắn tôi không muốn bỏ lỡ cơ hội gửi đến bạn những lời chúc tốt đẹp nhất trong dịp tết đặc biệt này. Chúc mừng sinh nhật (09/02/2004 - 09/02/2024) và chúc mừng năm mới Giáp Thìn! Chắc hẳn bạn sẽ có một sinh nhật truyền thống đặc biệt khi nó trùng với thời khắc chuyển giao giữa năm cũ và năm mới, đúng vào ngày 30 Tết. Năm 2023 đã là một năm đầy thách thức với bạn, nhưng mình biết bạn đã vượt qua tất cả những khó khăn đó với sự mạnh mẽ và quyết tâm. Việc bạn chọn học nghề phun xăm thẩm mỹ thay vì học đại học có lẽ là một quyết định mạo hiểm, nhưng tôi tin rằng đó chắc chắn là bước ngoặt quan trọng trong sự nghiệp của bạn. Chúc mừng bạn vì đã có sự đổi mới trong lựa chọn nghề nghiệp, và hy vọng rằng năm mới sẽ mang lại cho bạn nhiều cơ hội mới, thành công và hạnh phúc. Dù bạn chơi Liên Quân và coi tựa game này như một người bạn thân, nhưng tôi tin chắc rằng đam mê này sẽ tiếp tục làm đầy màu sắc cuộc sống của bạn. Còn về việc săn sale trên các nền tảng online, liệu có giảm bớt được đôi chút không? Nhưng thôi, ai mà cản trở được đam mê shopping của bạn, đúng không? Đôi khi, những chiếc hộp đến từ người giao hàng trở thành một loại niềm vui đặc biệt trong cuộc sống hàng ngày. Dịp Tết này, dù bạn không ở quê như thường lệ mà lại lên nhà bố ở Hà Nội, hy vọng bạn sẽ trải qua những ngày Tết ấm cúng và ý nghĩa bên người thân. Mong rằng, mọi khó chịu và phiền muộn sẽ trôi qua nhanh chóng, để bạn có thể tận hưởng những khoảnh khắc vui vẻ và ấm áp. Cuối cùng, chúc mừng sinh nhật lần nữa, Vân! Mong rằng năm mới sẽ mang đến cho bạn nhiều niềm vui mới, cũng như những bí mật và điều bất ngờ tốt lành. Tôi hy vọng bạn sẽ luôn giữ vững niềm tin và sự lạc quan, như cái tên của mình vậy. Chúc Vân có một năm mới tràn đầy sức khỏe, thành công và hạnh phúc. Sinh nhật vui vẻ và chúc mừng năm mới!',
        image: './avatar-img/46.jpg'
    },
    {
        id: 47,
        name: 'kiều thị vui',
        firstName: 'Vui',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Vui những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và tình thân. Tên của Vui luôn là nguồn cảm hứng đặc biệt, và hy vọng rằng bạn sẽ tiếp tục mang theo niềm vui đó trong mọi hoàn cảnh. Chúc Vui luôn vui vẻ, lạc quan và hạnh phúc như cái tên của mình. Năm mới là thời điểm để đặt ra những mục tiêu mới và tìm kiếm những trải nghiệm mới. Hy vọng rằng mỗi bước đi của Vui sẽ đưa bạn đến những điều tuyệt vời nhất trong cuộc sống. Chúc Vui có một năm mới tràn đầy năng lượng tích cực, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Mong rằng những ước mơ và dự định của bạn sẽ trở thành hiện thực. Chúc Vui và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/47.jpg'
    },
    {
        id: 48,
        name: 'vũ hải yến',
        firstName: 'Yến ',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Yến những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc tràn đầy niềm vui và tình thân. Nhớ những kỷ niệm cấp 3, chúng ta đã cùng nhau trải qua những bài học, kỳ thi, và những kì nghỉ hè đáng nhớ. Hy vọng rằng những kỷ niệm ấy sẽ là động lực lớn, giúp Yến bước vào năm mới với tâm hồn lạc quan và hạnh phúc. Năm mới là thời điểm để đặt ra những mục tiêu mới và tìm kiếm những cơ hội mới. Chúc Yến có một năm mới tràn đầy năng lượng tích cực, niềm vui và thành công trong mọi lĩnh vực cuộc sống. Hy vọng rằng mọi khó khăn trước mắt sẽ trở thành bài học quý báu, giúp Yến trưởng thành và mạnh mẽ hơn. Đừng quên rằng mỗi thử thách đều là một cơ hội để chúng ta phát triển. Chúc Yến và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa. Mọi điều tốt đẹp nhất sẽ đến với bạn!',
        image: './avatar-img/48.jpg'
    },
    {
        id: 0,
        name: 'chu thanh minh',
        firstName: 'Cô Minh',
        letters: 'Nhân dịp năm mới Giáp Thìn 2024, em xin gửi đến cô những lời chúc tốt đẹp nhất. Trong những năm tháng cấp 3, sự hiện diện của cô không chỉ là người hướng dẫn mà còn là nguồn động viên vô cùng lớn lao cho chúng em. Cô là một người giáo viên tuyệt vời, luôn tràn đầy nhiệt huyết và sự say mê với nghề giảng dạy. Bằng cách dạy bài không chỉ có kiến thức mà còn chứa đựng những giá trị lớn lao về tình cảm, tầm nhìn, và lòng trách nhiệm. Em đã học được rất nhiều từ cách cô giảng dạy và tận tâm của mình. Cô đã tạo nên không khí học tập tích cực trong lớp, giúp chúng em không chỉ nắm vững kiến thức mà còn phát triển kỹ năng sống. Em cảm ơn cô vì những bài học thú vị, những buổi thảo luận sôi nổi, và những dự án mà cô đã giúp chúng em thực hiện. Năm mới, em chúc cô có một năm tràn đầy sức khỏe, niềm vui và thành công trong sự nghiệp giảng dạy. Mong rằng những nỗ lực và lòng đam mê của cô sẽ tiếp tục được đền đáp xứng đáng. Chúc cô một cái Tết ấm áp, tràn ngập niềm hạnh phúc bên gia đình và những người yêu thương. Hy vọng rằng mỗi nét chữ trong lời chúc này đều có thể thấu hiểu được lòng biết ơn và sự kính trọng của chúng em dành cho cô. Một lần nữa, chúc cô Thanh Minh có một năm mới đầy may mắn, hạnh phúc và thành công.',
        image: './avatar-img/0.jpg'
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
        <div class="letter_content">
                <div class="dear">Chào ${friendLetter.firstName}</div>
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
