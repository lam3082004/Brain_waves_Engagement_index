// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, results = [],  correct = 0, markerTimes = "", markerQuizResult = "";
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
    {
        question: "Câu 1: Thuật toán là dãy các bước?",
        a: "Vô hạn",
        b: "Hữu hạn",
        c: "Tuần hoàn",
        d: "Không xác định",
        answer: "B"
    },
    {
        question: "Câu 2: Một hệ thống tin học có dạng?",
        a: "Input->process->output",
        b: "Input->output->process",
        c: "Output->input->process",
        d: "Output->process->input",
        answer: "A"
    },
    {
        question: "Câu 3: Lệnh đọc dữ liệu trong c++ là?",
        a: "cout<<",
        b: "cin<<",
        c: "cin>>",
        d: "cout<<",
        answer: "C"
    },
    {
        question: "Câu 4: Lệnh in dữ liệu ra màn hình c++?",
        a: "cin>>",
        b: "cout>>",
        c: "cin<<",
        d: "cout<<",
        answer: "D"
    },
    {
        question: "Câu 5: lệnh scanf(“%<định dạng>”, biến) có ý nghĩa gì?",
        a: "Đọc dữ liệu",
        b: "In dữ liệu",
        c: "Xử lý",
        d: "Tính toán",
        answer: "A"
    }
    // {
    //     question: "Câu 6: Tốc độ đọc dữ liệu của cin và scanf như thế nào?",
    //     a: "Bằng nhau",
    //     b: "Cin nhanh hơn",
    //     c: "Scanf nhanh hơn",
    //     d: "Chưa hết",
    //     answer: "C"
    // },
    // {
    //     question: "Câu 7: Lênh in dấu kết thúc là?",
    //     a: "cout&#60;&#60;end",
    //     b: "cout&#60;&#60;endl;",
    //     c: "cout&#60;&#60;endline;",
    //     d: "cin&#60;&#60;endl",
    //     answer: "B"
    // },
    // {
    //     question: "Câu 8: Lệnh prinf(“%<định dạng>”,biểu thức)có ý nghĩa gì?",
    //     a: "Đọc vào dữ liệu",
    //     b: "Xử lý dữ liệu",
    //     c: "In ra dữ liệu",
    //     d: "Lưu dữ liệu",
    //     answer: "C"
    // },
    // {
    //     question: "Câu 9: Câu lệnh int a,b có ý nghĩa gì?",
    //     a: "Khai báo 2 biến a,b",
    //     b: "Khai báo thư viện",
    //     c: "Khai báo hàm chính",
    //     d: "Khai báo hàm chính",
    //     answer: "A"
    // },
    // {
    //     question: "Câu 10 Câu lệnh #include<bits/stdc++.h> có ý nghĩa gì?",
    //     a: "Bắt đầu chương trình",
    //     b: "Khai báo thư viện",
    //     c: "Kết thúc chương trình ",
    //     d: "Khai báo biến",
    //     answer: "B"
    // },
    // {
    //     question: "Câu 11: Câu lệnh cout&#60;&#60;a+b; là câu lệnh?",
    //     a: "Đọc vào 2 biến a,b",
    //     b: "Tính tổng a,b",
    //     c: "In ra tổng a+b",
    //     d: "In ra tổng a+b và xuống dòng",
    //     answer: "C"
    // },
    // {
    //     question: "Câu 12: Câu lệnh cout<<3*n; là câu lệnh?",
    //     a: "Đọc dữ liệu n",
    //     b: "Tính tích 3*n",
    //     c: "In ra 3*n ra màn hình",
    //     d: "In ra 3*n và xuống dòng",
    //     answer: "C"
    // },
    // {
    //     question: "Câu 13: Câu lệnh cout<<3*n<<&#34;&#92;&#110;&#34;; có nghĩa gì?",
    //     a: "Đọc dữ liệu n",
    //     b: "Tính tích 3*n",
    //     c: "In ra 3*n ra màn hình",
    //     d: "In ra 3*n và xuống dòng",
    //     answer: "D"
    // },
    // {
    //     question: "Câu 14: Câu lệnh using namespace có nghĩa gì?",
    //     a: "Đọc dữ liệu",
    //     b: "In ra dữ liệu",
    //     c: "Khai báo biến",
    //     d: "Khai báo tên thư viện std",
    //     answer: "D"
    // },
    // {
    //     question: "Câu 15: Câu lệnh cin>>a,b có nghĩa gì?",
    //     a: "Đọc 2 biến a,b",
    //     b: "Chỉ đọc biến a",
    //     c: "Báo lỗi",
    //     d: "In ra a,b",
    //     answer: "B"
    // },
    // {
    //     question: "Câu 16: Khi nhập dữ liệu cho câu lệnh cin>>a>>b; ta có thể ?",
    //     a: "Nhập trên một dòng có các số nhập liền sau",
    //     b: "Các số cách nhau một dấu trắng",
    //     c: "Các số không được nhập trên hai dòng",
    //     d: "Câu lệnh lỗi",
    //     answer: "B"
    // },
    // {
    //     question : "Câu 17: Câu lệnh int main() có nghĩa gì?",
    //     a: "Vào ra dữ liệu",
    //     b: "Tính toán",
    //     c: "Khai báo thư viện",
    //     d: "Khai báo hàm chính",
    //     answer: "D"
    // },
    // {
    //     question: "Câu 18: Lệnh nào được gọi là lệnh vào chuẩn?",
    //     a: "Cin>>",
    //     b: "Cout<<",
    //     c: "Prinf()",
    //     d: "Return",
    //     answer: "A"
    // },
    // {
    //     question: "Câu 19: Câu lệnh nào sau đây là lệnh đọc dữ liệu của C?",
    //     a: "Cin>>",
    //     b: "Scanf()",
    //     c: "Read()",
    //     d: "Readdata",
    //     answer: "B"
    // },
    // {
    //     question: "Câu 20: câu lệnh cout&#60;&#60;endl; và cout&#60;&#60;&#34;&#92;&#110;&#34;; có nghĩa gì?",
    //     a: "Xuống dòng",
    //     b: "Đọc dữ liệu",
    //     c: "In dữ liệu biểu thực",
    //     d: "Lệnh tính toán",
    //     answer: "A"
    //s}
];
    
    

