var arr = [];
arr.push('Javascript');
arr.push('PHP');
arr.push('Java');
arr.push('Dart');
arr.push('Ruby');
arr.push('Python');

//For - lặp qua key của đối tượng

for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

//For - in

console.log();
console.log('For-in');

// Vẫn chạy nhưng ko nên dùng !!!
// biến i là chuỗi '0', '1'
for(let i in arr){
    console.log(i,arr[i], typeof i);
}

var obj = {
    name: 'Quang',
    age: '22'
}

console.clear();
for(let i in obj){ 
    // i ở đây chính là chuỗi 'name'
    console.log(i, obj[i]);
    // vì vậy obj ko thể chấm gọi property đc vì nó đang đc xem là biến chuỗi.
    // obj.'name' là sai
}

/*
- For-In nên dùng cho obj, bởi vì obj không phải là iterable
- Tuy nhiên for-in có cái bẫy đó là nó không biết cái nào thực sự là của obj đó nên phải dùng hasOwn

- For-Of nếu dùng với obj thì phải chuyển thành mảng trước, for-of đơn giản là duyệt từng ptu theo thứ tự
    - Trong obj không có index là số nên ko thể duyệt đc. 
*/