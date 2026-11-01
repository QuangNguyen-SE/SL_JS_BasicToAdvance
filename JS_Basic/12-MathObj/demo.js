/*

    MATH OBJECT, là 1 obj ko có constructor
    Các hàm đều được build sẵn, 
    ko có construcstor => không có news => Math. chứ không phải là Obj.

-Math.PI
-Math.round(): làm tròn số thập phân
-Math.ceil(): làm tròn số thập phân lên trên (lớn hơn 0);
-Math.floor(): làm tròn số xuống
-Math.random(): lấy ngẫu nhiên
-Math.min(): lấy gtri thấp
-Math.max(): lấy gtri cao 
 */


console.log(Math.random()); //Luôn trả về 1 chữ số thập phân

//vidu làm 1 game nho nhỏ

const arr = [
    'tai',
    'xiu'
];

const r = arr[Math.floor(Math.random()*2)];
console.log(r);

const form = document.getElementById("myForm");
form.addEventListener('submit', function (e) {
    //e.preventDefault();

    const data = new FormData(form);
    var choice = data.get('cacuoc');

    if(choice === r){
        document.getElementById('mess').innerHTML = 'Chuc mung ban da trung thuong';
    }else{
        document.getElementById('mess').innerHTML = 'Ban Da that bai';
    }

})