/**
 * 1. Tham số?
 *      - Định nghĩa?
 *      - Kiểu dữ liệu?
 *      - Tính private?
 *      - 1 tham số
 *      - Nhiều tham số
 * 2. Truyền tham số
 *      - 1 tham số
 *      - Nhiều tham số
 * 3. Arguements?
 *      - Đối tưởng arguements
 *      - Giới thiệu vòng for
 */

//                  Tham so la message
function writeMess(mess, mess2){
    console.log(mess);
}
//      Day la doi so 
writeMess("Hello, day la doi so");
// Vì sao hàm số console.log lại có thể nhận nhiều tham số.
// console.log cũng là 1 hàm bth 
// Tạo thử 1 hàm giống console
function writeLog(){
    var result='';
    // giống foreach bên java
    for(var param of arguments){
        result += ` ${param}`;
    }
    console.log(result);
}

// so sanh
console.log('console: ', 1, 2, 3, 4); 
writeLog('writeDown: ', 1, 2, 3, 4);
