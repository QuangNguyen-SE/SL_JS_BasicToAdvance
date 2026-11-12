# Vòng lặp FOR
- Vòng lặp `for()` có 3 dạng chính đó là:
    1. for - Lặp qua key của đối tượng.
    2. for/in - Lặp qua key của đối tượng.
    3. for/of - Lặp qua value của đối tượng.

## So sánh `for...in` và `for...of`

| | `for...of` | `for...in` |
|---|---|---|
| Trả về | **Giá trị** | **Key / chỉ số** (kiểu chuỗi) |
| Dùng với mảng | Nên dùng | Không nên |
| Dùng với object | Không dùng trực tiếp được | Nên dùng |
| Dùng với chuỗi, `Map`, `Set` | Được | Không phù hợp |

```js
const arr = ["a", "b", "c"];
for (const i in arr) console.log(i); // "0", "1", "2"
for (const v of arr) console.log(v); // "a", "b", "c"

const user = { name: "An", age: 20 };
for (const key in user) console.log(key, user[key]); // name An, age 20
```

- `for...in` trên mảng trả về chỉ số dạng chuỗi và còn duyệt cả thuộc tính kế thừa từ prototype, nên không dùng cho mảng.
- `for...of` không dùng trực tiếp với object thường (`TypeError: object is not iterable`). Muốn lặp object bằng `for...of` thì dùng `Object.values()` hoặc `Object.entries()`:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, value); // name An, age 20
}
```

- Cách nhớ: **of** lấy **giá trị** (hợp với mảng), **in** lấy **tên key** (hợp với object).

# Vòng lặp WHILE
- Vòng lặp `while()` chỉ lặp khi điều kiện dúng.

# Vòng lặp do-while
- Vòng lặp `do-while` lặp ít nhất 1 lần, rồi sau đó mới xét tới điều kiện, nếu điều kiện đúng thì lặp tiếp.