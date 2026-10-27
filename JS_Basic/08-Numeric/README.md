# Kiểu dữ liệu só (number)
### Kiểu số - Number
- Trong Javascript có 2 loại số:
    1. Lưu trữ dưới dạng 64 bit IEEE -754 (các số phẩy động) , độ dài tối đa là 2^53-1
    2. Số **Bigint** là loại số biểu thị số nguyên có độ dài tùy ý. Phía sau 1 số thường có `n` để biểu thị đây là số bigInt rất lớn.

# Cách khai báo
- Cách thông thường khi khai báo 1 số: 1 triệu 
```js
    var million = 1000000;
```
- Cũng khai báo như trên nhưng gọn hơn, `e` đại diện cho các số không đứng sau
```js
    var million = 1e6;
```

# Đối tượng Number
- Đối tượng Number trong JS là đối tượng giúp chúng ta định nghĩa số

### Phương thức và vai trò

| Phương thức | Vai trò | Giá trị trả về |
|---|---|---|
| `Number.isFinite()` | Xác định xem giá trị đã cho có phải là số hữu hạn hay không. | boolean |
| `Number.isInteger()` | Xác định xem giá trị đã cho có phải là số nguyên hay không. | boolean |
| `Number.parseFloat()` | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động. | number |
| `Number.parseInt()` | Chuyển đổi chuỗi đã cho thành một số nguyên. | number |
| `Number.prototype.toFixed()` | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân. | string |
| `Number.prototype.toString()` | Chuyển đổi và trả về số đã cho dưới dạng chuỗi. | string |

# VIDU:

```js

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'

```