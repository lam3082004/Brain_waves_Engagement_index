# KHKT-QG-2021-use-the-engagement-index-in-the-classroom
BỘ GIÁO DỤC VÀ ĐÀO TẠO
TÓM TẮT DỰ ÁN 
THAM DỰ CUỘC THI NGHIÊN CỨU KHOA HỌC KỸ THUẬT HỌC SINH TRUNG HỌC CẤP QUỐC GIA NĂM HỌC 2020-2021
ĐỀ TÀI
QUẢN LÝ MỨC ĐỘ THAM GIA NHẬN THỨC DÙNG CÔNG NGHỆ SÓNG NÃO: ỨNG DỤNG TRONG NHÀ TRƯỜNG NHẰM CẢI THIỆN KẾT QUẢ HỌC TẬP CỦA HỌC SINH

Nhóm lĩnh vực: ROBOT VÀ MÁY THÔNG MINH

Nhóm tác giả: Bùi Tùng Lâm
   Lê Đình Quốc

 
LỜI CAM KẾT
Chúng tôi xin cam kết rằng các kết quả thực hiện trong nghiên cứu này đảm bảo tính trung thực về mặt khoa học. Chúng tôi không sao chép hay sử dụng lại kết quả của bất kì công trình nào trong nước và trên thế giới.
           Nhóm tác giả ký xác nhận
	Bùi Tùng Lâm
	Lê Đình Quốc

 
NỘI DUNG
MỞ ĐẦU	3
CHƯƠNG 1: THIẾT KẾ DỰ ÁN VÀ MÔ TẢ PHƯƠNG PHÁP NGHIÊN CỨU	1
1.	Lý thuyết chung	1
1.1	Bộ não người	1
1.2	Điện não đồ	2
1.3	Sóng não	2
2.	Thiết bị đọc sóng não Emotiv EPOC X	3
3.	Phương pháp ghi và trích xuất dữ liệu	5
4.	Thiết kế chung của dự án	6
4.1	Viết webapp	6
4.2	Thực nghiệm trên học sinh	7
CHƯƠNG 2: KẾT QUẢ VÀ THẢO LUẬN	8
1.	Giới thiệu	8
2.	Phân tích dữ liệu thực nghiệm	8
2.1	Tính toán chỉ số tương tác	8
2.2	Phân tích các chỉ số ghi được	9
3.	Kết quả và thảo luận	10
KẾT LUẬN	13
TÀI LIỆU THAM KHẢO	15

 

MỞ ĐẦU
Ngày nay, nhu cầu tìm hiểu tâm lý và nhu cầu người dùng có tác động quan trọng trong chiến lược phát triển của các tổ chức kinh tế, giáo dục, xã hội, văn hóa và dịch vụ trong việc tự điều chỉnh hành vi và thay đổi phương thức cung cấp dịch vụ đến với người dùng. Sự phát triển của công nghệ Giao diện Não-Máy (Brain-Machine Interface) mở ra một phương thức mới, công bằng và khách quan trong việc đo lường và kiểm chứng tính hiệu quả của các phương thức cung cấp dịch vụ đó, cho dù đó là việc tung ra thị trường một mẫu sản phẩm mới, điều tra thăm dò một chính sách mới của Chính phủ hay là chiến lược thay đổi các phương thức truyền đạt tri thức và cung cấp các dịch vụ giáo dục [1-5]. 
Việc sử dụng các chỉ số cảm biến sinh lý thần kinh như nhịp tim, phản ứng da-điện, và điện não đồ (Electroencephalograpy, viết tắt là EEG) đang ngày càng trở thành những công cụ quan trọng trong việc khám phá các trạng thái tư duy và phương thức ứng xử của người dùng [6]. Dữ liệu EEG cung cấp thông tin định lượng về não bộ theo cách khách quan với độ phân giải thời gian lên đến mili giây. Ngoài ra, các cảm biến của phương pháp EEG không phải được cấy trực tiếp vào màng não dấn đến tính không xâm lấn, tức về mặt vật lý hoàn toàn vô hại đối với người làm thực nghiệm. Phương pháp EEG có chi phí thấp hơn so với các phương pháp khác khiến EEG được sử dụng rộng rãi trong nhiều lĩnh vực, bao gồm: chuẩn đoán lâm sàng, theo dõi tác dụng của thuốc gây mê, độ sâu gây mê hay phát hiện những trạng thái là nguyên nhân dẫn đến những đợt động kinh. Gần đây, công nghệ dùng EEG đã có những tiến bộ đáng kể, cho phép nhận biết cảm xúc [6-7] (ví dụ, đánh giá sự buồn chán, tâm trạng căng thẳng cực độ, suy nghĩ tự tử), phân loại các trạng thái cảm xúc, mô hình hóa cảm xúc, v.v. 
	Lý do chọn đề tài
