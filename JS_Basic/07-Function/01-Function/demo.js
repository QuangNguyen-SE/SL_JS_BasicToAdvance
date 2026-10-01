/**
 * Function là 1 block code để thực hiện 1 chức năng gì đó
 * Hàm có 2 loại: Built-in - Tự xây
 * 
 * Tính chất của hàm:
 * - Hàm không tự chạy nếu ko gọi tới nó.
 * - Nhận tham số đầu vào
 * - hàm có thể trả về 1 giá trị hoặc không trả về giá trị nào hết
 * - 1 hàm chỉ có thể trả về 1 giá trị 
 * - Hàm mang kiểu data gì, thì biến trả về kiểu data đó.
 * - Trừ hàm void vì nó không trả về giá trị
 */

// Tạo hàm trong JS khác với 1 số ngôn ngữ như java
// Hàm trong js không cần định nghĩa kiểu dữ liệu của hàm
// Từ khóa khai báo hàm là FUNCTION.

function myFirstFunction(){
    // Block code
    alert('Xin Chao');
}
// Trong js có 1 hàm built in đó là hàm call()
// call dùng để gọi hàm để thực thi 1 hành động
// Nhưng call đc tối giản thành ().
// nên thay vì 
// myFirstFunction.call();
// thì
// myFirstFunction();

function myReturnFunction(mess){
    return mess;
}

document.getElementById('root').innerHTML=myReturnFunction('Xin chao cac ban, toi la javascript');
