// Giải quyết bài toán xóa các phần từ trùng lặp 
// không đc dùng built-in method function

/**
 * Hướng giải quyết:
    1. Dùng 2 vòng lặp O(n^2) và so sánh lần lượt các phần tử

    2. Dùng obj đóng vai trò như sổ ghi nhớ (cách nhanh nhất O(n) )

 */

// CÁCH 2: vì cách 1 quá dễ

function fr(init, condition, step, body){
    let loop=(i)=>{
        if(!condition(i)) return;
        body(i);
        loop(step(i));
    }
    loop(init);
}


// Cách 1:
var arr =['a', 'b', 1, 1, 3, 'c', 3, 'b'];
//  Output: ['a', 'b', '1', '3', 'c'];



let note = {};  // sổ ghi nhớ
let rs = []; // mảng chứa kết quả

fr(
    0, 
    (i)=>i<arr.length,
    (i)=> i+1,
    (i)=>{
        if(!note[arr[i]]){
            note[arr[i]] = true;
            rs.push(arr[i]);
        }
        return rs;
    }
)

console.log(rs);
