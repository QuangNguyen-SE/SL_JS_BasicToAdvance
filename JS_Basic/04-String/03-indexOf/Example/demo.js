/**
 * IndexOf là 1 method build-in trong java
 * trả về 2 giá trị: 1 dương, 1 âm
 *      Gtri dương: là vị trí đầu tiên của chữ cái đầu trong chuỗi đc tìm thấy.
 *      Gtri âm: -1 tức là không có từ muốn tìm trong chuỗi.
 */

// IndexOf có phân biệt hoa thường.
// IndexOf bắt đầu đếm từ số 0, nếu không có từ khóa bắt đầu.

var pattern="I love JS, i do want to learn JS";
console.log(pattern.length);
console.log(pattern.indexOf("JS"));
// IndexOf có 2 tham số, 1 là tham số chuỗi con, 2 là int vị trí bắt đầu tìm trong chuỗi mẹ.
console.log(pattern.indexOf("JS", 9));
//bắt đầu tìm ở vị trí thứ 9.

