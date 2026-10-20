/**
 * Replace là 1 method thay thế chữ trong 1 chuỗi thành 1 chữ khác
 * Replace tất nhiên nhận 2 tham số đều là kiểu String
 * Tham số đầu tiên là chữ cần thay thế.
 * Tham số thứ 2 là chữ thay thế.
 */

var myString = "Hello JS, i love JS";

console.log(myString.replace("JS", "JavaScript"));
// Nhưng nó chỉ replace chữ JS đầu tiên, vậy nếu muốn replace tất cả thì bắt buộc phải dùng regex (biểu thức chính quy)
console.log(myString.replace(/JS/g, "JavaScript"));