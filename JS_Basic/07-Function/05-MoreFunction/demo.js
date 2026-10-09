/**
 * Các loại function trong javascript
 * 1. Declaration function
 * 2. Expression Function
 * 3. Arrow Function
 * 4. Callback Function (hàm này gọi hàm kia)
 */


//1.
// Declare function là dạng function được định nghĩa và tên của function đó
function showMess(){

}
// 2.
// Expression function tức gắn function vào 1 biến nào đó.
// Biến đó không phải là tên function mà là biến lưu chỉ địa chỉ trỏ tới function đó (Biến con trỏ)
// Nếu biến đó trỏ tới 1 gtri khác function đó sẽ lặp tức bị js clear xóa
var showMess2 = function(){

}

//3.
// Arrow Function
var showMess3 = () => {
    
}

