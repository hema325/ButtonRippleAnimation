
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const span = document.createElement("span");
        span.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
        button.append(span);
        setTimeout(() => {
            span.remove();
        }, 400);
    })
});

