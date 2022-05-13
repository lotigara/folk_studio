// Получаем контейнер
const container = document.querySelector(".container");
// Получаем контент:
const content = document.querySelector(".content");
// 1. Получаем высоту контента, который мы хотим показать/скрыть
const heightOfContent = content.getBoundingClientRect().height;
// Получаем кнопку
const btn = document.querySelector(".trigger");

// 2. Задаем пользовательские свойства CSS с высотой контента
container.style.setProperty("--containerHeight", `${heightOfContent}px`);

// Когда высота задана
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    3. ;content.setAttribute("aria-hidden", "true");
}, 0);

btn.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    // 5. Переключаем значение aria-hidden
    content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
})