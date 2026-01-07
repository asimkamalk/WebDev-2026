# 💡 Simple Flexbox Cheat Sheet

| Property          | Where applied  | What it does                                |
| ----------------- | -------------- | ------------------------------------------- |
| `display: flex`   | Flex container | Turns the container into a flex container   |
| `flex-direction`  | Container      | Sets the main axis direction (row / column) |
| `flex-wrap`       | Container      | Allows items to wrap onto new lines         |
| `justify-content` | Container      | Distributes space along the main axis       |
| `align-items`     | Container      | Aligns items along the cross axis           |
| `flex-grow`       | Flex item      | Controls how much an item grows             |
| `flex-shrink`     | Flex item      | Controls how much an item shrinks           |

---

## Example

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex-grow: 1;
}
```

---

📌 **Tip:**

- Main axis → controlled by `flex-direction`
- Cross axis → perpendicular to main axis

This cheat sheet is perfect for quick revision while practicing layout

## 🧭 Notes & Explanations

### justify-content — Main Axis

Controls **how items are spread out along the main axis** (row by default).

| Value           | What it does              |
| --------------- | ------------------------- |
| `flex-start`    | Items packed at the start |
| `center`        | Items centered            |
| `space-between` | Equal space between items |
| `space-around`  | Equal space around items  |
| `space-evenly`  | Even space everywhere     |

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

---

### align-items — Cross Axis

Controls **how items align on the cross axis** (vertical if `row`, horizontal if `column`).

**Values:**

- `stretch` (default)
- `flex-start`
- `center`
- `flex-end`

```css
.container {
  display: flex;
  align-items: center;
}
```

---

### flex-wrap — Multiple Lines

By default, flex items stay on **one line** and shrink if space is tight.

To allow wrapping onto multiple lines:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

**Common values:**

- `nowrap` (default)
- `wrap`
- `wrap-reverse`

---

## 📚 Resources

- [MDN: Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)

- [W3Schools Flexbox Tutorial](https://www.w3schools.com/css/css3_flexbox.asp)
