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
        image: './avatar-img/Monkey_D_Luffy.jpg'
    },
    {
        id: 2,
        name: 'phan kiều ngọc anh',
        firstName: 'Ngọc Anh',
        letters: 'Chúc mừng năm mới, Ngọc Anh! Năm Giáp Thìn sắp đến, mang theo những cơ hội mới và may mắn không ngờ. Hy vọng rằng năm nay sẽ là một chương mới đầy ý nghĩa và thành công trong cuộc sống của cậu. Cùng nhau, chúng ta đã trải qua nhiều kỷ niệm đáng nhớ từ cấp 2 đến cấp 3. Mong rằng mối quan hệ của chúng ta sẽ tiếp tục phát triển và là nguồn động viên, hỗ trợ lẫn nhau trong những thách thức mới. Năm mới là dịp để cậu đặt ra những mục tiêu mới, định hình cho tương lai và phát triển những kỹ năng mới. Chúc cậu sẽ có một năm Giáp Thìn tràn đầy năng lượng tích cực, thành công rực rỡ và những bước tiến vững chắc trên con đường học tập và phát triển bản thân. Năm Giáp Thìn, hãy mở rộng tầm nhìn, tận hưởng những trải nghiệm mới, và đặt ra những thách thức để bản thân ngày một hoàn thiện hơn. Chúc cậu sẽ gặt hái được nhiều thành công mới, và niềm vui sẽ luôn bên cậu trong mọi bước đi. Chúc mừng năm mới, Ngọc Anh!', 
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 3,
        name: 'cấn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: 'Chúc mừng năm mới, Ánh! Năm Giáp Thìn đang đến gần, hứa hẹn mang đến những cơ hội mới, may mắn và niềm vui bất ngờ. Trong những kỷ niệm cấp 3, tôi nhớ Ánh luôn là người đam mê hội họa, và năm 2024 này chắc chắn sẽ là một chặng đường đầy màu sắc và sáng tạo đối với cậu. Năm mới là dịp để cậu thể hiện tài năng nghệ thuật của mình một cách tự do và sáng tạo. Hy vọng rằng những bức tranh, những ý tưởng sẽ mở ra những khám phá mới, làm phong phú thêm cuộc sống của cậu. Hãy để đam mê hội họa là nguồn động viên, làm cho mỗi bức tranh của cậu trở nên sống động và ý nghĩa. Chúc Ánh có một năm mới tràn đầy niềm vui, sức khỏe và thành công trong mọi lĩnh vực của cuộc sống. Hãy bắt đầu năm mới bằng những ý tưởng sáng tạo, và đừng ngần ngại chia sẻ tài năng nghệ thuật đặc biệt của mình với mọi người. Năm Giáp Thìn này, hãy để mỗi nét vẽ của Ánh là những chuyến phiêu lưu mới, mỗi màu sắc là một câu chuyện riêng biệt. Chúc cậu gặt hái được nhiều thành công, nhiều cảm xúc và niềm hạnh phúc từ thế giới màu sắc mà cậu tạo ra. Chúc Ánh một năm mới an lành, hạnh phúc và tràn đầy sự sáng tạo!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },

    {
        id: 4,
        name: 'nguyễn thị ngọc ánh',
        firstName: 'Ngọc Ánh',
        letters: 'Chúc mừng năm mới, Ánh! Dù chúng ta không quá thân thiết, nhưng trong dịp Tết này, tôi muốn gửi đến Ánh những lời chúc ấm áp nhất. Chắc chắn năm 2024 sẽ đem đến những trải nghiệm mới và thú vị cho cuộc sống của Ánh. Mong rằng những dự định và kế hoạch của cậu sẽ được thực hiện suôn sẻ, và mỗi bước chân trên con đường đại học sẽ là những bước tiến vững chắc. Năm mới, hãy để trái tim mình mở rộng và chấp nhận những cơ hội mới, thách thức mới. Chúc Ánh có những khoảnh khắc ý nghĩa và gặt hái được nhiều thành công trong học tập và cuộc sống cá nhân. Chúc mừng năm mới, Ánh! Mong rằng những ngày Tết sẽ đưa lại cho cậu những niềm vui, sự ấm áp và kỷ niệm đáng nhớ bên gia đình và người thân.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },

    {
        id: 5,
        name: 'nguyễn thanh bình',
        firstName: 'Bình',
        letters: 'Năm Giáp Thìn đã về, mang theo hương khói tết ngập tràn. Trong bước chân nhanh chóng của thời gian, hy vọng rằng những ngày Tết sẽ mang đến cho Bình nhiều niềm vui và bình yên bên gia đình và những người thân yêu. Những lời chúc này đưa tới, không quá nhiều nhưng đủ để nói lên lòng chân thành của tôi. Năm Giáp Thìn, chúc Bình có một năm mới bình an, hạnh phúc và đặc biệt là đong đầy những trải nghiệm mới. Nhìn lại quãng đường cấp 3, chúng ta có thể chưa thực sự thân thiết, nhưng mỗi bước đi đều là một chặng đường của cuộc hành trình cá nhân. Mong rằng những chân trời mới mở ra trước mặt Bình sẽ là những hành trình tuyệt vời, đánh thức những giấc mơ và kỳ vọng. Chúc Bình có một Tết tràn ngập tiếng cười, niềm vui và ấm áp tình người. Mong rằng năm mới sẽ là một năm Bình an và đầy ắp những điều tốt lành.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 6,
        name: 'kiều khánh duy',
        firstName: 'Duy',
        letters: 'Năm Giáp Thìn đã về, đem theo những hạt nắng vàng óng ánh trên bề mặt cuộc sống. Chúc mừng năm mới, người anh em thân thiết, người sở hữu tên gọi duyên dáng và đặc biệt. Trong những bước chân nhỏ của dòng đời, Duy tựa như một chuyên gia IT, đắm chìm trong thế giới số, nơi mà ý tưởng và sự sáng tạo trở nên vô tận. Năm 2024 sẽ là những trang mới trong cuộc hành trình, và tao tin chắc rằng chuyên ngành của người anh em sẽ là nguồn động viên to lớn để tạo ra những ứng dụng di động tiện ích, là những đóa hoa duyên dáng trong thế giới công nghệ. Nhìn về tương lai, hãy để những tia sáng của tài năng và niềm đam mê của người anh em lan tỏa khắp nơi. Cuộc sống là một bức tranh mà mỗi nét vẽ của Duy đều là những điều tinh tế và duyên dáng. Mong rằng những đợt sóng sáng từ tay phép mày mò của Duy sẽ làm bừng sáng thêm hành trình mới. Chúc người anh em có một năm mới đầy tràn đầy năng lượng, sức khỏe và đặc biệt là những thành công lớn từ những ứng dụng di động độc đáo. Hãy tiếp tục bước đi vững vàng trên con đường mình đã chọn, bởi vì Duy là nguồn động viên không ngừng cho mọi người xung quanh. Chúc mừng năm mới, người anh em! Cùng nhau chào đón những thách thức và thành công mới!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 7,
        name: 'nguyễn khắc duy',
        firstName: 'Duy',
        letters: 'Năm mới đã về, tiếng cười ấm áp và niềm vui rực rỡ lan tỏa khắp nơi. Chúc mừng năm Giáp Thìn, người bạn thân thiết của tôi, người có giọng nói đặc trưng, là bản nhạc riêng biệt trong bức tranh đa dạng của cuộc sống. Những năm cấp 3, Duy đã tựa như một nghệ sĩ nhân dân, mang đến cho lớp không khí ấm áp, vui tươi và đặc sắc. Nghe giọng nói của Duy, mỗi câu chuyện trở nên sống động hơn, mỗi ý định trở nên quyết đoán hơn. Đúng như tên gọi "Duy", bạn là nguồn động viên không ngừng, không giống ai, đặc biệt và đầy tình người. Năm 2024 sẽ là một chương mới, và tôi tin rằng Duy sẽ tiếp tục làm nên những điều tuyệt vời. Hãy để giọng nói đặc trưng của Duy làm rạng ngời thêm những trang mới trong hành trình của mình. Mong rằng Duy sẽ tiếp tục là người làm nên những câu chuyện, là nguồn cảm hứng không ngừng cho mọi người xung quanh. Chúc Duy một năm mới đầy hạnh phúc, nhiều thành công và tiếp tục trở thành "nghệ sĩ nhân dân" của cuộc sống. Hãy làm cho mỗi khoảnh khắc trở nên đặc biệt như giọng nói của Duy vậy!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 8,
        name: 'đinh quang đông',
        firstName: 'Đông',
        letters: 'Năm mới Giáp Thìn đã về, mang theo hơi ấm của xuân tươi mới. Chúc mừng năm mới, Đông - người bạn của tôi. Thân hình "đông" của Đông như một tảng đá vững chãi giữa sân bóng, nơi mà bản thân bạn là điểm tựa đáng tin cậy. Với sức mạnh vô song, mỗi cú sút của Đông là một bản giao hưởng đầy năng lượng, mạnh mẽ như làn sóng cuồn cuộn. Ngoài sân bóng, Đông lại là một nghệ sĩ trong thế giới đồ họa, nơi mà sự sáng tạo của bạn trở nên không giới hạn. Mong rằng, những ý tưởng đầy độc đáo và hấp dẫn của Đông sẽ được chuyển hóa thành những tác phẩm nghệ thuật tuyệt vời, làm phong phú thêm thế giới xung quanh. Năm 2024 sẽ là một năm đặc biệt, và tôi tin rằng Đông sẽ tiếp tục làm nên những điều tuyệt vời trong cả sân bóng và thế giới đồ họa. Chúc Đông có một năm mới đầy hạnh phúc, sức khỏe dồi dào và thành công không ngừng trong mọi lĩnh vực.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 9,
        name: 'kiều hương giang',
        firstName: 'Giang',
        letters: 'Năm mới Giáp Thìn đã về, làm rạng rỡ bản dạng của cuộc sống. Chúc mừng năm mới, Giang - người bạn cùng làng, hòa mình trong không khí tết ngọt ngào và ấm áp. Hương Giang, với thân hình nhỏ nhắn nhưng lại chứa đựng một trái tim to lớn. Mỗi bước đi nhẹ nhàng của bạn, như là những nhịp nhàng trong bản nhạc của quê hương. Cùng làng, cùng đồng bào, chúng ta hòa mình vào những giây phút đoàn tụ, làm cho tết thêm ý nghĩa và tràn đầy niềm vui. Năm 2024, mong rằng Giang sẽ tiếp tục làm nên những điều tốt đẹp cho cộng đồng và bản thân mình. Hãy để những ý tưởng và dự định mới của Giang mọc lên như những bông hoa tươi mới trong vườn quê, tô điểm cho hành trình mới. Chúc Giang có một năm mới tràn đầy niềm vui, hạnh phúc và thành công. Cùng gia đình và bà con cùng làng hòa mình vào không khí tết, tận hưởng những khoảnh khắc ấm áp và đáng nhớ.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 10,
        name: 'nguyễn thị thanh hiền',
        firstName: 'Hiền',
        letters: 'Năm mới Giáp Thìn đã đến, mang theo bao hi vọng và niềm tin mới. Chúc mừng năm mới, Hiền - người bạn cấp 3 của tôi, với thân hình nhỏ nhắn nhưng trái tim của bạn lại to lớn và ấm áp như những tia nắng mặt trời bên cửa sổ. Hiền ơi, từ "hiền" như một điều dịu dàng, như làn gió nhẹ thoảng qua làm dịu đi những góc tối cuộc sống. Bạn là một hòa nhạc dễ thương, làm cho mỗi ngày của tôi trở nên ấm áp hơn, chứa đựng đầy tình bạn và lòng nhân ái. Năm 2024, mong rằng Hiền sẽ tiếp tục giữ vững bản lĩnh và tính hiền lành của mình. Hãy để những hạt mưa tình thương của Hiền rơi xuống, làm tươi mới những tâm hồn khô cằn và đem lại nhiều niềm vui cho những người xung quanh. Chúc Hiền có một năm mới tràn đầy hiền hòa, tình thương và những thành công mới. Hãy tiếp tục làm cho cuộc sống này thêm phần tươi đẹp và ý nghĩa.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 11,
        name: 'nguyễn đồng trí hiếu',
        firstName: 'Hiếu',
        letters: 'Chúc mừng năm mới, Hiếu! Dù Hiếu đang ở xa xôi, nơi những bông tuyết trắng bồng bềnh. Năm mới Giáp Thìn đang bắt đầu, hãy để nó đưa Hiếu đến những trải nghiệm mới, phong cách sống mới và những cuộc gặp gỡ ấn tượng. Thời tiết ở Hàn Quốc chắc chắn rất lạnh, nhưng mong rằng trái tim Hiếu vẫn được ấm áp bởi tình bạn và những niềm vui nhỏ nhất của cuộc sống. Mong rằng những nỗ lực của Hiếu trong hành trình du học sẽ đem lại những trái ngọt, những kỷ niệm đáng nhớ. Năm 2024 sẽ là một năm mới đầy triển vọng. Hi vọng Hiếu sẽ tiếp tục học tốt, khám phá thêm về văn hóa mới và tận hưởng những khoảnh khắc đáng nhớ bên những người mới. Dù cách xa, nhưng tình bạn vẫn như ngày nào, không biên giới, không xa cách. Chúc Hiếu có một năm mới an lành, tràn đầy hạnh phúc và những thành công mới. Hãy giữ gìn sức khỏe và hãy luôn mang theo tình bạn ấm áp từ quê nhà.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 12,
        name: 'đỗ huy hoàng',
        firstName: 'Hoàng',
        letters: 'Chúc mừng năm mới, Hoàng! Dù chúng ta đang ở những nơi khác nhau, nhưng tâm hồn bạn vẫn hòa mình vào không khí Tết đang đến. Năm Giáp Thìn đã đến, mang theo nhiều niềm vui và cơ hội mới. Hi vọng Hoàng sẽ bắt đầu năm mới này với đầy năng lượng và kỳ vọng. Năm 2024 sắp tới, hãy để những ý định và dự định của Hoàng trở thành hiện thực. Chúc mừng những bước tiến trong hành trình thành công của Hoàng, những nỗ lực và công sức đã đặt ra. Năm mới, hãy tiếp tục phấn đấu, không ngừng khám phá và học hỏi để trở thành phiên bản tốt nhất của chính mình. Chúc Hoàng có một năm mới an lành, hạnh phúc và đầy ắp những trải nghiệm đáng nhớ',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 13,
        name: 'đỗ qang huy',
        firstName: 'Huy',
        letters: 'Chúc mừng năm mới, Huy! Dịp Tết đang đến, tôi truyền đến Huy những lời chúc ấm áp nhất từ tâm hồn. Năm Giáp Thìn đã đến, mang theo niềm vui, sức khỏe và nhiều cơ hội mới. Năm mới 2024, hãy tiếp tục là chính bản thân mình, giữ lại niềm đam mê và tình yêu dành cho bóng đá. Hy vọng rằng Huy sẽ gặt hái được nhiều thành công mới, trên sân cỏ và trong cuộc sống hàng ngày. Chúc Huy có một Tết tràn ngập niềm vui và hạnh phúc bên gia đình và người thân yêu. Mong rằng năm mới sẽ đem lại cho Huy nhiều điều tốt lành và những kỷ niệm đáng nhớ.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 14,
        name: 'phí thu huyền',
        firstName: 'Huyền',
        letters: 'Nhân dịp năm mới, tôi muốn gửi đến Huyền những lời chúc ấm áp và đầy ý nghĩa. Chúc mừng năm mới Giáp Thìn, năm của những khởi đầu mới và những cơ hội tuyệt vời. Hy vọng những ngày Tết sắp tới sẽ mang đến cho Huyền nhiều niềm vui và an lành bên gia đình và những người thân yêu. Cấp 3, những năm tháng của sự học hỏi và khám phá, chắc chắn đã để lại trong tâm hồn Huyền nhiều dấu ấn đáng nhớ. Mong rằng những kiến thức và trải nghiệm này sẽ là nền tảng vững chắc cho những bước tiến mới trong cuộc đời. Năm 2024 là năm Giáp Thìn, năm của sự đổi mới và tiến bộ. Hãy để những ý tưởng sáng tạo của Huyền mọc lên như những bông hoa tươi mới, tô điểm thêm cho hành trình phía trước. Chúc Huyền có một năm mới tràn đầy năng lượng tích cực, đầy ắp niềm vui và thành công. Tết này, mong rằng Huyền sẽ được bao quanh bởi sự ấm áp và yêu thương từ gia đình và bạn bè. Chúc Huyền có một năm mới an khang, thịnh vượng và tràn đầy những kỷ niệm đẹp.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 15,
        name: 'bùi như hưng',
        firstName: 'Hưng',
        letters: 'Nhân dịp năm mới, tôi gửi đến Hưng những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, năm đánh dấu những bước chân mới, những hành động mới và những ước mơ mới. Hy vọng những ngày Tết sắp tới sẽ mang lại cho Hưng nhiều niềm vui và hạnh phúc bên gia đình và những người thân yêu. Bóng đá - niềm đam mê không ngừng của Hưng, là nguồn động viên lớn giúp Hưng vượt qua mọi khó khăn và thách thức. Năm 2024, hãy để đam mê bóng đá của Hưng trở thành nguồn động lực, mang lại nhiều niềm vui và thành công mới trong cả cuộc sống và sân cỏ. Chúc Hưng có một năm mới tràn đầy những trận cầu hấp dẫn, những bàn thắng đẹp và những khoảnh khắc đáng nhớ. Ngoài ra, hãy dành thời gian cho gia đình và bạn bè, tận hưởng những khoảnh khắc ấm áp và ý nghĩa nhất trong những ngày tết này. Tết này, mong rằng Hưng sẽ được bao quanh bởi sự ấm áp và yêu thương từ gia đình và bạn bè. Chúc Hưng có một năm mới an khang, thịnh vượng và tràn đầy niềm vui.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 16,
        name: 'kiều đình hưng',
        firstName: 'Hưng',
        letters: 'Năm mới vui vẻ',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 17,
        name: 'kiều thị mai hương',
        firstName: 'Hương',
        letters: 'Nhân dịp năm mới, em muốn gửi đến chị những lời chúc tốt đẹp và tràn đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm đánh dấu những bước tiến mới, những trải nghiệm mới và cơ hội mới trong cuộc sống của chị. Năm mới là dịp để chúng ta nhìn lại quãng đường đã qua và hướng tới những điều mới mẻ. Đối với chị, năm 2024 có lẽ sẽ trở thành năm đặc biệt, năm mà chị sẽ sớm gặp được nhóm nhạc TFBoys, nguồn động viên và nguồn cảm hứng không ngừng của chị. Em biết rằng việc gặp gỡ ídol của mình là một ước mơ lớn, và em mong rằng năm nay sẽ là thời điểm mà chị sẽ thực hiện được ước mơ đó. Chúc cho những cánh cửa may mắn và cơ hội mở ra trước chị, mang đến những trải nghiệm tuyệt vời và những khoảnh khắc đáng nhớ. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Chúc chị có một năm mới tràn đầy niềm vui, hạnh phúc, và đặc biệt là sớm gặp được nhóm nhạc TFBoys - nguồn động viên lớn nhất của chị.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 18,
        name: 'trần thị quỳnh hương',
        firstName: 'Hương',
        letters: 'Nhân dịp năm mới, tôi muốn gửi đến Hương những lời chúc tốt đẹp và đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm đánh dấu những bước tiến mới, những trải nghiệm mới và cơ hội mới trong cuộc sống của Hương. Năm 2023 đã là một năm đầy những cảm xúc và thử thách, đặc biệt là với niềm đam mê với nhóm nhạc Blackpink. Tôi hiểu rằng Hương đã bỏ lỡ cơ hội gặp gỡ ídol của mình, và điều này chắc chắn khiến cho Hương cảm thấy tiếc nuối. Tuy nhiên, đời luôn mở ra những trang mới, và tôi tin rằng Hương sẽ sớm có cơ hội khác để gặp nhóm nhạc Blackpink, niềm đam mê của mình. Hương là người học rất chăm chỉ và nhiệt huyết. Sự nỗ lực và đam mê của Hương là nguồn động viên lớn cho những người xung quanh. Chúc Hương tiếp tục phấn đấu, học tốt, và đặc biệt là sớm gặp được nhóm nhạc mà Hương mong đợi. Năm mới, hãy tiếp tục giữ vững tinh thần lạc quan và yêu thương gia đình. Chúc Hương có một năm mới tràn đầy niềm vui, hạnh phúc, và đặc biệt là sớm gặp được nhóm nhạc Blackpink - niềm tự hào và niềm vui lớn nhất của Hương.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 19,
        name: 'nguyễn trung kiên',
        firstName: 'Kiên',
        letters: 'Nhân dịp năm mới, tôi xin gửi đến Kiên những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp niềm vui, sức khỏe và thành công. Hy vọng những ngày Tết sắp tới sẽ đem đến cho Kiên những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Kiên à, mọi người đều biết rằng sở thích lớn nhất của Kiên chính là chơi game. Đó không chỉ là niềm vui giải trí mà còn là cả một thế giới mà Kiên có thể tự do sáng tạo và thách thức bản thân. Hy vọng rằng năm mới sẽ mang đến cho Kiên nhiều trải nghiệm mới, những chiến thắng đầy phấn khích trong thế giới game mà Kiên đang đắm chìm. Năm mới cũng là dịp để Kiên đặt ra những mục tiêu mới, không chỉ trong thế giới game mà còn trong cuộc sống hàng ngày. Chúc Kiên có một năm mới đầy năng lượng tích cực, để có thể vững bước chinh phục mọi thử thách và đạt được những điều mình mong đợi. Tết này, hãy dành thời gian bên gia đình và bạn bè, tận hưởng những khoảnh khắc ý nghĩa. Chúc Kiên có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực. Chúc mừng năm mới, Kiên!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 20,
        name: 'cấn thùy linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đánh dấu những bước tiến mới và những khám phá mới trong cuộc sống của Linh. Những năm tháng cấp 3 chắc chắn đã để lại trong tâm hồn Linh nhiều kỷ niệm đáng nhớ. Những bước đi này sẽ là nền tảng vững chắc cho tương lai phía trước. Chúc Linh tiếp tục hành trình học tập với đam mê và sự nỗ lực, để đạt được những ước mơ và mục tiêu của mình. Năm mới là dịp để Linh đặt ra những kế hoạch và mục tiêu mới. Hy vọng rằng mỗi bước tiến của Linh sẽ mang lại niềm hạnh phúc và sự thành công. Chúc Linh luôn giữ vững tinh thần lạc quan và tự tin trước những thách thức. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và những người thân yêu. Chúc Linh có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực của cuộc sống. Chúc mừng năm mới, Thùy Linh!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 21,
        name: 'hà bùi phương linh',
        firstName: 'Linh',
        letters: 'Chúc mừng năm mới, tôi mong rằng những dòng chữ này sẽ đến tay Linh trong bầu không khí tết tràn ngập ấm áp và niềm vui. Trước hết, tôi xin chúc Linh một mùa xuân mới an lành, hạnh phúc và tràn đầy năng lượng tích cực. Nhân dịp năm mới Giáp Thìn 2024, tôi mong rằng những ước mơ và dự định của Linh sẽ được thực hiện, và những cống hiến và công sức mà Linh đang dành cho cuộc sống cũng sẽ được đền đáp xứng đáng. Nhớ hồi trước, tôi thường xuyên giúp Linh tưới cây trong ứng dụng Shopee. Những khoảnh khắc đó không chỉ là những công việc bình thường mà còn là những kí ức đáng nhớ, tạo nên một sự kết nối đặc biệt giữa chúng ta. Đặc biệt, sinh nhật Linh trùng vào mùng 6 tết (15/02/2004 - 15/02/2024), điều này thực sự đặc biệt và ý nghĩa. Chúc Linh có một sinh nhật tràn đầy ý nghĩa, được bên gia đình và bạn bè yêu thương. Mong rằng mọi điều tốt lành sẽ đến với Linh, từ những thành công nhỏ đến những niềm vui lớn. Cuối cùng, hãy tận hưởng mỗi khoảnh khắc của cuộc sống, và chúc Linh cùng gia đình có một năm mới đầy hạnh phúc, may mắn và thành công!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 22,
        name: 'nguyễn thị khánh linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc ấm áp và tràn đầy yêu thương. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp niềm vui và những thành công mới. Linh à, những năm tháng cấp 3 là khoảnh khắc quan trọng, là hành trình của sự trưởng thành và khám phá bản thân. Tôi hi vọng rằng Linh đã trải qua những thời kỳ đẹp nhất và tích lũy được nhiều kinh nghiệm quý báu. Năm mới đang đến, hãy mở ra những trang mới, đặt ra những mục tiêu mới và bước chân mạnh mẽ vào những thách thức mới. Chúc Linh có một năm mới đầy năng lượng tích cực, đầy đủ sức khỏe để vượt qua mọi khó khăn. Tết này, hãy tận hưởng những giây phút ấm áp bên gia đình và những người thân yêu. Chúc Linh có một năm mới tràn đầy niềm vui, hạnh phúc và thành công. Mong rằng những kế hoạch và ước mơ của Linh sẽ trở thành hiện thực trong năm mới. Chúc mừng năm mới, Khánh Linh!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 23,
        name: 'nguyễn thị thùy linh',
        firstName: 'Linh',
        letters: 'Nhân dịp năm mới, tôi gửi đến Linh những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp hy vọng, niềm vui và thành công. Những năm tháng cấp 3, chắc chắn đã để lại trong tâm hồn Linh nhiều ký ức đáng nhớ và những bài học quý giá. Đó là những bước đi quan trọng trên hành trình trưởng thành và xây dựng tương lai. Hy vọng rằng những kinh nghiệm đó sẽ là nền tảng vững chắc cho những thách thức tiếp theo. Năm mới đã đến, mở ra trang mới, Linh nhé! Hãy đặt ra những mục tiêu và kế hoạch cho bản thân, để mỗi bước tiến mang lại hạnh phúc và thành công. Chúc Linh có một năm mới tràn đầy năng lượng tích cực, để vượt qua mọi khó khăn và đạt được những điều mình mong đợi. Tết này, hãy tận hưởng những khoảnh khắc ấm áp bên gia đình và bạn bè. Chúc Linh có một năm mới tràn đầy niềm vui, may mắn và thành công trong mọi lĩnh vực. Chúc mừng năm mới, Thùy Linh!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 24,
        name: 'kiều trọng mưu',
        firstName: 'Mưu',
        letters: 'Nhân dịp năm mới, tôi xin gửi đến Mưu những lời chúc tốt đẹp nhất. Chúc mừng năm mới Giáp Thìn, một năm mới đầy ắp hạnh phúc, may mắn và thành công. Hy vọng rằng những ngày tết sắp tới sẽ mang lại cho Mưu những trải nghiệm đáng nhớ và những giây phút hạnh phúc bên gia đình và bạn bè. Học ngôn ngữ Trung là một hành trình thú vị và đầy thách thức, nhưng tôi tin rằng sự nỗ lực của Mưu sẽ mang lại kết quả tốt đẹp. Chúc Mưu tiếp tục học tốt, hiểu rõ hơn về văn hóa và ngôn ngữ Trung Quốc, và có những cơ hội mới trong năm mới. Tết này, hãy dành thời gian bên gia đình và những người thân yêu. Chúc Mưu có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và đạt được những mục tiêu mà Mưu đề ra.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 25,
        name: 'cấn thị trà my',
        firstName: 'My',
        letters: 'Chúc mừng năm mới, đầu tiên là muốn gửi đến My những lời chúc tốt đẹp nhất nhân dịp năm mới Giáp Thìn 2024. Mong rằng những ngày Tết sắp tới sẽ đem đến cho My và gia đình một bầu không khí ấm áp và tràn ngập niềm vui. Nhân dịp năm mới, tôi muốn gửi tới My những lời chúc tốt lành, may mắn và thành công. Mong rằng những kỳ nghỉ này sẽ là thời điểm trở lại những kỷ niệm ấn tượng và đong đầy niềm hạnh phúc. Chúc My luôn giữ vững tinh thần lạc quan, tự tin và đầy năng lượng để vượt qua mọi thách thức trong cuộc sống. Năm mới là dịp để ta nhìn lại những gì đã qua và chuẩn bị cho những thách thức mới. Hy vọng rằng My sẽ có những trải nghiệm đáng nhớ, đạt được những mục tiêu mới và phát triển không ngừng trong hành trình của mình. Chúc My có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và may mắn luôn đồng hành. Mong rằng những dự định và ước mơ của My sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc My và gia đình một năm mới Giáp Thìn tràn đầy hạnh phúc và thành công!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 26,
        name: 'kiều nguyệt nga',
        firstName: 'Nga',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi gửi tới Nga những lời chúc tốt đẹp nhất. Mong rằng những ngày Tết sắp tới sẽ đem đến cho Nga và gia đình một không khí ấm áp, tràn ngập niềm vui và hạnh phúc. Năm mới đánh dấu một bước ngoặt mới, và tôi hy vọng rằng Nga sẽ bước vào năm mới với đầy đủ năng lượng tích cực và đam mê. Chúc Nga đạt được những mục tiêu mới, vượt qua mọi thách thức và trải nghiệm những điều mới mẻ, thú vị trong cuộc sống. Qua những tháng ngày cấp 3, chúng ta đã trải qua nhiều kỷ niệm đáng nhớ. Mong rằng những kỷ niệm ấy sẽ là nguồn động viên, là bảo bối quý giá cho Nga trong hành trình phía trước. Cũng nhớ giữ lại những niềm vui đơn giản nhưng ý nghĩa nhất, và chúc Nga có thêm nhiều kỷ niệm mới, đặc biệt trong năm mới này. Chúc Nga có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những dự định và ước mơ của Nga sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Nga và gia đình một cái Tết truyền thống đầy ý nghĩa và tràn đầy niềm hạnh phúc!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 27,
        name: 'nguyễn hoàng ngân',
        firstName: 'Ngân',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến Ngân những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc đặc biệt, nơi mọi người sum vầy bên gia đình và những người yêu thương. Cũng nhân dịp năm mới, tôi không quên chúc mừng cho sự phồn thịnh của công việc kinh doanh online của Ngân, đặc biệt là đam mê kinh doanh giày của bạn. Qua thời gian qua, tôi đã thấy Ngân đặt công sức và tâm huyết vào việc xây dựng cửa hàng online của mình. Mong rằng năm mới sẽ mang lại nhiều cơ hội mới, sự phát triển và thành công cho công việc kinh doanh của Ngân. Với đam mê trong lĩnh vực giày dép, tôi tin rằng Ngân sẽ tiếp tục đem đến cho khách hàng những sản phẩm chất lượng và dịch vụ tận tâm như thường lệ. Chúc Ngân có nhiều ý tưởng sáng tạo, những bước tiến mới trong kinh doanh, và tiếp tục trở thành một nguồn cảm hứng cho những người xung quanh. Chúc Ngân và gia đình có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống, và mong rằng năm mới sẽ là một chặng đường đầy ắp thành công và hạnh phúc. Chúc Ngân có một cái Tết truyền thống đầy ý nghĩa và ấm cúng bên gia đình và những người thân yêu.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 28,
        name: 'kiều thị phương oanh',
        firstName: 'oanh',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi tới Oanh những lời chúc tốt đẹp nhất. Tết đến, mọi góc phố rực rỡ và tôi tin rằng không khí Tết sẽ mang lại cho Oanh và gia đình một bầu không khí ấm áp và tràn đầy niềm vui. Năm mới là một cơ hội để ta nhìn lại quãng đường đã qua và hướng về phía trước với những hoài bão mới. Oanh, qua những năm cấp 3, chúng ta đã trải qua nhiều thử thách và kỷ niệm đáng nhớ. Hy vọng rằng những bước đi tiếp theo của Oanh sẽ đầy ý nghĩa và đạt được những thành công mới. Chúc Oanh có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những ước mơ và dự định của Oanh sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Oanh và gia đình có một cái Tết truyền thống đầy ý nghĩa và ấm cúng, bên nhau là niềm hạnh phúc lớn nhất.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 29,
        name: 'trần thanh phương',
        firstName: 'Phương',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Phương những lời chúc tốt đẹp nhất. Tết đến, những ngày đầu năm luôn là dịp để ta sum vầy bên gia đình và những người yêu thương. Mong rằng Phương sẽ có những khoảnh khắc ấm áp và đầy ý nghĩa cùng gia đình. Qua những năm cấp 3, chắc chắn đã có những kỷ niệm đáng nhớ và những thử thách đã giúp Phương trưởng thành hơn. Hy vọng rằng năm mới sẽ đem lại nhiều cơ hội mới, sự phát triển và thành công trong cả học tập và đam mê cá nhân. Phương là một người đam mê bóng đá, tôi hy vọng rằng sân cỏ sẽ là nơi nơi mà Phương thăng hoa và gặt hái được nhiều thành công. Bóng đá không chỉ là môn thể thao, mà còn là niềm đam mê, là nguồn động viên mỗi khi gặp khó khăn. Chúc Phương có những trận đấu hấp dẫn, đầy cảm xúc, và được trải nghiệm những chiến thắng lớn trong sự nghiệp thể thao của mình. Chúc Phương có một năm mới tràn đầy niềm vui, sức khỏe dồi dào và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Phương và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 30,
        name: 'đồng thị thanh tâm',
        firstName: 'Tâm',
        letters: 'Chúc mừng năm mới và một năm mới an khang thịnh vượng! Nhân dịp năm mới Giáp Thìn 2024, tôi muốn gửi đến  Tâm những lời chúc tốt đẹp nhất. Chắc chắn, những ngày Tết sắp tới sẽ đem đến cho Tâm và gia đình một không khí ấm áp, tràn đầy niềm vui và hạnh phúc. Thật khó tin và đặc biệt khi biết sinh nhật của Tâm trùng vào mùng 2 tết năm 2024 (11/02/2004 - 11/02/2024). Đó chắc chắn sẽ là một ngày sinh nhật độc đáo và đặc biệt trong cuộc đời. Chúc mừng Tâm và hy vọng bạn sẽ có một ngày sinh nhật đặc biệt, đầy ý nghĩa và tràn ngập niềm vui bên gia đình và bạn bè thân thiết. Chúc Tâm có một năm mới tràn đầy sức khỏe, may mắn và thành công. Mong rằng những ước mơ và dự định của Tâm sẽ trở thành hiện thực. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp. Chúc Tâm và gia đình có một cái Tết đầy ắp hạnh phúc và ý nghĩa!',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 31,
        name: 'nguyễn khắc thái',
        firstName: 'Thái',
        letters: 'Chúc mừng năm mới và đón chào năm Giáp Thìn 2024! Đầu tiên,người anh em nhận được lời chúc tết ấm áp và tràn ngập niềm vui từ tôi. Chắc chắn, những ngày Tết sắp tới sẽ là khoảnh khắc ý nghĩa, nơi mà mọi người sum vầy bên gia đình và những người thân yêu. Nhân dịp năm mới, tôi muốn gửi lời chúc tốt đẹp nhất đến Khắc Thái - người anh em cấp 3 đầy tài năng và đam mê. Nhớ đến những buổi học chung, những trò đùa và những khoảnh khắc vui vẻ đã tạo nên những kỷ niệm đáng nhớ. Thái đã chọn con đường học y, một ngành cao quý và đầy thách thức. Chúc mừng Thái và hy vọng anh sẽ có những bước tiến vững chắc trên hành trình chinh phục kiến thức và đóng góp cho xã hội. Thái thích bóng đá và những tình huống ăn mừng "điên loạn" của người anh em là điều không thể không nhắc đến. Hy vọng rằng anh sẽ tiếp tục đam mê này và mang lại nhiều niềm vui và hạnh phúc trong năm mới. Chúc Thái có một năm mới tràn đầy sức khỏe, may mắn và thành công. Hãy tận hưởng mỗi khoảnh khắc của cuộc sống và đón nhận năm mới với trái tim ấm áp.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 32,
        name: 'phạm quang thành',
        firstName: 'Thành',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, tôi xin gửi đến Thành những lời chúc tốt đẹp nhất. Tết đến, những ngày đầu năm luôn là khoảnh khắc đặc biệt, nơi mọi người cùng nhau chia sẻ niềm vui và tình thân. Mong rằng năm mới sẽ mang đến cho Thành và gia đình mình nhiều hạnh phúc và tình cảm ấm áp. Năm mới là cơ hội để chúng ta nhìn lại quãng đường đã đi và đặt kế hoạch cho những bước tiến mới. Hy vọng rằng Thành sẽ tiếp tục phát triển bản thân, đạt được những mục tiêu và ước mơ mình đã đề ra. Chúc Thành có một năm mới tràn đầy sức khỏe, may mắn và thành công trong mọi lĩnh vực. Hãy tận hưởng mỗi khoảnh khắc và đón nhận năm mới với trái tim ấm áp.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 33,
        name: 'khuất thị thanh thảo',
        firstName: 'Thảo',
        letters: 'Chúc mừng sinh nhật muộn (04/02/2004 - 04/02/2024) và chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024 và lời chúc sinh nhật trễ, tôi xin gửi đến Thảo những điều tốt đẹp nhất. Hy vọng những dòng chữ này sẽ đến tay Thảo trong bầu không khí tết tràn ngập ấm áp và niềm vui. Mặc dù sinh nhật đã trôi qua một chút , nhưng tôi không quên gửi đến Thảo những lời chúc tốt đẹp nhất. Chúc mừng Thảo đã thêm một tuổi mới, một năm mới đầy niềm vui, sức khỏe và thành công. Năm mới là dịp để bước vào những thách thức mới, và tôi tin rằng Thảo sẽ vượt qua mọi khó khăn và đạt được những thành công mới. Chúc Thảo có một năm mới tràn đầy năng lượng tích cực, đầy đủ sức khỏe để đối mặt với mọi thử thách. Hãy tiếp tục giữ vững niềm tin và đam mê trong những gì bạn đang theo đuổi. Chúc Thảo và gia đình có một cái Tết đầy ý nghĩa và hạnh phúc. Mong rằng mỗi ngày mới là một cơ hội mới để thực hiện những ước mơ và dự định của mình.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 34,
        name: 'nguyễn quang thoại',
        firstName: 'Thoại',
        letters: 'Chúc mừng năm mới! Nhân dịp năm mới Giáp Thìn 2024, gửi đến người anh em những lời chúc tốt đẹp nhất. Chúc Thoại có một năm mới tràn đầy niềm vui, hạnh phúc và đầy đủ sức khỏe để thực hiện mọi kế hoạch trong cuộc sống. Nhận thức được tầm quan trọng của việc đầu tư tiền đúng đắn, hy vọng rằng người anh em sẽ có những quyết định thông minh trong việc quản lý và đầu tư tài chính của mình. Chúc người anh em tìm ra những cơ hội đầu tư hữu ích và có những bước tiến vững chắc trên con đường tài chính. Năm mới cũng là dịp để chúng ta nhìn lại và đặt ra những mục tiêu học tập mới. Hy vọng rằng người anh em sẽ tiếp tục chăm chỉ, cẩn thận trong học hành và đạt được những thành tích xuất sắc. Mong rằng mỗi ngày mới là một cơ hội để người anh em học hỏi và phát triển bản thân. Chúc người anh em có một năm mới đầy thành công, kiếm được nhiều tiền hơn và học hành càng trở nên ấn tượng hơn. Hãy luôn giữ vững đam mê và tinh thần chủ động trong mọi hoạt động.',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 35,
        name: 'hoàng thị thu',
        firstName: 'Thu',
        letters: '',
        image: './avatar-img/Roronoa_Zoro.jpg'
    },
    {
        id: 14,
        name: 'phí thu huyền',
        firstName: 'Huyền',
        letters: '',
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
