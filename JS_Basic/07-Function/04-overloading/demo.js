// Trong js khi khai báo 1 hàm trùng tên trùng cấu trúc tham số
//  thì js sẽ tự động ghi đè hàm mới nhất lên hàm cũ
function showMess(){
    console.log('Mess-1');
}
function showMess(){
    console.log('Mess-2');
}

showMess();


// Thế nào là tính private trong hàm
function showName(){
    var fullName='Quang Nguyen';
    // Biến trong hàm ko được truyền ra ngoài hàm.
}

// console.log(fullName); báo lỗi undefined;


// trong js hàm có thể đc định nghĩa bên trong 1 hàm nhưng riêng java thì không
function func1(){
    function func2(){
        console.log('this is func 2');
    }
    func2();
}
func1();