Khoa học kỹ thuật và công nghệ thông tin ngày càng phát triển dẫn đến các hình thức học tập cũng ngày càng đang dạng. Bên cạnh phương pháp dạy học truyền thống là dạy học trực tiếp, truyền thụ một chiều, ít tương tác thì các phương pháp dạy học trực tuyến, đa phương tiện và dạy học trải nghiệm tương tác dần trở nên phổ biến hơn [8]. Trong dự án này, chúng em đặc biệt quan tâm đến môi trường học tập trực tuyến, học tập qua video với câu hỏi đặt ra là:
“Dạy học qua video tác động như thế nào đến kết quả học tập của học sinh?”
Để trả lời câu hỏi này, bên cạnh cách kiểm tra đánh giá kiểu truyền thống (vấn đáp, trắc nghiệm, tư luận) còn một phương thức khác mới mẻ hơn và khách quan hơn, đó là đánh giá thông qua chỉ số tương tác (engagement index) mà thế giới đã phát triển trong những năm gần đây, áp dụng trong nhiều bối cảnh khác nhau [9]. Bằng việc đo sóng não của người học trong quá trình học và thi, chỉ số tương tác có thể được tính toán. Đây là chỉ số nhằm nhận biết và đo lường mức độ tham gia nhận thức của học sinh trong quá trình học tập - là kênh phản hồi tốt nhất cho thầy/cô để kiểm soát mức độ nhiều hay ít của lượng kiến thức truyền đạt và cải tiến phương thức truyền đạt. Nỗ lực của thầy/cô trong hoạt động như vậy dần dần sẽ đạt được mức độ phù hợp của lượng kiến thức bài giảng và phương thức truyền đạt, giúp học sinh có hiệu suất học tập tốt hơn, và ghi nhớ bàu giảng sâu và lâu hơn.
	Với định hướng đó chúng em quyết định lựa chọn đề tài “Quản lý mức độ tham gia nhận thức dùng công nghệ sóng não: Áp dụng trong nhà trường nhằm cải thiện hiệu suất học tập của học sinh”. Nội dung của dự án là sự kết hợp giữa việc nghiên cứu lý thuyết, xây dựng một công cụ đo lường và thử nghiệm trên một số đối tượng học sinh.
	Giả thiết khoa học
Chúng tôi dựa trên hai giả thuyết khoa học sau đây (1) chỉ số tương tác EI là chỉ số thích hợp để đo lường trạng thái tham gia nhận thức của học sinh gắn liền với một hoạt động học tập, hay nhiệm vụ học tập; (2) Học sinh tham gia vào quá trình lấy mẫu thử nghiệm hoàn toàn trung thực về mặt khoa học, nghĩa là họ tập trung nghe bài giảng và làm bài test có trách nhiệm.
	Câu hỏi nghiên cứu
	Tác động của chỉ số tương tác đến hiệu quả học tập như thế nào?
	Liệu chúng ta có thể làm hệ thống nhỏ gọn để đo lường chỉ số tương tác hay không?
	Liệu hệ thống đó có thể được nhân rộng mô hình để có thể có ứng dụng thực tiễn trong nhà trường hay không?
	Phương pháp nghiên cứu
	Phương pháp nghiên cứu thực tiễn: nghiên cứu các phương pháp đánh giá được sử dụng trong nhà trường.
	Phương pháp phân tích và tổng hợp lý thuyết: Phân tích các đặc điểm của song não và công nghệ đánh giá dùng sóng não, từ đó đề xuất hệ thống lý thuyết mới trong việc đánh giá chất lượng các hoạt động dạy-học.
	Phương pháp thực nghiệm khoa học: thử nghiệm hệ thống trên đối tượng là học sinh lớp 11 tại trường THPT Chuyên X.






 
