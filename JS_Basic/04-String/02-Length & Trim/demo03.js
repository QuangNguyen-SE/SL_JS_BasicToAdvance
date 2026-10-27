/**
 * Length trong string trả về độ dài của chuỗi. 
 * Length mặc dù nó hoạt động như mảng kí tự, nhưng nó sẽ đếm từ 1.
 * Muốn truy cứu phần tử cuối cùng của chuỗi thì phải dùng lenght-1.
 */

var name="MO";
console.log(name.length);
// Length vẫn đếm cả khoảng trắng có trong kí tự
var str = " MOI "; //nhìn thì có 3 kí tự, nhưng thật ra nó lại là 5 kí tự 
console.log(str.length);
// Vì vậy có 1 method giúp loại bỏ khoảng trắng thừa 2 bên là trim()
console.log(str.trim().length);