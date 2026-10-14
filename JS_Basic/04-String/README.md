# String: Immutable và Mutable

## 1. Immutable (bất biến)

**Immutable string** là chuỗi mà **nội dung không thể bị thay đổi sau khi tạo**.
Muốn "đổi" thì phải tạo ra một chuỗi **mới**, chuỗi cũ giữ nguyên.

Cả Java và JavaScript đều có chuỗi bất biến.

### Ví dụ JavaScript

```js
let s = "hello";
s[0] = "H";            // không có tác dụng
console.log(s);        // "hello"

let t = s.toUpperCase();
console.log(s);        // "hello" (chuỗi gốc không đổi)
console.log(t);        // "HELLO" (chuỗi mới)
```

### Ví dụ Java

```java
String s = "hello";
s.toUpperCase();         // tạo chuỗi mới rồi bị bỏ đi
System.out.println(s);   // "hello"

s = s.toUpperCase();     // phải gán lại mới dùng được kết quả
System.out.println(s);   // "HELLO"
```

### Phân biệt "đổi nội dung" và "đổi biến"

```js
let s = "hello";
s = "world";   // KHÔNG sửa chuỗi "hello"; chỉ cho s trỏ sang chuỗi khác
```

```
Trước:  s ──► "hello"
Sau:    s ──► "world"      ("hello" vẫn nguyên, chỉ là không ai trỏ tới nữa)
```

- **Biến** thì đổi được (trừ khi khai báo `const` hoặc `final`).
- **Nội dung chuỗi** thì không đổi được.

```js
let s = "hi";
s += " there";   // tạo chuỗi mới "hi there", gán lại cho s
```

## 2. Mutable (khả biến)

**Mutable** là kiểu dữ liệu có thể **sửa trực tiếp tại chỗ** mà không cần tạo đối tượng mới.

### Ví dụ JavaScript: mảng ký tự

```js
let arr = ["h", "i"];
arr[0] = "H";            // sửa ngay trong mảng
arr.push("!");           // thêm phần tử, vẫn là mảng cũ
console.log(arr);        // ["H", "i", "!"]

arr.join("");            // "Hi!"  (mảng -> chuỗi)
"Hi!".split("");         // ["H","i","!"]  (chuỗi -> mảng)
```

### Ví dụ Java: `char[]` và `StringBuilder`

```java
char[] arr = {'h', 'i'};
arr[0] = 'H';                       // sửa ngay trong mảng
System.out.println(arr);            // Hi

StringBuilder sb = new StringBuilder("hi");
sb.setCharAt(0, 'H');               // sửa tại chỗ
sb.append("!");                     // nối thêm, không tạo chuỗi mới
System.out.println(sb);             // Hi!
String result = sb.toString();      // chuyển về String khi cần
```

## 3. So sánh

| | Immutable (`String`) | Mutable (`char[]`, `StringBuilder`, mảng JS) |
|---|---|---|
| Sửa nội dung | Không, phải tạo bản mới | Có, sửa tại chỗ |
| Dùng chung nhiều nơi | An toàn | Dễ bị đổi ngầm |
| Làm key của Map | Tốt | Không nên |
| Nối nhiều lần trong vòng lặp | Chậm (nhiều chuỗi trung gian) | Nhanh |
| Thread-safe | Có | Không (`StringBuilder`) |

## 4. Nối chuỗi trong vòng lặp

Vì chuỗi bất biến, mỗi lần `+=` tạo một chuỗi mới. Với số lần lớn nên dùng kiểu mutable:

```java
// Chậm: tạo 10000 chuỗi trung gian
String s = "";
for (int i = 0; i < 10000; i++) {
    s += i;
}

// Nhanh: sửa tại chỗ trên một đối tượng
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i);
}
String s2 = sb.toString();
```

```js
// JS: gom vào mảng rồi join (engine cũng đã tự tối ưu phần lớn trường hợp)
const parts = [];
for (let i = 0; i < 10000; i++) {
    parts.push(i);
}
const s = parts.join("");
```

## 5. Chuỗi có phải mảng ký tự không?

- **Khái niệm:** chuỗi là một dãy ký tự, nhưng không nhất thiết cài đặt bằng mảng.
- **Java:** `String` là class riêng, `char[]` là kiểu khác, phải chuyển đổi (`toCharArray()`, `new String(arr)`).
- **JavaScript:** chuỗi là primitive, `Array.isArray("hi")` là `false`; chuyển qua lại bằng `split("")` và `join("")`.
- **C:** chuỗi là mảng `char` kết thúc bằng `'\0'`.