// this get function is short for the getElementById function
function get(x){
    return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
    test = get("quizz");
    if(pos >= questions.length){
        $.ajax({
            url: "/result",
            method: "POST",
            data: {
                marker_times: markerTimes,
                marker_values: markerQuizResult
            },
            beforeSend: function( xhr ) {
                $('#loadingModal').modal('show');
            }
        }).done(function( data ) {
            //$('#loadingModal').modal('hide');
            $.ajax({
                url: "/export",
                beforeSend: function( xhr ) {
                    //$('#loadingModal').modal('show');
                }
            }).done(function( data ) {
                markerTimes = "";
                markerQuizResult = "";
                $('#loadingModal').modal('hide');
            });
        });

        var listResult = '';
        for(var ix in results) {
            var cssClass = 'danger';
            var equalMess = 'Sai';
            if(results[ix] === true) {
                console.log(results[ix]);
                cssClass = 'success';
                equalMess = 'Đúng';
            }
            listResult = listResult +
            '<li class="list-group-item list-group-item-'+cssClass+'">'+
                'Câu '+ix+': '+equalMess+
            '</li>';
        }
        listResult = '<ul class="list-group">'+listResult+'</ul>'
        test.innerHTML = "<h5 class='alert alert-warning'>"+
                            "You got "+correct+" of "+questions.length+" questions correct"+
                        "</h5>"+listResult;
        get("quizz_status").innerHTML = "Test completed";
        // resets the variable to allow users to restart the test
        pos = 0;
        correct = 0;
        results = [];
        // stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("quizz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    // display the question
    test.innerHTML = "<h5>"+question+"</h5>";
    // display the answer options
    // the += appends to the data we started on the line above

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
    test.innerHTML += "<button id='next-quizz' type='button' class='btn btn-success' onclick='checkAnswer()'>"+
                            "Gửi câu trả lời"+
                      "</button>";
}
function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    var result = false;
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
        //each time there is a correct answer this value increases
        correct++;
        result = true;
    }
    // changes position of which character user is on
    pos++;
    results[pos] = result;
    $.ajax({
        url: "/marker",
        method: "POST",
        data: {
            choice: choice,
            pos: pos, 
            result: result
        },
        beforeSend: function( xhr ) {
            $('#next-quizz').attr('disabled', true);
            $('#next-quizz').html('<span class="spinner-grow spinner-grow-sm"></span>Đang gửi...');
        }
    }).done(function( data ) {
        
        markerQuizResult = markerQuizResult + data.marker.value + '\n';
        markerTimes = markerTimes + pos + ' ' +data.marker.time + '\n';
        renderQuestion();
    });
}
// Add event listener to call renderQuestion on page load event
$('#start-quizz').click(function() {
    $.ajax({
        url: "/record",
        beforeSend: function( xhr ) {
            $('#loadingModal').modal('show');
        }
    }).done(function( data ) {
        $('#loadingModal').modal('hide');
        renderQuestion();
    });
});