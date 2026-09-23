# Khai báo biến trong JavaScript

JavaScript có 3 từ khóa để khai báo biến: `var`, `let`, `const`.

## 1. `var`

```js
var name = "Quang";
```

- **Phạm vi (scope):** function-scope — chỉ giới hạn trong function chứa nó, không bị giới hạn bởi block `{}` (if, for, while...).
- **Hoisting:** được đưa lên đầu scope và khởi tạo sẵn giá trị `undefined` (truy cập trước khi gán không lỗi, chỉ ra `undefined`).
- **Khai báo lại:** cho phép khai báo lại cùng một biến nhiều lần trong cùng scope mà không lỗi.
- **Gán lại giá trị:** cho phép.
- Đây là cách khai báo biến cũ (ES5), ít dùng trong code hiện đại vì dễ gây lỗi khó kiểm soát (scope leak, ghi đè biến ngoài ý muốn).

## 2. `let`

```js
let age = 20;
age = 21; // OK, gán lại được
```

- **Phạm vi (scope):** block-scope — chỉ tồn tại trong cặp `{}` gần nhất chứa nó.
- **Hoisting:** có hoisting nhưng nằm trong "temporal dead zone" (TDZ) — truy cập trước khi khai báo sẽ báo lỗi `ReferenceError`.
- **Khai báo lại:** không cho phép khai báo lại cùng tên biến trong cùng scope.
- **Gán lại giá trị:** cho phép.
- Dùng khi giá trị của biến sẽ thay đổi trong quá trình chạy (counter, biến vòng lặp, biến trạng thái...).

## 3. `const`

```js
const PI = 3.14;
```

- **Phạm vi (scope):** block-scope, giống `let`.
- **Hoisting:** cũng có TDZ giống `let`.
- **Khai báo lại:** không cho phép.
- **Gán lại giá trị:** không cho phép gán lại (phải khởi tạo giá trị ngay khi khai báo).
- Lưu ý: với object/array khai báo bằng `const`, không thể gán lại biến đó sang giá trị khác, nhưng **vẫn có thể thay đổi thuộc tính/phần tử bên trong**:

```js
const user = { name: "Quang" };
user.name = "Nguyen"; // OK
user = {}; // Lỗi: Assignment to constant variable.
```

- Nên ưu tiên dùng `const` mặc định, chỉ chuyển sang `let` khi thực sự cần gán lại giá trị.

## So sánh nhanh

| Đặc điểm            | `var`            | `let`         | `const`       |
|---------------------|------------------|---------------|----------------|
| Scope                | Function         | Block         | Block          |
| Hoisting             | Có (= undefined) | Có (TDZ)      | Có (TDZ)       |
| Khai báo lại         | Được             | Không         | Không          |
| Gán lại giá trị      | Được             | Được          | Không          |
| Nên dùng khi         | Hạn chế dùng     | Giá trị thay đổi | Giá trị không đổi |

## Các lỗi thường gặp

### 1. Dùng `var` trong vòng lặp với callback bất đồng bộ

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// In ra: 3, 3, 3 (thay vì 0, 1, 2)
```

- Nguyên nhân: `var` là function-scope nên cả 3 callback dùng chung 1 biến `i`, khi callback chạy thì vòng lặp đã kết thúc, `i = 3`.
- Cách sửa: đổi `var` thành `let` (mỗi vòng lặp `let` tạo ra 1 biến `i` riêng theo block).

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// In ra: 0, 1, 2
```

### 2. Gán lại giá trị cho `const`

```js
const total = 100;
total = 200;
// TypeError: Assignment to constant variable.
```

- Cách sửa: nếu biến cần thay đổi giá trị, khai báo bằng `let` ngay từ đầu thay vì `const`.

### 3. Tưởng `const` làm object/array bất biến (immutable)

```js
const arr = [1, 2, 3];
arr.push(4); // OK, không lỗi
console.log(arr); // [1, 2, 3, 4]
```

- Sai lầm: nghĩ `const` khóa toàn bộ nội dung object/array.
- Thực tế: `const` chỉ khóa **tham chiếu** của biến, không khóa nội dung bên trong. Muốn bất biến thật sự phải dùng `Object.freeze()`.

### 4. Sử dụng biến `let`/`const` trước khi khai báo (Temporal Dead Zone)

```js
console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 10;
```

- Nguyên nhân: `let`/`const` có hoisting nhưng nằm trong TDZ, không giống `var` (trả về `undefined`).
- Cách sửa: luôn khai báo biến trước khi sử dụng.

### 5. Khai báo trùng tên biến bằng `var` mà không nhận ra

```js
var user = "Quang";
// ... nhiều dòng code khác ...
var user = "Nguyen"; // Không lỗi, nhưng vô tình ghi đè giá trị cũ
```

- Vì `var` cho phép khai báo lại nên rất dễ vô tình ghi đè biến đã có, gây bug khó phát hiện.
- Cách sửa: dùng `let`/`const` — nếu khai báo trùng tên sẽ báo lỗi `SyntaxError: Identifier 'user' has already been declared` ngay lập tức, giúp phát hiện lỗi sớm.

### 6. Quên rằng `var` không có block-scope

```js
if (true) {
  var message = "Hello";
}
console.log(message); // "Hello" — vẫn truy cập được dù ở ngoài block if
```

- Nhiều người nhầm tưởng biến khai báo trong `{}` sẽ chỉ tồn tại trong đó, nhưng `var` thì không — dễ gây rò rỉ biến ra ngoài phạm vi mong muốn.
- Cách sửa: dùng `let`/`const` để giới hạn đúng phạm vi block.

### 7. Khai báo biến nhưng không dùng từ khóa nào (biến toàn cục ngầm)

```js
function setName() {
  username = "Quang"; // quên viết var/let/const
}
setName();
console.log(username); // "Quang" — biến bị rò ra global scope
```

- Khi không dùng `var`/`let`/`const`, JavaScript tự động tạo biến toàn cục (global), rất nguy hiểm vì dễ xung đột với biến khác.
- Cách sửa: luôn khai báo biến rõ ràng; dùng `"use strict"` ở đầu file/function để JavaScript báo lỗi `ReferenceError` khi quên khai báo.

## Quy tắc đặt tên biến

- Chỉ chứa chữ cái, số, `_`, `$`; không được bắt đầu bằng số.
- Phân biệt hoa/thường (`age` khác `Age`).
- Không được trùng từ khóa (keyword) của JavaScript.
- Nên đặt tên theo kiểu `camelCase`, có ý nghĩa, mô tả đúng dữ liệu chứa trong biến.
