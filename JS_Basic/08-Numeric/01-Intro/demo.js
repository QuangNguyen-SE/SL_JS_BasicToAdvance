/**
 * Kiểu số number trong javascript
 * 
 * 1. Cách tạo giá trị number
 *      - Các cách tạo
 *      - Dùng cách nào? Tại sao?
 *      - Kiểm tra data type
 * 
 * 2. Làm việc với number
 *      - toString()
 *      - toFixed()
 */

var age = 18;
const PI = 3.14;

var otherNumber = new Number(9);
// Trong js chỉ có number chứ không phân tách ra như java.
// java có 3 kiểu dữ liệu số là int, double, float
// js có 2 kiểu dữ liệu số là int và float, không có double vì gộp chung vào float 

//Hàm toString biên 1 số thành String chức năng của WrapperClass String trong java
var myStr = age.toString();
console.log(typeof(myStr));


//toFixed: là hàm làm tròn gtri đến số thập phân bao nhiêu
console.log(PI.toFixed()); //bỏ trống tức là ko lấy gtri thập phân đằng sau
console.log(PI.toFixed(1)); // 3,1

//Lưu ý kiểu dữ liệu NaN không bao giờ bằng chính nó, nó không bằng với bất kì ai
var result = 200 / 'abc';
console.log(result == NaN); //NaN không bao giờ bằng bất cứ gtri nào. Vậy làm sao để kiểm tra nó có phải là 1 NaN.
// Chính vì không bao giờ bằng nên nó luôn là falsy
// chỉ cần value đó không bằng chính nó tức là NaN.
// hoặc dùng method built-in trong js là isNaN().

