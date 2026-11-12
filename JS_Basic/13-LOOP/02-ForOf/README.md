# Vòng lặp `for...of`

- `for...of` **duyệt qua từng giá trị (value)** của một đối tượng **iterable** (Array, String, Map, Set, NodeList, `arguments`, generator...).
- Đây là cách duyệt mảng hiện đại và được dùng nhiều nhất hiện nay (ES6).
- **Object thường không iterable** nên không dùng trực tiếp `for...of` được.

## Cú pháp

```js
for (const item of iterable) {
  // item là giá trị của từng phần tử
}
```

## Các cách dùng

### 1. Duyệt mảng (cách dùng chính)

```js
const fruits = ["táo", "cam", "xoài"];

for (const fruit of fruits) {
  console.log(fruit);
}
// táo
// cam
// xoài
```

- Lấy trực tiếp giá trị, không cần `arr[i]`.

### 2. Duyệt chuỗi

```js
for (const char of "abc") {
  console.log(char); // a, b, c
}
```

- Xử lý đúng ký tự Unicode/emoji (duyệt theo code point), tốt hơn vòng `for` đếm chỉ số.

### 3. Duyệt `Map` và `Set`

```js
const set = new Set([1, 2, 2, 3]);
for (const n of set) console.log(n); // 1, 2, 3

const map = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}
```

### 4. Lấy cả chỉ số với `entries()`

```js
const arr = ["a", "b", "c"];

for (const [index, value] of arr.entries()) {
  console.log(index, value); // 0 a, 1 b, 2 c
}
```

- `index` ở đây là **số** (khác với `for...in` trả về chuỗi).

### 5. Duyệt object (qua `Object.keys/values/entries`)

```js
const user = { name: "An", age: 20, city: "HCM" };

for (const key of Object.keys(user)) console.log(key);
for (const value of Object.values(user)) console.log(value);

for (const [key, value] of Object.entries(user)) {
  console.log(key, "=", value);
}
```

### 6. Destructuring ngay trong vòng lặp

```js
const users = [
  { name: "An", age: 20 },
  { name: "Bình", age: 25 },
];

for (const { name, age } of users) {
  console.log(name, age);
}
```

### 7. Kết hợp `break` và `continue`

```js
const scores = [8, 5, 9, 4];

for (const score of scores) {
  if (score < 6) continue; // bỏ qua điểm dưới 6
  if (score === 9) break;  // dừng khi gặp 9
  console.log(score);      // 8
}
```

- `for...of` hỗ trợ `break`, `continue`, `return` (khác với `forEach`).

### 8. Dùng với `await`

```js
for (const url of urls) {
  const res = await fetch(url); // chạy tuần tự, từng cái một
  console.log(res.status);
}
```

- `forEach` không chờ `await` đúng cách, `for...of` thì có.

## Cách dùng phổ biến nhất

1. `for (const item of array)` để duyệt mảng.
2. `for (const [key, value] of Object.entries(obj))` để duyệt object.
3. `for (const [index, value] of array.entries())` khi cần cả chỉ số.
4. `for (const [key, value] of map)` để duyệt Map.
5. `for (const item of array)` kèm `await` để chạy bất đồng bộ tuần tự.

## Lưu ý

- Dùng `const` cho biến lặp nếu không gán lại trong thân vòng lặp (mỗi vòng là một biến mới). Dùng `let` nếu cần gán lại.
- Dùng trên **object thường** sẽ lỗi `TypeError: obj is not iterable`.
- Trả về **giá trị**, còn `for...in` trả về **key**.
- Không có sẵn chỉ số, muốn có phải dùng `.entries()`.
- Không duyệt thuộc tính kế thừa từ prototype (khác `for...in`).
- Với mảng thưa (có ô trống), `for...of` vẫn lặp qua ô trống và trả về `undefined`, còn `forEach` thì bỏ qua các ô đó.
- Nếu sửa mảng (thêm/xóa phần tử) trong lúc đang lặp, kết quả có thể khó đoán.

## Khi nào dùng

| Tình huống | Nên dùng |
|---|---|
| Duyệt giá trị của mảng | `for...of` |
| Duyệt mảng cần `break`/`continue`/`return` | `for...of` |
| Duyệt mảng có `await` tuần tự | `for...of` |
| Duyệt key và value của object | `for...of` + `Object.entries()` |
| Duyệt chuỗi, Map, Set | `for...of` |
| Duyệt key của object (đơn giản) | `for...in` |
| Chỉ cần chạy hàm cho mỗi phần tử, không cần dừng sớm | `forEach` |
| Cần biến đổi mảng thành mảng mới | `map` / `filter` / `reduce` |

## So sánh nhanh `for...in` và `for...of`

| | `for...in` | `for...of` |
|---|---|---|
| Trả về | key (chuỗi) | value |
| Dùng cho | Object | Iterable (Array, String, Map, Set) |
| Duyệt thuộc tính kế thừa | Có | Không |
| Dùng cho mảng | Không nên | Nên dùng |
