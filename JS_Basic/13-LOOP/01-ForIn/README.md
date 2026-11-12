# Vòng lặp `for...in`

- `for...in` **duyệt qua tên các thuộc tính (key) có thể liệt kê (enumerable)** của một object, bao gồm cả thuộc tính kế thừa từ prototype.
- Đây là 1 công nghệ cũ ngta hay dùng `for-of` hoặc `for-each`.
## Cú pháp

```js
for (const key in object) {
  // key là tên thuộc tính (luôn là chuỗi)
}
```

## Các cách dùng

### 1. Duyệt object (cách dùng chính)

```js
const user = { name: "An", age: 20, city: "HCM" };

for (const key in user) {
  console.log(key, "=", user[key]);
}
// name = An
// age = 20
// city = HCM
```

- Lấy giá trị bằng `user[key]` (dùng ngoặc vuông vì `key` là biến).

### 2. Duyệt mảng (có, nhưng không nên)

```js
const arr = ["a", "b", "c"];

for (const i in arr) {
  console.log(i, arr[i]); // "0" a, "1" b, "2" c
}
```

- `i` là **chuỗi** `"0"`, không phải số, và có thể duyệt cả thuộc tính lạ gắn vào mảng.
- Với mảng nên dùng `for...of` hoặc `forEach`.

### 3. Duyệt chuỗi (hiếm dùng)

```js
for (const i in "abc") {
  console.log(i); // "0", "1", "2"
}
```

### 4. Kết hợp `break` và `continue`

```js
const scores = { an: 8, binh: 5, cuong: 9 };

for (const name in scores) {
  if (scores[name] < 6) continue; // bỏ qua người dưới 6
  console.log(name, scores[name]);
}
// an 8
// cuong 9
```

### 5. Chỉ lấy thuộc tính của chính object (bỏ qua kế thừa)

`for...in` duyệt cả thuộc tính từ prototype, nên cần lọc bằng `Object.hasOwn`:

```js
function Person(name) { this.name = name; }
Person.prototype.species = "human"; // thuộc tính kế thừa

const p = new Person("An");

for (const key in p) {
  console.log(key); // name, species
}

for (const key in p) {
  if (Object.hasOwn(p, key)) {
    console.log(key); // chỉ in name
  }
}
```

## Cách thay thế hiện đại

Nếu chỉ cần thuộc tính riêng của object, các hàm này gọn và an toàn hơn:

```js
Object.keys(user);    // ["name", "age", "city"]
Object.values(user);  // ["An", 20, "HCM"]
Object.entries(user); // [["name","An"], ["age",20], ["city","HCM"]]

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

## Lưu ý

- `key` luôn là **chuỗi**, kể cả khi key trông như số.
- Thứ tự duyệt: key kiểu số nguyên tăng dần trước, rồi đến key chuỗi theo thứ tự thêm vào.
- Không duyệt key kiểu `Symbol`.
- Không nên dựa vào thứ tự khi dùng `for...in` với mảng.
- Không nên thêm hoặc xóa thuộc tính của object trong lúc đang `for...in` trên chính nó.

## Khi nào dùng

| Tình huống | Nên dùng |
|---|---|
| Duyệt key của object | `for...in` hoặc `Object.keys()` |
| Duyệt cả key và value của object | `Object.entries()` với `for...of` |
| Duyệt mảng | `for...of` hoặc `forEach` |
| Cần bỏ qua thuộc tính kế thừa | `Object.hasOwn` hoặc `Object.keys()` |