CHƯƠNG 1: THIẾT KẾ DỰ ÁN VÀ MÔ TẢ PHƯƠNG PHÁP NGHIÊN CỨU
Lý thuyết chung
Bộ não người
Bộ não là cơ quan điều khiển trung tâm của con người. Các nghiên cứu khoa học khác nhau đã chứng minh rằng một số vùng não liên quan đến những suy nghĩ về cảm xúc, phản ứng với các kích thích cảm xúc cực điểm và quản lý, giám sát các tình huống thuộc về cảm xúc. Gần như tất cả các hoạt động quan trọng cần thiết cho sự sống, cũng như tất cả các cảm xúc, đều bắt nguồn từ bên trong não. Bộ não tiếp nhận và giải mã vô số tín hiệu do các bộ phận khác của cơ thể và môi trường gửi đến nó.
Bộ não bao gồm một số vùng khác nhau, mỗi vùng có các chức năng chuyên biệt. Hình 1.1 cho thấy các phần chính của não [10][11]. Trung tâm của não được tạo thành từ thân não và não giữa. Vỏ não là lớp bao bọc cho trung tâm não bộ. Vỏ não cực kỳ phát triển và có khả năng suy xét, trong khi các phần não khác tương đối ổn định.
 
Hình 1.1 Các thành phần của não bộ [10].
Điện não đồ
Điện não đồ là phương pháp đo trực tiếp các dao động điện sinh học từ bề mặt vỏ não (cũng gọi là phương pháp Electroencephalography trong tiếng Anh, tắt là EEG). Dòng điện cục bộ được tạo ra khi các tế bào thần kinh trong não được kích hoạt. Trong quá trình kích thích, khớp thần kinh của các đuôi gai gây ra sự vận chuyển của các ion Na+, K+, Misc- và Cl- qua các kênh trong màng nơron theo hướng điện thế màng chi phối và được đo dưới dạng độ lệch của điện thế trực tiếp với một điện thế tham chiếu khác. Độ lệch điện thế có nguyên nhân là tổng các điện thế phân loại sau synap từ các tế bào hình tháp tạo ra các lưỡng cực điện giữa soma (thân nơron) và đuôi gai đỉnh (nhánh thần kinh) [10-11].
Điện não đồ (EEG), một kỹ thuật hình ảnh y tế không xâm lấn, được định nghĩa là phương pháp ghi lại một dao động điện từ não bộ với sự trợ giúp của các điện cực kim loại gắn trên bề mặt da đầu và một phương tiện truyền dẫn điện [10]. Điện não đồ là phương pháp đọc hoàn toàn an toàn, có thể được tiến hành lặp đi lặp lại nhiều lần trên bệnh nhân, người lớn hay trẻ em mà không có bất kỳ rủi ro hoặc giới hạn nào. Các tín hiệu được các điện cực phát hiện thường rất yếu, vì vậy chúng phải được khuếch đại, số hóa và lưu trữ vào bộ nhớ máy tính. Điện não đồ là một công cụ y tế hữu ích vì nó có khả năng ghi lại cả hoạt động điện bình thường và bất thường của não. Đối với sinh lý thần kinh lâm sàng và thần kinh học, điện não đồ rất hữu ích.
Sóng não
Sóng não là biến thiên của điện áp chênh lệch theo thời gian, có độ lớn chỉ bằng vài phần triệu vôn. Có năm loại sóng não được công nhận rộng rãi, và các tần số chính của sóng điện não đồ ở người được liệt kê trong Bảng 1.1 cùng với các đặc điểm của chúng. Các mẫu sóng não cho các dạng sóng khác nhau được thể hiện trong Hình 1.2 [6].
Các vùng khác nhau của não không đồng thời phát ra cùng một tần số sóng não. Một tín hiệu điện não đồ giữa các điện cực đặt trên da đầu bao gồm nhiều sóng với các nét đặc trưng. Số lượng lớn dữ liệu nhận được từ một bản ghi EEG là duy nhất và rất khó giải thích. Các mô hình sóng não là duy nhất đối với mỗi cá nhân.
Bảng 1.1 Đặc điểm của năm sóng loại não cơ bản
Băng tần	Tần số	Trạng thái não
Gamma ()	>35 Hz	Tập trung
Beta (β)	12-35 Hz	Lo lắng, chi phối, hoạt động, chú ý, thư giãn
Alpha (α)	8-12 Hz	Thư giãn và thụ động
Theta (θ)	4-8 Hz	Ngủ nông, thư giãn sâu
Delta (ȭ)	0.5- 4Hz	Ngủ sâu

