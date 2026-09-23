# Toán tử trong JavaScript

JavaScript có nhiều loại toán tử (operator), nhưng 4 loại cơ bản và dùng nhiều nhất là: **số học**, **gán**, **so sánh**, **logic**.

## 1. Toán tử số học (Arithmetic Operators)

Dùng để thực hiện các phép tính toán học trên giá trị số.

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
|---|---|---|---|
| `+` | Cộng | `5 + 2` | `7` |
| `-` | Trừ | `5 - 2` | `3` |
| `*` | Nhân | `5 * 2` | `10` |
| `/` | Chia | `5 / 2` | `2.5` |
| `%` | Chia lấy dư (modulo) | `5 % 2` | `1` |
| `**` | Lũy thừa | `5 ** 2` | `25` |
| `++` | Tăng 1 đơn vị | `let a = 5; a++` | `6` |
| `--` | Giảm 1 đơn vị | `let a = 5; a--` | `4` |

```js
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

## 2. Toán tử gán (Assignment Operators)

Dùng để gán giá trị cho biến, có thể kết hợp với phép toán số học để viết gọn hơn.

| Toán tử | Ý nghĩa | Ví dụ | Tương đương |
|---|---|---|---|
| `=` | Gán giá trị | `a = 5` | — |
| `+=` | Cộng rồi gán | `a += 3` | `a = a + 3` |
| `-=` | Trừ rồi gán | `a -= 3` | `a = a - 3` |
| `*=` | Nhân rồi gán | `a *= 3` | `a = a * 3` |
| `/=` | Chia rồi gán | `a /= 3` | `a = a / 3` |
| `%=` | Chia dư rồi gán | `a %= 3` | `a = a % 3` |

```js
let score = 10;
score += 5; // score = 15
score *= 2; // score = 30
```

## 3. Toán tử so sánh (Comparison Operators)

Dùng để so sánh 2 giá trị, kết quả trả về luôn là `true` hoặc `false`.

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
|---|---|---|---|
| `==` | Bằng (chỉ so sánh giá trị, tự động chuyển kiểu) | `5 == "5"` | `true` |
| `===` | Bằng tuyệt đối (so sánh cả giá trị lẫn kiểu dữ liệu) | `5 === "5"` | `false` |
| `!=` | Khác (tự động chuyển kiểu) | `5 != "5"` | `false` |
| `!==` | Khác tuyệt đối | `5 !== "5"` | `true` |
| `>` | Lớn hơn | `5 > 3` | `true` |
| `<` | Nhỏ hơn | `5 < 3` | `false` |
| `>=` | Lớn hơn hoặc bằng | `5 >= 5` | `true` |
| `<=` | Nhỏ hơn hoặc bằng | `5 <= 3` | `false` |

> Lưu ý: nên ưu tiên dùng `===` và `!==` thay vì `==`/`!=` để tránh lỗi khó lường do JavaScript tự động ép kiểu dữ liệu.

## 4. Toán tử logic (Logical Operators)

Dùng để kết hợp hoặc đảo ngược các biểu thức điều kiện (boolean).

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
|---|---|---|---|
| `&&` | AND — đúng khi **cả hai** vế đều đúng | `true && false` | `false` |
| `\|\|` | OR — đúng khi **ít nhất một** vế đúng | `true \|\| false` | `true` |
| `!` | NOT — đảo ngược giá trị boolean | `!true` | `false` |

```js
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true -> đủ điều kiện lái xe
console.log(age < 18 || !hasLicense); // false
```

## Tóm tắt

| Loại toán tử | Dùng để | Ví dụ tiêu biểu |
|---|---|---|
| Số học | Tính toán trên số | `+ - * / % **` |
| Gán | Gán giá trị cho biến | `= += -= *=` |
| So sánh | So sánh 2 giá trị, trả về boolean | `=== !== > <` |
| Logic | Kết hợp/đảo điều kiện boolean | `&& \|\| !` |
