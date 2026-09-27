# Truthy & Falsy trong JavaScript

## 1. Falsy là gì?

Falsy là những giá trị khi ép kiểu sang `boolean` (qua `Boolean(x)` hoặc trong ngữ cảnh điều kiện như `if`, `||`, `&&`, `!`) sẽ cho ra `false`.

JavaScript chỉ có **đúng 8 giá trị falsy**:

```js
Boolean(false);      // false
Boolean(0);          // false
Boolean(-0);         // false
Boolean(0n);         // false  (BigInt zero)
Boolean('');         // false  (chuỗi rỗng)
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false
```

## 2. Truthy là gì?

Truthy là **tất cả các giá trị còn lại** — bất cứ thứ gì không nằm trong danh sách 8 giá trị falsy ở trên đều là truthy, kể cả những giá trị trông có vẻ "rỗng" hoặc "0" nhưng thực chất không phải:

```js
Boolean('0');        // true  ⚠️ chuỗi "0" khác số 0
Boolean(' ');         // true  ⚠️ chuỗi có khoảng trắng
Boolean('false');    // true  ⚠️ chuỗi "false" vẫn là truthy
Boolean([]);         // true  ⚠️ mảng rỗng vẫn là truthy
Boolean({});          // true  ⚠️ object rỗng vẫn là truthy
Boolean(function(){}); // true
Boolean(Infinity);   // true
Boolean(-1);          // true  (mọi số khác 0 đều truthy)
```

## 3. Áp dụng vào toán tử `||` và `&&`

Khác với Java (chỉ nhận `boolean`, luôn trả về `true`/`false`), trong JavaScript `||` và `&&` trả về **giá trị toán hạng**, không ép về boolean:

- `||` → trả về toán hạng **truthy đầu tiên**, hoặc toán hạng cuối nếu tất cả đều falsy.
- `&&` → trả về toán hạng **falsy đầu tiên**, hoặc toán hạng cuối nếu tất cả đều truthy.

Cả hai đều có **short-circuit evaluation** (đánh giá ngắn mạch): gặp giá trị quyết định được kết quả là dừng ngay, không xét tiếp toán hạng sau.

---

## 4. Kỹ thuật OR Default Value (`||`)

Dùng `||` để gán giá trị mặc định khi giá trị đầu tiên là falsy.

```js
function greet(name) {
  var displayName = name || "Ẩn danh";
  console.log("Xin chào, " + displayName);
}

greet("Quang"); // Xin chào, Quang
greet("");      // Xin chào, Ẩn danh   (vì "" là falsy)
greet();        // Xin chào, Ẩn danh   (vì undefined là falsy)
```

### ⚠️ Cạm bẫy của `||`

Vì `||` coi **mọi** giá trị falsy là "không hợp lệ", nó sẽ ghi đè nhầm cả những giá trị hợp lệ về mặt logic nhưng falsy, ví dụ `0`, `""`, `false`:

```js
function setVolume(level) {
  var vol = level || 10;
  console.log(vol);
}

setVolume(0); // 10  ❌ Sai! Muốn tắt tiếng (0) nhưng lại bị ghi đè thành 10
```

→ Khi chỉ muốn thay thế `null`/`undefined` (không đụng đến `0`, `""`, `false`), nên dùng **Nullish Coalescing (`??`)** thay vì `||`:

```js
var vol = level ?? 10;
setVolume(0); // vol = 0 ✅ đúng ý muốn
```

---

## 5. Kỹ thuật AND Default Value (`&&`)

Dùng `&&` để **chỉ thực hiện/lấy giá trị phía sau khi điều kiện phía trước là truthy** — thường dùng để kiểm tra tồn tại trước khi truy cập, hoặc thực thi có điều kiện.

```js
var user = { name: "Quang" };

var name = user && user.name;
console.log(name); // "Quang"

var user2 = null;
var name2 = user2 && user2.name;
console.log(name2); // null  (dừng ngay ở user2, không truy cập .name → tránh lỗi)
```

Nếu không có `&&` ở đây, `user2.name` sẽ ném lỗi `TypeError: Cannot read properties of null`.

### Dùng `&&` để thực thi có điều kiện (thay cho `if`)

```js
var isLoggedIn = true;
isLoggedIn && console.log("Chào mừng bạn quay lại!");

// tương đương:
if (isLoggedIn) {
  console.log("Chào mừng bạn quay lại!");
}
```

### ⚠️ Lưu ý

Cách viết ngắn gọn với `&&`/`||` giúp code gọn hơn nhưng dễ giảm khả năng đọc nếu lạm dụng, đặc biệt khi vế phải có side-effect phức tạp. Với việc truy cập thuộc tính lồng nhau an toàn, JavaScript hiện đại đã có **Optional Chaining (`?.`)** rõ ràng hơn:

```js
var name3 = user2?.name; // undefined thay vì lỗi, không cần && dài dòng
```

---

## 6. Bảng tóm tắt

| Kỹ thuật | Cú pháp | Trả về khi nào | Mục đích |
|---|---|---|---|
| OR default value | `a \|\| b` | `a` nếu `a` truthy, ngược lại `b` | Gán giá trị mặc định (cách cũ, có cạm bẫy với `0`, `""`, `false`) |
| Nullish coalescing | `a ?? b` | `a` nếu `a` không phải `null`/`undefined`, ngược lại `b` | Gán giá trị mặc định an toàn hơn |
| AND default value | `a && b` | `b` nếu `a` truthy, ngược lại `a` | Truy cập/thực thi có điều kiện, tránh lỗi khi `a` là `null`/`undefined` |
| Optional chaining | `a?.b` | `a.b` nếu `a` không phải `null`/`undefined`, ngược lại `undefined` | Truy cập thuộc tính lồng nhau an toàn, thay thế `&&` dài dòng |
