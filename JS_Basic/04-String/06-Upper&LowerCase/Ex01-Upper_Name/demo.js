/**
 * Bài tập: viết hoa chữ cái đầu trong tên.
 * Áp dụng cho tình huống thực tế. Nếu khách hàng nhập tên ko formals
 */

var fullName="ngUYEn miNH qUaNg";
//Expected result: Nguyen Minh Quang;

// Có rất nhiều cách để giải quyết bài toán này.

//Cách 1: dùng split với vòng lặp

var arr = fullName.toLowerCase().trim().split(/\s+/);
var formatName = " ";
arr.forEach(element => {
    formatName += element[0].toUpperCase() + element.slice(1) + " ";
});
console.log(formatName.trim());


// Cách 2: dùng str split() với map.
var formal = fullName.toLowerCase().trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(formal);
// Cách 3: dùng regex nhanh nhất.
//Regex có 1 nhược điểm đó là unike trình gõ dấu tiếng việt
// Nhưng js đã sửa đc lỗi này

var reg = fullName.trim().toLowerCase().replace(/(^|\s)\p{L}/gu, m => m.toUpperCase());
console.log(reg);
