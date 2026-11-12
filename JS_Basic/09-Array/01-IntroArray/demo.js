/*
Mảng trong JS - Array luôn là mảng động

1. Tạo mảng
    - Cách tạo 
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/


// Cách tạo mảng.
//Mảng trong JS hầu hết chứa đc toàn bộ kiểu dữ liệu có trong JS
//Vì js mảng luôn luôn là mảng động, và không cố định kiểu dữ liệu, đặc tính mảng trong js
var arr = [
    'String',
    1,
    NaN,
    undefined,
    function abc(){},
    obj={
        name: quag,
        age: 22
    },
];


var lang = [
    'Javascript',
    'PHP',
    'ruby',
];

console.log(lang);
console.log(lang.length);
console.log(lang[0]);


var arr = new Array(5); // khai báo mảng có 5 phần tử, nhưng chưa gán
// Nhưng ngta sẽ ko dùng, bởi vì mảng trong js luôn mà mảng động, nên chỉ cần
// khai báo var arr = []