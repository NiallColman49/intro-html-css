const cursorTag = document.querySelector("div.cursors");
const mouse = cursorTag.querySelector("div.cursor-ess");

document.addEventListener("mousemove", function (event) {
mouse.style.left = event.pageX + "px";
mouse.style.top = event.pageY + "px";
})