Hình 1.2. a) Các điện cực nhạy được gắn trên da đầu, bên ngoài vỏ hộp sọ để đo các dao động điện sinh học b) Các mẫu sóng não [6]
Thiết bị đọc sóng não Emotiv EPOC X
Tai nghe Emotiv gồm 16 điện cực được định vị theo tiêu chuẩn quốc tế 10-20. Nó cho phép ghi đồng thời 14 vùng trên đầu (O1, O2, P7, P8, T7, T8, FC5, FC6, F3, F4, F7, F8, AF3 và AF4). Hai điện cực bổ sung được sử dụng làm chuẩn, tương ứng với vùng P3 và P4. Tốc độ lấy mẫu của hệ thống là 128 Hz. 
Hình 1.3 (a) Thiết bị đo sóng não Emotiv EPOC và (b) chuẩn quốc tế 10-20 về phân phối các vị trí của các sensor[15].
Đi kèm với thiết bị, hãng Emotiv.com [12] cung cấp một giao diện lập trình Emotiv API cho phép người dùng truy xuất dữ liệu từ điện toán đám mây từ mã lập trình ứng dụng. Quy trình đồng bộ hóa giữa ghi và truy xuất dữ liệu được tóm tắt trên sơ đồ Hình 1.4. Trước tiên thiết bị đọc Emotiv EPOC X [13] kết nối với máy tính thông qua Bluetooth, phần mềm của hãng được cài trên máy tính cho phép thiết lập các kết nối cá nhân (secret ID, lisence) tới đám mây. Việc dữ liệu được đồng bộ hóa lên đám mây trong thời gian thực được thực hiện thông qua giao thức Websocket hai chiều và dữ liệu được đóng gói định dạng JSON có thể được bảo mật truyền qua internet tốc độ cao. Đám mây là một server ở đó dữ liệu thô EEG được xử lý bằng các phép biên đổi Fourier, lọc nhiễu, khuếch đại tín hiệu và tính toán phổ mật độ công suất trung bình đối với từng dải tần số. Kết quả của các tính toán trên đám mây cho phép người dùng có thể gửi yêu cầu và nhận về các phổ tần số, hay gọi là các sóng như delta (), theta (4 – 8 Hz), alpha (8 – 12 Hz), beta tần thấp (12-18Hz), beta tần cao (18-25Hz) và gamma (>25Hz). 
Phương pháp ghi và trích xuất dữ liệu
Để ghi được dữ liệu sóng não, thiết bị ghi sóng não Emotiv Epoc  X được cẩn thận đeo trên đầu của đối tượng. Các sensor luôn được giữ ẩm bằng dung dịch Senile. Phần mềm cung cấp bởi hãng Emotiv App cho phép kiểm tra độ mạnh và chất lượng của tín hiệu sóng não và chỉ cho phép quá trình thao tác làm việc khi độ mạnh đạt trên 85%. Emotiv App cũng cho phép người dùng huấn luyện (hay train) để tạo hồ sơ cá nhân (profile), đây là bản ghi bắt buộc mà mỗi đối tượng làm việc với thiết bị cần ghi trước.
Để có thể dùng các phổ tín hiệu vào các ứng dụng người dùng, hãng Emotiv cung cấp giao diện lập trình Cortex API, chúng em dùng ngôn ngữ lập trình để viết ra một webapp, đây là một website cá nhân có giao diện thân thiện cho phép người dùng có thể thao tác ghi, dừng và xuất dữ liệu sóng não thành file dữ liệu vào ổ đĩa cho phép phân tích, xử lý bằng các phần mềm xử lý dữ liệu chuyên dụng.
Thiết kế chung của dự án
Dự án “Quản lý mức độ tham gia nhận thức dùng công nghệ sóng não: Áp dụng trong nhà trường nhằm cải thiện hiệu suất học tập của học sinh” trải qua các quy trình tuần tự sau đây:
	Nghiên cứu tổng quan về công nghệ kiểm soát và đánh giá nhận thức dùng công nghệ sóng não;
	Chuẩn bị thiết bị (thiết bị ghi sóng não)
	Xây dựng phương pháp lấy mẫu (ghi sóng não)
	Xây dựng webapp lấy mẫu thực nghiệm
	Làm thực nghiệm trên các tình nguyện viên
	Phân tích số liệu thực nghiệm
	Đưa ra đánh giá và kết luận.
