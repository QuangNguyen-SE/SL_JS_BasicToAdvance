// Obj Prototype
/**
 * Prototype là cơ chế kế thừa của JavaScript. 
 * Mỗi object đều có một liên kết ẩn tới một object khác gọi là prototype của nó. 
 * Khi bạn truy cập một thuộc tính hoặc method mà object không có, JS sẽ tìm tiếp trong prototype, 
 * rồi prototype của prototype… cho tới null. 
 * Chuỗi này gọi là prototype chain.
 * 
    >>> Prototype chính là cơ chế hoạt động của extends, super(), .... <<<
    >>> EXTENDS, SUPER, ... Được xây dựng từ cơ chế của PROTOTYPE.
 */


// class chỉ là cú pháp gọn bên trên prototype:
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){ // đây chính là prototype
        return this.name;
    }
    sayHi(){
        return 'hi';
    }
}
const p1 = new Person('Quang'); 

const p2 = new p1.constructor('Thieu');
console.log('p2: '+ p2.name);
//----------------------------------------------------------------------------------------//
//PROTOTYPE: NGUYÊN MẪU
/**
 * Vì sao Prototype ít tốn vùng nhớ hơn??
 * Vì hàm hay biến prototype đc tạo ra, nó sẽ đc lưu lại đúng 1 chỗ.
 * các biến obj khác chỉ giữ con trỏ, trỏ tới vùng prototype đó thôi
 * nó không sinh ra thêm bản sao nào nữa.
 */

//CONSTRUCTOR
function User (firstName){
    this.firstName = firstName;
}

User.prototype.className = 'F8'; //Tạo 1 thuộc tính ngoài constructor thì ta phải thêm thằng prototype

//Ngoài tạo biến ra còn có thể tạo ra các method cho obj mà không cần dùng tới class
// Nó tương đương như hàm sayHi của Person
User.prototype.sayHi = function(){
        return 'hi';
    };

// Các biến obj đều có thể gọi tới hàm prototype này.
// Cách này tiết kiệm bộ nhớ vùng ram, 
// nhưng cách thức hoạt động dựa vào thằng obj;
User.prototype.getFirstName = function (){
    return this.firstName;
};


//----------------------------------------------------------------------------------------//

var author = new User ('Quang');
var user = new User('Minh');

console.log('Hàm dùng chung sayHi();')
console.log('Author: ' + author.sayHi());
console.log('User: '+ user.sayHi());
console.log();



// SO SÁNH extends cách cũ dùng prototype và extends cách mới

// Cách cũ
function Animal(name) { 
    this.name = name; 
}
Animal.prototype.eat = function () {};

function Dog(name) { 
    Animal.call(this, name); 
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Object.setPrototypeOf(Dog, Animal);   // phải tự làm nếu muốn kế thừa static
Dog.prototype.bark = function () {};

//---------------------------------------------------------------------//

// Cách mới

class Pet{
  constructor(name) { 
    this.name = name; 
};
  eat() {};
}

class Dogs extends Pet {
  bark() {};
}
