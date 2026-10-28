// Obj constructor
/**
 * Obj constructor: là hàm khởi tạo
 * Quy ước đặt tên của constructor là viết hoa chữ cái đầu.
 * CONSTRUCTOR chỉ nên sử dụng khi cần tạo nhiều đối tượng có chung thuộc tính, đặc điểm.
 */

function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User ('Quang', 'Nguyen', 'Avatar');
var user = new User();

// Obj đc tạo ra từ constructor có tính năng và chức năng giống như 1 biến obj bình thường.
// Obj trong js được tạo thêm thuộc tính riêng cho mình
author.title = 'Đây là thuộc tính riêng của author';
user.comment = 'Thuộc tính riêng';