Chúng em xin phép báo cáo về một số bước chính như mô tả sau đây:
Viết webapp
Webapp có các tính năng sau đây:
	Cho phép tải một file video bài giảng có nội dung được chuẩn bị kỹ lưỡng, bao gồm các đơn vị kiến thức có thể đo lường, đánh giá được. 
	Khi người dùng nhấn vào nút Play (Bắt đầu học), video bài giảng bắt đầu chạy và quá trình ghi sóng não bắt đầu một cách đồng bộ.
	Ngay sau khi người dùng nhấn vào nút Stop (Dừng học), dữ liệu sóng não đã ghi được được xuất ra ổ cứng trong một file dữ liệu có định dạng *.csv.
	Sau khi học, người học sẽ trải qua một bài kiểm tra trắc nghiệm được thiết kế nhúng vào webapp. 
Chúng em thiết kế webapp cho phép người dùng dễ dàng tùy chỉnh việc tải video và tải bộ câu hỏi phù hợp với mục đích đánh giá bài giảng.
Thực nghiệm trên học sinh
Với mục đích đánh giá được tính hiểu quả của phương pháp đánh giá dùng công nghệ sóng não (như mục tiêu của đề tài này đã chỉ ra), phần mềm chúng em thiết kế được xem là công cụ để ghi lại số liệu thực nghiệm. Chúng em xin phép nhà trường để được phép làm thực nghiệm trên 14 học sinh lớp 11 có học lực khá và giỏi, tất cả đều cùng độ tuổi 17 và bao gồm 7 nam và 7 nữ. Học sinh được xem một bài giảng “Câu lệnh vào ra dữ liệu với ngôn ngữ C++”, thời lượng 16 phút và trả lời bộ câu hỏi trắc nhiệm gồm 20 câu. Toàn bộ quá trình này được ghi lại vào file dữ liệu có đánh dấu (marker) để nhận diện thời khoảng giữa các câu hỏi. Kết quả thu được sau quá trình học, nghi và xuất dữ liệu ra máy tính sẽ tiếp tục trải qua một khâu quan trọng, đó là phân tích và xử lý dữ liệu nhằm chỉ ra được các xu thế về tư duy của học sinh:
	Mức độ đầu tư tinh thần (mức độ chú ý, hưng phấn) của học sinh khi học qua video;
	Mức độ đầu tư tinh thần của học sinh đối với từng đơn vị kiến thức thể hiện trong câu hỏi;
Kết hợp với kết quả đúng/sai của bài trắc nghiệm, xu thế đồ thị sau khi phân tích dữ liệu giúp chúng em rút ra kết luận về chất lượng bài giảng (phương pháp truyền đạt có phù hợp không, lượng kiến thức có quá dễ, hay quá khó gây quá tải đối với học sinh, học sinh làm bài tập khó khăn hay dễ dàng đến mức nào)
 
