/*
1. Tạo Chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
*/

// Tạo chuỗi có 2 cách, 1 wrapper class, 2 là new Object.

// 1. Wrapper class

var s1 = "Hello I'm JavaScript";
//Đây thực chất là wrapper class, nghĩa là biến obj String đc gán trực tiếp,
    //không cần new. NHƯNG KHÁC VỚI JAVA, JS KHÔNG CÓ KHÁI NIỆM POOL
var s2 = new String("Hello I'm JavaScript");
// Đây là obj string, cùng là 2 cách tạo ra 2 value giống hệt nhau.
// Nhìn thì có vẻ 2 value bằng nhau, nhưng thực ra nếu so sánh kiểu dữ liệu chắc chắn không bằng.
console.log("S1 có thực sự bằng s2" + s1===s2);
// tại sao lại như vậy khi so sánh === tuyệt đối.
console.log("Kiểu data của s1 là: " + typeof(s1));
console.log("Kiểu data của s2 là: " + typeof(s2));
// Có new tức là có vùng nhớ mới, có obj mới.

/**
 *---------------------------------------------------------------------*
 * */

//2. Khi nào dùng dấu backslash (\)

var vidu = 'Hello I\'m JavaScript';
console.log(vidu);
// Nhưng nếu tôi muốn in ra dấu blackslash thì sao
var backslash = '\\'; //2 dấu backslash là 1 dấu quy ước
console.log(backslash);
// Còn nếu vừa muốn in dấu backslash đứng cạnh dấu ' đơn thì sao
var thamlam = 'Hello I\\\'m JavaScript';
console.log(thamlam);

/**
 *---------------------------------------------------------------------*
 * */


// 3. Xem độ dài chuỗi  
var fullname = 'Minh Quang';
console.log(fullname.length);
//Hàm length này tính luôn cả dấu cách.

//4. Template String trong javascript, rất quan trọng vì qua react vẫn hay dùng

var firstName = "Quang";
var lastName = "Nguyễn";
// cách thông thường
console.log("Tôi là: " + firstName  + " " + lastName); //Bị dài dòng
//Sử dụng template bằng dấu này ` `(nằm dưới nút esc) thay thế cho '' hoặc ""
// biến sẽ đc truyền vào nhờ cú pháp ${tên-biến}
console.log(`Tôi là ${firstName} ${lastName}`);

// Kể cả hàm trả về gtri cũng đc gọi thông qua ${}

function myName(){
    return "Minh Quang";
}
console.log(`Tôi là ${myName()}`); //lưu ý: hàm gọi tới phải có ()

/**
 *---------------------------------------------------------------------*
 * */

//5. Tính chất immutable (bất biến) và mutable(khả biến) của String.


var ss1 = "hello";
//Chúng ta sẽ thể sửa trực tiếp gtri hay các phần tử nào của biến String đc.

//không thể:
// ss1.toUpperCase();
// ss1[0]="H";
// Mà phải thông qua cách tự gán lại gtri cho nó.

ss1 = ss1.toUpperCase; //như vậy mới hợp lệ bởi vì sao??

/**
 * Biến string là bất biến nên không thể thay thế trực tiếp phần tử của nó như array đc
 * 
 * ss1 = ss1... nghĩa là trong Engine nó tự động xóa đi chuỗi cũ bằng cách chèn chuỗi mới vào chính nó. Tự động gán lại chứ không thể trực tiếp sửa phần từ của nó bên trong như mảng đc.
 * 
 * Trừ khi ta chuyển nó thành mảng kí tự
 */


