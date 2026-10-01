# Các cách dùng hàm (Function) trong JavaScript

## 1. Function Declaration (khai báo hàm truyền thống)

```js
function greet(name) {
  return "Xin chào, " + name;
}

greet("Quang"); // "Xin chào, Quang"
```

Đặc điểm:
- Có **hoisting** — gọi được hàm trước cả vị trí khai báo trong code.
```js
sayHi(); // "Hi" — chạy được dù gọi trước khi khai báo

function sayHi() {
  console.log("Hi");
}
```

## 2. Function Expression (biểu thức hàm)

Gán một hàm ẩn danh (hoặc có tên) vào biến.

```js
const greet = function (name) {
  return "Xin chào, " + name;
};

greet("Quang");
```

Đặc điểm:
- **Không hoisting** như function declaration — biến `greet` được hoisted nhưng giá trị (hàm) chưa được gán, nên gọi trước sẽ lỗi.
```js
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};
```

## 3. Arrow Function (ES6+)

Cú pháp ngắn gọn hơn, thường dùng cho callback.

```js
const greet = (name) => {
  return "Xin chào, " + name;
};

// Rút gọn khi chỉ có 1 dòng return
const greet2 = (name) => "Xin chào, " + name;

// Rút gọn khi chỉ có 1 tham số (không cần dấu ngoặc)
const square = x => x * x;

// Không có tham số nào thì bắt buộc phải có ()
const sayHi = () => console.log("Hi");
```

Đặc điểm quan trọng nhất — **không có `this` riêng**: arrow function lấy `this` từ phạm vi cha (lexical `this`), khác hẳn function thường (có `this` riêng tùy theo cách gọi).

```js
const obj = {
  name: "Quang",
  sayNormal: function () {
    console.log(this.name); // "Quang" — this là obj
  },
  sayArrow: () => {
    console.log(this.name); // undefined — this không phải obj, mà là scope ngoài
  },
};
```

Arrow function cũng **không có** `arguments`, không dùng được làm constructor (`new`), không có `prototype`.

## 4. Anonymous Function (hàm ẩn danh)

Hàm không có tên, thường dùng làm callback truyền ngay vào chỗ cần dùng.

```js
setTimeout(function () {
  console.log("Chạy sau 1 giây");
}, 1000);

[1, 2, 3].map(function (n) {
  return n * 2;
});
```

## 5. Named Function Expression

Function expression nhưng vẫn đặt tên — tên đó chỉ dùng được **bên trong chính hàm** (hữu ích cho đệ quy hoặc debug stack trace dễ hơn).

```js
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1); // gọi lại chính nó qua tên "fact"
};

factorial(5); // 120
fact(5);      // ❌ ReferenceError: fact chỉ tồn tại bên trong hàm
```

## 6. IIFE — Immediately Invoked Function Expression (hàm tự gọi ngay)

Hàm được định nghĩa và gọi thực thi ngay lập tức, thường dùng để tạo scope riêng, tránh làm ô nhiễm biến toàn cục.

```js
(function () {
  var privateVar = "chỉ tồn tại trong này";
  console.log(privateVar);
})();

// Dạng arrow function
(() => {
  console.log("IIFE với arrow function");
})();
```

## 7. Function Constructor (hiếm dùng)

Tạo hàm từ chuỗi qua `new Function()` — code chạy chậm hơn, khó debug, hầu như không dùng trong thực tế.

```js
const add = new Function("a", "b", "return a + b");
add(2, 3); // 5
```

## 8. Method (hàm gắn trong object/class)

```js
// Trong object literal
const person = {
  name: "Quang",
  greet() {              // shorthand method (ES6)
    return "Hi " + this.name;
  },
};

// Trong class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}
```

## 9. Generator Function (ES6)

Hàm có thể **tạm dừng và tiếp tục** thực thi, dùng `function*` và `yield`.

```js
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = countUp();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

## 10. Async Function (ES2017)

Hàm luôn trả về `Promise`, cho phép dùng `await` để xử lý bất đồng bộ như code đồng bộ.

```js
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return data;
}