CHƯƠNG 2: KẾT QUẢ VÀ THẢO LUẬN
	Giới thiệu
Trong dự án này, chúng tôi trình bày một cách tiếp cận mới để đánh giá chất lượng bài giảng và đề xuất chiến lược chỉnh, cải tiến phương pháp truyền đạt của thầy cô nhằm giúp học sinh tiếp thu được bài ở mức hiệu quả nhất. Mục tiêu chính của phương pháp này nhằm đánh giá mức độ tham gia tinh thần của người học tương ứng với một hình thức dạy học cụ thể hoặc dạy học tính hợp, đồng thời đề xuất sử dụng chỉ số tương tác để đánh giá chất lượng bài giảng. Lợi ích của phương pháp này là để giúp thầy cô và  nhà trường:
	Biết được kiến thức và cách truyền tải bài giảng có quá tải với học sinh hay không
	Đánh giá được mức độ các học liệu đa phương tiện (hình ảnh, âm thanh, hoạt hình…) có phù hợp với mức độ nhận thức của học sinh hay dẫn đến phản tác dụng (gây nhiễu quá trình nhận thức)
	Đánh giá mức độ hưng phấn (hiểu bài) của học sinh đối với phương pháp truyền đạt của giáo viên
	Giúp cho người học có một tham số để duy trì người học ở trạng thái tích cực trong suốt bài học bằng cách lựa chọn một cách thích ứng chiến lược tương tác tốt nhất
Phân tích dữ liệu thực nghiệm	
Tính toán chỉ số tương tác
Chỉ số tương tác được sử dụng trong công trình này dựa trên những phát hiện của Pope và các đồng nghiệp tại Cơ quan Hàng không và Vũ trụ Quốc gia (NASA) [9]. Chỉ số này, dựa trên nghiên cứu khoa học thần kinh về sự chú ý và cảnh giác, đã được nghiên cứu và sử dụng làm tiêu chí để chuyển đổi giữa chế độ lái thủ công và tự động và cho thấy chỉ số này có tác động tích cực đến hiệu suất của phi công khi nó được sử dụng kích hoạt chế độ lái tự động hoặc để kiểm soát mức độ tự động hóa nhiệm vụ trong buồng lái. Kể từ khi được phát triển, chỉ số tương tác này đã trở thành một tham số rất quan trọng và phổ biến để theo dõi và phân tích thời gian thực hoặc ngoại tuyến về mức độ tương tác của các cá nhân trong một số nghiên cứu trong phòng thí nghiệm. Ví dụ, trong môi trường giáo dục, chỉ số này được sử dụng để theo dõi mức độ tham gia của người học trong các hoạt động lắng nghe và giải quyết vấn đề; trong Game, chỉ số này được dùng để đánh giá mức độ đắm chìm của người chơi trong quá trình chơi trò chơi video, từ đó tự động điều chỉnh mức độ khó của trò chơi làm cho người chơi không bị căng thẳng, quá tải (trò chơi quá khó) và không bị nhàm chán (trò chơi quá dễ). Chỉ số tương tác này cũng được chọn làm tiêu chí để điều chỉnh độ khó của trò chơi theo mức độ tương tác của người chơi. Chỉ số tương tác được thiết bằng cách thiết lập một tỷ lệ giữa ba điện não đồ tự do dải tần số θ ( 4-8 Hz), α (8-13 Hz) và β (13-22 Hz) như sau:
𝐸𝑛𝑔_𝐼𝑛𝑑𝑒𝑥 = ( β)/(θ + α)
Phân tích các chỉ số ghi được
File dữ liệu sau khi được xuất ra ổ đĩa cứng bao gồm (Hình 2.1):
	01 file dữ liệu video
	01 file dữ liệu trả lời câu hỏi
	01 file kết quả trả lời câu hỏi
	01 file chứa đựng thông tin đánh dấu nhận biết thời lượng câu hỏi 
 
