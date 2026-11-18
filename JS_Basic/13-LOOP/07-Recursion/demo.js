// Đệ quy (recursion) là hàm gọi lại chính nó

function recursion(num){
    if(num == 0){
        return 0;
        //đây là câu lệnh dừng
    }
    //Chạy trước đệ quy
    recursion(--num);
    // các hàm ở dưới hàm đệ quy sẽ 
    // chạy sau khi hàm đệ quy gặp điều kiện dừng và bắt đầu thực thi ngược lại
    // nó sẽ thực thi các câu lệnh ở dưới đây ngay sau khi hàm dừng và giống như đang tua ngược lại
    console.log(num);
}
// recursion(10)

// Bài toán giai thừa

function giaiThua(num){
    if(num > 0){
        return num*giaiThua(num-1);
    }
    return 1; //ở đây phải return là 1 nếu là  0 thì kết quả nhân sẽ là 0
}