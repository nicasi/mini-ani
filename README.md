# mini-ani
minimal animation utility. only works for pixel values.

example

```javascript
let box = document.querySelector(".box");

animate.to(box, {
    left: Math.floor(Math.random() * 500),
    top: Math.floor(Math.random() * 500),
    width: Math.floor(Math.random() * 500),
    height: Math.floor(Math.random() * 500)
})
```
