/**
 * Slice là method cắt chuỗi trong string.
 * Slice nhận về 2 tham số
 * Tham số bắt đầu và tham số két thúc. Tham số bắt đầu phải < tham số kết thúc
 * Nếu hướng cắt là từ trái sang phải thì số nguyên dương.
 * Nếu vị trí cắt là từ phải sang trái thì số là nguyên âm.
 */

var myString = "Nguyen Minh Quang";
//Nguyên dương
//Lưu ý  method Slice chỉ cắt sau vị trí chỉ định, nghĩa là 7 nhưng nó sẽ lấy những thứ đằng sau vị trí 7
console.log(myString.slice(7, myString.length));
console.log(myString.slice(0, 11));
//Cắt ngược: Nguyên âm
console.log(myString.slice(-11, -1));
//Nhưng chỗ này có 1 nhược điêm đó là không thể lấy chữ cuối cùng "g"
// Vì tham số kết thúc không đc phép là 0.
// có 2 cách giải quyết:
//  - 1 là ko nhập tham số kết thúc.
console.log(myString.slice(-11));
//  - 2 là dùng method length.
console.log(myString.slice(-11, myString.length));