// Arrow function bất đồng bộ
const fetchData2 = async () => {
  const res = await fetch("...");
  return res.json();
};
```

---

## Bảng so sánh nhanh

| Cách khai báo | Hoisting | Có `this` riêng | Dùng làm constructor | Trường hợp dùng phổ biến |
|---|---|---|---|---|
| Function Declaration | ✅ | ✅ | ✅ | Hàm chính, dùng lại nhiều nơi |
| Function Expression | ❌ | ✅ | ✅ | Gán hàm vào biến, dùng khi cần điều kiện |
| Arrow Function | ❌ | ❌ (lấy từ scope ngoài) | ❌ | Callback, giữ nguyên `this` của scope cha |
| IIFE | — | ✅ | — | Tạo scope riêng, chạy 1 lần duy nhất |
| Generator (`function*`) | ✅ | ✅ | — | Tạo iterator, xử lý luồng dữ liệu tuần tự |
| Async Function | tùy loại nền | tùy loại nền | ❌ | Xử lý bất đồng bộ (API call, đọc file...) |

## So với Java

Java không có function độc lập (đứng ngoài class) — mọi hàm đều phải là method thuộc một class. JavaScript coi **hàm là First-Class Citizen**: có thể gán vào biến, truyền làm tham số, trả về từ hàm khác — đây là nền tảng cho các kỹ thuật callback, closure, và lập trình hàm (functional programming) rất phổ biến trong JS mà Java (trước Java 8 chưa có lambda) không hỗ trợ trực tiếp.

---

## Ghi chú: Tham số của hàm (Parameters)

### `arguments` và Rest parameters (`...args`)

`arguments` là object **giống mảng** chứa toàn bộ đối số truyền vào, chỉ có trong function thường (**arrow function không có**). Cách thay thế hiện đại là **rest parameters**.

```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
```

| | `arguments` | `...args` (rest) |
|---|---|---|
| Kiểu | Array-like (không có `map`, `reduce`...) | Mảng thật |
| Arrow function | ❌ | ✅ |
| Lấy phần còn lại | Phải `slice` thủ công | `function f(a, ...rest)` |

Chuyển `arguments` thành mảng thật: `Array.from(arguments)` hoặc `[...arguments]`.

### So sánh `...` trong JavaScript và Java

Cả hai đều gom các đối số truyền vào thành một mảng, và nếu đặt sau các tham số thường thì chỉ gom **phần còn lại**. Khác nhau ở vị trí đặt dấu `...`:

```js
// JavaScript: ... đứng TRƯỚC tên tham số, không cần kiểu
function hola(...rest) {}
hola(1, 2, 3); // rest = [1, 2, 3]
```

```java
// Java (varargs): ... đứng SAU kiểu dữ liệu, bắt buộc có kiểu
public static void hola(int... rest) { }
hola(1, 2, 3); // rest = int[] {1, 2, 3}

public static void hola(String name, int... rest) { }
hola("An", 1, 2, 3); // name = "An", rest = {1, 2, 3}
hola("An");          // rest = {} (mảng rỗng, không phải null)
```

Quy tắc của varargs trong Java:
- Phải là **tham số cuối cùng**.
- Mỗi method chỉ có **một** varargs.
- Bên trong method, `rest` là mảng bình thường (`rest.length`, `rest[0]`, vòng `for-each`...).
- Có thể truyền thẳng một mảng vào: `hola("An", new int[]{1, 2})`.

### Template literal `` `${param}` ``

Chuỗi viết bằng dấu backtick (`` ` ``), dùng `${...}` để chèn biến/biểu thức vào chuỗi (ES6).

```js
result += ` ${param}`;   // tương đương: result += ' ' + param;

const name = "An";
`Xin chào ${name}, 1 + 2 = ${1 + 2}`; // "Xin chào An, 1 + 2 = 3"

// Chuỗi nhiều dòng, không cần \n
const text = `dòng 1
dòng 2`;
```

Ví dụ tự viết lại `console.log` bằng `arguments` + template literal (xem `02-Parameters/demo.js`):

```js
function writeLog() {
  var result = '';
  for (var param of arguments) {
    result += ` ${param}`;   // mỗi tham số cách nhau 1 dấu cách
  }
  console.log(result);
}
writeLog(1, 2, 3); // " 1 2 3"
```
