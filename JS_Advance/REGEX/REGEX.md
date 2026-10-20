# Regex trong JavaScript

## 1. Cách tạo regex

```js
const re1 = /abc/;              // literal (hay dùng nhất)
const re2 = new RegExp("abc");  // từ chuỗi (khi pattern động), phải escape: "\\s"
```

## 2. Ký hiệu thường dùng

| Ký hiệu | Ý nghĩa | Ví dụ khớp |
|---|---|---|
| `.` | bất kỳ ký tự nào (trừ xuống dòng) | `a.c` → "abc" |
| `\d` | chữ số 0-9 | "7" |
| `\w` | chữ cái không dấu, số, `_` | "a", "5" |
| `\s` | khoảng trắng (cách, tab, xuống dòng) | " " |
| `\D` `\W` `\S` | phủ định của 3 cái trên | |
| `^` | đầu chuỗi | `^a` |
| `$` | cuối chuỗi | `a$` |
| `\b` | ranh giới từ | |
| `[abc]` | một trong các ký tự a, b, c | |
| `[a-z]` | một ký tự trong khoảng | |
| `[^abc]` | không phải a, b, c | |
| `a\|b` | a hoặc b | |
| `( )` | nhóm, và bắt giá trị | |
| `\p{L}` | chữ cái Unicode bất kỳ (cần cờ `u`) | "đ", "ê" |

> `\w` và `\b` **không nhận chữ có dấu** (đ, ê, ơ...). Với tiếng Việt dùng `\p{L}` + cờ `u`.

## 3. Lượng từ

| Ký hiệu | Ý nghĩa |
|---|---|
| `*` | 0 hoặc nhiều lần |
| `+` | 1 hoặc nhiều lần |
| `?` | 0 hoặc 1 lần |
| `{3}` | đúng 3 lần |
| `{2,4}` | từ 2 đến 4 lần |

Ví dụ: `\s+` = một hoặc nhiều khoảng trắng liền nhau.

## 4. Cờ (đặt sau dấu `/` cuối)

| Cờ | Ý nghĩa |
|---|---|
| `g` | global: tìm **tất cả** đoạn khớp, không dừng ở cái đầu |
| `i` | không phân biệt hoa thường |
| `u` | bật Unicode (bắt buộc cho `\p{L}`) |

## 5. Các method dùng với regex

```js
const s = "nguyen van quang";

/van/.test(s);              // true/false: có khớp không
s.match(/\w+/g);            // ["nguyen","van","quang"]
s.split(/\s+/);             // cắt theo khoảng trắng
s.replace(/van/, "VAN");    // thay đoạn khớp đầu tiên
s.search(/van/);            // vị trí khớp đầu tiên (7), không có thì -1
```

## 6. `replace` với callback

```js
"nguyen van".replace(/\b\w/g, c => c.toUpperCase());  // "Nguyen Van"
```

- Tham số 1: mẫu để tìm. Tham số 2: hàm callback.
- Mỗi lần tìm thấy đoạn khớp, `replace` **gọi callback và truyền đoạn khớp vào** làm đối số đầu tiên (`c`).
- Giá trị callback `return` sẽ thay thế đoạn khớp.
- Tên `c` tự đặt được (`c`, `x`, `match`...), JS gán theo **vị trí** tham số.
- Có cờ `g` thì callback chạy nhiều lần; không có thì chỉ thay đoạn đầu tiên.
- Callback nhận thêm: các nhóm bắt `( )`, vị trí khớp, chuỗi gốc.

Mô phỏng cơ chế bên trong:

```js
function myReplace(str, regex, callback) {
  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    result += str.slice(lastIndex, match.index); // phần không khớp, giữ nguyên
    result += callback(match[0]);                // gọi callback, truyền đoạn khớp
    lastIndex = regex.lastIndex;
  }

  result += str.slice(lastIndex);
  return result;
}
```

`while ((match = regex.exec(str)) !== null)`: phép gán `=` là biểu thức, trả về giá trị vừa gán. Ngoặc trong bắt buộc, vì `!==` ưu tiên cao hơn `=`.

## 7. Tách chuỗi bằng khoảng trắng

```js
"nguyen  van".split(" ");     // ["nguyen", "", "van"]  (có phần tử rỗng)
"nguyen  van".split(/\s+/);   // ["nguyen", "van"]      (đúng)
name.trim().split(/\s+/);     // trim trước để tránh phần tử rỗng ở đầu/cuối
```

## 8. Viết hoa chữ cái đầu mỗi từ

```js
// Cách 1: regex hỗ trợ Unicode (nên dùng cho tên tiếng Việt)
name.trim().toLowerCase().replace(/(^|\s)\p{L}/gu, m => m.toUpperCase());

// Cách 2: gộp dấu cách thừa
name.trim().toLowerCase().replace(/\s+/g, " ").replace(/(^|\s)\p{L}/gu, m => m.toUpperCase());

// Cách 3: split + map + join
name.trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

// Chỉ viết hoa chữ cái đầu cả chuỗi
name.replace(/^./, c => c.toUpperCase());
```

Giải thích `/(^|\s)\p{L}/gu`: đầu chuỗi **hoặc** khoảng trắng, theo sau là một chữ cái; `g` cho mọi từ, `u` bật Unicode.

## 9. Lỗi hay gặp

```js
// Sai: thiếu () nên không gọi hàm; /\s/ là regex, không phải khoảng trắng
element = element[0].toUpperCase + element.slice(1) + /\s/;

// Đúng
element[0].toUpperCase() + element.slice(1)
```

- `forEach` không tạo mảng mới, gán lại `element` không đổi mảng gốc. Dùng `map` để nhận mảng mới.
- Thêm khoảng trắng giữa các từ bằng `join(" ")`, không nối `/\s/`.
- `\s` thuộc bước **cắt** chuỗi (`split`), không phải bước ghép.

## 10. Khác ngôn ngữ

Gán `=` là biểu thức có giá trị: có trong C, C++, Java, C#, PHP, JS. Python không cho, dùng toán tử `:=`. Gõ nhầm `if (x = 5)` thay vì `===` là lỗi kinh điển (ESLint: `no-cond-assign`).

## Luyện tập

Thử regex trực tiếp tại [regex101.com](https://regex101.com) (chọn flavor JavaScript).
