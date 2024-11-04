"use strict";

const container = document.querySelector("#container");
let containerWidth = 640;
container.style.width = `${containerWidth}px`;

// 生成网格
function setBoard(num) {  
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${containerWidth / num}px`;
        div.style.height = `${containerWidth / num}px`;
        container.appendChild(div);
    }
}
let size = 16;
setBoard(size);

// 绘画功能
let isMouseDown = false;

container.addEventListener("mousedown", () => {
    isMouseDown = true;
});
container.addEventListener("mouseup", () => {
    isMouseDown = false;
});
container.addEventListener("mouseleave", () => {
    isMouseDown = false;
})

container.addEventListener("mouseover", (e) => {
    if (isMouseDown && e.target.classList.contains("square")) {
        // e.target.classList.add("highlight");
        e.target.style.backgroundColor = randomColor();
    }
})

// const divs = document.querySelectorAll(".square");
// divs.forEach((div) => {
//     div.addEventListener("mouseenter", () => {
//         if (isMouseDown) {
//             div.classList.add("highlight");
//         }
//     });
// });

// 设置画板大小
const setting = document.querySelector("#setting");
let newSize;

setting.addEventListener("click", () => {
    do {
        newSize = prompt("请输入每行的网格数（大于0且小于等于100的整数）：");
        if (newSize === null) return;
        newSize = Number(newSize);
    } while (newSize <= 0 || newSize > 100 || isNaN(newSize) || !Number.isInteger(newSize));

    container.textContent = '';
    setBoard(newSize);
})

// 生成随机背景色
function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}