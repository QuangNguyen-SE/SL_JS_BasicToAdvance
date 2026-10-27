
//Object trong javascript

//Nhìn giống như Key-Value trong Map và nó đúng là như vậy
var myInfo = {
    name: 'Quang',
    age: 20,
    // Obj lưu đc mảng
    hobbies: ['Gym', 'Swim', 'Date'],
    //Obj lưu được cả hàm
    said: ()=>{
        console.log('Hi, My name is minh quang');
    }
};

//Có mấy cách để trích xuất 1 key trong obj
// có 2 cách
//Cách 1:
console.log(myInfo.name);
//Cách 2: dùng [] và bên trong tên của key là chuỗi ''
console.log(myInfo['name']);
//----------------------------------------------------------------------------//

console.log('Truoc khi tao 1 thuoc tinh moi:');
console.log(myInfo);

// Gán 1 key mới cho obj đã đc khai báo trước đó
myInfo.address = 'SaiGon';
console.log('Sau khi tao them thuoc tinh moi: ');
console.log(myInfo);

//----------------------------------------------------------------------------//

//Vậy nếu 1 key trong obj không có value thì nó sẽ trả về gì?
console.log(myInfo.unKnowKey); // undefined

//--------------------------------------------------------------------------//

//tạo Key bằng tên biến bên ngoài.
var myKey = 'key';

var myObj={
    [myKey] : 'QuangDeep', //Biến myKey sẽ đổi tên thành 'key'
    ob : myInfo,
    getAge : function(){
        return this.ob.age; //Kĩ thuật cao, obj gọi obj gọi tới key của obj khác
        //This. chính là thằng obj .
    }
}
console.log(myObj);
console.log();
console.log(myObj.getAge());
//-------------------------------------------------------------------------------//

// Xóa thuộc tính thì sẽ xóa như thế nào
delete myInfo.age;