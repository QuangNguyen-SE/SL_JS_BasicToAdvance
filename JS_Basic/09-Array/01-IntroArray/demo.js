/*
Mảng trong JS - Array

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