Hình 2.1 Các tệp dữ liệu được webapp xuất ra trên máy tính
 
Hình 2.2 Giao diện phần mềm Igor [14] dùng để phân tích dữ liệu và hiển thị kết quả
 
Hình 2.3 Toán chỉ số tương tác của (a) toàn bộ 20 câu hỏi và (b) của câu hỏi thứ 17 (trả lời sai đáp án) của học sinh (HS) thứ 9.
Kết quả và thảo luận
Hình 2.4 diễn tả giao diện của webapp mà dự án này phát triển, bên cạnh tính năng apload video bài giảng, làm bài kiểm tra trắc nghiệm và ghi lại sóng não phục vụ quá trình phân tích dữ liệu tiếp theo, webapp cũng cho phép hiển thị các sóng cơ bản trên tất cả 14 kênh cảm biến. Đây là một công cụ hữu ích để người học tự điều chỉnh mức dộ tham gia nhận thức của mình trong thời gian thực.
Kết quả phân tích dữ liệu của 14 học sinh tham gia vào thử nghiệm được thể hiện trong Hình 2.5. 	
Thông qua đồ thị trên cho thấy mức độ tham gia nhận thức của học sinh biến đổi theo xu hướng tham gia nhận thức của bản thân trong khi tương tác với câu hỏi trắc nghiệm, chỉ số này hiện thị cao nhất ở các câu hỏi 4, 5, 6, 7 sau đó có xu hướng giảm dần cho đến khi đạt thấp nhất ở câu hỏi thứ 20. 
 
Hình 2.6 Bảng kết quả bài kiểm tra trắc nghiệm khách quan của 14 học sinh tham gia thử nghiệm
Bảng số liệu trên Hình 2.6 cho biết kết quả bài kiểm tra trắc nghiệm khách quan của tất cả 14 học sinh tham gia thủ nghiệm. Từ số lieuj cho thấy, số lượng học sinh có câu trả lời sai ở các câu 3, 4, 5, 6, 7 có tỷ lệ cao hơn: Câu 3- 21,4%, Câu 4- 14,3%, Câu 5- 35,7%, Câu 6 -35,7%, Câu 7- 14,3%.
Dựa trên kết quả trên đây chúng em có thể kết luận rằng đơn vị kiến thức chứa đựng trong câu hỏi số 3,4,5,6,7 là các kiến thức khó đối với học sinh, hoặc là phương pháp truyền đạt của giáo viên ở trong video chưa thực sự hợp lý.
Nhưng thông tin trên đây có thể là nguồn tham khảo tốt đối với giáo viên.
 
KẾT LUẬN
Sản phẩm chúng tôi đạt được là một hệ thống cho phép học sinh hay nhà trường (giáo viên) quản lí và nhận biết được mức độ tham gia của học sinh vào hoạt động đang được tổ chức từ đó đề xuất phương pháp điều chỉnh phù hợp nhằm nâng cao chỉ số tham gia đồng nghĩa với việc nâng cao năng suất học tập của học sinh và cải thiện năng suất học tập của nhà trường
Chúng tôi được tiếp cận với phương pháp nghiên cứu khoa học tiên tiến, các thiết bị sử dụng phù hợp và có độ chính xác cao tuy nhiên tính thử nghiệm và đánh gia độ tính thiết bị của hệ thống còn chưa đạt được vì thời gian nghiên hạn chế và chưa đưa thử nghiệm trên diện điều tra rộng.
Bằng hiểu biết của chúng tôi một thiết bị như vậy chưa từng có ở Việt Nam
và chưa có định hướng áp dụng cho nhà trường. Công trình này giới thiệu lần đầu tiên một công cụ và phương pháp có tính hệ thống như vậy, tuy nhiên sản phẩm của dự án vẫn đang còn ở mức nghiên cứu. 
Trong tương lai chúng tôi sẽ cải thiện 
1)  Độ chính xác của thiết bị thông qua sử dụng các thiết bị đọc sóng não chính xác hơn
2)  Áp dụng các phương pháp nghiên cứu tiên tiến chằng hạn như machine learning, AI
3)  Cải thiện tính gọn nhẹ của hệ thống nằm ứng dụng rộng rãi, có thể tháo lắp di chuyển một cách dễ dàng nhằm không chỉ trong phạm vi nhà trường mà còn trong phạm công việc tại các cơ quan cơ sở, các công việc đòi hỏi di chuyển thường xuyên.
Mặc dù chúng tôi đã tìm thấy một số kết quả thú vị, nhưng cũng cần nhấn mạnh rằng đây là những kết quả rất sơ bộ, hiện chưa có phương pháp luận nào được thiết lập một cách chặt chẽ kiểm tra tác động của các cấp độ bài giảng đối với người học. Tuy nhiên, ngày càng có nhiều tài liệu cho rằng tác động của các phương pháp và học liệu có thể được đo lường thông qua sóng não EEG. Các nghiên cứu trong tương lai sẽ là cần thiết để mở rộng các kết quả này thành các phương pháp luận để định lượng việc đánh giá chất lượng bài giảng và các hoạt động dạy học thông qua sóng não EEG.
 
