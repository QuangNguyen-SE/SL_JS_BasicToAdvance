# Expression Logic: `&&`, `||` và Optional Chaining

## 1. Bài toán: hiển thị tên, mặc định "an danh"

```js
var display = name && " " || "an danh";
```

### Lỗi 1: không bắt được khoảng trắng

`" "` (chuỗi có dấu cách) là **truthy**, chỉ chuỗi rỗng `""` mới là falsy.

```js
var name = " ";            // khách chỉ bấm cách
var display = name && " " || "an danh";
// (" " && " ") || "an danh"
// -> " " || "an danh"
// -> " "                  // vẫn truthy, không rơi về "an danh"
```

### Lỗi 2: code không trả về `name`

`&&` có độ ưu tiên cao hơn `||`, nên biểu thức là `(name && " ") || "an danh"`.
Khi `name = "Quang"`, kết quả là `" "` (vế phải của `&&`), không phải `"Quang"`.

```js
var name = "Quang";
name && " " || "an danh";   // " " (sai, mất tên)
```

### Cách sửa

Dùng `trim()` để cắt khoảng trắng hai đầu rồi mới kiểm tra:

```js
var display = name && name.trim() || "an danh";
```

| `name`        | Kết quả     |
| ------------- | ----------- |
| `"Quang"`     | `"Quang"`   |
| `"  Quang "`  | `"Quang"`   |
| `" "`         | `"an danh"` |
| `""`          | `"an danh"` |
| `null`        | `"an danh"` |
| `undefined`   | `"an danh"` |

Phần `name &&` đứng trước để tránh lỗi `null.trim()`.

### Cách hiện đại hơn

```js
var display = name?.trim() || "an danh";
```

## 2. Optional chaining (`?.`)

Cho phép truy cập thuộc tính hoặc gọi hàm một cách **an toàn**: nếu giá trị đứng trước
là `null` hoặc `undefined`, biểu thức dừng lại và trả về `undefined` thay vì ném lỗi.

```js
let user = null;

user.name;      // TypeError: Cannot read properties of null
user?.name;     // undefined (không lỗi)
```

Trước đây:

```js
let city = user && user.address && user.address.city;
```

Giờ:

```js
let city = user?.address?.city;
```

### Ba cách dùng

```js
obj?.prop        // truy cập thuộc tính
obj?.[key]       // truy cập bằng ngoặc vuông / chỉ số mảng
obj.method?.()   // gọi hàm, chỉ gọi nếu hàm tồn tại
```

```js
let arr = null;
arr?.[0];                  // undefined

let user = { name: "An" };
user.sayHi?.();            // undefined (không có hàm sayHi, không lỗi)
user.name?.toUpperCase();  // "AN"
```

### Lưu ý

- Chỉ chặn `null` và `undefined`, **không** chặn các giá trị falsy khác (`0`, `""`, `false`):

  ```js
  let s = "";
  s?.length;   // 0 (vẫn truy cập bình thường)
  ```

- Chỉ cắt ngắn phần còn lại của chuỗi truy cập:

  ```js
  user?.address.city;   // user có nhưng address undefined thì VẪN lỗi
  user?.address?.city;  // an toàn cả hai tầng
  ```

- Không dùng ở vế trái phép gán: `user?.name = "A"` là lỗi cú pháp.
- Hay đi cặp với `??` để đặt mặc định chỉ khi là `null`/`undefined`: `user?.age ?? 18`.
