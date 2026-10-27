/*
Làm việc với array

1. toString: Biến mảng thành chuỗi
2. Join: biến mảng thành chuỗi và có kí hiệu phân cách tự mình chọn
3. Pop: lấy và xóa phần tử theo thứ tự stack - last in first out
4. Push: thêm vào cuối mảng
5. Shift: xóa vả lấy phần tử ra theo thứ tự QUEUE - First in First out
6. Unshift : thêm 1 phần tử vào đầu mảng theo thứ tự QUEUE
7. Splice(x, y): x là vị trí đặt con trỏ, y là số lượng phần tử sẽ bị xóa và trả về các phần tử bị xóa
8. Splice(x, y, '..')
8. Concat(array): hàm nối mảng con vào mảng mẹ chấm, và trả về 1 mảng mới
9. Slice(x, y) : trả về 1 mảng chứa các phần tử con bị cắt trong khoảng index x -  trc y.
 */

var lang = [
    'JavaScript',
    'PHP',
    'Ruby'
];
console.log(lang)
console.log(lang.toString());
console.log(lang.join('-'));

console.log(lang.pop());
console.log(lang.toString());

console.log(lang.push('Ruby', 'Dart'));
console.log(lang.join("-"));

console.log('shift: ' + lang.shift()); //Trả về phần tử đầu tiên bị lấy 
console.log(lang.join('-'));

console.log('unshift:' + lang.unshift("JavaScript")); //Thềm JS vào và hiển thị số lượng phần tử
console.log(lang.join('-'));

//Splice là 1 method đặc biệt và nó có 2 cách dùng là XÓA và CHÈN.
//XÓA
console.log('Splice: '+lang.splice(2, 3)); // xóa các phần tử bắt đầu từ index số 2 và xóa 3 phần tử
// Xóa Ruby và Dart.
console.log(lang.join('-'));

//Chèn
//lang.push('Ruby', 'Dart');
console.log(lang.splice(0, 0, 'Python'));
console.log(lang.join('-'));
//Python được chèn lên đầu mảng
console.log(lang.splice(lang.length, 0, 'Ruby'));
console.log(lang.join('-'));

var lang2 = [
    'Css',
    'Html',
    'Kotlin'
];

lang3 = lang.concat(lang2);
console.log(lang3.join('-'));

//Splice xóa và chèn
var delEle = lang3.splice(4, 2, 'Java', 'Golang'); //xóa html và css, chèn vào là golang và java
console.log(`Phan tu bi xoa: ${delEle}`);
console.log(lang3.join('-'));


//Slice
var lang4 = lang3.slice(1, 3);
console.log('lang3: '+ lang3.join('-'));
console.log('lang4: '+ lang4.join('-'));
//Câu hỏi thú vị ???
// Tại sao slice(x, y) lại lấy x và trước y, sao ko lấy y?
//
//
//
// Quy tắc nửa mở