TÀI LIỆU THAM KHẢO
[1] C. Berka et al., “Real-time analysis of EEG indexes of alertness, cognition, and memory acquired with a wireless EEG headset,” International Journal of Human-Computer Interaction, 2004, vol. 17, no. 2, pp. 151-170.
[2] A. Gevins and M. E. Smith, “Neurophysiological measures of cognitive workload during human-computer interaction,” Theoretical Issues in Ergonomics Science, 2003, vol. 4, no. 1-2, pp. 113-131
[3] C. Berka et al., “EEG correlates of task engagement and mental workload in vigilance, learning, and memory tasks,” Aviation, Space, and Environmental Medicine, 2007, vol. 78, no. 5, pp. B231-B244.
[4] I. Jraidi and C. Frasson, “Student's uncertainty modeling through a multimodal sensor-based approach,” Journal of Educational Technology & Society, 2013, vol. 16, no. 1, pp. 219-230.
[5] Chaouachi, M., Jraidi, I. and Frasson, C. (2011) Modeling Mental Workload Using EEG Features for Intelligent Systems. In: User Modeling , Adaption and Personalization, Springer, Berlin, 50-61. https://doi.org/10.1007/978-3-642-22362-4_5
[6] S. Mehrotra, P. Abhang and B. Gawali, Introduction to EEG- and Speech-Based Emotion Recognition. Academic Press, 2016.
[6]	S. Mehrotra, P. Abhang and B. Gawali, Introduction to EEG- and Speech-Based Emotion Recognition. Academic Press, 2016.
[7] S. Oviatt, J. Grafsgaard, L. Chen, and X. Ochoa, “Multimodal learning analytics: assessing learners' mental state during the process of learning,” The Handbook of Multimodal-Multisensor Interfaces, 2019, Association for Computing Machinery and Morgan & Claypool., pp. 331-374.
[8] https://www.brookings.edu/research/beyond-reopening-schools-how-education-can-emerge-stronger-than-before-covid-19/ 

[9] A. T. Pope, E. H. Bogart, and D. S. Bartolome, “Biocybernetic system evaluates indices of operator engagement in automated task,” Biological Psychology, 1995, vol. 40, no. 1-2, pp. 187-195.
[10]	H. Brain, "Brain", En.wikipedia.org, 2021. [Online]. Available: https://en.wikipedia.org/wiki/Brain. [Accessed: 31- Jan- 2021].
[11] R. Parasuraman and D. Caggiano, “Mental workload,” Encyclopedia of the Human Brain, 2002, vol. 3, pp. 17-27.
[12] http://emotive.com, [Online] [Accessed: 25- Jan- 2021].
[13]	E. X, "EPOC X", Emotiv.gitbook.io, 2021. [Online]. Available: https://emotiv.gitbook.io/epoc-x-user-manual/. [Accessed: 31- Jan- 2021].
[14] http:// https://www.wavemetrics.com/ [Online] [Accessed: 25- Jan- 2021].
 
